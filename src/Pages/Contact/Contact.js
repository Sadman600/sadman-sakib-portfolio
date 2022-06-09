import React from 'react';

const Contact = () => {
    return (
        <div>
            <div class="hero h-96 bg-slate-50 my-2 rounded-lg " >
                <div class="hero-content text-center">
                    <div class="max-w-4xl">
                        <h1 class="text-5xl font-bold">Contact Me</h1>

                        <div class=" mt-5 flex-shrink-0  max-w-screen-lg shadow-2xl bg-base-100">
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Email" class="input input-bordered" />

                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Message</span>
                                    </label>
                                    <textarea class="textarea textarea-bordered" placeholder="Message"></textarea>

                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;