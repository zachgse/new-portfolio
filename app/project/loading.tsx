import Card from "@/components/reusable/Card";

const Loading = () => {
    return (
        <Card>
            <div className="w-full flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-40 h-8"/>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
                    {Array.from({length:5}).map((a,index) => (
                        <div key={index} className="h-20 col-span-1 bg-[#f2f1f6] dark:bg-[#313131] rounded-lg flex items-start gap-4 p-4"/>
                    ))}
                </div>
            </div>
        </Card>
    )
}

export default Loading;