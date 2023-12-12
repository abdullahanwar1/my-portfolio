import React, { forwardRef } from 'react';

const Skills = forwardRef((props, ref) => {
    
    const one2five = () => {
        return (
            <main>
                <div>
                    <div className='flex justify-center'>
                        <div className='relative'>                        
                            <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px]'>HTML</p>
                        </div>
                        <div className='relative'>           
                            <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px] ml-2'>CSS</p>
                        </div>
                        <div className='relative'>                        
                            <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px]'>JavaScript</p>
                        </div>
                        <div className='relative'>     
                            <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px] ml-[27px]'>React</p>
                        </div>
                    </div>
                </div>
            </main>
        );
    };

    const six2ten = () => {
        return (
            <main>
                <div className='flex justify-center mt-20'>
                    <div className='relative'>
                        <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px]'>SQL</p>
                    </div>
                    <div className='relative'>
                        <p className='absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px]'>Python</p>
                    </div>
                </div>
            </main>
        );
    };

    const eleven2fifteen = () => {
        return (
            <main>
                <div className='flex justify-center mt-20 '>
                    <div className='relative'>

                        <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px] ml-[10px]'>C#</p>
                    </div>
                </div>
            </main>
        );
    };

}); 
export default Skills;

