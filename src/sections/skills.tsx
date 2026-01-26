import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { useEffect } from "react"
// import { fetchSkillData } from "@/store/skill"

const SkillCard = ({
    skill: name,
    imageUrl: imageUrl,
}: {
    skill: string
    imageUrl: string
}) => {
    return (
        <figure
            className={cn(
                "cursor-pointer overflow-hidden m-2 sm:m-4",
            )}
        >
            <Tooltip>
                <TooltipTrigger>
                    <img
                        src={imageUrl}
                        alt={name}
                        className="h-12 sm:h-16 rounded-lg object-cover"
                        draggable={false}
                        onDragStart={(e) => e.preventDefault()}
                    />
                </TooltipTrigger>
                <TooltipContent>
                    <p className="text-xs sm:text-sm">{name}</p>
                </TooltipContent>
            </Tooltip>
        </figure>
    )
}

export function SkillSection() {
    const dispatch = useAppDispatch();
    const { data } = useAppSelector((state) => state.skill);

    useEffect(() => {
        // dispatch(fetchSkillData());
    }, [dispatch]);

    const firstRow = data.slice(0, Math.ceil(data.length / 2));
    const secondRow = data.slice(Math.ceil(data.length / 2));

    return (
        <section id="skills" className="flex flex-col items-center justify-center min-h-[50dvh] px-4 py-8 text-center mb-8 sm:mb-20 mask-[linear-gradient(to_right,transparent,white_30%,white_70%,transparent)]">
            <motion.div 
                className="flex flex-col mb-8 sm:mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-black dark:text-white">Technical Skills</h2>
                <p className="max-w-3xl text-sm sm:text-base text-justify sm:text-center text-gray-500 dark:text-gray-400">
                    The technologies I use to bring ideas to life.
                </p>
            </motion.div>

            <motion.div 
                className="relative flex w-full flex-col items-center justify-center overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.8 }}
            >
                <Marquee className="[--duration:20s] sm:[--duration:15s]">
                    {firstRow.map((data) => (
                        <SkillCard key={data.id} skill={data.name} imageUrl={data.imageUrl} />
                    ))}
                </Marquee>
                <Marquee reverse className="[--duration:20s] sm:[--duration:15s] ">
                    {secondRow.map((data) => (
                        <SkillCard key={data.id} skill={data.name} imageUrl={data.imageUrl} />
                    ))}
                </Marquee>
                {/* <div className="from-background pointer-events-none absolute inset-y-0 -left-1 w-1/3 sm:w-1/4 bg-linear-to-r"></div>
                <div className="from-background pointer-events-none absolute inset-y-0 -right-1 w-1/3 sm:w-1/4 bg-linear-to-l"></div> */}
            </motion.div>
        </section>
    )
}