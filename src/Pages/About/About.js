import React from 'react';
import sakib from '../../Images/sakib.jpg';
const About = () => {
    return (

        <div class=" mt-10 h-96 bg-secondary rounded-lg  text-white" >
            <div class="hero-content text-center">
                <div class="max-w-4xl">
                    <h1 class="text-5xl font-bold ">About Me</h1>
                    <div class="avatar mt-7">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={sakib} alt='' />
                        </div>
                    </div>
                    <p class="py-6 text-2xl text-start">
                        I am Sadman Sakib. I am a Front-end Web Developer.
                        I am Diploma in Computer and Bachelor of Science (BSc) in Computer Science Engineer.
                        I am expert in HTML, CSS, Bootstrap, Tailwind CSS,
                        daisyUI, JavaScript, ES6, React. and comfortable Node.js, Express.js, MongoDB,
                        Firebase and JWT.
                    </p>
                </div>
            </div>
        </div>


    );
};

export default About;