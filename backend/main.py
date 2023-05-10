from typing import Union
import pymongo
import certifi
from fastapi import FastAPI, HTTPException, Request
from fastapi.encoders import jsonable_encoder
# import pprint
import json
from bson.objectid import ObjectId
from bson import json_util
import re

app = FastAPI()

def get_database():
    # username = input("Enter your MongoDB username: ")
    # password = pwinput(prompt="Enter your MongoDB password: ", mask="*")
    uri = f'mongodb+srv://aas:aas@preuniapp.mnray5n.mongodb.net/?retryWrites=true&w=majority'
    client = pymongo.MongoClient(uri, tlsCAFile=certifi.where())
    # Send a ping to confirm a successful connection
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
        # print(client.list_database_names())
        global table
        # print(client.preuniverse.students.find_one())
        table = client.preuniverse.students
    except Exception as e:
        print(e)

    return client.db

get_database()

def cleanQuery(query):
    return json.loads(json_util.dumps(query))
    

@app.get("/mobile/info")
def getuser(request: Request):

    token = request.headers.get('token')
    print(token)
    if not token or not re.match(r'^[a-f\d]{24}$', token):
        # print('bad token')
        raise HTTPException(status_code=400, detail='bad token')



    # sample '645a2c83e33586fb354ab30b'
    query = table.find_one({'_id': ObjectId(request.headers.get('token'))})

    if not query:
        raise HTTPException(status_code=400, detail='no user found')
    
    return cleanQuery(query)


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}