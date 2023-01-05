import React, {useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useLocation} from "react-router-dom";
import axios from "axios";


const Write = ()=> {

    const state = useLocation().state
    const [value,setValue] = useState(state?.desc || "");
    const [title,setTitle] = useState(state?.title || "");
    const [tag,setTag] = useState(state?.tag || "");

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            state
                ? await axios.put(`/posts/${state.id}`, {
                    title,desc:value,tag,
                })
                :await axios.post(`/posts/`, {
                    title,desc:value,tag
                })
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="flex justify-center text-center  ">
            <div className="flex navbarWidth  justify-between">
                <div className="flex w-3/4 singleImageWidth mt-6 flex-col mb-4">
                    <div className="flex justify-between mb-4">
                        <input type="text" placeholder="Title" value={title} className="border-2 w-3/4" onChange={e => setTitle(e.target.value)}/>
                        <label htmlFor="file-upload" className="border-2 p-1 cursor-pointer bg-loginTextColor hidden" >Click for add a photo</label>
                        <input id="file-upload" type="file" className="hidden"/>
                    </div>
                    <div className="h-96 mb-10">
                        <ReactQuill className="h-full overflow-scroll" theme="snow" value={value} onChange={setValue} />
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="mt-4 border-2 flex flex-col">
                        <h1 className="font-bold">Tags</h1>
                        <div className="tagsStyle">
                            <input type="radio" name="tag" checked={tag === "daily"} value="daily" id="daily" onChange={e => setTag(e.target.value)}/>
                            <label htmlFor="daily">Daily</label>
                        </div>
                        <div className="tagsStyle">
                            <input type="radio" name="tag" checked={tag === "art"} value="art" id="art" onChange={e => setTag(e.target.value)}/>
                            <label htmlFor="art">Art</label>
                        </div>
                        <div className="tagsStyle">
                            <input type="radio" name="tag" checked={tag === "science"} value="science" id="science" onChange={e => setTag(e.target.value)}/>
                            <label htmlFor="science">Science</label>
                        </div>
                        <div className="tagsStyle">
                            <input type="radio" name="tag" checked={tag === "travel"} value="travel" id="travel" onChange={e => setTag(e.target.value)}/>
                            <label htmlFor="travel">Travel</label>
                        </div>
                        <div className="tagsStyle">
                            <input type="radio" name="tag" checked={tag === "photography"} value="photography" id="photography" onChange={e => setTag(e.target.value)}/>
                            <label htmlFor="photography">Photography</label>
                        </div>
                        <div className="tagsStyle">
                            <input type="radio" name="tag" checked={tag === "health"} value="health" id="health" onChange={e => setTag(e.target.value)}/>
                            <label htmlFor="health">Health</label>
                        </div>
                        <div className="tagsStyle">
                            <input type="radio" name="tag" checked={tag === "food"} value="food" id="food" onChange={e => setTag(e.target.value)}/>
                            <label htmlFor="food">Food</label>
                        </div>
                    </div>
                    <div className="flex justify-center text-center mt-16">
                        <button className="bg-green-300 p-2" onClick={handleClick}>Publish</button>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Write;