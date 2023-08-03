/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Card, CardHeader, Chip, Box } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { DataGrid } from '@mui/x-data-grid';
import OrderModal from '../styled-components/OrderModal';

export default function Orders() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleClose = () => {
    setOpen(!open);
    setFormData(null);
  };

  const isDesktop = useMediaQuery({
    query: '(min-width: 1281px)',
  });

  const columns = [
    {
      field: 'id',
      headerName: 'ORDER NUMBER',
      width: isDesktop ? 130 : 70,
    },
    {
      field: 'username',
      headerName: 'USERNAME',
      width: isDesktop ? 200 : 170,
    },
    {
      field: 'email',
      headerName: 'EMAIL',
      width: isDesktop ? 200 : 200,
    },
    {
      field: 'date',
      headerName: 'DATE',
      type: 'string',
      width: isDesktop ? 200 : 100,
    },
    {
      field: 'status',
      headerName: 'STATUS',
      type: 'string',
      width: isDesktop ? 200 : 150,
      renderCell: (params) => {
        return (
          <Box className={`order-status ${StatusBadge[params.row.status]}`}>
            {params.row.status}
          </Box>
        );
      },
    },
    {
      field: 'totalPrice',
      headerName: 'TOTAL PRICE',
      width: isDesktop ? 300 : 150,
    },
    {
      field: 'orderActions',
      headerName: 'ORDER ACTIONS',
      width: isDesktop ? 300 : 200,
      renderCell: (params) => {
        const handleClick = () => {
          setOpen(!open);
          setFormData(params.row);
        };

        return (
          <Chip
            sx={{ fontFamily: 'Poppins' }}
            variant='outlined'
            label='Edit Order'
            onClick={handleClick}
          />
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      username: 'Snow',
      email: 'snow@gmail.com',
      date: 'Feb 01, 1999',
      totalPrice: '$49.50',
      status: 'COMPLETED',
    },
    {
      id: 2,
      username: 'john doe',
      email: 'johndoe@dev.io',
      date: 'Feb 01, 1999',
      totalPrice: '$49.50',
      status: 'PROCESSING',
    },
    {
      id: 3,
      username: 'super mario',
      email: 'supermario@dev.io',
      date: 'Feb 01, 1999',
      totalPrice: '$49.50',
      status: 'RETURNED',
    },
  ];

  return (
    <Box className='orders-container'>
      <Card variant='outlined' className='order-card'>
        <CardHeader title={<div className='table-header'>ORDER LISTS</div>} />
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
      </Box>
      {formData !== null && (
        <OrderModal open={open} objProps={formData} handleClose={handleClose} />
      )}
    </Box>
  );
}

const StatusBadge = {
  COMPLETED: 'order-completed',
  PROCESSING: 'order-pending',
  RETURNED: 'order-returned',
};
