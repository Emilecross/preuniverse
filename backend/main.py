from typing import Union

from fastapi import FastAPI, Response, HTTPException

app = FastAPI()

@app.get("/mobile/info")
def getuser(response: Response):
    if 'token' not in response.headers:
        raise HTTPException(status_code=400, detail='no token')
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