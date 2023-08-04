import {
  Container,
  Box,
  CardHeader,
  CardContent,
  Stack,
  TextField,
} from '@mui/material';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '../../assets/img/shopping-cart.png';
import ECommButton from '../styled-components/Button';
import OutlinedCard from '../styled-components/OutlinedCard';

export default function Register() {
  const inputRef = useRef('');

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
                Sign Up
              </Box>
            }
          />
          <CardContent>
            <Stack autoComplete='off' component='form' spacing={2}>
              <TextField
                name='email'
                placeholder='Email'
                margin='dense'
                fontSize={15}
                fontFamily='Poppins'
                ref={inputRef}
                inputProps={{
                  style: { fontFamily: 'Poppins', fontSize: 15 },
                }}
              />
              <TextField
                name='name'
                placeholder='Full Name'
                margin='dense'
                fontSize={15}
                fontFamily='Poppins'
                ref={inputRef}
                inputProps={{
                  style: { fontFamily: 'Poppins', fontSize: 15 },
                }}
              />
              <TextField
                name='password'
                placeholder='Password'
                margin='dense'
                fontSize={15}
                fontFamily='Poppins'
                ref={inputRef}
                inputProps={{
                  style: { fontFamily: 'Poppins', fontSize: 15 },
                }}
              />
              <TextField
                name='phone'
                placeholder='Phone Number'
                margin='dense'
                fontSize={15}
                fontFamily='Poppins'
                ref={inputRef}
                inputProps={{
                  style: { fontFamily: 'Poppins', fontSize: 15 },
                }}
              />
              <ECommButton disabled>SUBMIT</ECommButton>
            </Stack>
            <Box marginTop={4} textAlign='center' fontSize={14}>
              {`Already have an account ? `} <Link to='/login'>Login here</Link>
            </Box>
          </CardContent>
        </OutlinedCard>
      </Box>
    </Container>
  );
}
