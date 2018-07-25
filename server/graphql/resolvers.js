// Imports: Node Fetch
import axios from 'axios';

// Imports: API Key



// GraphQL: Resolvers
const RESOLVERS = {
  Query: {

    // Farmer's Markets
    getFarmersMarketsByZipCode: (parent, args) => {
      return axios.get(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${args.zipCode}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },

    // Get all Recreation Information Organizations in the United States
    getAllRecreationInformationOrganizations: (parent, args) => {
      return axios.get(`https://ridb.recreation.gov/api/v1/organizations/`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    // Get a Recreation Information Organization by ID
    getRecreationInformationOrganizationByID  : (parent, args) => {
      return axios.get(`https://ridb.recreation.gov/api/v1/organizations/${args.organizationID}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },

  }
};

// Exports
export default RESOLVERS;