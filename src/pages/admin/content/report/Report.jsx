import React, { useRef } from 'react';
import { WNGC_logo } from '../../../../assets/index';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Report = () => {
  const pdfRef = useRef();

  //Function to handle report download
  const handleDownload = () => {
    const input = pdfRef.current;

    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = pdfWidth / imgWidth;
      const scaledHeight = imgHeight * ratio;

      let position = 0;
      let heightLeft = scaledHeight;

      // Add the first page
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, scaledHeight);
      heightLeft -= pdfHeight;

      // Add additional pages if needed
      while (heightLeft > 0) {
        position -= pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, scaledHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save('vote_results.pdf');
    });
  };

  return (
    <div>
      <div className='flex items-center justify-between mb-5 '>
        <div className='text-2xl p-2 pl-0'>Report</div>
        <div className=''>
          <button
            onClick={handleDownload}
            className='border p-2 rounded-lg hover:bg-green-200'
          >
            Download
          </button>
        </div>
      </div>
      <div
        className='flex flex-col gap-5 overflow-y-auto overflow-x-auto rounded-lg w-full border p-5'
        style={{ height: 'calc(100vh - 240px)' }}
      >
        <div className='flex flex-col w-full p-5' ref={pdfRef}>
          <div className='flex justify-end pb-5'>
            <img className='h-24' src={WNGC_logo} alt='WNGC_logo' />
          </div>
          <div className='flex flex-col items-center justify-center pb-5'>
            <p className='text-[32px]'>West Nile Golf Club</p>
            <p className='text-[28px] font-light'>Constitution Vote</p>
            <p className='text-[24px] font-light'>Results</p>
          </div>

          {/* Stats of the vote  */}
          <div className='pb-5'>
            <div className='flex gap-5'>
              <p className='font-bold'>Period:</p>
              <p>Monday 29th July 2024 - Wednesday 7th August 2024</p>
            </div>
            <div className='flex gap-5'>
              <p className='font-bold'>Verified Voters:</p>
              <p>50</p>
            </div>
            <div className='flex gap-5'>
              <p className='font-bold'>Those Who Voted:</p>
              <p>30</p>
            </div>
          </div>

          {/* Actual results  */}
          <div className='flex flex-col'>
            <p className='flex items-center justify-center text-lg p-2'>
              Result Summary
            </p>
            <div className='border'>
              <div className='flex flex-col gap-2 my-5 p-5'>
                <p className='text-[28px] pb-5'>Article 1</p>
                <div className='flex px-5 pb-5'>
                  <div className='flex flex-1 flex-col'>
                    <p>Voted Yes: 20</p>
                    <p>Voted No: 10</p>
                  </div>
                  <div className='flex-[3]'>pie chart</div>
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-[20px]'>Reasons For No Vote</p>
                  <div className='flex flex-col gap-2'>
                    <div className='flex'>
                      <p className='flex-1 flex items-center justify-start'>
                        Daniel
                      </p>
                      <p className='flex-[4] text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Illum sed vel nostrum nesciunt saepe repudiandae
                        porro officia animi, ipsum magnam.
                      </p>
                    </div>
                    <hr className=' border' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex'>
                      <p className='flex-1 flex items-center justify-start'>
                        Orija
                      </p>
                      <p className='flex-[4] text-justify'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Earum odio ipsa pariatur sunt fuga distinctio
                        voluptas itaque ex consequuntur iure in natus voluptate
                        beatae magnam, hic dolorem libero amet! Et.
                      </p>
                    </div>
                    <hr className=' border' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex'>
                      <p className='flex-1 flex items-center justify-start'>
                        peti
                      </p>
                      <p className='flex-[4] text-justify'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Est, dicta?
                      </p>
                    </div>
                    <hr className=' border' />
                  </div>
                </div>
              </div>
            </div>
            <div className='border'>
              <div className='flex flex-col gap-2 p-5'>
                <p className='text-[28px]'>Article 1</p>
                <div className='flex px-5'>
                  <div className='flex flex-1 flex-col'>
                    <p>Voted Yes: 20</p>
                    <p>Voted No: 10</p>
                  </div>
                  <div className='flex-[3]'>pie chart</div>
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-[20px]'>Reasons For No Vote</p>
                  <div className='flex flex-col gap-2'>
                    <div className='flex'>
                      <p className='flex-1 flex items-center justify-start'>
                        Daniel
                      </p>
                      <p className='flex-[4] text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Illum sed vel nostrum nesciunt saepe repudiandae
                        porro officia animi, ipsum magnam.
                      </p>
                    </div>
                    <hr className=' border' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex'>
                      <p className='flex-1 flex items-center justify-start'>
                        Orija
                      </p>
                      <p className='flex-[4] text-justify'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Earum odio ipsa pariatur sunt fuga distinctio
                        voluptas itaque ex consequuntur iure in natus voluptate
                        beatae magnam, hic dolorem libero amet! Et.
                      </p>
                    </div>
                    <hr className=' border' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex'>
                      <p className='flex-1 flex items-center justify-start'>
                        peti
                      </p>
                      <p className='flex-[4] text-justify'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Est, dicta?
                      </p>
                    </div>
                    <hr className=' border' />
                  </div>
                </div>
              </div>
            </div>
            <div className='border'>
              <div className='flex flex-col gap-2 p-5'>
                <p className='text-[28px]'>Article 1</p>
                <div className='flex px-5'>
                  <div className='flex flex-1 flex-col'>
                    <p>Voted Yes: 20</p>
                    <p>Voted No: 10</p>
                  </div>
                  <div className='flex-[3]'>pie chart</div>
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-[20px]'>Reasons For No Vote</p>
                  <div className='flex flex-col gap-2'>
                    <div className='flex'>
                      <p className='flex-1 flex items-center justify-start'>
                        Daniel
                      </p>
                      <p className='flex-[4] text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Illum sed vel nostrum nesciunt saepe repudiandae
                        porro officia animi, ipsum magnam.
                      </p>
                    </div>
                    <hr className=' border' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex'>
                      <p className='flex-1 flex items-center justify-start'>
                        Orija
                      </p>
                      <p className='flex-[4] text-justify'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Earum odio ipsa pariatur sunt fuga distinctio
                        voluptas itaque ex consequuntur iure in natus voluptate
                        beatae magnam, hic dolorem libero amet! Et.
                      </p>
                    </div>
                    <hr className=' border' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex'>
                      <p className='flex-1 flex items-center justify-start'>
                        peti
                      </p>
                      <p className='flex-[4] text-justify'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Est, dicta?
                      </p>
                    </div>
                    <hr className=' border' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
