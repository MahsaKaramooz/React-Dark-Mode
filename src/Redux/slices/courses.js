import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCoursesStatus",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:9000/courses");
      const courses = await res.json();
      return courses;
    } catch (err) {
      return rejectWithValue("دریافت اطلاعات با خطا مواجه شد!");
    }
  }
);
export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    data: [],
    loading: false,
    errorMessage: null,
  },
  reducers: {
    // getCourses: (state, action) => {
    //   //code
    // },
    // getCourseById: (state, action) => {
    //   //code
    // },
    // deleteCourseById: (state, action) => {
    //   //code
    // },
    // editCourseById: (state, action) => {
    //   //code
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCourses.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCourses.rejected, (state, action) => {
      state.errorMessage = action.payload;

      state.loading = false;
    });
  },
});

export const { getCourses, getCourseById, deleteCourseById, editCourseById } =
  coursesSlice.actions;
export default coursesSlice.reducer;
