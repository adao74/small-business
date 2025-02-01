import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';

const LoginBar = () => {
  const { isAuthenticated, username } = useSelector(state => state.user);

  if (!isAuthenticated) return null;

  return (
    <Paper 
      sx={{ 
        padding: 1, 
        backgroundColor: '#e3f2fd',
        textAlign: 'center'
      }}
    >
      <Typography>
        Logged in as: {username}
      </Typography>
    </Paper>
  );
};

export default LoginBar; 