from typing import Union
import pymongo
import certifi
from fastapi import FastAPI, HTTPException, Request, Response
from fastapi.encoders import jsonable_encoder
# import pprint
import json
from typing import List
from pydantic import BaseModel
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
    d = json.loads(json_util.dumps(query))
    del d['_id']
    return d

@app.get("/mobile/classes")
def getclasses(request: Request):
    return [
            {'name': 'YR9 Maths',
            'timeStart': '9:00AM',
            'timeEnd': '10:30AM',
            'room': '102',
            },
            {'name': 'YR9 Science',
            'timeStart': '10:40AM',
            'timeEnd': '12:10AM',
            'room': '105',
            },
            {'name': 'YR9 English',
            'timeStart': '12:30PM',
            'timeEnd': '1:30PM',
            'room': '107',
            }
    ]

@app.get("/mobile/info")
def getuser(request: Request):

    # token = request.headers.get('token')
    token = '645a2c83e33586fb354ab30b'
    # print(token)
    # if not token or not re.match(r'^[a-f\d]{24}$', token):
    #     # print('bad token')
    #     raise HTTPException(status_code=401, detail='bad token')

    # sample '645a2c83e33586fb354ab30b'
    query = table.find_one({'_id': ObjectId(token)})

    if not query:
        raise HTTPException(status_code=404, detail='no user found')
    
    return cleanQuery(query)

@app.get("/mobile/bookings")
def getbooking(request: Request):

    # token = request.headers.get('token')
    token = '645a2c83e33586fb354ab30b'
    # print(token)
    # if not token or not re.match(r'^[a-f\d]{24}$', token):
    #     # print('bad token')
    #     raise HTTPException(status_code=401, detail='bad token')

    # sample '645a2c83e33586fb354ab30b'
    query = table.find_one({'_id': ObjectId(token)})

    if not query:
        raise HTTPException(status_code=404, detail='no user found')
    
    # return the latest booking
    return cleanQuery(query)['bookings']

class PostStudent(BaseModel):
    name: str
    year: str
    subjects: List[str]
    phone: str


@app.post("/admin/user")
async def create_user(response: PostStudent):
    # name
    # year
    # student
    # subjects
    # phone
    data = await response.json

    needed = ['name', 'year', 'subjects', 'phone']
    if not all(key for key in needed in data):
        return HTTPException(status_code=404, detail='invalid fields')

    # add extra data
    table.insert_one({
        'name': data['name'],
        'year': data['year'],
        # 'student': data['student'],
        'subjects': data['subjects'],
        'phone': data['phone'],
        'bookings': []
    })

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}