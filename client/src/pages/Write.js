import React, {useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


const Write = ()=> {

    const [value,setValue] = useState("");


    return (
        <div className="flex justify-center text-center  ">
            <div className="flex navbarWidth  justify-between">
                <div className="flex w-3/4 singleImageWidth mt-6 flex-col mb-4">
                    <div className="flex justify-between mb-4">
                        <input type="text" placeholder="Title " className="border-2 w-3/4 "/>
                        <label htmlFor="file-upload" className="border-2 p-1 cursor-pointer bg-loginTextColor" >Click for add a photo</label>
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
                            <input type="radio" name="tag" value="daily" id="daily"/>
                            <label htmlFor="daily">Daily</label>
                        </div>
                        <div className="tagsStyle">
                            <input type="radio" name="tag" value="art" id="art"/>
                            <label htmlFor="art">Art</label>
                        </div>
                        <div className="tagsStyle">
                            <input type="radio" name="tag" value="science" id="science"/>
                            <label htmlFor="science">Science</label>
                        </div>
                        <div className="tagsStyle">
                            <input type="radio" name="tag" value="travel" id="travel"/>
                            <label htmlFor="travel">Travel</label>
                        </div>
                        <div className="tagsStyle">
                            <input type="radio" name="tag" value="photography" id="photography"/>
                            <label htmlFor="photography">Photography</label>
                        </div>
                        <div className="tagsStyle">
                            <input type="radio" name="tag" value="health" id="health"/>
                            <label htmlFor="health">Health</label>
                        </div>
                        <div className="tagsStyle">
                            <input type="radio" name="tag" value="food" id="food"/>
                            <label htmlFor="food">Food</label>
                        </div>
                    </div>
                    <div className="flex justify-center text-center mt-16">
                        <button className="bg-green-300 p-2 ">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Write;