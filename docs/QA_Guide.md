# QA Guide

Steps to mark a full pass of QA complete.
* Browsers: Opera, Chrome, Firefox, Edge.
* OS: Ubuntu, Mac OSX, Windows
* Load older version of MetaMask and attempt to simulate updating the extension.
* Open Developer Console in background and popup, inspect errors.
* Watch the state logs
  * Transactions (unapproved txs -> rejected/submitted -> confirmed)
  * Nonces/LocalNonces
* Vault integrity
    * create vault
    * Log out
    * Log in again
    * Log out
    * Restore from seed
    * Create a second account
    * Import a loose account (not related to HD Wallet)
    * Import old existing vault seed phrase (pref with test ETP)
    * Download State Logs, Priv key file, seed phrase file.
* Send ETP
* Web3 API Stability
    * Create a contract from a Ðapp
    * Load a Ðapp that reads using events/logs
    * Send a transaction from any Ðapp
    * Check account balances
* Smart Token (MST)
    * create a token
    * Add that token to the token view
    * Send that token to another metamask address.
    * confirm the token arrived.
* Send a transaction and sign a message (https://danfinlay.github.io/js-eth-personal-sign-examples/) for each keyring type
    * hd keyring
    * imported keyring
* Change network from mainnet → ropsten → rinkeby → localhost (ganache)
* Ganache set blocktime to simulate retryTx in MetaMask
* Copy public key to clipboard
* Export private key

* Explore changes in master, target features that have been changed and break.
