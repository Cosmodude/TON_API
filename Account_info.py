import os
from dotenv import load_dotenv
import requests

load_dotenv()

server_side_key = os.environ.get('ServerSideKey')
headers_data = {'Authorization': 'Bearer ' + server_side_key  }
data = {'account' : 'EQA_HtrA8xWmOD5UL6_5FTwSoXApiwdINcXZEf6a_dovg_xb'}
method = 'getInfo'
pref= 'account'
url = 'https://tonapi.io/v1/{}/{}'.format(pref,method)

response = requests.get(url, params=data, headers=headers_data)
print(response.json())