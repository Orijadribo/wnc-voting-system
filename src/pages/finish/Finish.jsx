import React from 'react';

const Finish = () => {
  return (
    <div className='bg-green-50'>
      <div className='h-screen flex items-center justify-center'>
        <div className='max-w-2xl m-auto rounded-lg p-6 md:p-10 shadow-lg bg-white capitalize'>
          <div className='flex flex-col gap-6 items-center justify-center'>
            <div className='text-[80px]'>🎉</div>
            <div className='font-medium text-[32px] text-center'>
              thank you for participating in this voting exercise
            </div>
            <div className=' flex flex-col md:flex-row gap-2 wrap font-light text-[24px] text-center'>
              see you at the meeting on <span>11. aug. 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finish;
