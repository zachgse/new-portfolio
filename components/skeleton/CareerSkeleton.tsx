const CareerSkeleton = () => {
    return  <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-40 h-8"/>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {Array.from({length:4}).map((a,index) => (
                    <div key={index}
                        className="bg-[#f2f1f6] dark:bg-[#313131] md:col-span-1 col-span-2 h-32 bg-gray-100 rounded-lg flex flex-col gap-8 p-4">
                    </div>
                    ))}
                </div>  
            </div>
}

export default CareerSkeleton;