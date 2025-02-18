import {useState , useEffect } from 'react'

function FetchDataEffect() {
    const [post , setposts] = useState([]) ; 

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json() 
        setposts(data) ;  }
        fetchData();
    } , [] ) ; // Only re-run the effect if count changes

  return (
    <div>
    <h1>first post title </h1>
    {post.length > 0 ? <h2>{post[0].title}</h2>: <p>loading . . . </p>  }
    </div>
  )
}

export default FetchDataEffect
