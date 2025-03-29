import { createContext , useState , useContext } from "react"
import { Blog } from "../types"



interface BlogContextType {
    blogs : Blog[]
    addBlog : (blog:Blog) => void
    updateBlog : (blog : Blog ) => void
    deleteBlog : (id : number) => void
} 





const BlogContext = createContext<BlogContextType| undefined >(undefined)



export const BlogProvider : React.FC <{children : React.ReactNode}> = ({ children }) => {
    const [blogs , setBlogs ] = useState<Blog[]>([])
    const addBlog = (blog : Blog) => {
        setBlogs((prevBlogs) => [...prevBlogs , blog])
    }

    const updateBlog = (updatedBlog : Blog) => {
        setBlogs((prevBlogs) => prevBlogs.map((blog) => blog.id === updatedBlog.id ? updatedBlog : blog))
    }
    const deleteBlog = (id : number) => {
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id))
    }
    return (
        <BlogContext.Provider value={{ blogs , addBlog , updateBlog , deleteBlog }}>
            {children}
        </BlogContext.Provider>
    )
}
export const useBlogContext = () => {
    const context = useContext(BlogContext)
    if (!context) {
        throw new Error("useBlogContext must be used within a BlogProvider")
    }
    return context
}


