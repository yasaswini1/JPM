from pydantic import BaseModel, EmailStr, field_validator

class SignupBody(BaseModel):
    first_name : str
    last_name : str
    email : EmailStr
    password : str
    usertype : int

    @field_validator('first_name', 'last_name')
    def name_validator(cls, v, values):
        if not v:
            raise ValueError("First Name and Last Name must not be empty")
        if not isinstance(v, str):
            raise ValueError("First Name and Last Name must be string")
        return v
    
    @field_validator('password')
    def password_validator(cls, v, values):
        min_length = 8
        has_uppercase = any(char.isupper() for char in v)
        has_lowercase = any(char.islower() for char in v)
        has_digit = any(char.isdigit() for char in v)
        has_special_char = any(char in '!@#$%^&*()-_=+`~[]{}|;:,.<>?/' for char in v)

        if len(v) < min_length:
            raise ValueError(f"Password must be at least {min_length} characters long")
        if not has_uppercase:
            raise ValueError("Password must contain at least one uppercase letter")
        if not has_lowercase:
            raise ValueError("Password must contain at least one lowercase letter")
        if not has_digit:
            raise ValueError("Password must contain at least one digit")
        if not has_special_char:
            raise ValueError("Password must contain at least one special character")
        return v



class LoginBody(BaseModel):
    email : EmailStr
    passwrord : str
    usertype : int
