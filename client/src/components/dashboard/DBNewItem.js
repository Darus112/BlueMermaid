import React, { useEffect, useState } from "react";
import { statuses } from "../../utils/styles";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import SimpleLoader from "../SimpleLoader";

import { RiUploadCloudFill, RiDeleteBin7Line } from "react-icons/ri";
import { FiSave } from "react-icons/fi";

import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../config/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import {
  alertDanger,
  alertNULL,
  alertSucces,
} from "../../context/actions/alertActions";
import { buttonClick } from "../../animation";
import ProgressBar from "../ProgressBar";

import { addNewProduct, getAllProducts } from "../../api";
import { setAllProducts } from "../../context/actions/productActions";

export default function DBNewItem() {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(null);
  const [imageDownloadURL, setImageDownloadURL] = useState(null);
  const [itemIngredients, setItemIngredients] = useState("");

  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}_${imageFile.name}`);

    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (error) => {
        dispatch(alertDanger(`Error : ${error} `));
        setTimeout(() => {
          dispatch(alertNULL());
        }, 3000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageDownloadURL(downloadURL);
          setIsLoading(false);
          setProgress(null);
          dispatch(alertSucces("Imaginea a fost încărcată cu succes"));
          setTimeout(() => {
            dispatch(alertNULL());
          }, 3000);
        });
      }
    );
  };

  const deleteImageFromFirebase = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageDownloadURL);

    deleteObject(deleteRef).then(() => {
      setImageDownloadURL(null);
      setIsLoading(false);
      dispatch(alertSucces("Imaginea a fost ștearsă cu succes"));
      setTimeout(() => {
        dispatch(alertNULL());
      }, 3000);
    });
  };

  const submitNewData = () => {
    const data = {
      product_name: itemName,
      product_category: category,
      product_price: price,
      imageURL: imageDownloadURL,
      ingredients: itemIngredients,
    };
    if (!itemName || !category || !price || !imageDownloadURL) {
      dispatch(alertDanger("Câmpurile obligatorii nu pot fi goale"));
      setTimeout(() => {
        dispatch(alertNULL());
      }, 3000);
    } else {
      addNewProduct(data).then((res) => {
        dispatch(alertSucces("Un nou produs a fost adăugat"));
        getAllProducts().then((data) => {
          dispatch(setAllProducts(data));
        });
        setTimeout(() => {
          dispatch(alertNULL());
        }, 3000);
        setImageDownloadURL(null);
        setItemName("");
        setPrice("");
        setCategory(null);
        setItemIngredients("");
      });
    }
  };

  return (
    <Fade>
      <div className="flex items-center justify-center flex-col pt-6 md:px-24 w-full mt-12">
        <div
          className=" rounded-lg p-4 w-full flex 
        shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex-col items-center 
        justify-center gap-4 bg-gradient-to-tr from-seagull-100 to-[#fcfcfc]"
        >
          <InputValueField
            type="text"
            placeHolder={"Nume produs aici"}
            stateFunc={setItemName}
            stateValue={itemName}
          />

          <div className="w-full flex items-center justify-around gap-3 flex-wrap">
            {statuses &&
              statuses?.map((data) => (
                <motion.p
                  whileTap={{ scale: 0.99 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setCategory(data.category)}
                  key={data.id}
                  className={`px-4 py-3 rounded-lg text-sm border-none outline-none
             font-semibold cursor-pointer shadow-lg flex items-center justify-center flex-col
            hover:shadow-seagull-300 font-body ${
              data.category === category
                ? "bg-seagull-300 text-seagull-50"
                : "bg-white text-seagull-400 "
            }`}
                >
                  <p>{data.title}</p>
                  <p className="text-[10px]">({data.name})</p>
                </motion.p>
              ))}
          </div>

          <InputValueField
            type="number"
            placeHolder={"Preț produs aici"}
            stateFunc={setPrice}
            stateValue={price}
          />

          <TextAreaField
            type="text"
            placeHolder="Adaugă ingredientele aici"
            stateValue={itemIngredients}
            stateFunc={setItemIngredients}
            rows={4}
            cols={50}
          />

          <div
            className="w-full h-[370px] rounded-md border-2 border-dotted border-seagull-300
          cursor-pointer shadow-lg bg-seagull-50"
          >
            {isLoading ? (
              <div className="w-full h-full flex flex-col items-center justify-evenly px-24">
                <SimpleLoader />
                <ProgressBar variant="determinate" value={progress} />
              </div>
            ) : (
              <>
                {!imageDownloadURL ? (
                  <>
                    <label>
                      <div
                        className="flex flex-col items-center justify-center h-full
                      w-full cursor-pointer"
                      >
                        <div
                          className="flex flex-col justify-center
                        items-center cursor-pointer"
                        >
                          <p className="font-bold text-3xl">
                            <RiUploadCloudFill className="-rotate-0 text-seagull-900" />
                          </p>
                          <p className="font-body text-seagull-900 text-sm">
                            Click pentru a încărca o imagine
                          </p>
                        </div>
                      </div>
                      <input
                        type="file"
                        name="upload-image"
                        accept="image/*"
                        onChange={uploadImage}
                        className="w-0 h-0"
                      />
                    </label>
                  </>
                ) : (
                  <>
                    <div className="relative w-full h-full overflow-hidden rounded-md flex justify-center">
                      <div className="flex items-center justify-center w-96">
                        <motion.img
                          whileHover={{ scale: 1.1 }}
                          src={imageDownloadURL}
                          className="object-cover rounded-[1rem] shadow-lg"
                        />
                      </div>
                      <motion.button
                        {...buttonClick}
                        type="button"
                        className="absolute top-3 right-3 p-3 rounded-full hover:shadow-lg
                        bg-gradient-to-tr from-seagull-400 to-seagull-100"
                        onClick={() =>
                          deleteImageFromFirebase(imageDownloadURL)
                        }
                      >
                        <RiDeleteBin7Line className="text-seagull-50 -rotate-0" />
                      </motion.button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          <motion.button
            {...buttonClick}
            className=" w-36 py-4 rounded-xl bg-gradient-to-tr from-[#aace88] to-[#e2ecd9]
            flex items-center justify-center gap-3 shadow-lg hover:shadow-[#aace88]"
            onClick={() => submitNewData()}
          >
            <FiSave className="text-2xl text-seagull-50" />
            <p className="font-body font-medium text-lg text-seagull-50">
              Salvează
            </p>
          </motion.button>
        </div>
      </div>
    </Fade>
  );
}

export const InputValueField = ({
  type,
  placeHolder,
  stateValue,
  stateFunc,
  rows,
  cols,
}) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      className="w-full px-4 py-1 bg-gradient-to-l from-seagull-200 to-seagull-50
        shadow-lg outline-none rounded-md border-seagull-100 border 
        focus:border-seagull-200 focus:shadow-seagull-300 font-body font-semibold text-seagull-900"
      rows={rows}
      cols={cols}
      value={stateValue}
      onChange={(e) => stateFunc(e.target.value)}
    />
  );
};

export const TextAreaField = ({
  type,
  placeHolder,
  stateValue,
  stateFunc,
  rows,
  cols,
}) => {
  return (
    <textarea
      type={type}
      placeholder={placeHolder}
      className="w-full px-4 py-1 bg-gradient-to-l from-seagull-200 to-seagull-50
        shadow-lg outline-none rounded-md border-seagull-100 border 
        focus:border-seagull-200 focus:shadow-seagull-300 font-body font-semibold text-seagull-900"
      rows={rows}
      cols={cols}
      value={stateValue}
      onChange={(e) => stateFunc(e.target.value)}
    />
  );
};
