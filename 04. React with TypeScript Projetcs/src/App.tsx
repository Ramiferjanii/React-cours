import { IoMdAddCircle } from "react-icons/io"
import Navigation from "./components/Navigation"
import PeapleToFollow from "./components/PeapleToFollow"
import TopicList from "./components/TopicList"
import TrendList from "./components/TrendList"
import { BlogProvider } from "./shared/BlogContexte"
import { useState } from "react"
import { Blog } from "./types"



const App = () => {
  const [isModelOpen , setIsModelOpen] = useState(false)
  const [editingBlog , setEditingBlog] = useState<Blog | null>(null)

  const openModelForNewBlog = () => {
    setIsModelOpen(true)
    setEditingBlog(null)
  }

  const openModelForNewBlog = (blog: Blog) => {
    setIsModelOpen(true)
    setEditingBlog(blog)
  }



  return (
    <div>
      <BlogProvider>
      <Navigation /> 

      <div className="flex justify-center"> 
        <section className="mx-auto p-6">
          <div>
            <button onClick={openModelForNewBlog} className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-3 rounded mb-4" > Add New Blog <IoMdAddCircle className="ml-[.5rem] " /> {""} </button>
          {isModelOpen && (<Model onClose={()=> setIsModelOpen(false)} ></Model>}
          
          </div>
        </section>
        <div className="w-[30%]">
          <PeapleToFollow />
          <TrendList />
          <TopicList  />

        </div>
        
        </div>

        </BlogProvider>
    </div>
  )
}

export default App
