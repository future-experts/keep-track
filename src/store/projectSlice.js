import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProject } from '@projects/projectAPI';

const initialState = {
  details: {},
  loading: true,
  error: null
};

export const fetchProject = createAsyncThunk(
  'projects/fetchProjects',
  async (id, thunkAPI) => {
    try {
      return await getProject(id);
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    clearProject: () => initialState,
    setProject: (_, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProject.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProject.fulfilled, (state, action) => {
      state.details = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchProject.rejected, (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    });
  }
});

export const { clearProject, setProject } = projectSlice.actions;
export default projectSlice.reducer;