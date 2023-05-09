import requests

headers = {"token": "your_token_here"}
url = "http://127.0.0.1:8000/mobile/info"

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print(response.json())
else:
    print(f"Error: {response.status_code}")
