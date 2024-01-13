import './App.css';
import { useEffect, useState } from 'react';
import PostCard from './components/PostCard/PostCard';
import PostService from './services/postService';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage/Homepage';
import Posts from './pages/Posts/Posts';
import NotFound from './pages/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';
import Login from './pages/Login/Login';

function App() {
  //backend bağlantısı - http isteği
  //bağlantı sonucu gelen değeri ekranda göstermek
  //componentler arası veri iletişimi

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchItems();   
  }, [])

  //es6
  const fetchItems = async () => {
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then((response) => { console.log(response) })
    // .catch((error) => { console.log(error) })
    // .finally(() => { console.log("async işlem bitti") });

    // setTimeout(() => { console.log("Merhaba")}, 5000); 

    try {
      //let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      //let postService = new PostService(); --export defaulta yazıldı.
      let response = await PostService.getAll();
    setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
    

  }

  const removePost = (id) => {
    setPosts(posts.filter(i => i.id !== id));
  }
  
  return (

    // <div className="App">
    //   {posts.map( (post) => <PostCard onDelete={removePost} post = {post}/>)}
    // </div>
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
