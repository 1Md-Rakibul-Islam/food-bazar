import React, { useEffect, useState } from 'react';
import { Classnames } from 'react-alice-carousel';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {
      _id,
      categoryId,
      categoryName,
      companyName,
      jobTitle,
      jobType,
      experience,
      sallery,
      skills,
      Education,
      aboutCompany,
      companyWebsite,
      jobDescription,
      publish,
    } = useLoaderData();
  
    return (
        <section className='max-w-[800px] mx-auto  pt-16'>
        <div className="bg-white  my-10 shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{jobTitle}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{companyName}</p>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{jobType}, {experience}</p>
            </div>
            <div className="border-t border-gray-200">
            <dl>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Salary
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {sallery}
                </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Education
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {Education}
                </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Skills
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {skills}
                </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    About the Company
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {aboutCompany}
                    <a href={companyWebsite} className="text-blue-500 hover:underline">
                    {companyWebsite}
                    </a>
                </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Job Description
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {jobDescription}
                </dd>
                </div>
            </dl>
            </div>
        <div className="flex justify-between px-4 py-5 sm:px-6">
        <div className="flex space-x-4">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Apply Now
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Save Job
            </button>
        </div>
        <p className="text-sm text-gray-500">{`Published: ${new Date(publish).toLocaleDateString()}`}</p>
        </div>
    </div>
    </section>
    );
    };


//       <div className="bg-gray-100 min-h-screen">
//         <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//           <div className="lg:flex lg:items-center lg:justify-between">
//             <div className="flex-1 min-w-0">
//               <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
//                 {jobTitle}
//               </h2>
//               <div className="flex flex-col mt-3">
//                 <span className="text-gray-700 font-semibold">{companyName}</span>
//                 <span className="text-gray-500">{categoryName}</span>
//               </div>
//             </div>
//             <div className="mt-5 flex lg:mt-0 lg:ml-4">
//               <span className="hidden sm:block ml-3">
//                 <button
//                   type="button"
//                   className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   Save
//                 </button>
//               </span>
//             </div>
//           </div>
  
//           <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
//             <div className="px-4 py-5 sm:px-6">
//               <h3 className="text-lg leading-6 font-medium text-gray-900">
//                 Job Details
//               </h3>
//               <p className="mt-1 max-w-2xl text-sm text-gray-500">
//                 {jobType} • {experience} • {sallery}
//               </p>
//             </div>
//             <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
//               <dl className="sm:divide-y sm:divide-gray-200">
//                 <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                   <dt className="text-sm font-medium text-gray-500">
//                     Education
//                   </dt>
//                   <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     {Education}
//                   </dd>
//                 </div>
//                 <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                   <dt className="text-sm font-medium text-gray-500">Skills</dt>
//                   <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     {skills}
//                   </dd>
//                 </div>
//                 <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                   <dt className="text-sm font-medium text-gray-500">
//                     About the Company
//               </dt>
//               <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                 {aboutCompany}
//                 <a
//                   href={companyWebsite}
//                   className="text-blue-500 hover:underline"
//                 >
//                   {companyWebsite}
//                 </a>
//               </dd>
//             </div>
//             <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//               <dt className="text-sm font-medium text-gray-500">
//                 Job Description
//               </dt>
//               <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                 {jobDescription}
//               </dd>
//             </div>
//           </dl>
//         </div>
//         <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//           <span
//             className={
//               `inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
//                 publish ? 'bg-green-100 text-green-800'
//                 :
//                 'bg-red-100 text-red-800'
//               }`
//             }
//           >
//             {publish ? 'Published' : 'Not published'}
//           </span>
//         </div>
//       </div>
//     </div>
//   </div>
//   );
//   };
  
export default JobDetails;