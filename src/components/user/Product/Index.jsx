import ProductItem from './ProductItem';
import { useAppSelector } from '../../../redux/store';
import { useQuery } from 'react-query';
import { getCategoryProducts } from '../../../app/utils/util';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Stack,
  Skeleton,
} from '@mui/material';

const ProductItemPreloader = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' gap={3}>
      {[1, 2, 3].map((key) => {
        return (
          <Card key={key} variant='outlined'>
            <CardContent>
              <Stack spacing={2}>
                <Skeleton
                  animate='wave'
                  variant='rectangular'
                  height={200}
                  width={300}
                />
                <Skeleton animate='wave' variant='rectangular' width='100%' />
                <Skeleton animate='wave' variant='rectangular' width='50%' />
              </Stack>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};
export default function Index() {
  const { category } = useAppSelector((state) => state.actionState);
  const {
    isLoading,
    data: categoryProducts,
    isError: isErrorCategoryProducts,
    failureReason,
  } = useQuery({
    queryKey: ['categoryProducts', category],
    queryFn: (category) => getCategoryProducts(category),
  });

  if (isErrorCategoryProducts) return `An error has occured ${failureReason}`;

  if (isLoading) return <ProductItemPreloader />;

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={2}>
        {categoryProducts.map((item) => {
          return (
            <Grid item lg={4} key={item.id}>
              <ProductItem {...item} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
