import React from 'react';
import { Card, CardHeader, Chip, Box } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { DataGrid } from '@mui/x-data-grid';
import CustomerModal from '../styled-components/CustomerModal';

export default function Customers() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState(null);
  const isDesktop = useMediaQuery({
    query: '(min-width: 1281px)',
  });

  const handleClose = () => {
    setOpen(!open);
    setFormData(null);
  };

  const columns = [
    {
      field: 'id',
      headerName: 'USER ID',
      width: isDesktop ? 130 : 200,
    },
    {
      field: 'fullname',
      headerName: 'FULLNAME',
      width: isDesktop ? 200 : 300,
    },
    {
      field: 'email',
      headerName: 'EMAIL',
      width: isDesktop ? 200 : 300,
    },
    {
      field: 'actions',
      headerName: 'ACTIONS',
      width: isDesktop ? 200 : 300,
      renderCell: (params) => {
        const handleClick = () => {
          setOpen(!open);
          setFormData(params.row);
        };

        return (
          <Chip
            sx={{ fontFamily: 'Poppins' }}
            variant='outlined'
            label='Edit User'
            onClick={handleClick}
          />
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      fullname: 'Snow',
      email: 'snow@gmail.com',
      date: 'Feb 01, 1999',
    },
    {
      id: 2,
      fullname: 'john doe',
      email: 'johndoe@dev.io',
      date: 'Feb 01, 1999',
    },
    {
      id: 3,
      fullname: 'super mario',
      email: 'supermario@dev.io',
      date: 'Feb 01, 1999',
    },
  ];

  return (
    <Box className='customer-container'>
      <Card variant='outlined' className='order-card'>
        <CardHeader title={<div className='table-header'>CUSTOMER LIST</div>} />
      </Card>
      <Box height={400} width='100%'>
        <DataGrid
          className='order-data-grid'
          sx={{ fontFamily: 'Poppins' }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
        {formData !== null && (
          <CustomerModal
            open={open}
            objProps={formData}
            handleClose={handleClose}
          />
        )}
      </Box>
    </Box>
  );
}
