import Card from "@/components/reusable/Card";

const Loading = () => {
    return (
        <Card>
            <div className="w-full flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-40 h-8"/>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
                    {Array.from({length:8}).map((a,index) => (
                        <div key={index} className="h-60 bg-[#f2f1f6] dark:bg-[#313131] lg:col-span-1 md:col-span-2 col-span-4 flex flex-col gap-2"/>
                    ))}
                </div>
            </div>
        </Card>
    )
}

export default Loading;