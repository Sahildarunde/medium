import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const AppBar = () => {
    return <div className="flex justify-between px-10 border-b py-4">
        <Link to={"/blogs"}>
            <div className="flex flex-col justify-center font-bold">
                Medium
            </div>
        </Link>
        <div>
        <div className="flex flex-row gap-4">
            <Link to={'/publish'}>
            <button type="button" className=" focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-3 py-1">New</button>
            </Link>
            <Avatar  name="Sahil" />
        </div>
        </div>
    </div>
}