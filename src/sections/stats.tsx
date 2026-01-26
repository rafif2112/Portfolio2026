import Counter from "@/components/ui/counter";

function StatsSection() {
    return (
        <section className="flex items-center justify-center min-h-[40dvh] px-4 py-8">
            <div className="flex flex-row items-center justify-between gap-8 md:gap-4 max-w-5xl w-full">
                <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center sm:items-end gap-2 sm:gap-0 w-full sm:w-auto">
                    <div className="flex flex-row items-end gap-2">
                        <Counter className="text-6xl sm:text-8xl text-black dark:text-[#0090ff] font-bold" value={2} />
                        <h1 className="text-4xl sm:text-6xl text-black dark:text-[#0090ff] font-bold">+</h1>
                    </div>  
                    <p className="text-sm sm:text-lg text-gray-500 dark:text-gray-400 sm:ml-2 sm:mb-1">Years of Experience</p>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center sm:items-end gap-2 sm:gap-0 w-full sm:w-auto">
                    <div className="flex flex-row items-end gap-2">
                        <Counter className="text-6xl sm:text-8xl text-black dark:text-[#0090ff] font-bold" value={20} />
                        <h1 className="text-4xl sm:text-6xl text-black dark:text-[#0090ff] font-bold">+</h1>
                    </div>
                    <p className="text-sm sm:text-lg text-gray-500 dark:text-gray-400 sm:ml-2 sm:mb-1">Projects Completed</p>
                </div>
            </div>
        </section>
    )
}

export default StatsSection;