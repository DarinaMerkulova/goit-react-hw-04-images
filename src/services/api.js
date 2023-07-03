import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '36612477-de12f416afaaade3e0f2f29b4';

 async function fetchImages(value, page)
     {
      const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
    );
    return response.data
  
}
export default fetchImages;