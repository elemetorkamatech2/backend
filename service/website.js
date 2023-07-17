import axios from 'axios';

export const funcGet = async () => {
    try {
        const port = process.env.PORT;
        const token = process.env.TOKEN;
        const response = await axios.get(`${port}`, {headers: {'authorization': `Bearer ${token}`}});
        return response.data;
    }
    catch (error) {
        return { error: error.message };
  }
}

export const funcSortByName = async () => {
    try {
        let websites = await funcGet();

        // Sort the websites array by name
        websites.sort((a, b) => {
          // Assuming the name property is present in each object
          const nameA = a.title.toUpperCase();
          const nameB = b.title.toUpperCase();
    
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
    
          return 0;
        });
    
        return websites;

    }
    catch (error) {
        return { error: error.message };
  }
}