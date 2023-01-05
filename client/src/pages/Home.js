import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import axios from "axios";

const Home = ()=> {

    const [posts,setPosts] = useState([]);

    const cat = useLocation().search;

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts${cat}`)
                setPosts(res.data)
            } catch (err) {
                console.log(+err)
            }
        }
        fetchData();
    },[cat])

    const handleTags = [
        {
            tag:"Daily",
            count:4,
        },
        {
            tag:"Travel",
            count:3,
        },
        {
            tag:"Technology",
            count:2,
        },
        {
            tag:"Food",
            count:2,
        },
        {
            tag:"Science",
            count:1,
        },
    ]

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html,"text/html")
        return doc.body.textContent
    }


    return (
        <div className="flex justify-center text-center  ">
            <div className="flex navbarWidth  justify-between">
                <div className=" w-3/4 text-center justify-center">
                    {
                        posts.map((post) => (
                            <div className="border-2 border-loginTextColor rounded-xl mt-6 mb-3 p-6" key={post.id} >
                                <div className="flex flex-col justify-start text-center">
                                    <div className="flex justify-between text-center">
                                        <Link className="font-bold mb-1" to={`/post/${post.id}`}>{post.title}</Link>
                                        <Link className="rounded-3xl px-3 bg-firstBackground flex justify-center text-center" to={`/?category=${post.tag}`}>{post.tag}</Link>
                                    </div>
                                    <p className="text-justify leading-6 mt-4">{getText(post.desc)}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-1/4">
                    <div className="mt-4 ml-8">
                        <div className=" p-7 border-red-300">
                            <h1 className="flex">Most written tags</h1>
                            <div className="tags">
                                {
                                    handleTags.map(item => (
                                        <Link to={`/?tag=${item.tag.toLowerCase()}`} key={item.tag}>
                                            <div className="flex justify-between mt-4 border-b-2 border-red-300">
                                                <h1 className="">{item.tag}</h1>
                                                <p>{item.count}</p>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 ml-8">
                        <div className=" p-7 border-red-300">
                            <h1 className="flex">Most popular authors</h1>
                            <div className="tags">
                                {
                                    handleTags.map(item => (
                                        <Link to={`/?tag=${item.tag.toLowerCase()}`} key={item.tag}>
                                            <div className="flex justify-between mt-4 border-b-2 border-red-300">
                                                <h1 className="">{item.tag}</h1>
                                                <p>{item.count}</p>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Home;