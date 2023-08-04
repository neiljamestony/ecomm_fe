import { Box, Card, Container, Stack, Skeleton } from '@mui/material';

export default function ItemPreloader() {
  return (
    <Container maxWidth='lg'>
      <Box margin={5}>
        <Card variant='outlined' sx={{ display: 'flex', height: 500 }}>
          <Box m={5}>
            <Skeleton
              animate='wave'
              variant='rectangular'
              height={420}
              width={400}
            />
          </Box>
          <Box m={5}>
            <Stack gap={5}>
              <Skeleton animate='wave' variant='text' width={500} />
              <Skeleton animate='wave' variant='rectangular' width='40%' />
              <Skeleton animate='wave' variant='rectangular' width='40%' />
              <Skeleton animate='wave' variant='rectangular' width='100%' />
              <Skeleton animate='wave' variant='rectangular' width='70%' />
              <Skeleton animate='wave' variant='rectangular' width='40%' />
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                gap={3}
              >
                <Skeleton animate='wave' variant='rectangular' width='100%' />
                <Skeleton animate='wave' variant='rectangular' width='100%' />
              </Box>
            </Stack>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
