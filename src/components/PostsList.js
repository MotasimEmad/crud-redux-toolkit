import {React, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, updatePost } from '../redux/PostsSlice';

export default function PostsList() {

    const posts = useSelector((state) => state.posts.items);
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState(null);

    const [updateTitle, setUpdateTitle] = useState("");
    const [updateDescription, setUpdateDescription] = useState("");
    return (
        <div>
            {posts.length > 0 ? posts.map(post => 
                <div className="bg-gray-200 my-2">
                    <div className="container px-6 py-10 mx-auto">
                        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                                <p className="text-sm text-blue-500 uppercase">{post.id}</p>
            
                                <a className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline">
                                    {post.title}
                                </a>
            
                                <p className="mt-3 text-sm text-gray-500 md:text-sm">
                                    {post.description}
                                </p>
            
                                <div className="flex items-center">
                                    <button onClick={() => {
                                        dispatch(deletePost(post.id));
                                    }}>Delete</button>

                                    <button className="mx-2" onClick={() => {
                                        setIsEdit(true);
                                        setId(post.id);
                                    }}>Edit</button>
                                </div>

                                {isEdit && id == post.id && (
                                    <>
                                        <input onChange={(e) => {
                                            setUpdateTitle(e.target.value)
                                        }} name="title" placeholder="Post title" />
                                        <input onChange={(e) => {
                                            setUpdateDescription(e.target.value)
                                        }} name="description" placeholder="Post description" />

                                        <button onClick={() => {
                                            dispatch(updatePost({id: post.id, title: updateTitle, description: updateDescription}))
                                            setIsEdit(false);
                                        }}>Update</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : "There is no posts yet !"}
        </div>
    )
}
