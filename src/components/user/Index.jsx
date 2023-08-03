import ProductIndex from './Product/Index';
import Category from './Category';
import { Box } from '@mui/material';
export default function Index() {
  return (
    <Box height='110vh'>
      <Category />
      <ProductIndex />
    </Box>
  );
}
