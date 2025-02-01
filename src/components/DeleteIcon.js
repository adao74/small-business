import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch } from 'react-redux';
import { DELETE_LISTING } from '../redux/actions/types';

const DeleteIcon = ({ listingId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      dispatch({ type: DELETE_LISTING, payload: listingId });
    }
  };

  return (
    <Tooltip title="Delete listing">
      <IconButton onClick={handleDelete} color="error">
        <DeleteOutlineIcon />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteIcon; 