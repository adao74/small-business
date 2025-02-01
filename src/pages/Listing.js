import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
  Button
} from '@mui/material';
import DeleteIcon from '../components/DeleteIcon';

const Listing = () => {
  const navigate = useNavigate();
  const { listings } = useSelector(state => state.listings);
  const { isAuthenticated } = useSelector(state => state.user);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Local Business Listings
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Business Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Operating Hours</TableCell>
              <TableCell>Actions</TableCell>
              {isAuthenticated && <TableCell>Delete</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {listings.map((listing) => (
              <TableRow key={listing.id}>
                <TableCell>{listing.name}</TableCell>
                <TableCell>{listing.description}</TableCell>
                <TableCell>{listing.address}</TableCell>
                <TableCell>{listing.hours}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => navigate(`/details/${listing.id}`)}
                  >
                    View Details
                  </Button>
                </TableCell>
                {isAuthenticated && (
                  <TableCell>
                    <DeleteIcon listingId={listing.id} />
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Listing; 