import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSwapi = createAsyncThunk(
  'swapi/fetchSwapi',
  async (params) => {
    const response = await fetch(`https://www.swapi.tech/api/${params}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data.');
    }
    const data = await response.json();
    return data;
  }
);
