const AboutSkeleton = () => {
    return  <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-40 h-8"/>
                </div>
                <div className="grid grid-rows-1 gap-4">
                    {Array.from({length:4}).map((a,index) => (
                    <div key={index} className="w-full flex gap-4"> 
                        <div className="flex flex-1 gap-4">
                            <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-16 h-16"/>
                            <div className="flex flex-col gap-1">
                                <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-32 h-4"/>
                                <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-24 h-4"/>
                                <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-12 h-4"/>
                            </div>
                        </div>
                        <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg ml-auto w-28 h-4"/>
                    </div>
                    ))}
                </div> 
            </div>
}

export default AboutSkeleton;