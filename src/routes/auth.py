import hashlib
from random import randbytes
from fastapi import APIRouter, Depends, HTTPException
from datetime import timedelta, datetime, timezone
from typing import Union, Annotated
from starlette import status
from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from jose import jwt, JWTError
import os
from dotenv import load_dotenv
load_dotenv()
from database import user_collection
# from src.models.user import is_user_exist, create_user, get_user_by_id, create_user_stripe_acc
# from emails import send_verification_code, send_reset_code
from bson import ObjectId
from src.schemas.auth import SignupBody,Token
from stripegateway import stripe
from fastapi.responses import RedirectResponse

router = APIRouter(tags=['Auth'])
 
SECRET_KEY = os.getenv('SECRET_KEY')
ALGORITHM = os.getenv('ALGORITHM')

bcrypt_context = CryptContext(schemes=['bcrypt'], deprecated='auto')
oauth2_bearer = OAuth2PasswordBearer(tokenUrl='/v1/login')

@router.post("/v1/signup", status_code=status.HTTP_201_CREATED)
async def signup(signup_body : SignupBody):
    if is_user_exist(signup_body.email, signup_body.usertype):
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="User already exists")
    
    hashed_password = bcrypt_context.hash(signup_body.password)
    inserted_id = create_user(signup_body.first_name, signup_body.last_name, signup_body.email, hashed_password, signup_body.usertype)
    new_user = user_collection.find_one({'_id': inserted_id})
   

@router.post("/v1/login", response_model=Union[Token, dict])
async def login_for_access_token(form_data : Annotated[OAuth2PasswordRequestForm, Depends()]):
    # 
    user = authenticate_user(form_data.username[:-2], form_data.password, int(form_data.username[-1]))
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="The email or password does not match. If you are new, Please signup first!")
    
    token = create_access_token(str(user['id']), user['usertype'], timedelta(hours=2))
    return {"access_token" : token, "token_type" : 'bearer'}

    
@router.get('/v1/get_user')
def get_user(tokenid : str):
    response = get_current_user(tokenid)
    return response

def authenticate_user(email: str, password: str, usertype: int):
    user = is_user_exist(email, usertype)
    if not user:
        return False
    if not bcrypt_context.verify(password,user['password']):
        return False
    if user['usertype'] != usertype:
        return False
    return user


def create_access_token(id : str, usertype : int, expires_delta : timedelta):
    encode = {'id' : id, 'usertype' : usertype}
    expires = datetime.now(timezone.utc) + expires_delta
    encode.update({'exp' : expires})
    return jwt.encode(encode, SECRET_KEY, algorithm=ALGORITHM)


def get_current_user(token: Annotated[str, Depends(oauth2_bearer)]):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        id: str = payload.get('id')
        usertype : int = payload.get('usertype')
        exp : int = payload.get('exp')
        if id is None or usertype is None or exp is None:
            raise HTTPException(status_code=498, detail='Could not validate user.')
        current_time = datetime.now(timezone.utc)
        expiry_time = datetime.fromtimestamp(exp, timezone.utc)
        if expiry_time <= current_time:
            raise HTTPException(status_code=440, detail='The session is expired.')
        
        return {'id': id, 'usertype' : usertype, 'exp' : exp}

    except JWTError:
        raise HTTPException(status_code=498, detail='Could not validate user.')
    
user_dependency = Annotated[dict, Depends(get_current_user)]


