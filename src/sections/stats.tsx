import Counter from "@/components/ui/counter";

function StatsSection() {
    return (
        <section className="flex items-center justify-center min-h-[40dvh] px-4">
            <div className="flex items-center justify-between max-w-5xl w-full">
                <div className="flex justify-end items-end">
                    <Counter className="text-8xl text-[#0090ff] font-bold" value={2} />
                    <h1 className="text-6xl text-[#0090ff] font-bold">+</h1>
                    <p className="text-lg text-gray-400 ml-2 mb-1">Years of Experience</p>
                </div>
                
                <div className="flex justify-end items-end">
                    <Counter className="text-8xl text-[#0090ff] font-bold" value={20} />
                    <h1 className="text-6xl text-[#0090ff] font-bold">+</h1>
                    <p className="text-lg text-gray-400 ml-2 mb-1">Projects Completed</p>
                </div>
            </div>
        </section>
    )
}

export default StatsSection;