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
    axios.get('http://localhost:3000/website', config)
      .then((respons) => {
        res.status(200).send(respons.data);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      })
  },
  getCheck: async (req, res) => {
    try {
      console.log(req.headers.authorization);
      const { sub, email } = req.kauth.grant.access_token.content;
      res.send(`Protected route accessed by user ${sub} (${email})`);
      console.log(`Protected route accessed by user ${sub} (${email})`)
    } catch (error) {
      console.log("eeeeerror", error);
    }
  }
}
