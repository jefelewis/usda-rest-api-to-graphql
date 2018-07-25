# United States Department of Agriculture GraphQL Server
Operation Refactor America's wrapped United States Bureau Census Bureau's REST API with GraphQL Server. The REST endpoints have been mapped as GraphQL types and resolvers. **Note: Using this API requires a free API Key,** which can be acquired at https://ridb.recreation.gov/?action=register. Once your API Key is received, go to ./config/config.js and enter the API key into APIKEY.

If you'd like to contribute to this project, please fork this repository over and submit a pull request.

## On This Page
*  [About the Data](#about-the-data)
*  [About Operation Refactor America](#about-operation-refactor-america)
*  [GraphQL Server: Apollo Server](#graphql-server-apollo-server)
*  [GraphQL Server: Start](#graphql-server-start)
*  [GraphQL Server: Query](#graphql-server-query)
*  [GraphQL Server: Testing API Endpoints](#graphql-server-testing-api-endpoints)
*  [API Data: ](#api-data)
*  [GraphQL Query Examples](#graphql-query-examples)

## About Operation Refactor America
Operation Refactor America is a not associated with any government agency, but our goal is to empower citizens with transparent data. Only a fraction of government agencies provide public APIs, which are usually poorly documented, built on archaic REST architecture, and contains scattered data. Our mission is to retrieve that valuable data and convert them into an intuitive and modern API using GraphQL Server.

## About the Data
The data comes directly from the United States Department of Agriculture's REST API. The REST endpoints have been mapped as GraphQL types and resolvers. A summary of endpoints and documentation can be found here: http://usda.github.io/RIDB/

## GraphQL Server: Apollo Server
This GraphQL server uses apollo-server-express and not Facebook's graphql-express.

## GraphQL Server: Start
    npm run server

## GraphQL Server: Query
    http://localhost:4000/graphiql

## GraphQL Server: Testing API Endpoints
    npm jest

## API Data: 



## GraphQL Query Examples
### Example #1: Number of all Burglary Victims (Annually)
**Query:**




### Example #2: Retrieve Agency by Originating Agency Identification (ORI)
**Query:**



**GraphQL Result:**




### Example #3: Number of all Homicide Victims in the Arizona by Age Range (Annually)
**Query:**



**GraphQL Result:**

