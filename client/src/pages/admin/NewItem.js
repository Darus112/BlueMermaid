import { useState } from "react";
import { motion } from "framer-motion";
import Bounce from "react-reveal/Bounce";

import { IoRestaurantSharp } from "react-icons/io5";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { MdPriceChange } from "react-icons/md";

import { categories, specials } from "../../utils/data";
import Loader from "../../components/Loader";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../firebase.config";
import { saveItem } from "../../utils/firebaseFunctions";
import { useStateValue } from "../../context/StateProvider";
import { getAllFoodItems } from "../../utils/firebaseFunctions";
import { actionType } from "../../context/reducer";

export default function NewItem() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");

  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [{ foodItems }, dispatch] = useStateValue();

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading : Try Again");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded seccesfully");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted seccesfully");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!title || !price || !imageAsset || !category) {
        setFields(true);
        setMsg("Reaquired fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          qty: 1,
          price: price,
        };
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data uploaded seccesfully");
        clearData();
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try Again");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }

    fetchData();
  };

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setPrice("");
    setCategory("");
  };

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Bounce>
        <div
          className="w-[90%] md:w-[75%] border border-seagull-500 rounded-lg p-4
        shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col items-center justify-center
        gap-4"
        >
          {fields && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
                alertStatus === "danger"
                  ? "bg-[#f56464] text-[#941e1e]"
                  : "bg-[#8eed79] text-[#1c8013]"
              }`}
            >
              {msg}
            </motion.p>
          )}

          <div
            className="w-full py-2 border-b border-seagull-300 flex items-center
              gap-2"
          >
            <IoRestaurantSharp className="text-xl text-seagull-300" />
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give a title..."
              className="w-full h-full text-lg bg-transparent font-body outline-none border-none
                  placeholder:text-[#9dabb3]"
            />
          </div>

          <div className="w-full">
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="outline-none w-full text-base border-b-2 border-seagull-300 p-2 rounded-md 
                cursor-pointer font-body"
            >
              <option value="" className="bg-white ">
                Select category
              </option>
              {specials &&
                specials.map((item) => (
                  <option
                    key={item.id}
                    className="text-base border-0 outline-none capitalize bg-white text-seagull-900"
                    value={item.urlParamName}
                  >
                    {item.name}
                  </option>
                ))}
              {categories &&
                categories.map((item) => (
                  <option
                    key={item.id}
                    className="text-base border-0 outline-none capitalize bg-white text-seagull-900"
                    value={item.urlParamName}
                  >
                    {item.name}
                  </option>
                ))}
            </select>
          </div>

          <div
            className="group flex justify-center items-center flex-col border-2 border-dotted 
              border-seagull-400 w-full h-48 md:h-96 cursor-pointer rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          >
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {!imageAsset ? (
                  <>
                    <label
                      className="w-full h-full flex flex-col items-center
                          justify-center cursor-pointer "
                    >
                      <div
                        className="w-full h-full flex flex-col items-center
                          justify-center gap-2 "
                      >
                        <BsFillCloudUploadFill
                          className="text-seagull-300 text-3xl 
                              hover:text-seagull-100"
                        />
                        <p className="text-seagull-300 hover:text-seagull-100">
                          Click here to upload
                        </p>
                      </div>
                      <input
                        type="file"
                        name="uploadimage"
                        accept="image/*"
                        onChange={uploadImage}
                        className="w-0 h-0"
                      />
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
                        onClick={deleteImage}
                      >
                        <AiFillDelete className="text-white" />
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          <div className="w-full flex flex-col md:flex-row items-center gap-3">
            <div className="w-full py-2 border-b border-seagull-200 flex items-center gap-2">
              <MdPriceChange className="text-seagull-300 text-2xl" />
              <input
                type="text"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="w-full h-full text-lg bg-transparent outline-none border-none 
                  placeholder:text-[#9dabb3] font-body"
              />
            </div>
          </div>

          <div className="flex items-center w-full">
            <button
              type="button"
              className="ml-0 md:ml-auto w-full md:w-auto 
              border-none outline-none  bg-[#7ac96f] px-12 py-2 rounded-lg
              text-lg text-white font-body hover:scale-105 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              onClick={saveDetails}
            >
              Save
            </button>
          </div>
        </div>
      </Bounce>
    </div>
  );
}
