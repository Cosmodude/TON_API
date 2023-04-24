import os
from dotenv import load_dotenv
import requests

load_dotenv()

server_side_key = os.environ.get('ServerSideKey')
headers_data = {'Authorization': 'Bearer ' + server_side_key  }
data = {'hash' : '50fe2f9a9c2738ab405067a313339ac6e0402637477cf4557d02f10a1900c957'}
method = 'getTransaction'
pref= 'blockchain'
url = 'https://tonapi.io/v1/{}/{}'.format(pref,method)

response = requests.get(url, params=data, headers=headers_data)
print(response.json())