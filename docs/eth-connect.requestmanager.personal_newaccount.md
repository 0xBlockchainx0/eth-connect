[Home](./index) &gt; [eth-connect](./eth-connect.md) &gt; [RequestManager](./eth-connect.requestmanager.md) &gt; [personal\_newAccount](./eth-connect.requestmanager.personal_newaccount.md)

# RequestManager.personal\_newAccount property

Generates a new private key and stores it in the key store directory. The key file is encrypted with the given passphrase. Returns the address of the new account.

At the geth console, newAccount will prompt for a passphrase when it is not supplied as the argument.

**Signature:**
```javascript
personal_newAccount: (passPhrase: Data) => Promise<Address>
```