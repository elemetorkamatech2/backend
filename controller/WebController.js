import axios from "axios";
import dotenv from 'dotenv';
dotenv.config()

const config = {
  headers:{
    authorization:`Bearer ${process.env.TOKEN}`
  }
};
export default{
    getAll: async (req, res) => { 
       axios.get('http://localhost:3000/website' , config)
      .then((respons)=>{
        res.status(200).send(respons.data);
      })
      .catch((err)=>{
        res.status(404).send(err.message);
      })
   }
}
