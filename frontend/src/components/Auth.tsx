import { SignupInput } from "@sahildarunde/medium-common";
import axios from "axios";
import { ChangeEvent,  useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config";

export const Auth = ({type}: {type: "Signup" | "Signin"}) => {
    const navigate = useNavigate();
    const [postInput, setPostInput] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });

    async function sendRequest() {
        try {
            const endpoint = type === "Signup" ? "signup" : "signin"; 
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${endpoint}`, postInput); 
            const jwt = response.data.jwt; 
            localStorage.setItem("token", `Bearer ${jwt}`);
            navigate("/blogs");
        } catch (error) {
            // Handle error
        }
    }
    
    return (
        <div className=" h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                       {type === "Signup" ?  "Create an account" : "Login your account"}
                    </div>
                    <div className="text-slate-400">
                        {type === "Signup" ? "Already have an account?" : "Dont have account?"} <Link className="pl-2 underline" to={type==="Signup" ? "/signin" : "/signup"}>{type === "Signup" ? "Login" : "Sign Up"}</Link>
                    </div>
                </div>
                <div>
                {type === "Signup" ? <LabelledInput label="Name" placeholder="John Doe" onChange={(e) => {
                    setPostInput({
                        ...postInput,
                        name: e.target.value
                    })
                }} /> : null}
                
                <LabelledInput label="Username" placeholder="Johndoe@abc.com" onChange={(e) => {
                    setPostInput({
                        ...postInput,
                        email: e.target.value
                    })
                }} />
                
                <LabelledInput type={"Password"} label="Password" placeholder="Johndoe" onChange={(e) => {
                    setPostInput({
                        ...postInput,
                        password: e.target.value
                    })
                }} />
                <button onClick={sendRequest} type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "Signup" ? "Sign up" : "Sign In"}</button>

                </div>
                </div>
            </div>
        </div>
    )
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string
}

function LabelledInput({ label, placeholder, onChange, type}: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 mt-6 text-sm font-semibold  text-black ">{label}</label>
            <input type={type || "text"} onChange={onChange} className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
    )
}