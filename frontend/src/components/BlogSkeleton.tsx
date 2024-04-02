import { Circle } from "./BlogCard"

export const BlogSkeleton = () => {
    return  <div role="status" className="animate-pulse">
        <div className="border-b border-slate-200 pb-4 p-4 cursor-pointer">
            <div className="flex flex-row">
            <div className="h-2.5 bg-gray-200 rounded-full w-[2548px] mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                <div className="flex justify-center flex-col pl-2">
                    <Circle />
                </div>
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
       
            <span className="sr-only">Loading...</span>
        </div>
}