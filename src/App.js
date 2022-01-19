/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

import { useState } from 'react';
import React from 'react';
import Posts from './components/Posts/Posts';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
import './App.css';

const App = () => {


  const [posts, setPosts] = useState(dummyData) 


  const likePost = postId => {

    const newPosts = posts.map(post => {

      if (post.id === postId) {
        return {...post, likes: post.likes + 1 };
      } else {
        return post;
      }
    })
    setPosts(newPosts);
    
  };

  return (
    <div className='App'>
      <SearchBar />
      <Posts posts={posts} likePost={likePost} />
      
    </div>
  );
};

export default App;
