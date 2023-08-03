import {
  Card,
  CardHeader,
  Box,
  Skeleton,
  Stack,
  Chip,
  LinearProgress,
  Rating,
  Tooltip,
} from '@mui/material';
import { useQuery } from 'react-query';
import { getProducts, getCategoryProducts } from '../../app/utils/util';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ProductModal from '../styled-components/ProductModal';
import ProductImage from '../styled-components/ProductImage';

const PreloaderContent = () => {
  return (
    <div className='products-container'>
      <Card>
        <CardHeader
          title={
            <div className='table-header'>
              <Skeleton animate='wave' variant='rectangular' width='50%' />
            </div>
          }
        />
      </Card>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        gap={4}
        marginTop={4}
      >
        <Skeleton
          animate='wave'
          height={100}
          width={200}
          variant='rectangular'
        />
        <Skeleton
          animate='wave'
          height={100}
          width={200}
          variant='rectangular'
        />
        <Skeleton
          animate='wave'
          height={100}
          width={200}
          variant='rectangular'
        />
        <Skeleton
          animate='wave'
          height={100}
          width={200}
          variant='rectangular'
        />
      </Box>
    </div>
  );
};

export default function Products() {
  const [open, setOpen] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const [formData, setFormData] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [rows, setRows] = useState([]);
  const [category, setCategory] = useState('electronics');

  const handleClose = () => {
    setOpen(!open);
    setFormData(null);
  };

  const handleCloseImageModal = () => {
    setOpenImage(!openImage);
    setImageData(null);
  };

  const {
    isLoading,
    data: productCategories,
    isError,
    failureReason,
  } = useQuery({
    queryKey: ['productData'],
    queryFn: getProducts,
  });

  const {
    data: categoryProducts,
    isLoading: fetchingCategoryProducts,
    isError: isErrorCategoryProducts,
    error: CategoryProductsError,
  } = useQuery({
    queryKey: ['categoryProducts', category],
    queryFn: (category) => getCategoryProducts(category),
  });

  const isDesktop = useMediaQuery({
    query: '(min-width: 1281px)',
  });

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
    },
    {
      field: 'title',
      headerName: 'TITLE',
      width: isDesktop ? 800 : 350,
    },
    {
      field: 'price',
      headerName: 'PRICE',
      width: isDesktop ? 200 : 100,
    },
    {
      field: 'rating',
      headerName: 'RATING',
      type: 'string',
      width: isDesktop ? 200 : 150,
      renderCell: (params) => {
        return (
          <Tooltip title={params.value.count}>
            <Rating name='read-only' value={params.value.rate} />
          </Tooltip>
        );
      },
    },
    {
      field: 'viewProduct',
      headerName: 'PRODUCT ACTIONS',
      width: 150,
      renderCell: (params) => {
        const handleClick = () => {
          setOpen(!open);
          setFormData(params.row);
        };

        return (
          <Chip
            sx={{ fontFamily: 'Poppins' }}
            variant='outlined'
            label='View Product'
            onClick={handleClick}
          />
        );
      },
    },
    {
      field: 'viewImage',
      headerName: 'PRODUCT IMAGE',
      width: 150,
      renderCell: (params) => {
        const handleClick = () => {
          setOpenImage(!openImage);
          setImageData(params.row);
        };

        return (
          <Chip
            sx={{ fontFamily: 'Poppins' }}
            variant='outlined'
            label='View Image'
            onClick={handleClick}
          />
        );
      },
    },
  ];

  useEffect(() => {
    if (!fetchingCategoryProducts) {
      const newData = [];
      categoryProducts?.map((item) => {
        const newItem = { ...item };
        newItem['price'] = `$${newItem['price']}`;
        newData.push(newItem);
      });
      setRows(newData);
    }
  }, [category, categoryProducts, fetchingCategoryProducts]);

  if (isLoading) return <PreloaderContent />;

  if (isError) return `an error has occured ${failureReason}`;

  const DataGridErrorOverlay = () => {
    return (
      <Box>
        {isErrorCategoryProducts &&
          `An error has occured ${CategoryProductsError}`}
      </Box>
    );
  };

  return (
    <Box className='products-container'>
      <Stack spacing={3}>
        <Card variant='outlined'>
          <CardHeader
            title={
              <Box className='table-header'>
                {isLoading ? (
                  <Skeleton animate='wave' variant='rectangular' />
                ) : (
                  'PRODUCT LISTS'
                )}
              </Box>
            }
          />
        </Card>
        <Box className='product-categories'>
          {productCategories?.map((itm, key) => {
            return (
              <Box key={key}>
                <Card
                  variant='outlined'
                  onClick={() => setCategory(itm)}
                  className='category-item'
                  sx={{
                    backgroundColor: itm === category ? '#4fe0b6' : '#fff',
                    color: itm === category ? '#fff' : 'black',
                  }}
                >
                  <CardHeader
                    title={
                      <Box className='table-header'>{itm.toUpperCase()}</Box>
                    }
                  />
                </Card>
              </Box>
            );
          })}
        </Box>
        <Box height={500} width='100%'>
          {CategoryProductsError ? (
            <DataGridErrorOverlay />
          ) : (
            <DataGrid
              className='product-data-grid'
              sx={{ fontFamily: 'Poppins' }}
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[5, 10]}
              loading={fetchingCategoryProducts}
              slots={{
                loadingOverlay: LinearProgress,
              }}
            />
          )}
        </Box>
      </Stack>
      {formData !== null && (
        <ProductModal
          open={open}
          objProps={formData}
          handleClose={handleClose}
        />
      )}
      {imageData !== null && (
        <ProductImage
          open={openImage}
          objProps={imageData}
          handleClose={handleCloseImageModal}
        />
      )}
    </Box>
  );
}
