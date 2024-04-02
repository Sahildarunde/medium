import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";



export const Blogs = () => {

    const {blogs, loading} = useBlogs()

    if(loading){
        return <div>
            <AppBar />
            <div className="">
            <div className="flex justify-center">
                <div className="max-w-prose">
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton /></div>
            </div>
        </div>
        </div>
    }

    
    return(
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div className="max-w-xl">
                    {blogs.map((blog) => <BlogCard
                        id={blog.id}
                        key={blog.id}
                        authorName={blog.author.name || ""}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={"2nd Feb 2024"}
                    />
                    )}

                </div>
            </div>  
        </div>      
    )
}