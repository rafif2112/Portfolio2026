import Profile from '@/assets/images/Profile.jpeg';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Github from '@/assets/icons/github.svg';

export default function AboutSection() {
    return (
        <section id='about' className="flex items-center min-h-[60dvh] px-4 text-center">
            <motion.div
                className='flex flex-col gap-16 flex-1 w-full'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 20, x: 20 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-start flex-col">
                    <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
                    <p className="max-w-2xl text-lg text-justify text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare vestibulum erat, vel condimentum sem. Etiam augue diam, suscipit quis quam eu, iaculis commodo sapien. Nulla vel odio blandit, mollis ligula ullamcorper, placerat dui. Nunc varius vulputate eros accumsan congue. Phasellus non maximus risus. Fusce volutpat urna id erat ultrices gravida. Nulla sem mauris, ultricies eu faucibus vehicula, lacinia ut leo. Donec vel gravida sem, ac rutrum dui.
                    </p>
                </div>

                <div className='flex justify-start items-center gap-3'>
                    <a href="https://linkedin.com/in/muhamad-rafif22" target='_blank'>
                        <Button className="mt-6 bg-[#1F1C1C] text-white hover:bg-[#333030] flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3" /><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z" /></svg>

                            LinkedIn
                        </Button>
                    </a>

                    <a href="https://github.com/rafif2112" target='_blank'>
                        <Button className="mt-6 bg-[#1F1C1C] text-white hover:bg-[#333030] flex items-center gap-2">
                            <img src={Github} alt="GitHub" className='w-5 h-5' />
                            Github
                        </Button>
                    </a>

                    <a href="mailto:mrafiff3@gmail.com" target='_blank'>
                        <Button className="mt-6 bg-[#1F1C1C] text-white hover:bg-[#333030] flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="256" height="193" viewBox="0 0 256 193"><path fill="#4285f4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z" /><path fill="#34a853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z" /><path fill="#ea4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z" /><path fill="#fbbc04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z" /><path fill="#c5221f" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z" /></svg>
                            Email
                        </Button>
                    </a>

                    <a href="https://res.cloudinary.com/draylkswr/image/upload/v1768829353/files/CVMuhamadRafif.pdf" target='_blank' download>
                        <Button className="mt-6 bg-[#1F1C1C] text-white hover:bg-[#333030] flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><path d="m12 2l.117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2z" /><path d="M19 7h-4l-.001-4.001z" /></g></svg>
                            CV
                        </Button>
                    </a>
                </div>
            </motion.div>

            <motion.div
                className='relative'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 20, x: -20 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className='absolute bg-white py-2 px-4 rounded-md top-10 left-8 transform -translate-x-1/2 shadow-lg'
                    transition={{ duration: 0.3 }}
                    whileHover={{ rotate: 10 }}
                >
                    <p className='text-black font-semibold'>Full Stack Web Developer</p>
                </motion.div>
                <img src={Profile} alt="Profile" className='object-cover h-96 w-96 rounded-xl' />
                <motion.div
                    className='absolute bg-white py-2 px-4 rounded-md bottom-10 right-20 transform translate-x-full shadow-lg'
                    transition={{ duration: 0.3 }}
                    whileHover={{ rotate: -10 }}
                >
                    <p className='text-black font-semibold'>Mobile Developer</p>
                </motion.div>
            </motion.div>
        </section>
    );
}