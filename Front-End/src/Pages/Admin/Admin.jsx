import React, { useState } from 'react';

const Admin = () => {
    
    const [index, setIndex] = useState(0);

    return (
        <section className='lg:pt-40 md:pt-24 pt-16'>
            {/* Tab index */}
            <div className='mb-20'>
                <ul className="flex justify-center flex-wrap text-sm font-medium text-center border-gray-700 text-gray-400">
                    <li onClick={() => setIndex(0)} className="mr-2 hover:cursor-pointer">
                        <a className={`inline-block p-4 hover:text-green-700 rounded-t-lg ${ index === 0 && 'bg-gray-800 text-green-700'} border-b`}>All Orders</a>
                    </li>
                    <li onClick={() => setIndex(1)} className="mr-2 hover:cursor-pointer">
                        <a className={`inline-block p-4 hover:text-green-700 rounded-t-lg ${ index === 1 && 'bg-gray-800 text-green-700'} border-b`}>Pending</a>
                    </li>
                </ul>
            </div>

            {/* Tab Content */}
            <div>
                <div hidden={index !== 0}>
                    All Orders                   
                </div>
                <div hidden={index !== 1}>
                    Pending
                </div>
            </div>
        </section>
    );
};

export default Admin;