import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getProductById } from '../../../app/utils/util';
import {
  Box,
  Card,
  CardMedia,
  Rating,
  Container,
  Stack,
  Button,
} from '@mui/material';
import ItemPreloader from './ItemPreloader';

export default function Item() {
  const params = useParams();
  const { isLoading, data, isError, failureReason } = useQuery({
    queryKey: ['productId', params.id],
    queryFn: (productId) => getProductById(productId),
  });

  if (isLoading) return <ItemPreloader />;

  if (isError) return `An error has occured: ${failureReason}`;

  return (
    <Container maxWidth='lg'>
      <Box margin={5}>
        <Card variant='outlined' sx={{ display: 'flex', height: 500 }}>
          <Box m={5}>
            <CardMedia
              component='img'
              image={data.image}
              sx={{ width: 400 }}
              height='400'
              alt={data.title}
            />
          </Box>
          <Box m={5}>
            <Stack gap={3}>
              <Box fontSize={20} fontWeight='bold'>
                {data.title}
              </Box>
              <Box display='flex' gap={1}>
                <Rating value={data.rating.rate} readOnly />
                <Box fontSize={15}>- rating {data.rating.rate}</Box>
              </Box>
              <Box display='flex' gap={1}>
                <Box fontSize={18}>${data.price}</Box>
              </Box>
              <Box textAlign='justify' fontSize={15} fontFamily='Poppins'>
                - {data.description}
              </Box>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                gap={3}
              >
                <Button variant='outlined' fullWidth>
                  ADD TO CART
                </Button>
                <Button variant='contained' fullWidth>
                  BUY NOW
                </Button>
              </Box>
            </Stack>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
