import axios from "axios";
import dotenv from 'dotenv';
import {funcGet, funcSortByName} from '../services/website.js';
dotenv.config()

const config = {
  headers:{
    authorization:`Bearer ${process.env.TOKEN}`
  }
};
export default{
    getAll: async (req, res) => { 
      const port = process.env.PORT;
        const token = process.env.TOKEN;
       axios.get('http://localhost:3000/website' , config)
      .then((respons)=>{
        res.status(200).send(respons.data);
      })
      .catch((err)=>{
        res.status(404).send(err.message);
      })
   },
   sort: async (req, res) => { 
    try {
      const result = await funcSortByName();
      res.send(result);
  }
  catch (error) {
      return { error: error.message };
  }
}
}

