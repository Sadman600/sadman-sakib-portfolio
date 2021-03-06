import React from 'react';

const Details = () => {
    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                    </div>
                </div>
                <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
            </div>
        </div>
    );
};

export default Details;