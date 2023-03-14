import React from 'react'

export default function RowContainer({flag}) {
  return (
    <>
    <div className={`w-full my-12 flex ${
        flag ? 'overflow-x-scroll' : 'overflow-hidden'
    }`}>
        <div 
            className="w-72 md:w-80 h-auto bg-seagull-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)] 
            backdrop-blur-lg">
                <div className='w-full flex items-center justify-between'>
                    <img 
                    src="https://firebasestorage.googleapis.com/v0/b/restaurant-website-60f84.appspot.com/o/Images%2F1678805218151-event-weedings.png?alt=media&token=9d03e576-e9dc-43a1-bc22-a9bd24590512" 
                    alt='sa' 
                    className='w-40'/>
                    <div className='w-8 h-8 rounded-full bg-gradient-to-tr from-seagull-300 to-[#67e8f9]'>

                    </div>
                </div>
            </div>
    </div>
    </>
  );
};

