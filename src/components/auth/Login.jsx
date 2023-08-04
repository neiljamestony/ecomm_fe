import {
  Container,
  Box,
  CardHeader,
  CardContent,
  Stack,
  TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ECommButton from '../styled-components/Button';
import OutlinedCard from '../styled-components/OutlinedCard';
import ShoppingCartIcon from '../../assets/img/shopping-cart.png';

export default function Login() {
  return (
    <Container maxWidth='lg'>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        gap={2}
        placeItems='center'
        margin={5}
      >
        <Box
          height={500}
          width={500}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Stack spacing={3}>
            <img src={ShoppingCartIcon} alt='shopping-cart' height={400} />
            <Box
              fontSize={30}
              fontFamily='Poppins'
              color='#4287f5'
              fontWeight='bolder'
            >
              WELCOME TO E-COMM!!
            </Box>
          </Stack>
        </Box>
        <OutlinedCard height={500} width={500}>
          <CardHeader
            title={
              <Box fontSize={24} fontFamily='Poppins'>
                Sign In
              </Box>
            }
          />
          <CardContent>
            <Stack autoComplete='off' component='form' spacing={3}>
              <TextField
                name='email'
                placeholder='Email'
                margin='dense'
                inputProps={{
                  style: { fontFamily: 'Poppins', fontSize: 15 },
                }}
              />
              <TextField
                name='password'
                placeholder='Password'
                margin='dense'
                inputProps={{
                  style: { fontFamily: 'Poppins', fontSize: 15 },
                }}
              />
              <ECommButton>SUBMIT</ECommButton>
            </Stack>
            <Box marginTop={20} textAlign='center' fontSize={14}>
              {`Don't have an account ? `}{' '}
              <Link to='/register'>Register here</Link>
            </Box>
          </CardContent>
        </OutlinedCard>
      </Box>
    </Container>
  );
}
