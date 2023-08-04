/* eslint-disable react/prop-types */
import { Button } from '@mui/material';

export default function ECommButton({ children }) {
  return (
    <Button variant='contained' sx={{ fontFamily: 'Poppins' }}>
      {children}
    </Button>
  );
}
