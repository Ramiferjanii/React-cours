import { useState } from "react"
import { FaCamera } from "react-icons/fa"
import Tabs from "./Tabs"
const Profile = () => {
 const [bannerUrl , setBannerUrl] = useState<string>("https://media-hosting.imagekit.io/1adaca7316594122/29-ROG_pink.jpg?Expires=1837741862&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aqZeeKfsV2oJETOxE-MkZrGUsVC3IXISm7TjErk~q7kDTDdFmHhQhDTvzlcgzhldeQRi-K2l4D6WoZFAccrN-pE8yGAs~8o124~F6tzdtQx3My35hfa9AfZ0yI8YRu5GpW7jdoL3iI46whh7xC6UeqJXX~G37uSZt1oib6-kzIit9zhs~yTy6ZwhclKv2AbU5GLYgDMcydkeKStvuMSFj56MhnAGMjsMsI2HJEA4uVxEq540GtMkLHt9oqSr-hNeJRc5kF0Dx0c0FYf7S5~hbnur97FHpCQrvl8FygnUYHE~YOBv0T05j0Dz0BKaHAaYp99XdtXIVDBQfzovT3rv2Q__")
 const [profileUrl , setProfileUrl] = useState<string>("https://media-hosting.imagekit.io/b85a749a2b7a4887/WhatsApp%20Image%202024-11-27%20at%2022.31.36_647d253b.jpg?Expires=1837741810&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=J2CV92wMrYDw3REkaTn~NdygymCO-fflp1tAGQeBt~NbSQ0plDSlHfNCMH1yTulGHPmaL80h1pqDciIdczAm0zIuQwM0YvajcNAgCyKdg3yu3i1MlzelSXsfYWZ2Gq-vV5YsVglCuDaOdwCDT0tnmlAdfRtar-JllaqU14XHw1IWf54H-4T8EKBz6NQgA5gVxX~SGVnZGiYb0eFuVSVHRjQF3QGirf-B87soEahXbyqldU~O2MHhW7jTOzj5aJwFBTBLlVmcrLh7BoYKu6RO8mc8E-0gcabjYSAddEifO3OIXmeqwkljH~RSDFQGz9PQGHpEakZS~iRLPV0f7xl6Jg__")

 const handleBannerChange = (event:any ) => 
 {
    const file = event.target.files[0] 

    if (file) 
    {
        setBannerUrl(URL.createObjectURL(file)) 
    }
 }

 const handleProfileChange =(event:any) => {
    const file = event.target.files[0] 
    
        if (file) 
        {
            setProfileUrl(URL.createObjectURL(file))

        }

 }

  return (
    <div className="relative w-[94%] ml-[5rem]" >

        <div className="relative">
            <img src={bannerUrl} alt="background image " className="w-full h-60 object-cover"  />




            <button  className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 " >
                <label htmlFor="banner-upload" className="cursor-pointer" >
                    <FaCamera size={20} />
                </label>

                <input type="file" id="banner-upload" accept="image/*" className="hidden" onChange={handleBannerChange} /> 




            </button>
        </div>


        <div className="flex items-center ml-4 mt-[2rem]">
            <img src={profileUrl}  alt="whannel logo" className=" w-40 h-40 object-cover rounded-full border-white relative  "  />

            <button className="absolute ml-[3.7rem] z-10 mt-[9rem] bg-gray-800 text-white p-2  rounded-full hover:bg-gray-600  " >
                <label htmlFor="profile-upload" className="cursor-pointer">
                <FaCamera size={24} />

                </label>

                <input type="file" id="profile-upload" accept="image/*" className="hidden" onChange={handleProfileChange} />
            </button>



        <div className="ml-4 mt-4">
            <h1 className="text-2xl font-bold ml-[4rem]">Rami Ben Ferjani</h1>
            <p className="font-bold" >1M view</p>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio enim tempore natus cupiditate sequi quas at, voluptatum omnis excepturi harum aliquid temporibus odio nisi nesciunt eum aspernatur eveniet modi suscipit!</p>
            <button className="mt-4 bg-red-600 tex-white py-2 px-4 rounded hover:bg-red-500">Subscribe</button>
        </div>


        </div>

        <Tabs />
    
    </div>
  )
}

export default Profile
