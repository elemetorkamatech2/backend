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
  filterdate: async (req, res) => {
    try {
      const date = req.params.date;
      const result = await servise.filterdate(date);
      return { success: true, message:result };
    } catch (error) {
      logger.info(error);
      return { success: false, message: error.message };
    }
  },
  filtermemory: async (req, res) => {
    const memory = req.params.memory;
    axios.get(process.env.SERVER_PORT, config)
      .then((respons) => {
        const data = respons.data;
        const filteredData = data.filter(x => x.memory === memory)
        console.log(filteredData);
        res.status(200).send(filteredData);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      })
  }
}
