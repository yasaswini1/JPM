from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import src.routes.auth as auth
import uvicorn

application = FastAPI()

origins = [
    "*",
]


application.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)
application.include_router(auth.router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(application, host="0.0.0.0", port=8000)