import React, { useState, ChangeEvent } from 'react';
import { Typography, Button, Container, TextField, Stack } from '@mui/material';

interface HardwareSetProps {
  usedSet1: number;
  usedSet2: number;
  capacity: number;
}

function HardwareSet(props: HardwareSetProps) {
  const [availability1, setAvailability1] = useState(props.capacity - props.usedSet1);
  const [availability2, setAvailability2] = useState(props.capacity - props.usedSet2);
  const [capacity, setCapacity] = useState(props.capacity);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Check-in
  const handleCheckIn1 = () => {
    const quantityToAdd = parseInt(inputValue, 10);
    if (!isNaN(quantityToAdd) && availability1 + quantityToAdd <= props.capacity) {
      setAvailability1(availability1 + quantityToAdd);
    }
  };

  const handleCheckIn2 = () => {
    const quantityToAdd = parseInt(inputValue, 10);
    if (!isNaN(quantityToAdd) && availability2 + quantityToAdd <= props.capacity) {
      setAvailability2(availability2 + quantityToAdd);
    }
  };

  // Check-out
  const handleCheckOut1 = () => {
    const quantityToAdd = parseInt(inputValue, 10);
    if (!isNaN(quantityToAdd) && availability1 - quantityToAdd >= 0) {
      setAvailability1(availability1 - quantityToAdd);
    }
  };

  const handleCheckOut2 = () => {
    const quantityToAdd = parseInt(inputValue, 10);
    if (!isNaN(quantityToAdd) && availability2 - quantityToAdd >= 0) {
      setAvailability2(availability2 - quantityToAdd);
    }
  };

  return (
    <Container sx={{ display: 'flex', 
                alignItems: 'center',
                padding: '10px',
                flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row'}
     }}>
      <Stack sx={{alignItems: 'center',}}>
          <Typography 
            sx={{
              fontWeight: 'bold'
            }} 
              variant="h6">
            Hardware Set 1
          </Typography>
            <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Stack>
              <Typography>
                Available: {availability1}/{props.capacity}
              </Typography>
              <Typography>
                Checked Out: {props.capacity-availability1}
              </Typography>
            </Stack>
            <Stack>
              <Container>
                <TextField sx={{marginBottom: "0.5rem", marginTop: "0.5rem", borderWidth: '4px'}} id="outlined-basic" label="Enter Qty" variant="outlined" onChange={handleInputChange} />
              </Container>
              <Container sx={{ display: 'flex',
              }}>
                <Button sx={{ height: '49%', bgcolor: '#0F1B4C', marginRight: '0.5rem', "&:hover": {bgcolor: "#7398F7"}}} variant="contained" onClick={handleCheckIn1}>
                  Check In
                </Button>
                <Button sx={{ height: '49%',  bgcolor: '#0F1B4C', "&:hover": {bgcolor: "#7398F7"}}} variant="contained" onClick={handleCheckOut1}>
                  Check Out
                </Button>
              </Container>
            </Stack>
        </Container>
      </Stack>

      <Stack sx={{alignItems: 'center',}}>
          <Typography 
            sx={{
              fontWeight: 'bold'
            }}
            variant="h6">
            Hardware Set 2
          </Typography>
            <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Stack>
              <Typography>
                Available: {availability2}/{props.capacity}
              </Typography>
              <Typography>
                Checked Out: {props.capacity-availability2}
              </Typography>
            </Stack>
            <Stack>
              <Container>
                <TextField sx={{marginBottom: "0.5rem", marginTop: "0.5rem", borderWidth: '4px'}} id="outlined-basic" label="Enter Qty" variant="outlined" onChange={handleInputChange} />
              </Container>
              <Container sx={{ display: 'flex',
              }}>
                <Button sx={{ height: '49%', bgcolor: '#0F1B4C', marginRight: '0.5rem', "&:hover": {bgcolor: "#7398F7"}}} variant="contained" onClick={handleCheckIn2}>
                  Check In
                </Button>
                <Button sx={{ height: '49%',  bgcolor: '#0F1B4C', "&:hover": {bgcolor: "#7398F7"}}} variant="contained" onClick={handleCheckOut2}>
                  Check Out
                </Button>
              </Container>
            </Stack>
        </Container>
      </Stack>
    </Container>
  );
}

export default HardwareSet;
