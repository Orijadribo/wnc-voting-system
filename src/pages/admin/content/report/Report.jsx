import React, { useRef } from 'react';
import { WNGC_logo } from '../../../../assets/index';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ActualReport from './ActualReport';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Trial from './Trial';

const Report = () => {
  return (
    <div>
      <div className='flex items-center justify-between mb-5 '>
        <div className='text-2xl p-2 pl-0'>Report</div>
        <div className=''>
          <PDFDownloadLink
            document={<ActualReport />}
            fileName='vote_results_2024'
          >
            {({ loading }) =>
              loading ? (
                <button className='border p-2 rounded-lg hover:bg-green-200 cursor-not-allowed'>
                  Loading Document
                </button>
              ) : (
                <button className='border p-2 rounded-lg hover:bg-green-200'>
                  Download
                </button>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
      <div
        className='flex flex-col gap-5 overflow-y-auto overflow-x-auto rounded-lg w-full border p-5'
        style={{ height: 'calc(100vh - 240px)' }}
      >
        <ActualReport />
      </div>
    </div>
  );
};

export default Report;
