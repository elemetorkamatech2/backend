const axios = require("axios")

module.exports = {
  getAll: async () => {
      
       axios.get('http://localhost:3000/api/website')
      .then((res)=>{
        return res.data;

      })
      .catch((err)=>{
        return err.message
      })
  }
};
