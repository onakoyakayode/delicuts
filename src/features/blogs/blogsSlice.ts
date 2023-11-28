import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

interface Blog {
  id: number;
  title: string;
  date: string;
  link: string;
  image: string;
  content: string;
  icons: string;
  calender: string;
  message: string;
}

interface BlogsState {
  blogs: Blog[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BlogsState = {
  blogs: [],
  status: "idle",
  error: null,
};

export const fetchBlogItems = createAsyncThunk("blogs/fetchBlogs", async () => {
  try {
    const response = await fetch("/data/blogs.json");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("An error occurred while fetching items.");
  }
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setName: (
      state,
      action: PayloadAction<{ blogId: number; title: string }>
    ) => {
      const { blogId, title } = action.payload;
      const blog = state.blogs.find((blog) => blog.id === blogId);
      if (blog) {
        blog.title = title;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blogs = action.payload;
      })
      .addCase(fetchBlogItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export const { setName } = blogsSlice.actions;

export const selectBlogs = (state: RootState) => state.blogs.blogs;
export const selectBlogsStatus = (state: RootState) => state.blogs.status;
export const selectBlogsError = (state: RootState) => state.blogs.error;

export default blogsSlice.reducer;
