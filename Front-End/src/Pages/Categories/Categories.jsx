import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCard from '../../Components/ProductCard';

const Categories = () => {
    const jobs = useLoaderData();

    // console.log(jobs);
    return (
        <section className='max-w-[800px] mx-auto mb-40 w-full overflow-y-scroll '>
            <div className='mb-60 mt-20 space-y-5'>
                {
                    jobs?.map(job => <JobCard
                        job={job}
                    ></JobCard>)
                }
                {
                    jobs?.length === 0 && <h2 className='text-5xl pt-20 text-center font-semibold'>'No Jobs Availavale on this category'</h2> 
                }
            </div>
        </section>
    );
};

export default Categories;