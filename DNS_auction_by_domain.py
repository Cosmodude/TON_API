""" TON DNS is a service that allows you to set short readable names for crypto wallets, 
smart contracts or websites.
.ton domains are NFTs that can be transferred to other users,
as well as bought and sold on marketplaces."""

import os
from dotenv import load_dotenv
import requests

load_dotenv()

server_side_key = os.environ.get('ServerSideKey')
headers_data = {'Authorization': 'Bearer ' + server_side_key  }
# params
data = {'domain' : 'dubai.ton'}
method = 'getBids'
pref= 'auction'
url = 'https://tonapi.io/v1/{}/{}'.format(pref,method)

response = requests.get(url, params=data, headers=headers_data)
print(response.json())