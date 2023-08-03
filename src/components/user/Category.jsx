import { useQuery } from 'react-query';
import { getProducts } from '../../app/utils/util';
import { Card, CardHeader, Box, Skeleton } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setCategory } from '../../redux/reducers/ActionSlice';
const CategoryHeaderPreloader = () => {
  return (
    <Box className='products-container'>
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
        {[1, 2, 3, 4].map((key) => {
          return (
            <Skeleton
              animate='wave'
              height={100}
              width={250}
              variant='rectangular'
              key={key}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default function Category() {
  const { category } = useAppSelector((state) => state.actionState);
  const dispatch = useAppDispatch();
  const {
    isLoading,
    data: productCategories,
    isError,
    failureReason,
  } = useQuery({
    queryKey: ['productData'],
    queryFn: getProducts,
  });

  const ProductCategoriesComponent = () => {
    return (
      <Box className='dashboard-categories'>
        {productCategories?.map((itm, key) => {
          return (
            <Box key={key}>
              <Card
                variant='outlined'
                onClick={() => dispatch(setCategory(itm))}
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
    );
  };

  if (isLoading) return <CategoryHeaderPreloader />;

  if (isError) return `An error has occured ${failureReason}`;

  return <ProductCategoriesComponent />;
}
