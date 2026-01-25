import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion } from "framer-motion"

const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Git",
    "Docker",
    "AWS",
]
// Placeholder logo image for "Dan" (temporary online)
const danLogo = "https://ui-avatars.com/api/?name=Dan&background=0D8ABC&color=fff&size=128";

const firstRow = skills.slice(0, skills.length / 2)
const secondRow = skills.slice(skills.length / 2)

const SkillCard = ({
    skill: name,
}: {
    skill: string
}) => {
    return (
        <figure
            className={cn(
                "cursor-pointer overflow-hidden m-4",
            )}
        >
            <Tooltip>
                <TooltipTrigger>
                    <img
                        src={danLogo}
                        alt={name}
                        className="h-16 w-16 rounded-lg object-cover"
                        draggable={false}
                        onDragStart={(e) => e.preventDefault()}
                    />
                </TooltipTrigger>
                <TooltipContent>
                    <p>{name}</p>
                </TooltipContent>
            </Tooltip>
        </figure>
    )
}

export function SkillSection() {
    return (
        <section id="skills" className="flex flex-col items-center justify-center min-h-[60dvh] px-4 text-center mb-20">
            <motion.div 
                className="flex flex-col mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-bold mb-2 text-white">Technical Skills</h2>
                <p className="max-w-3xl text-md text-justify text-gray-400">
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
                <Marquee className="[--duration:15s]">
                    {firstRow.map((skill) => (
                        <SkillCard key={skill} skill={skill} />
                    ))}
                </Marquee>
                <Marquee reverse className="[--duration:15s]">
                    {secondRow.map((skill) => (
                        <SkillCard key={skill} skill={skill} />
                    ))}
                </Marquee>
                <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
                <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
            </motion.div>
        </section>
    )
}
