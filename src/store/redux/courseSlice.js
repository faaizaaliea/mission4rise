import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} from "../../services/api/courseService";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const data = await getCourses();
    return data;
  },
);

export const createCourse = createAsyncThunk(
  "courses/createCourse",
  async (courseData) => {
    const data = await addCourse(courseData);
    return data;
  },
);

export const editCourse = createAsyncThunk(
  "courses/editCourse",
  async ({ id, courseData }) => {
    const data = await updateCourse(id, courseData);
    return data;
  },
);

export const removeCourse = createAsyncThunk(
  "courses/removeCourse",
  async (id) => {
    await deleteCourse(id);
    return id;
  },
);

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(editCourse.fulfilled, (state, action) => {
        const index = state.list.findIndex((c) => c.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(removeCourse.fulfilled, (state, action) => {
        state.list = state.list.filter((c) => c.id !== action.payload);
      });
  },
});

export default courseSlice.reducer;
