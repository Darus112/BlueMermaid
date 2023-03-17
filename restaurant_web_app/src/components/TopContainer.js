import { foodData } from "../utils/data"

export default function TopContainer() {
    return (
    <>
      {foodData && foodData.map(n =>(
                <div key={n.id} className="font-food flex flex-row gap-2 rounded-xl bg-foodcard shadow-[0_3px_10px_rgb(0,0,0,0.2)]
                min-h-[170px]">
                 <div className="flex items-center justify-center ml-2">
                   <img src={n.imgSrc} className="w-52 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]
                   max-h-[150px]"/>
                 </div>
                 <div className="pt-5">
                   <h3 className="text-2xl font-black">
                     {n.name}
                   </h3>
                   <h3 className="text-price text-xl font-extrabold">
                    ${n.price}
                   </h3>
                 </div>
               </div>
      ))}
    </>    
    );
  }