import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
    const [tasks, setTask] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch('https://lit-island-29284.herokuapp.com/todos')
            .then(res => res.json())
            .then(data => { setTask(data) })
    }, [])

    const addtodo = () => {
        navigate('/todo');
    }
    return (
        <div className='h-screen'>
            <div class="card w-1/2 bg-neutral  mx-auto p-5 my-10">
                <div class="card-body items-center text-center">
                    <div class="overflow-x-auto">
                        <table class="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Your task</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tasks.map(task =>
                                        <tr>
                                            <th><input type="checkbox" /></th>
                                            <td>{task.todo}</td>
                                            <td><Link class="btn btn-xs" to={`/todo/edit/${task._id}`}>Edit</Link></td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                    <div>
                        <button class="btn btn-sm btn-accent" onClick={addtodo}>Add More To-Do</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;