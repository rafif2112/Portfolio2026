import HeaderSection from "@/components/header-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function ContactSection() {
    return (
        <section id="contact" className="flex items-center min-h-[60dvh] px-4 text-center mb-20">
            <motion.div
                className='flex flex-col gap-12 flex-1 w-full'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <HeaderSection
                    title="Get In Touch"
                    text="Drop a message if you're interested in working together."
                />

                <form className="flex flex-col justify-center items-center gap-4">
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <Input
                            type="text"
                            placeholder="Name"
                            className="bg-[#1F1C1C] text-white placeholder-gray-400 h-12 focus:ring-0 border border-[#2d2a2a] focus:ring-offset-0"
                            required
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            className="bg-[#1F1C1C] text-white placeholder-gray-400 h-12 focus:ring-0 border border-[#2d2a2a] focus:ring-offset-0"
                            required
                        />
                    </div>

                    <Textarea
                        placeholder="Message"
                        className="bg-[#1F1C1C] text-white placeholder-gray-400 resize-none focus:ring-0 border border-[#2d2a2a] focus:ring-offset-0 h-[30vh] w-full"
                        required
                    />

                    <Button
                        type="submit"
                        className="bg-white text-black px-6 py-2 self-start rounded-md hover:bg-gray-200 transition-colors"
                    >
                        Send Message
                        <Send className="w-5 h-5" />
                    </Button>
                </form>
            </motion.div>
        </section>
    )
}
