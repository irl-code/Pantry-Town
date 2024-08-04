import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const InventoryItem = ({ name, quantity, onAdd, onRemove }) => {
  return (
    <Card
      sx={{
        bgcolor: '#e3f2fd',
        '&:hover': {
          bgcolor: '#bbdefb',
          boxShadow: 6,
        },
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <CardContent>
        <Typography variant="h6" color="#333">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Typography>
        <Typography variant="body1" color="#333">
          Quantity: {quantity}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Remove />}
          onClick={onRemove}
        >
          Remove
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={onAdd}
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
};

export default InventoryItem;