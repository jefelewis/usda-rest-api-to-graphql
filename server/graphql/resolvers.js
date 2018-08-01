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
      return axios.get(`https://ridb.recreation.gov/api/v1/organizations/${args.ID}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },


    // Agriculture Facts
    // Get 
    getNumberOfCornByYear: (parent, args) => {
      return axios.get(`http://quickstats.nass.usda.gov/api/get_counts/?key=A2148C95-B625-30F7-8DE0-C6A19CE06025&commodity_desc=CORN&year__GE=${args.year}&state_alpha=${args.state}&format=JSON`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    getNumberOfCattleByYear: (parent, args) => {
      return axios.get(`http://quickstats.nass.usda.gov/api/get_counts/?key=A2148C95-B625-30F7-8DE0-C6A19CE06025&commodity_desc=CATTLE&year__GE=${args.year}&state_alpha=${args.state}&format=JSON`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },


    // http://quickstats.nass.usda.gov/api/api_GET/?key=A2148C95-B625-30F7-8DE0-C6A19CE06025&commodity_desc=CORN&year__GE=2012&state_alpha=VA&format=JSON

  }
};

// Exports
export default RESOLVERS;