import React from 'react';
import pro1 from '../../Images/pro1.JPG';
import pro2 from '../../Images/pro2.JPG';
import pro3 from '../../Images/pro3.JPG';
const MyProjects = () => {
    return (
        <div className=''>
            <h1 className='text-center text-5xl font-bold mb-7'>My Portfolio</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div class="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
                    <figure><img src={pro1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Accessories Manufacturer
                        </h2>
                        <div class="card-actions justify-start ">
                            <a href='https://accessories-manufacturer.web.app/' target="_blank" class="btn btn-active btn-link capitalize">Live Side</a>
                            <a href='https://github.com/Sadman600/manufacturer-website-client' target="_blank" class="btn btn-active btn-link capitalize">Client Side</a>
                            <a href='https://github.com/Sadman600/manufacturer-website-server' target="_blank" class="btn btn-active btn-link capitalize">Server Side</a>
                        </div>

                        <ul class="list-disc">
                            <li>Developed front-end user experience using Tailwind CSS Component library daisyUI,
                                React.Js, Node.Js, Express.js and MongoDB.</li>
                            <li>Allowed users to have a customized experience based on the mood of the user throughout the entire
                                experience ofthe application.</li>
                            <li>Implemented React Router DOM to allow nested RESTful routing and Google login.</li>
                            <li>In this project has include technology- Google Firebase, React RouterHook, React Hook Form, React
                                Query,React Toastify ,Nodemon.</li>
                        </ul>
                        {/* <div class="card-actions justify-end">
                            <button class="btn btn-primary text-white font-bold capitalize">Details</button>
                        </div> */}
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
                    <figure><img src={pro3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            IT Management Service
                        </h2>
                        <div class="card-actions justify-start">
                            <a href='https://it-management-service.web.app/' target="_blank" class="btn btn-active btn-link capitalize">Live Side</a>
                            <a href='https://github.com/Sadman600/-warehouse-management-client-side' target="_blank" class="btn btn-active btn-link capitalize">Client Side</a>
                            <a href='https://github.com/Sadman600/--warehouse-management-server-side' target="_blank" class="btn btn-active btn-link capitalize">Server Side</a>
                        </div>

                        <ul class="list-disc">
                            <li>Developed front-end with CSS, Bootstrap, React Bootstrap, React.Js, Node.Js, Express.js
                                and MongoDB.</li>
                            <li>Implemented React Router, Google Login.</li>
                            <li>User Experience with CSS Grids that allowed the user to view any product.</li>
                            <li>In this project has include technology- React Router Hook, React Hook Form, React Query, React
                                Toastify, Google Firebase, Nodemon.</li>
                        </ul>
                        {/* <div class="card-actions justify-end">
                            <button class="btn btn-primary text-white font-bold capitalize">Details</button>
                        </div> */}
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
                    <figure><img src={pro2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Community Center
                        </h2>
                        <div class="card-actions justify-start ">
                            <a href='https://sadman-sakib-community-center.netlify.app/' target="_blank" class="btn btn-active btn-link capitalize">Live Side</a>
                            <a href='https://github.com/Sadman600/community-center' target="_blank" class="btn btn-active btn-link capitalize">Client Side</a>

                        </div>

                        <ul class="list-disc">
                            <li>Designed a community center website for marriage counseling with marriage media.</li>
                            <li>Developed front-end with HTML, CSS and Bootstrap.</li>
                            <li>Created Mobile Responsive User Experience with Bootstrap Grids that website visitors.</li>
                        </ul>
                        {/* <div class="card-actions justify-end">
                            <button class="btn btn-primary text-white font-bold capitalize">Details</button>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyProjects;