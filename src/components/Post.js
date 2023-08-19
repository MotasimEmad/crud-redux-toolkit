import {React, useState} from 'react'
import { addPost } from '../redux/PostsSlice';
import { useDispatch, useSelector } from 'react-redux';
import PostsList from './PostsList';

export default function Post() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.items);
  return (
    <div className="mx-16 my-6 flex flex-col">
        <div className="flex flex-col">
            <h1 class="my-2 text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Create a new post</h1>
            <input value={title} onChange={(e) => {
                setTitle(e.target.value)
            }} className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12" name="title" type="text" placeholder="Post title" required />
            <textarea value={description} onChange={(e => {
                setDescription(e.target.value)
            })} className="mt-4 text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12" name="description" placeholder="Post description" rows="8" required></textarea>

            <button onClick={() => {
               dispatch(addPost({id: posts.length + 1, title, description}));
               setTitle("");
               setDescription("");
            }} className="mt-4 border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Create</button>
        </div>

        <div className="posts">
            <PostsList />
        </div>
    </div>
  )
}
