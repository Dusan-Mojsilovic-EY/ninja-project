import { useState } from "react"
import BlogList from "../BlogList/BlogList";

const Home = () => {

    const [blog, setBlog] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlogs = blog.filter(e => e.id !== id);
        setBlog(newBlogs)
    }

    return ( 
        <div className="home">
          <BlogList blog={blog} 
          handleDelete={handleDelete}/>
        </div> );
}
 
export default Home;