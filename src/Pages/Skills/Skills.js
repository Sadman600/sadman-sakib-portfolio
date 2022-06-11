import React from 'react';
import logo1 from '../../Images/logo-1.png';
import logo2 from '../../Images/logo-2.png';
import logo3 from '../../Images/logo-3.png';
import logo4 from '../../Images/logo-4.png';
import logo5 from '../../Images/logo-5.jpg';
import logo6 from '../../Images/logo-6.png';
import logo7 from '../../Images/logo-7.png';
import logo8 from '../../Images/logo-8.png';
import logo9 from '../../Images/logo-9.png';
const Skills = () => {
    return (
        <div className='my-4'>
            <h1 className='text-center text-5xl font-bold my-7'>My Skills</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4'>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar ">
                            <div className="w-24 rounded-full">
                                <img src={logo1} alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">HTML</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar ">
                            <div className="w-24 rounded-full">
                                <img src={logo2} alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">CSS</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar ">
                            <div className="w-24 rounded-full">
                                <img src={logo3} alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Bootstrap</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar ">
                            <div className="w-24 rounded-full">
                                <img src={logo9} alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">TailwindCSS</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar ">
                            <div className="w-24 rounded-full">
                                <img src={logo4} alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">JavaScript</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar ">
                            <div className="w-24 rounded-full">
                                <img src={logo5} alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">React</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar ">
                            <div className="w-24 rounded-full">
                                <img src={logo6} alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Node</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar ">
                            <div className="w-24 rounded-full">
                                <img src={logo7} alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Express</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar ">
                            <div className="w-24 rounded-full">
                                <img src={logo8} alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">MongoDB</h2>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Skills;