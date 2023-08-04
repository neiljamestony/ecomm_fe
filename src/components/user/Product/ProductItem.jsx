/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Stack,
  Rating,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ProductItem({
  image,
  title,
  price,
  rating,
  category,
  id,
}) {
  const navigate = useNavigate();
  return (
    <Card
      variant='outlined'
      sx={{ height: 300, cursor: 'pointer' }}
      onClick={() => navigate(`/${category}/${id}`)}
    >
      <CardMedia component='img' height='170' image={image} alt={title} />
      <CardContent>
        <Stack spacing={2}>
          <Box fontSize={13}>{title}</Box>
          <Box fontSize={13}>${price}</Box>
          <Box fontSize={13} display='flex' gap={1}>
            <Rating value={rating.rate} size='small' /> - {rating.count} sold
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
