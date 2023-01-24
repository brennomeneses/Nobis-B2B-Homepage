import axios from '../../node_modules/axios/index';

const HUBSPOT_TOKEN = "";

const axiosService = axios.create({
  baseURL: "https://api.hubapi.com",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${HUBSPOT_TOKEN}`
  }
})

function hangOnMeeting() {
  console.log("HubSpot");
}