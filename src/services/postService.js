import axios from 'axios';

class PostService{
    getAll(){
        return axios.getAll('https://jsonplaceholder.typicode.com/posts');
    }
}
export default new PostService();