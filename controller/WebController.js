import axios from "axios";
import dotenv from 'dotenv';
import { loggers } from "winston";
dotenv.config()

const config = {
  headers: {
    authorization: `Bearer ${process.env.TOKEN}`
  },
};
export default {
  getAll: async (req, res) => {
    axios.get(process.env.SERVER_LOCALHOST, config)
      .then((respons) => {
        res.status(200).send(respons.data);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      })
  },
  post: async (req, res) => {
    axios.post(process.env.SERVER_LOCALHOST, req.body, config)
      .then((respons) => { 
        res.status(200).send(respons.data);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      })
  },
}
