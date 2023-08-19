import { configureStore } from '@reduxjs/toolkit'
import PostsSlice from './PostsSlice'

export const store = configureStore({
  reducer: {
    posts: PostsSlice
  },
})