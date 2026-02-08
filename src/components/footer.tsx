// export default function Footer() {
//     return (
//         <footer className="w-full py-6 text-center">
//             <p className="text-gray-400 text-sm sm:text-base">&copy; 2026 Muhamad Rafif. All rights reserved.</p>
//         </footer>
//     );
// }

// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { ArrowUpRight, Github, Linkedin, Instagram } from "lucide-react";
// import { useEffect } from "react";
// import { TextAnimate } from "./ui/text-animate";

// export default function Footer() {
//   const dispatch = useAppDispatch();
//   const { data } = useAppSelector((state) => state.contact);

//   useEffect(() => {
//     // dispatch(fetchAboutData());
//   }, [dispatch]);

//   return (
//     <footer className="text-black dark:text-white pt-16 sm:pt-24 px-4 sm:px-6 relative bg-[radial-gradient(#222_1px,transparent_1px)] bg-size-[16px_16px] overflow-hidden">

//       <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-16">

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

//           <div className="text-left">
//             {/* <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-4 sm:mb-6">
//               Ready for the
//               <span className="block text-gray-400 dark:text-[#0099FF] mt-1">Next Level?</span>
//             </h2> */}
//             <TextAnimate by="character" animation="slideUp" className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-4 sm:mb-6">
//               Ready for the
//             </TextAnimate>
//             <TextAnimate by="character" animation="slideUp" className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-4 sm:mb-6 block text-gray-400 dark:text-[#0099FF] mt-1">
//               Next Level?
//             </TextAnimate>
//             <p className="text-lg sm:text-xl text-black dark:text-gray-400 max-w-md">
//               Let's build something scalable together.
//             </p>
//           </div>

//           <div className="flex flex-col gap-8 sm:gap-12 md:pl-12 md:border-l border-black/10 dark:border-white/10 w-full">

//             {/* Email Section */}
//             <div>
//               <p className="text-xs font-bold text-gray-500 dark:text-[#0099FF] uppercase tracking-widest mb-2">
//                 Get in Touch
//               </p>
//               <a
//                 href={`mailto:${data?.email}`}
//                 className="text-2xl sm:text-3xl lg:text-5xl font-bold hover:underline decoration-[#0099FF] decoration-2 underline-offset-4 flex flex-wrap items-center gap-2 group break-all"
//               >
//                 <TextAnimate by="character" animation="slideUp">
//                   {data?.email || "email@example.com"}
//                 </TextAnimate>
//                 <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
//               </a>
//             </div>

//             <div className="grid grid-cols-2 gap-8 sm:gap-12">
//               <div>
//                 <p className="text-gray-500 text-sm mb-4 uppercase font-bold">Menu</p>
//                 <div className="grid grid-cols-2 gap-6">
//                   <ul className="space-y-3 font-medium text-sm sm:text-base">
//                     <li><a href="#home" className="hover:text-[#0099FF] transition-colors block py-1">Home</a></li>
//                     <li><a href="#about" className="hover:text-[#0099FF] transition-colors block py-1">About</a></li>
//                     <li><a href="#projects" className="hover:text-[#0099FF] transition-colors block py-1">Projects</a></li>
//                   </ul>
//                   <ul className="space-y-3 font-medium text-sm sm:text-base">
//                     <li><a href="#skills" className="hover:text-[#0099FF] transition-colors block py-1">Skills</a></li>
//                     <li><a href="#experiences" className="hover:text-[#0099FF] transition-colors block py-1">Experience</a></li>
//                     <li><a href="#contact" className="hover:text-[#0099FF] transition-colors block py-1">Contact</a></li>
//                   </ul>
//                 </div>
//               </div>
//               <div>
//                 <p className="text-gray-500 text-sm mb-4 uppercase font-bold">Socials</p>
//                 <ul className="space-y-3 font-medium text-sm sm:text-base">
//                   <li>
//                     <a href={data?.github} target="_blank" rel="noreferrer" className="hover:text-[#0099FF] transition-colors flex items-center gap-2 py-1">
//                       <Github size={18} className="shrink-0" /> <span>Github</span>
//                     </a>
//                   </li>
//                   <li>
//                     <a href={data?.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#0099FF] transition-colors flex items-center gap-2 py-1">
//                       <Linkedin size={18} className="shrink-0" /> <span>LinkedIn</span>
//                     </a>
//                   </li>
//                   <li>
//                     <a href={data?.instagram} target="_blank" rel="noreferrer" className="hover:text-[#0099FF] transition-colors flex items-center gap-2 py-1">
//                       <Instagram size={18} className="shrink-0" /> <span>Instagram</span>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col-reverse gap-4 sm:flex-row justify-between items-center border-t py-6 sm:py-8 border-black/10 dark:border-white/10 text-center sm:text-left">
//           <h1 className="font-black text-2xl sm:text-3xl tracking-tighter order-2 sm:order-0">R.</h1>
//           <p className="text-gray-600 dark:text-gray-500 text-xs sm:text-sm order-1 sm:order-0">
//             &copy; {new Date().getFullYear()} Muhamad Rafif. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }


export default function FooterV1() {
  return (
    <footer className="text-white overflow-hidden pt-24 mt-10 px-6 relative">
      {/* Background Element (Watermark Nama Panggilan) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[8rem] sm:text-[18vw] font-black bg-linear-to-t from-white/10 to-black/20 dark:from-black/20 dark:to-white/10 bg-clip-text text-transparent tracking-tighter leading-none uppercase">
          RAFIF
        </h1>
      </div>

      <div className="mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Bottom Bar */}
        <div className="mt-20 py-8 border-t border-black/30 dark:border-white/10 w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Muhamad Rafif. All rights reserved.</p>
          <p>Crafted with code & creativity.</p>
        </div>
      </div>
    </footer>
  );
}