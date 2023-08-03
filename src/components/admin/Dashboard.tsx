import React from 'react';
import { Grid, Card, CardHeader, Box } from '@mui/material';
import { contentItems } from '../../app/utils/sidebar';

export default function Dashboard() {
  return (
    <Box className='dashboard-container'>
      <Grid container spacing={1}>
        {contentItems
          .filter((itm) => itm.listItemName !== 'Dashboard')
          .map((item, key) => {
            return (
              <Grid item xs={3} key={key}>
                <Card variant='outlined' className='dashboard-card'>
                  <CardHeader
                    subheader={
                      <Box className='subheader'>{item.listItemName}</Box>
                    }
                    avatar={<img src={item.icon} alt='icon-name' height={30} />}
                  />
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}
