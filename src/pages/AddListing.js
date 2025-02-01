import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Grid
} from '@mui/material';
import { ADD_LISTING } from '../redux/actions/types';
import Map from '../components/Map';
import { getCoordinates } from '../redux/actions/mapActions';

const AddListing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [coordinates, setCoordinates] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    hours: ''
  });

  useEffect(() => {
    const updateMapCoordinates = async () => {
      if (formData.address.length > 5) {
        const coords = await getCoordinates(formData.address);
        setCoordinates(coords);
      }
    };

    const timeoutId = setTimeout(updateMapCoordinates, 1000);
    return () => clearTimeout(timeoutId);
  }, [formData.address]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newListing = {
      id: Date.now(), // Simple way to generate unique ID
      ...formData
    };
    dispatch({ type: ADD_LISTING, payload: newListing });
    navigate('/');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Add New Listing
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Business Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                margin="normal"
              />
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                margin="normal"
                multiline
                rows={4}
              />
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                margin="normal"
              />
              <TextField
                fullWidth
                label="Operating Hours"
                name="hours"
                value={formData.hours}
                onChange={handleChange}
                required
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3 }}
              >
                Add Listing
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Map coordinates={coordinates} />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AddListing; 