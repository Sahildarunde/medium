import { useParams } from "react-router-dom";
import { AppBar } from "../components/AppBar"
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { Blog as BlogType} from "../hooks";
import { Spinner } from "../components/Spinner";


export const Blog = () => {

    const {id} = useParams();
    const { blog, loading } = useBlog({
        id: id || ""
    });



    if(loading || !blog){
        return <div>
            <AppBar />
            <div className="mt-20">
            <div className="flex justify-center align-middle">
                <Spinner />
            </div>
            </div>
        </div>
    }

    
    return(
        <div>
            <AppBar />
            <FullBlog blog={blog} />
        </div>      
    )
}