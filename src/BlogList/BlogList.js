import React from "react";

const BlogList = ({ blog, handleDelete }) => {

   

    return ( 
        <div className="blog-list">
              {blog.map((e)=> (
                <div className='blog-preview' key={e.id}>
                    <h2>{e.title}</h2>
                    <p>Written by: {e.author}</p>
                    <button className="deleteBtn" onClick={() => handleDelete(e.id)}>Delete</button>
                </div>
            )
            )}
        </div>
     );
}
 
export default BlogList;