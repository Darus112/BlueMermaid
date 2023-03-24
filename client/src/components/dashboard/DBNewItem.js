import React, { useState } from "react";
import { statuses } from "../../utils/styles";
import { motion } from "framer-motion";
import Bounce from "react-reveal/Bounce";
import SimpleLoader from "../SimpleLoader";

import { RiUploadCloudFill } from "react-icons/ri";

export default function DBNewItem() {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setcategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(null);
  const [imageDownloadURL, setImageDownloadURL] = useState(null);

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
  };

  return (
    <Bounce>
      <div className="flex items-center justify-center flex-col pt-6 px-24 w-full mt-12">
        <div
          className=" rounded-lg p-4 w-full flex 
        shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex-col items-center 
        justify-center gap-4 bg-gradient-to-tr from-seagull-100 to-[#fcfcfc]"
        >
          <InputValueField
            type="text"
            placeHolder={"Item name here"}
            stateFunc={setItemName}
            stateValue={itemName}
          />

          <div className="w-full flex items-center justify-around gap-3 flex-wrap">
            {statuses &&
              statuses?.map((data) => (
                <motion.p
                  whileTap={{ scale: 0.99 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setcategory(data.category)}
                  key={data.id}
                  className={`px-4 py-3 rounded-lg text-sm border-none outline-none
             font-semibold cursor-pointer shadow-lg
            hover:shadow-seagull-300 font-body ${
              data.category === category
                ? "bg-seagull-300 text-seagull-50"
                : "bg-white text-seagull-400 "
            }`}
                >
                  {data.title}
                </motion.p>
              ))}
          </div>

          <InputValueField
            type="number"
            placeHolder={"Item price here"}
            stateFunc={setPrice}
            stateValue={price}
          />

          <div
            className="w-full h-[370px] rounded-md border-2 border-dotted border-seagull-300
          cursor-pointer shadow-lg bg-seagull-50"
          >
            {isLoading ? (
              <div className="w-full h-full flex flex-col items-center justify-evenly px-24">
                <SimpleLoader />
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
                            Click to upload an image
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
                  <></>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Bounce>
  );
}

export const InputValueField = ({
  type,
  placeHolder,
  stateValue,
  stateFunc,
}) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      className="w-full px-4 py-1 bg-gradient-to-l from-seagull-200 to-seagull-50
        shadow-lg outline-none rounded-md border-seagull-100 border 
        focus:border-seagull-200 focus:shadow-seagull-300 font-body font-semibold text-seagull-900"
      value={stateValue}
      onChange={(e) => stateFunc(e.target.value)}
    />
  );
};
