import { useState } from "react"
import { motion } from "framer-motion";

import { IoRestaurantSharp } from "react-icons/io5"
import { BsFillCloudUploadFill } from "react-icons/bs"
import { AiFillDelete } from "react-icons/ai"
import { MdPriceChange } from "react-icons/md"

import { categories } from "../../utils/data";
import Loader from "../../components/Loader";

export default function NewItem() {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState(null);
    const [imageAsset, setImageAsset] = useState(null);
    const [fields, setFields] = useState(false);
    const [alertStatus, setAlertStatus] = useState("danger");
    const [msg, setMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const uploadImage = () => {};

    const deleteImage = () => {};

    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="w-[90%] md:w-[75%] border border-seagull-500 rounded-lg p-4
        shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col items-center justify-center
        gap-4">
            {
              fields && (
                <motion.p 
                initial={{opacity : 0}}
                animate={{opacity : 1}}
                exit={{opacity : 0}}
                className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === 'danger' ? 
                'bg-[#f56464] text-[#941e1e]' : 'bg-[#8eed79] text-[#1c8013]'}`}>
                  {msg}
                </motion.p>
              )}

              <div className="w-full py-2 border-b border-seagull-300 flex items-center
              gap-2">
                <IoRestaurantSharp className="text-xl text-seagull-300" />
                <input 
                  type="text" 
                  required value={title} 
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Give a title..."
                  className="w-full h-full text-lg bg-transparent font-body outline-none border-none
                  placeholder:text-[#9dabb3]"
                  />
              </div>

              <div className="w-full">
                <select onChange={(e) => setCategory(e.target.value)} 
                className="outline-none w-full text-base border-b-2 border-seagull-300 p-2 rounded-md 
                cursor-pointer font-body">
                  <option value="other" className="bg-white ">Select Category</option>
                  {categories && categories.map(item => (
                    <option key={item.id} 
                    className="text-base border-0 outline-none capitalize bg-white text-seagull-900"
                    value={item.urlParamName}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="group flex justify-center items-center flex-col border-2 border-dotted 
              border-seagull-400 w-full h-48 md:h-96 cursor-pointer rounded-lg">
                {isLoading ? <Loader /> : <>
                      {!imageAsset ? (
                        <>
                          <label className="w-full h-full flex flex-col items-center
                          justify-center cursor-pointer">
                            <div className="w-full h-full flex flex-col items-center
                          justify-center hover:text-seagull-100 gap-2">
                              <BsFillCloudUploadFill className="text-seagull-300 text-3xl 
                              hover:text-seagull-100"/>
                              <p className="text-seagull-300 
                              ">Click here to upload</p>
                            </div>
                            <input 
                              type="file" 
                              name="uploadimage" 
                              accept="image/*"
                              onChange={uploadImage} 
                              className="w-0 h-0"/>
                          </label>
                        </> 
                      ) : (
                        <> 
                          <div className="relative h-full">
                            <img 
                              src={imageAsset} 
                              alt="uploaded image" 
                              className="w-full h-full object-cover"
                              />
                            <button 
                              type="button" 
                              className="absolute bottom-3 right-3 p-3 rounded-full  bg-seagull-300 text-xl
                              font-body cursor-pointer outline-none hover:shadow-md duration-500 transition-all
                              ease-in-out"
                              onClick={deleteImage}>
                                <AiFillDelete className="text-white" />
                              </button>
                          </div>
                        </>
                      )}
                </>}
              </div>

            <div className="w-full flex flex-col md:flex-row items-center gap-3">
              <div className="w-full py-2 border-b border-seagull-200 flex items-center gap-2">
                <MdPriceChange className="text-seagull-300 text-2xl" />
                <input 
                  type="text" 
                  required 
                  placeholder="Price" 
                  className="w-full h-full text-lg bg-transparent outline-none border-none 
                  placeholder:text-[#9dabb3] font-body"/>
              </div>
            </div>
        </div>
      </div>
    )
  }