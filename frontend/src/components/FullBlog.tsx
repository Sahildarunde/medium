import { Blog } from "../hooks"
import { Avatar } from "./BlogCard"



export const FullBlog = ({ blog } : {blog: Blog}) => {
    return <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl">
                <div className="col-span-8 p-6"> 
                    <div className="text-5xl font-extrabold pt-6">{blog.title}</div>
                    <div className="text-slate-400 pt-2 font-light"> Posted on 1st December 2023</div>
                    <div className=" pt-6">{blog.content}</div>
                </div>
                <div className="col-span-4 pt-28 pl-5">
                    <div className="text-2xl text-slate-700 ">
                        Author
                    </div>
                    <div className="flex justify-center pt-6">
                        <div className="pr-6 flex flex-col justify-center">
                            <Avatar name={blog.author.name} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name}
                            </div>
                            <div className="text-slate-700 text-sm pt-2">
                                Master of mirth, purveyor of puns, and the funniest person in the kingdom
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    </div>
}