// Import necessary libraries and components
import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Paper, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ReCAPTCHA from 'react-google-recaptcha';
import backgroundImage from '../assets/images/services/background.jpeg'; // Add your image path here

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    console.log('ReCAPTCHA Token:', token); // Debugging purpose
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (recaptchaToken) {
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Recaptcha Token:', recaptchaToken);
      // Perform login logic here
    } else {
      alert('Please complete the reCAPTCHA verification.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        p: { xs: 2, md: 6 }, // Padding adjustment for small and medium devices
      }}
    >
      <Container maxWidth="xs" sx={{ width: { xs: '100%', sm: '80%', md: '60%', lg: '40%' } }}>
        <Paper
          elevation={6}
          sx={{
            padding: { xs: 2, sm: 4 },
            borderRadius: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            mt: { xs: 2, md: 0 }, // Margin-top adjustment for small screens
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
          </Box>
          <Typography variant="h5" align="center" gutterBottom>
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Box sx={{ mt: 2 }}>
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // Make sure to use your site key here
                onChange={handleRecaptchaChange}
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
          <Typography variant="body2" align="center" color="text.secondary">
            Don't have an account? Sign up
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default LoginPage;
