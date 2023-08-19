import { createSlice } from '@reduxjs/toolkit'
export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: []
  },
  reducers: {
    addPost: function(state, action) {
       state.items.push(action.payload);
    },

    deletePost: function(state, action) {
        state.items = state.items.filter(item => item.id != action.payload);
     },

     updatePost: function(state, action) {
      state.items.map(post => {
        if (post.id == action.payload.id) {
          post.title = action.payload.title;
          post.description = action.payload.description;
        }
      })
   }
  },
})

export const { addPost, deletePost, updatePost } = postsSlice.actions

export default postsSlice.reducer