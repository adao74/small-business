import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Box,
  Divider
} from '@mui/material';
import Map from '../components/Map';
import { getCoordinates } from '../redux/actions/mapActions';

const Details = () => {
  const { id } = useParams();
  const [coordinates, setCoordinates] = useState(null);
  const { listings } = useSelector(state => state.listings);
  const listing = listings.find(item => item.id === parseInt(id));

  useEffect(() => {
    const fetchCoordinates = async () => {
      if (listing) {
        const coords = await getCoordinates(listing.address);
        setCoordinates(coords);
      }
    };
    fetchCoordinates();
  }, [listing]);

  if (!listing) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h5">Listing not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              {listing.name}
            </Typography>
            <Divider sx={{ mb: 2 }} />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                About
              </Typography>
              <Typography paragraph>
                {listing.description}
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Operating Hours
              </Typography>
              <Typography>
                {listing.hours}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                Location
              </Typography>
              <Typography>
                {listing.address}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Map coordinates={coordinates} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Details; 