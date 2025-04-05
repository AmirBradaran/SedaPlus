import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import PropTypes from 'prop-types';

const ColorSelector = ({ sizes, sizeColors, selectedSize, onSizeChange }) => {
  return (
    <ToggleButtonGroup
      value={selectedSize}
      exclusive
      onChange={onSizeChange}
      sx={{ flexWrap: 'wrap', gap: 1 }}
    >
      {sizes.map((size) => (
        <ToggleButton
          key={size}
          value={size}
          sx={{
            width: 100,
            height: 48,
            '&.Mui-selected': {
              backgroundColor: sizeColors[size] || 'primary.main',
              color: 'primary.contrastText',
            },
          }}
        >
          {size}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

ColorSelector.propTypes = {
  sizes: PropTypes.array.isRequired,
  sizeColors: PropTypes.object.isRequired,
  selectedSize: PropTypes.string.isRequired,
  onSizeChange: PropTypes.func.isRequired,
};

export default ColorSelector;