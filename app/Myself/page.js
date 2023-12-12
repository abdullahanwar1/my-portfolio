import React from "react";

export default function Myself() {




    const myself = () => {
      return(
          <div className='text-center mt-10 mb-5'>
              <p className="text-3xl font-bold mb-1">Abdullah Anwar</p>
              <p className="text-xl font-bold">{'<Software Development student/>'}</p>
          </div>
      );
  };
  

    const socialLinks = () => {
        return(
            <div className='flex flex-column justify-center mt-5 mb-7'>
             <a href='https://github.com/abdullahanwar1'>
             </a>          
             <a href='https://www.linkedin.com/in/abdullah-anwar-077636254/'>
             </a>
           </div>
        );
    };

    return (
        <div className="">
            {Myself()}
            {socialLinks()}
        </div>
    );
}
