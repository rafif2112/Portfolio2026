import Profile from '@/assets/images/Profile.jpeg';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Github from '@/assets/icons/github.svg';
import Gmail from '@/assets/icons/gmail.svg';
import Linkedin from '@/assets/icons/linkedin.svg';
import File from '@/assets/icons/file.svg';

export default function AboutSection() {
    return (
        <section 
            id='about' 
            className="w-full flex flex-col lg:flex-row items-center min-h-auto lg:min-h-[60dvh] px-4 sm:px-8 py-12 lg:py-20 text-center lg:text-left relative">
            
            <motion.div
                className='flex flex-col gap-6 flex-1 w-full order-2 lg:order-1'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center lg:items-start flex-col gap-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
                        About Me
                    </h2>
                    <p className="w-full text-sm sm:text-base lg:text-lg text-justify text-gray-600 dark:text-gray-300 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare vestibulum erat, vel condimentum sem. Etiam augue diam, suscipit quis quam eu, iaculis commodo sapien. Nulla vel odio blandit, mollis ligula ullamcorper, placerat dui. Nunc varius vulputate eros accumsan congue. Phasellus non maximus risus. Fusce volutpat urna id erat ultrices gravida. Nulla sem mauris, ultricies eu faucibus vehicula, lacinia ut leo. Donec vel gravida sem, ac rutrum dui.
                    </p>
                </div>

                <div className='flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 mt-4'>
                    <a href="https://linkedin.com/in/muhamad-rafif22" target='_blank' rel="noreferrer">
                        <Button className="bg-[#1F1C1C] text-white hover:bg-[#333030] flex items-center gap-2 px-4 h-10 text-xs sm:text-sm">
                            <img src={Linkedin} alt="LinkedIn" className='w-4 h-4 sm:w-5 sm:h-5' />
                            <span className="hidden min-[420px]:inline">LinkedIn</span>
                        </Button>
                    </a>

                    <a href="https://github.com/rafif2112" target='_blank' rel="noreferrer">
                        <Button className="bg-[#1F1C1C] text-white hover:bg-[#333030] flex items-center gap-2 px-4 h-10 text-xs sm:text-sm">
                            <img src={Github} alt="GitHub" className='w-4 h-4 sm:w-5 sm:h-5' />
                            <span className="hidden min-[420px]:inline">Github</span>
                        </Button>
                    </a>

                    <a href="mailto:mrafiff3@gmail.com" target='_blank' rel="noreferrer">
                        <Button className="bg-[#1F1C1C] text-white hover:bg-[#333030] flex items-center gap-2 px-4 h-10 text-xs sm:text-sm">
                            <img src={Gmail} alt="Email" className='w-4 h-4 sm:w-5 sm:h-5' />
                            <span className="hidden min-[420px]:inline">Email</span>
                        </Button>
                    </a>

                    <a href="https://res.cloudinary.com/draylkswr/image/upload/v1768829353/files/CVMuhamadRafif.pdf" target='_blank' download rel="noreferrer">
                        <Button className="bg-[#1F1C1C] text-white hover:bg-[#333030] flex items-center gap-2 px-4 h-10 text-xs sm:text-sm">
                            <img src={File} alt="CV" className='w-4 h-4 sm:w-5 sm:h-5' />
                            <span className="inline">CV</span>
                        </Button>
                    </a>
                </div>
            </motion.div>

            <motion.div
                className='relative w-full flex justify-end order-1 lg:order-2 lg:flex-1'
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className='relative w-full max-w-70 sm:max-w-87.5 lg:max-w-100 aspect-square'>
                    
                    <motion.div
                        className='absolute z-10 bg-white py-1.5 sm:py-2 px-6 rounded-lg top-6 -left-8 sm:top-8 sm:-left-10 shadow-xl border border-gray-100'
                        transition={{ duration: 0.3 }}
                        whileHover={{ rotate: 10 }}
                    >
                        <p className='text-black font-semibold text-[10px] sm:text-xs lg:text-sm whitespace-nowrap'>
                            Full Stack Dev
                        </p>
                    </motion.div>

                    <img 
                        src={Profile} 
                        alt="Profile" 
                        className='object-cover w-full h-full rounded-2xl shadow-xl border-4 border-gray-800/20' 
                    />

                    <motion.div
                        className='absolute z-10 bg-white py-1.5 sm:py-2 px-6 rounded-lg bottom-6 -right-8 sm:bottom-8 sm:-right-10 shadow-xl border border-gray-100'
                        transition={{ duration: 0.3 }}
                        whileHover={{ rotate: -10 }}
                    >
                        <p className='text-black font-semibold text-[10px] sm:text-xs lg:text-sm whitespace-nowrap'>
                            Mobile Dev
                        </p>
                    </motion.div>
                </div>
            </motion.div>

        </section>
    );
}