import axios from "axios";
import { ChangeEvent, useState } from "react";
import { AppBar } from "../components/AppBar"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    return <div>
        <AppBar />
        <div className="flex justify-center w-full pt-8">    
            <div className="max-w-screen-lg w-full">
                <input onChange={(e) => setTitle(e.target.value)} type="text"  className="outline-none w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block p-2.5 " placeholder="Title" />
                <TextArea onChange={(e) => {
                    setContent(e.target.value)
                }}/>
                <button onClick={async() => {
                    const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    })

                    navigate(`/blog/${res.data.id}`)
                }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                Publish post
            </button>
            </div>
        </div>
    </div>
}

function TextArea({onChange}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return (
        <div className="mt-4">
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="px-4 py-2 bg-white rounded-b-lg">
                    <textarea onChange={onChange} className="w-full px-0 text-sm text-gray-800 bg-white border-0 border-none outline-none select-none" placeholder="Write an article..." required />
                </div>
            </div>
           
        </div>
    );
}
