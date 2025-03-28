import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProjects } from '@projects/projectAPI';

const initialState = {
  items: [],
  loading: true,
  error: null
};

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (_, thunkAPI) => {
    try {
      return await getProjects();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    clearProjects: () => initialState,
    setProjects: (_, action) => action.payload,
    updateProjects: (state, action) => {
      let updatedProjects = state.items.map(
        p => { return p.id === action.payload.id ? action.payload : p; });
      state.items = updatedProjects;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchProjects.rejected, (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    });
  }
});

export const { clearProjects, setProjects, updateProjects } = projectsSlice.actions;
export default projectsSlice.reducer;