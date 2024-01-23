import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const API_URL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.get(`${API_URL}/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${API_URL}/contacts`, contactData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId) => {
    try {
      const token = localStorage.getItem('token');

      await axios.delete(`${API_URL}/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return contactId;
    } catch (error) {
      throw error;
    }
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      });
  },
});

export default contactsSlice.reducer;
