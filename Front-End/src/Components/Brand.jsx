import React from 'react';
import { Link } from 'react-router-dom';
import nexus_jobs from '../assets/images/nexus_jobs_logo.png';

const Brand = () => {
    return (
        <div>
            <Link to="/">
                <div className='flex items-center gap-2'>
                    <img className=' w-[60px] h-[60px] rounded-md' src={nexus_jobs} alt='' />
                </div>
            </Link>
        </div>
    );
};

export default Brand;