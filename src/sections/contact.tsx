/* eslint-disable @typescript-eslint/no-explicit-any */
import HeaderSection from "@/components/header-section"
// import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react"
import Gmail from "@/assets/icons/gmail.svg";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
// import { fetchContactData } from "@/store/contact"
import { sendContactForm } from "@/store/contact"
import { useEffect } from "react"
import type { ContactFormInput } from "@/types/contact"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

export default function ContactSection() {
    const dispatch = useAppDispatch();
    const { data, loading } = useAppSelector((state) => state.contact);

    useEffect(() => {
        // dispatch(fetchContactData());
    }, [dispatch]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const values = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

        const formData: ContactFormInput = {
            name: values.name ?? "",
            email: values.email ?? "",
            message: values.message ?? "",
        };

        try {
            await dispatch(sendContactForm(formData));
            toast.success("Message sent successfully!");
            form.reset();
        } catch (err: any) {
            toast.error(`Error: ${err?.message ?? String(err)}`);
        }
    };

    return (
        <>
            <Toaster />
            <section id="contact" className="flex items-center min-h-auto lg:min-h-[70dvh] px-4 py-8 text-center">
                <motion.div
                    className='flex flex-col gap-8 lg:gap-12 flex-1 w-full'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <HeaderSection
                        title="Get In Touch"
                        text="Drop a message if you're interested in working together."
                    />

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full flex flex-col justify-between">
                            <div className="mb-6">
                                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base text-justify">
                                    Whether you have a question, a project idea, or just want to say hello, feel free to reach out! I&apos;m always open to discussing new opportunities and collaborations.
                                </p>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <h3 className="text-gray-600 dark:text-gray-400 text-base">Connect with me:</h3>
                                </div>

                                <div className="flex mt-6 gap-3">
                                    <div className="cursor-pointer bg-[#1F1C1C] hover:bg-[#2d2a2a] p-3 rounded-full">
                                        <a href={data?.linkedin} target="_blank" rel="noreferrer">
                                            <LinkedinIcon className="w-5 h-5 text-white" />
                                        </a>
                                    </div>

                                    {/* Email */}
                                    <div className="cursor-pointer bg-[#1F1C1C] hover:bg-[#2d2a2a] p-3 rounded-full">
                                        <a href={`mailto:${data?.email}`} target="_blank" rel="noreferrer">
                                            <img src={Gmail} alt="Gmail Icon" className="w-5 h-5" />
                                        </a>
                                    </div>

                                    {/* github */}
                                    <div className="cursor-pointer bg-[#1F1C1C] hover:bg-[#2d2a2a] p-3 rounded-full">
                                        <a href={data?.github} target="_blank" rel="noreferrer">
                                            <GithubIcon className="w-5 h-5 text-white" />
                                        </a>
                                    </div>

                                    {/* Instagram */}
                                    <div className="cursor-pointer bg-[#1F1C1C] hover:bg-[#2d2a2a] p-3 rounded-full">
                                        <a href={data?.instagram} target="_blank" rel="noreferrer">
                                            <InstagramIcon className="w-5 h-5 text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3 sm:gap-4 mx-auto w-full">
                            <div className="flex flex-col min-[400px]:flex-row gap-3 sm:gap-4 w-full">
                                <Input
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    className="bg-gray-100 dark:bg-[#1F1C1C] text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400 h-10 sm:h-12 focus:ring-0 border border-[#2d2a2a] focus:ring-offset-0 text-sm sm:text-base"
                                    required
                                />
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="bg-gray-100 dark:bg-[#1F1C1C] text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400 h-10 sm:h-12 focus:ring-0 border border-[#2d2a2a] focus:ring-offset-0 text-sm sm:text-base"
                                    required
                                />
                            </div>

                            <Textarea
                                name="message"
                                placeholder="Message"
                                className="bg-gray-100 dark:bg-[#1F1C1C] text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400 resize-none focus:ring-0 border border-[#2d2a2a] focus:ring-offset-0 h-40 sm:h-60 w-full text-sm sm:text-base"
                                required
                            />

                            {/* <Button
                                type="submit"
                                className="bg-white text-black px-4 sm:px-6 h-8 sm:h-11 self-start transition-colors text-sm sm:text-base"
                            >
                                Send Message
                                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Button> */}

                            <InteractiveHoverButton
                                type="submit"
                                className={`px-4 sm:px-6 h-8 border border-[#2e2b2b] hover:dark:border-[#efe9e9] sm:h-11 self-start text-sm sm:text-base ${loading ? 'flex items-center gap-2 justify-center' : ''}`}
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                    </>
                                )}
                            </InteractiveHoverButton>
                        </form>
                    </div>
                </motion.div>
            </section>
        </>
    )
}