import React, {useContext, useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../context/authContext";
const Single = ()=> {

    const [post,setPost] = useState({});

    const postId = useLocation().pathname.split("/")[2];

    const {currentUser} = useContext(AuthContext)

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/${postId}`);
                setPost(res.data);
                console.log(res.data)
            } catch (err) {
                console.log("sa"+err);
            }
        }
        fetchData();
    },[postId])

    const data = [
            {
                id:1,
                title:"lorem ipsum dolor",
                desc:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
                tag: "daily",
                img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
            },
            {
                id:2,
                title:"lorem ipsum dolor",
                desc:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
                tag: "daily",
                img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
            },
            {
                id:3,
                title:"lorem ipsum dolor",
                desc:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
                tag: "daily",
                img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
            },
            {
                id:4,
                title:"lorem ipsum dolor",
                desc:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
                tag: "daily",
                img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
            },
            {
                id:5,
                title:"lorem ipsum dolor",
                desc:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
                tag: "daily",
                img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
            },
            {
                id:6,
                title:"lorem ipsum dolor",
                desc:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
                tag: "daily",
                img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
            },
            {
                id:7,
                title:"lorem ipsum dolor",
                desc:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
                tag: "daily",
                img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
            },
            {
                id:8,
                title:"lorem ipsum dolor",
                desc:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
                tag: "daily",
                img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
            },
            {
                id:9,
                title:"lorem ipsum dolor",
                desc:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
                tag: "daily",
                img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
            },
            {
                id:10,
                title:"lorem ipsum dolor",
                desc:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
                tag: "daily",
                img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
            }
        ]

    return (
        <div className="flex justify-center text-center  ">
            <div className="flex navbarWidth  justify-between">
                <div className="w-3/4 singleImageWidth mt-6 ">
                    <img src={post?.img} alt="" />
                    <div className="mt-3 flex text-center justify-between">
                        <div className="flex mt-4">
                            <img className="w-16 h-16 rounded-full" src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg" alt="" />
                            <div className="mt-2 ml-3 ">
                                <span className="flex font-bold">{post.username}</span>
                                <p>Posted 3 days ago</p>
                            </div>
                        </div>
                        <div className="flex mt-8">
                            {currentUser.username === post.username  &&
                                <>
                                    <Link to={`/write?edit=2`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4 text-green-700">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"/>
                                        </svg>
                                    </Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </>
                            }
                        </div>
                    </div>
                    <h1 className="flex font-bold my-8">{post.title}</h1>
                    <div className="tracking-wider text-justify"> {post.desc} </div>
                </div>
                <div className="w-1/4">
                    <div className="mt-4">
                        {
                            data.map(post => (
                                <div className=" border-2 border-loginTextColor rounded-xl mt-6 mb-3 p-6" key={post.id} >
                                    <div className="flex flex-col justify-start text-center">
                                        <div className="flex justify-between text-center">
                                            <Link className="font-bold mb-1" to={`/post/${post.id}`}>{post.title}</Link>
                                            <Link className="rounded-3xl px-3 bg-firstBackground flex justify-center text-center" to={`/?category=${post.tag}`}>{post.tag}</Link>
                                        </div>
                                        <p className="h-auto max-h-60 overflow-hidden text-justify leading-6 mt-4">{post.desc}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Single;