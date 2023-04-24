# TON_API
Contains scripts for exploring TON using tonapi service.

TON DNS is a service that allows you to set short readable names for crypto wallets, smart contracts or websites.

Logical time is needed to determine the order of actions in TON for processing by the TVM virtual machine. 
It is strongly guaranteed that the transaction resulting from the message will have lt greater than the lt of the message itself. 
The lt of a message sent in some transaction is strictly greater than the lt of the transaction. 
In addition, messages sent from one account, as well as transactions made on one account, are strictly ordered. 
Thus, for each account, we always know the order of transactions, received and sent messages.