/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import * as React from 'react';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import Modal from '@mui/base/Modal';
import {
  Fade,
  TextField,
  Box,
  Stack,
  Button,
} from '@mui/material';

export default function CustomerModal({ open, objProps, handleClose }) {
  const [status, setStatus] = React.useState(objProps?.status);
  const [formData, setFormData] = React.useState(objProps);

  const handleSubmit = () => {
    const f = { ...formData };
    f.status = status;
    setFormData(f);
    objProps = f;
  };

  React.useEffect(() => {
    setStatus(formData?.status);
  }, [formData]);

  return (
    formData !== null && (
      <div>
        <StyledModal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: StyledBackdrop }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Stack spacing={2} component='form' autoComplete='off'>
                <Box fontFamily='Poppins' fontSize={14}>
                  CUSTOMER MODAL
                </Box>
                <TextField
                  size='small'
                  label='USER ID'
                  value={objProps?.id}
                  inputProps={{
                    style: { fontFamily: 'Poppins', fontSize: 14 },
                  }}
                  disabled
                  fullWidth
                />
                <TextField
                  size='small'
                  label='Full Name'
                  value={objProps?.fullname}
                  inputProps={{
                    style: { fontFamily: 'Poppins', fontSize: 14 },
                  }}
                  fullWidth
                />
                <TextField
                  size='small'
                  label='Email'
                  value={objProps?.email}
                  inputProps={{
                    style: { fontFamily: 'Poppins', fontSize: 14 },
                  }}
                  fullWidth
                />
                <Button
                  fullWidth
                  variant='contained'
                  type='button'
                  onClick={handleSubmit}
                  sx={{ fontFamily: 'Poppins' }}
                >
                  SUBMIT
                </Button>
              </Stack>
            </Box>
          </Fade>
        </StyledModal>
      </div>
    )
  );
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return (
    <Fade in={open}>
      <div ref={ref} {...other} />
    </Fade>
  );
});

Backdrop.propTypes = {
  open: PropTypes.bool,
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  borderRadius: '12px',
  padding: '16px 32px 24px 32px',
  backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  boxShadow: `0px 2px 24px ${
    theme.palette.mode === 'dark' ? '#000' : '#383838'
  }`,
});
