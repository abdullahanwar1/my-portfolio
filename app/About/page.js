import React from "react";

export default function About() {

    return (
        <main>
            <div className='flex justify-center items-center font-sans'>
                <div className="border border-y-red-600 max-w-fit rounded-md border-gray-900 bg-gray-900 p-4 mt-5 text-white shadow-xl shadow-black">
                    <p className='text-center text-2xl mt-5 font-serif'> Name : Abdullah Anwar </p>
                    <div className='flex justify-center space-x-14 mb-8 px-14'>
                        <p className=' max-w-lg mt-10'>As an aspiring software development student, I am dedicated to honing my skills in [Programming Languages] and exploring the vast landscape of technology. My academic journey has equipped me with a solid foundation in software engineering principles, and my hands-on projects reflect a deep enthusiasm for creating impactful, innovative solutions</p>
                        <p className=' max-w-lg mt-10'> I am particularly interested in [Areas of Interest, e.g., AI, Web Development, Mobile Applications], where I am eager to apply my knowledge and creativity. My commitment to continuous learning and growth is evident in my proactive approach to embracing new challenges and technologies. I thrive in collaborative environments, eagerly contributing to team efforts while also growing my individual expertise. My portfolio showcases a blend of academic projects and personal initiatives, illustrating my journey as a budding software developer poised to make a significant impact in the tech world.</p>
                    </div>         
                </div>
            </div>
        </main>
    );
}