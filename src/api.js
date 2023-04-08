import axios from 'axios';

const searchImages = async (term) => {
    
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID rJCcidJ4ZF4nUvZN56Rc_YYsg1GRrSDIwCgiH1BHDno',
        },
        params: {
            query: term,
        },
    });
    
    return response.data.results;
};

export default searchImages;