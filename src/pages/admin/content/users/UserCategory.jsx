import React, { useState } from 'react';
import AddMemberModal from './AddMemberModal';
import { DataGrid } from '@mui/x-data-grid';

const UserCategory = ({ isVisible, setIsVisible, data, selection }) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'userName',
      headerName: 'Username',
      sortable: false,
      width: 160,
    },
  ];

  return (
    <div className='w-[235px] md:w-full'>
      <div className='relative rounded-lg'>
        <div
          className='rounded-lg border'
          style={{ height: 400, width: '100%' }}
        >
          <div style={{ height: 400 }}>
            <DataGrid
              rows={data}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
      {isVisible && <AddMemberModal setIsVisible={setIsVisible} />}
    </div>
  );
};

export default UserCategory;
