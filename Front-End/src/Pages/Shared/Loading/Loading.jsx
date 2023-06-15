import React from 'react';

const CardLoading = () => {
    return (
      <main className='max-w-[1200px] mx-auto min-h-screen pt-20 '>
      <div className='flex items-stretch space-x-3'>
          <div className="py-4 shadow-md animate-pulse bg-gray-300 md:block hidden min-w-[270px] p-5 rounded-lg h-[80vh]">
            <div className="flex p-4 space-x-4 sm:px-8">
              <div className="flex-shrink-0 w-36 h-36 rounded-full bg-gray-400"></div>
            </div>
            <div className="p-4 space-y-4 sm:px-8">
              <div className="w-full h-4 rounded bg-gray-400"></div>
              <div className="w-full h-4 rounded bg-gray-400"></div>
              <div className="w-3/4 h-4 rounded bg-gray-400"></div>
              <div className=" py-2 space-y-4">
                <div className="w-full h-3 rounded bg-gray-400"></div>
                <div className="w-5/6 h-3 rounded bg-gray-400"></div>
              </div>
            </div>
          </div>
          <div className='mt-5 mb-40 w-full overflow-y-scroll  min-h-screen space-y-5'>
          <div className="flex flex-col w-full rounded-md shadow-md h-34 animate-pulse">
            <div className="h-36 rounded-t bg-gray-400"></div>
            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-300">
              <div className="w-3/4 h-3 rounded bg-gray-400"></div>
              <div className="w-full h-3 rounded bg-gray-400"></div>
              <div className="w-full h-3 rounded bg-gray-400"></div>
            </div>
          </div>
          </div>
          <div className='lg:block hidden bg-white min-w-[190px] h-[80vh] rounded-md'>                
          </div>
      </div>
  </main>
    );
};

export default CardLoading;