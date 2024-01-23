import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div style={containerStyle}>
      <label style={labelStyle}>
        Find contacts by name:
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          style={inputStyle}
        />
      </label>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '500px',
  height:'80px',
  margin: '0',
  paddingTop: '20px',
  border: '1px solid gray',
  borderTop: '1px solid gray',
  borderBottom: 'none',
  borderRadius: '10px 10px 0 0',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
};



const labelStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '10px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px',
};

export default Filter;
