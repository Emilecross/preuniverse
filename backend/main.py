from typing import Union
import pymongo
import certifi
from fastapi import FastAPI, Response, HTTPException

app = FastAPI()

# def get_database():
#     # username = input("Enter your MongoDB username: ")
#     # password = pwinput(prompt="Enter your MongoDB password: ", mask="*")
#     uri = f'mongodb+srv://aas:aas@preuniapp.mnray5n.mongodb.net/?retryWrites=true&w=majority'
#     client = pymongo.MongoClient(uri, tlsCAFile=certifi.where())
#     # Send a ping to confirm a successful connection
#     try:
#         client.admin.command('ping')
#         print("Pinged your deployment. You successfully connected to MongoDB!")
#     except Exception as e:
#         print(e)

#     return client.db

# get_database()

@app.get("/mobile/info")
def getuser(response: Response, token: str = None):
    print('hi')
    print(response.headers)
    if not response.headers.get('token'):
        print('bad token')
        # raise HTTPException(status_code=400, detail='no token')
    return {
        "name": "Bob",
        "uid": 12345,
        "year": 11,
        "classes": [
            {
                "subject": "Maths",
                "timeStart": "0900",
                "timeEnd": "1030",
                "room": "102"
            }
        ],
        "subjects": ["Maths", "English", "Science"]
    }

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}