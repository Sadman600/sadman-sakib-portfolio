import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const handleSendMail = e => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_4fxkr9g', form.current, 'rAtYE07HejcWLzyJ6')
            .then((result) => {
                alert(result.text);
            }, (error) => {
                // alert(error.text);
                alert("your message has send");
            });
        e.target.reset();
    }
    return (
        <div class="hero min-h-screen mt-12 rounded-lg" style={{ backgroundImage: `url(https://api.lorem.space/image/fashion?w=1000&h=800)` }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-extrabold">Contact Me</h1>

                    <form ref={form} onSubmit={handleSendMail}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text text-xl font-bold text-white">Your name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter your name" class="input input-bordered w-96" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text text-xl font-bold text-white">Your email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" class="input input-bordered w-96" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text text-xl font-bold text-white">Subject</span>
                            </label>
                            <input type="text" name='subject' placeholder="Enter your subjeect" class="input input-bordered w-96" />
                        </div>
                        <div class="form-control w-96">
                            <label class="label">
                                <span class="label-text text-xl font-bold text-white">Message</span>
                            </label>
                            <textarea name='message' class="textarea textarea-bordered h-24" placeholder="Message"></textarea>
                        </div>

                        {/* <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                        <input type='submit' value='Submit' class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold mt-4" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;