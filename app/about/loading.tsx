import Card from "@/components/reusable/Card";

const Loading = async() => {
    return (
    <div className="flex lg:flex-row flex-col gap-8">
        <div className="flex flex-col lg:w-2/3 gap-4"> 
            <Card className="border-[#f2f1f6] h-60">          
                <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-full h-full"/>
            </Card>
            <Card className="border-[#f2f1f6] h-40">          
                <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-full h-full"/>
            </Card>  
            <Card>
                <div className="flex flex-col gap-3">
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
            </Card>
        </div>
        <div className="flex flex-col gap-4 lg:w-1/3">
            <Card>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-40 h-8"/>
                    </div>
                    <div className="flex flex-1 gap-4">
                        <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-16 h-16"/>
                        <div className="flex flex-col gap-1">
                            <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-32 h-4"/>
                            <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-24 h-4"/>
                            <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-12 h-4"/>
                        </div>
                    </div> 
                </div>
            </Card>
            <Card>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-40 h-8"/>
                    </div>
                    <div className="flex flex-1 gap-4">
                        <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-16 h-16"/>
                        <div className="flex flex-col gap-1">
                            <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-32 h-4"/>
                            <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-24 h-4"/>
                            <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-12 h-4"/>
                        </div>
                    </div> 
                </div>
            </Card>
            <Card>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-40 h-8"/>
                    </div>
                    <div className="grid grid-rows-2 gap-2">
                        <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-48 h-8"/>
                        <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-full h-8"/>
                    </div>  
                </div>
            </Card>
        </div>
    </div>
    )
}

export default Loading;