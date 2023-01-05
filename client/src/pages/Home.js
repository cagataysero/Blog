import React from "react";
import {Link} from "react-router-dom";

const Home = ()=> {

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
        },

    ]
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



    return (
        <div className="flex justify-center text-center  ">
            <div className="flex navbarWidth  justify-between">
                <div className=" w-3/4 text-center justify-center">
                    {
                        data.map(post => (
                            <div className="border-2 border-loginTextColor rounded-xl mt-6 mb-3 p-6" key={post.id} >
                                <div className="flex flex-col justify-start text-center">
                                    <div className="flex justify-between text-center">
                                        <Link className="font-bold mb-1" to={`/post/${post.id}`}>{post.title}</Link>
                                        <Link className="rounded-3xl px-3 bg-firstBackground flex justify-center text-center" to={`/?category=${post.tag}`}>{post.tag}</Link>
                                    </div>
                                    <p className="text-justify leading-6 mt-4">{post.desc}</p>
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
                                        <Link to={`/?category=${item.tag.toLowerCase()}`}>
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
                            <h1 className="flex">Most written tags</h1>
                            <div className="tags">
                                {
                                    handleTags.map(item => (
                                        <Link to={`/?category=${item.tag.toLowerCase()}`}>
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