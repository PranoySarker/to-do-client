import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    return (
        <div className='h-screen flex'>
            <div className=' mx-auto mt-10'>

                <DayPicker />
            </div>
        </div>
    );
};

export default Calender;