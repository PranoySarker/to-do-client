import React from 'react';

const Home = () => {
    return (
        <div className='h-screen'>
            <div class="card w-1/2 bg-neutral text-neutral-content mx-auto p-5 my-10">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">TO-DO-LIST!</h2>

                    <div class="card-actions justify-end">
                        <button class="btn btn-sm  btn-accent">ADD TODO</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;