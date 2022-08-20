# Initialization
Steps:\
1.) Clone the repository\
2.) Install the node packages\
3.) Create a .env in the root directory, add the following variables with REACT_APP_ prepended to them:\
`API_URL`="http://localhost:PORT" (PORT is any port other than the one this app is hosted on (3000 by default)\
`WEBSOCKET_URL`="ws://localhost:PORT2" (PORT2 any port other than the ones previously chosen\
`AZURE_KEY`="Your API key for Azure's Translator API"\
`AZURE_REGION`="The region you selected for the API"\

# Deployment
Steps:\
1.) Connect repository to Heroku.\
2.) Set all above environment variables accordingly.

# Deployment
Steps:\
1.) Connect repository to Heroku.\
2.) Set env var `REACT_APP_BASE_URL`="The url of the backend hosted on Heroku."