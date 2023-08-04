/* eslint-disable react/prop-types */
import { Card } from '@mui/material';
export default function OutlinedECommCard({ children, height, width }) {
  return (
    <Card variant='outlined' sx={{ height: height, width: width }}>
      {children}
    </Card>
  );
}
