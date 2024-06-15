from pymongo import MongoClient
import os
from dotenv import load_dotenv
load_dotenv()

mongo_client = MongoClient(os.getenv("MONGO_URI"))

development_database = mongo_client['production']
user_collection = development_database['user']
events_collection = development_database['events']
 