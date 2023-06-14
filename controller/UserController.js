const axios = require("axios")

  async function getAll(req, res) {
      
       axios.get('http://localhost:3000/api/website')
      .then((respons)=>{
        res.status(200).send( respons.data);

      })
      .catch((err)=>{
        res.status(404).send(err.message);

      })
  }
  module.exports=getAll
