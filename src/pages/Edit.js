import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Edit = () => {
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    const [todo, setTodo] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/todo/${id}`)
            .then(res => res.json())
            .then(data => {
                setTodo(data)
            })
    }, [])

    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/todo/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                reset();
                alert('Your todo edited successfully!!');
            })
    };
    return (
        <div className='h-screen'>
            <div class="card w-1/2 bg-neutral  mx-auto p-5 my-10">
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-white">Your To-Do is: {todo.todo}</h2>
                    <small class='text-white'>you can edit your to-do here...</small>
                    <form className='flex w-80 mt-7' onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("todo")} className='rounded mx-2 px-2 h-12 w-full text-black text-xl' />
                        <input class="btn btn-md  btn-accent" type="submit" value='EDIT TODO' />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default Edit;