import axios from "axios";
import dotenv from 'dotenv';
dotenv.config()
const config = {
  headers: {
    authorization: `Bearer ${process.env.TOKEN}`
  }
};

export default {
    filterdate: async (date) => {
        axios.get(process.env.SERVER_PORT, config)
      .then((respons) => {
        const data = respons.data;
        const filteredData = data.filter(x => x.date === date)
        console.log(filteredData);
        res.status(200).send(filteredData);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      })
        },
        filtermemory: async (memory) => {
            axios.get(process.env.SERVER_PORT, config)
          .then((respons) => {
            console.log("fghjk")
            const data = respons.data;
            console.log(data)
            const filteredData = data.filter(x => x.memory === memory)
            console.log("filteredData");
            res.status(200).send(filteredData);
          })
          .catch((err) => {
            res.status(404).send(err.message);
          })
            }
}