import React from 'react';
import { useForm } from "react-hook-form";


const Todo = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = 'https://lit-island-29284.herokuapp.com/todo';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                reset();
            })
    };
    return (
        <div className='h-screen'>
            <div class="card w-1/2 bg-neutral  mx-auto p-5 my-10">
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-white">TO-DO-LIST!</h2>
                    <form className='flex w-80' onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("todo")} className='rounded mx-2 px-2 h-12 w-full text-black text-xl' />
                        <input class="btn btn-md  btn-accent" type="submit" value='ADD TODO' />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Todo;