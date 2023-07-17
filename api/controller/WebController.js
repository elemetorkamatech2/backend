import axios from "axios";
import dotenv from 'dotenv';
dotenv.config()

const config = {
  headers: {
    authorization: `Bearer ${process.env.TOKEN}`
  }
};

export default {
  getAll: async (req, res) => {
    axios.get(process.env.SERVER_PORT, config)
      .then((respons) => {
        res.status(200).send(respons.data);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      })
  },
  getUserWebsite: async (req, res) => {
    const idUser = req.params.userId;
    axios.get(process.env.SERVER_PORT, config)
      .then((respons) => {
        const data = respons.data;
        const filteredData = data.filter(x => x.userId === idUser)
        console.log(filteredData);
        res.status(200).send(filteredData);
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
