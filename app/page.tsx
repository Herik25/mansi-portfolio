"use client";

import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const typewriterVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 2 + i * 0.1,
      },
    }),
  };

  const cartoonishVariants: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -20, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.15,
        type: "spring",
        stiffness: 300,
        damping: 15
      },
    }),
  };

  const cartoonishItem: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -20, y: 20 },
    visible: { 
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      },
    },
  };

  const fadeInItem: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1.5 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring" as const, duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  const textToWords = (text: string, variants: Variants = typewriterVariants) => text.split(" ").map((word, index) => (
    <motion.span 
      key={index} 
      custom={index} 
      variants={variants}
      className="inline-block whitespace-pre"
      animate={variants === cartoonishVariants ? {
        rotate: [0, 2, -2, 0],
        y: [0, -2, 2, 0],
        transition: {
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2
        }
      } : undefined}
    >
      {word}{index < text.split(" ").length - 1 ? " " : ""}
    </motion.span>
  ));

  const textToChars = (text: string, variants: Variants = typewriterVariants) => text.split("").map((char, index) => (
    <motion.span 
      key={index} 
      custom={index} 
      variants={variants}
      className="inline-block whitespace-pre"
    >
      {char}
    </motion.span>
  ));

  const projects = [
    { 
      title: "SNEAKART", 
      subtitle: "ULTIMATE AR SHOPPING",
      category: "Fashion • AR Experience • Shopping",
      year: "2026",
      platform: "Mobile App",
      experience: "AR + AI Powered",
      description: "Step into the future of footwear shopping with Sneakart. An immersive AR-based shoe shopping experience where users can virtually try on sneakers in real-time, explore collections in 3D, and make confident purchase decisions from anywhere.",
      image: "/projects/netflix-sub-1.png",
      rating: 4
    },
    { 
      title: "Accessible Social Media", 
      category: "Social • Accessibility • UI/UX",
      year: "2025",
      platform: "Web & Mobile",
      experience: "Inclusive Design",
      description: "A social media platform designed from the ground up to be fully accessible for users with visual, auditory, and motor impairments, implementing advanced assistive technologies.",
      image: "/projects/netfilx-sub-2.png",
      rating: 5
    },
    { 
      title: "Imitation Jewelry Journey", 
      category: "E-commerce • Branding • Storytelling",
      year: "2024",
      platform: "Web App",
      experience: "Immersive Retail",
      description: "Experience the craft and elegance of jewelry through an interactive storytelling platform that blends high-end e-commerce with a documentary-style narrative journey.",
      image: "/projects/netflix-sub-3.png",
      rating: 4
    },
    { 
      title: "SehatSaathi", 
      category: "Healthcare • AI • Wellness",
      year: "2025",
      platform: "Mobile App",
      experience: "AI Health Assistant",
      description: "Your digital health companion that uses personalized AI models to track wellness metrics, suggest dietary plans, and connect users with healthcare professionals seamlessly.",
      image: "/projects/netflix-sub-4.png",
      rating: 5
    },
    { 
      title: "Manufacturer SaaS", 
      category: "B2B • SaaS • Dashboard",
      year: "2024",
      platform: "Enterprise Web",
      experience: "Industrial Tech",
      description: "A comprehensive SaaS solution for manufacturers to optimize supply chains, track production metrics in real-time, and manage workforce productivity effectively.",
      image: "/projects/netfilx-sub-5.png",
      rating: 4
    },
    { 
      title: "Supply Chain Pro", 
      category: "Logistics • SaaS • Automation",
      year: "2023",
      platform: "Web Dashboard",
      experience: "Corporate Tools",
      description: "Advanced logistics management software focusing on predictive analytics and automated shipping route optimization for global shipping companies.",
      image: "/projects/netflix-sub-6.png",
      rating: 4
    },
  ];

  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const currentProject = projects[activeProjectIdx];

  return (
    <main>
      <section className="relative min-h-screen overflow-hidden bg-white flex flex-col">
        <div className="max-w-[1440px] mx-auto w-full flex-1 flex flex-col relative px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ scale: 0, x: "-50%", y: "60%" }}
            animate={{ scale: 1, x: "-50%", y: "60%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="bg-[#EF4444] w-screen md:w-[80%] xl:w-[60%] aspect-square absolute bottom-0 left-1/2 rounded-full"
          ></motion.div>

          <motion.div
            initial={{ y: "100%", x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.5 }}
            className="absolute bottom-0 left-1/2 w-auto"
            // className="absolute bottom-0 left-1/2 w-full max-w-[670px] -z-10 px-4"
          >
            <Image
              src="/mansi-2.png"
              alt="Hero"
              width={670}
              height={483}
              className="w-auto max-h-full max-w-screen sm:max-w-[80vw] md:max-h-[40vw] xl:max-h-full"
              // w-full h-auto max-h-[35vh] sm:max-h-[45vh] md:max-h-[50vh] xl:max-h-full object-contain mx-auto
            />
          </motion.div>

          <div className="flex flex-col justify-center space-y-6 md:space-y-8 min-h-[60vh] md:min-h-[80vh] py-10 md:py-0 relative z-10 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -4, 4, 0],
                rotate: [0, -1, 1, 0]
              }}
              whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                opacity: { delay: 0.8 }
              }}
              className="border border-[#333333] rounded-full px-4 py-2 w-min mx-auto mb-2 md:mb-4 text-lg md:text-xl relative cursor-default whitespace-nowrap"
            >
              Hello!
              <svg className="absolute -top-1/2 -right-1/3" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                  variants={draw}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                  d="M2.00049 20.0005C2.00049 17.0005 5.00049 11.0005 2.00049 2.00055M9.50049 23.5005C13.8338 19.3339 22.7005 9.20055 23.5005 2.00055M12.5005 30.5005C15.1672 30.5005 22.3005 29.1005 29.5005 23.5005" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-luckiest-guy text-center leading-[1.1] md:leading-none">
              <motion.span initial="hidden" animate="visible" className="inline-block">
                {textToWords("I’m ", cartoonishVariants)}
              </motion.span>
              <motion.span className="text-[#EF4444] inline-block" initial="hidden" animate="visible">
                {textToWords("Mansi,", cartoonishVariants)}
              </motion.span>
              <br />
              <motion.span initial="hidden" animate="visible" className="inline-block">
                {textToWords("UI/UX Designer", cartoonishVariants)}
              </motion.span>
            </h1>

            <div className="flex flex-col md:flex-row justify-between items-center md:items-start font-quicksand font-semibold text-base md:text-xl tracking-[-1.5%] text-[#333] px-4">
              <motion.p 
                initial="hidden" 
                animate="visible"
                className="text-center md:text-left mb-8 md:mb-0 max-w-md md:max-w-sm xl:max-w-md"
              >
                {textToWords("\"Cartoons have always been my happy place—whether it's the nostalgia of Tom & Jerry or the creativity of animated worlds, I love the charm and fun they bring!\"")}
              </motion.p>
              
              <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="flex items-center mb-2"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2 + i * 0.1, type: "spring" }}
                    >
                      <Image src="/star-filled.svg" alt="Star" width={24} height={24} className="md:w-8 md:h-8" />
                    </motion.div>
                  ))}
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.5 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-1.5%] font-luckiest-guy"
                >
                  4.5 Years
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.7 }}
                  className="font-quicksand text-base md:text-xl tracking-[-1.5%] text-[#333] -mt-1 md:-mt-2 font-semibold"
                >
                  Experience
                </motion.p>
              </div>
            </div>
          </div>
            <motion.div 
              animate={{ 
                rotate: [0, 5, -5, 0],
                y: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute left-[10%] bottom-1/4 xl:left-1/5 hidden sm:block"
            >
              <svg width="104" height="115" viewBox="0 0 104 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M78.0837 112.507C81.2071 110.631 83.5877 108.035 85.5569 104.257C87.3279 100.86 87.8147 98.9987 87.9002 95.3572C87.9593 93.273 87.7854 92.2156 86.8529 89.2519C85.7838 85.8545 85.7403 85.5901 86.1591 84.2071C87.8313 78.8548 85.4015 70.8808 79.9616 63.7546C75.0372 57.3203 65.753 49.3383 58.9242 45.6879C56.5846 44.438 55.9535 44.1997 55.6148 44.3857C54.9974 44.7587 55.3517 45.0643 58.8019 47.2556C66.9128 52.3298 74.257 58.817 78.8983 64.983C82.4857 69.6931 84.7585 74.8963 85.1411 79.2049C85.2677 80.9326 85.0147 83.8523 84.7132 83.967C84.6048 84.0011 83.8723 83.3776 83.0706 82.5971C81.3371 80.9381 80.1616 80.2951 78.2984 79.9281C76.3515 79.5477 74.7117 80.1432 73.7404 81.6007C72.7805 83.0944 72.6361 83.835 72.995 85.291C73.3984 86.9515 74.5638 88.1935 76.5025 89.0531C79.0838 90.1872 81.4611 89.9158 83.3938 88.2947C83.9286 87.8484 84.5089 87.5466 84.699 87.6457C85.1742 87.8934 86.2806 91.9145 86.4022 93.9418C86.806 99.8325 83.7968 106.301 78.6542 110.66C77.5846 111.552 76.7432 112.413 76.7649 112.545C76.8043 113.049 77.1761 113.031 78.0837 112.507ZM75.4628 86.7587C74.5196 85.844 74.0138 83.8582 74.5092 82.9079C75.4752 81.0548 77.5179 80.7298 80.0713 82.0911C82.2095 83.2057 83.8523 85.2707 83.3569 86.221C82.7377 87.4089 80.8409 88.3235 79.1761 88.2714C77.4999 88.1832 76.6312 87.821 75.4628 86.7587Z" fill="#F54748"/>
                <path d="M28.1818 49.3147C28.9239 48.9873 30.9025 47.0187 34.29 43.2608L36.7143 40.6199L43.9528 41.4409C52.2657 42.3934 53.3237 42.3735 53.8507 41.3626C54.4753 40.1644 53.254 38.6706 48.6122 35.0604C46.17 33.1683 44.0649 31.4519 43.9183 31.185C43.5877 30.6317 45.2077 27.5239 48.4841 22.5176C51.5473 17.8288 51.6123 17.3389 49.2533 16.1092C48.4296 15.6798 41.9216 14.0967 34.826 12.636C27.7126 11.1182 20.6186 9.56305 18.9826 9.1388C15.504 8.23016 13.8405 8.31539 13.4828 9.36699C13.343 9.81791 14.0747 12.3422 15.1239 15.0795C16.1731 17.8169 18.1643 24.0453 19.517 28.9409C23.6842 43.875 24.0607 45.0712 24.7677 46.8207C25.4747 48.5702 27.0979 49.7497 28.1818 49.3147ZM24.8658 38.7767C23.7983 34.8869 22.1946 29.1939 21.3016 26.1569C20.4085 23.12 19.7175 20.4265 19.7402 20.2002C19.7661 19.7851 21.2088 21.5848 29.7092 32.6826C33.4416 37.5806 34.4904 39.2225 34.1438 39.6133C29.9704 44.0567 27.6289 46.2646 27.2545 46.0694C27.0299 45.9523 25.9707 42.686 24.8658 38.7767ZM27.2766 25.7479C20.1716 15.9014 19.1423 14.222 21.1774 15.6162C27.973 20.3015 38.4615 28.8642 41.4836 32.2015C42.5778 33.391 44.4926 35.1986 45.8163 36.222C47.083 37.2632 48.2553 38.3029 48.3644 38.5503C48.4736 38.7976 46.7906 38.9203 44.6778 38.7713C42.583 38.6793 39.9591 38.5972 38.9011 38.6171L36.9935 38.6226L35.5117 36.8978C34.6975 35.902 30.9668 30.9096 27.2766 25.7479ZM38.4687 26.2013C36.1615 24.1415 23.5256 14.126 22.4772 13.5795C21.5232 13.0346 23.7093 13.317 28.4331 14.3033C31.1239 14.8965 36.5655 15.876 40.521 16.5094C44.439 17.1233 47.8281 17.7471 48.0527 17.8643C48.4646 18.079 47.744 19.37 43.2427 26.4519C42.4082 27.7788 41.5605 28.7655 41.3359 28.6483C41.1487 28.5508 39.8266 27.433 38.4687 26.2013Z" fill="#F54748"/>
              </svg>
            </motion.div>
            <motion.svg 
              animate={{ 
                x: [0, 10, -10, 0],
                y: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute xl:bottom-1/5 xl:right-1/5 bottom-1/4 right-[12%] hidden sm:block" width="82" height="81" viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path 
                variants={draw}
                initial="hidden"
                animate="visible"
                custom={3}
                d="M27.8119 74.874C35.6324 75.4625 51.8618 68.8191 74.7346 78.4051M20.1594 54.6363C31.8712 44.1575 60.0263 23.0316 78.9523 22.3586M2.50017 45.4427C3.02329 38.4912 8.07217 20.1705 24.0828 2.50002" stroke="#F54748" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
        </div>

        {/* Background Squiggles & Dots */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg width="100%" height="100%" className="opacity-10">
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="black" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
      </section>

      <section className="bg-black text-white min-h-screen py-16 lg:py-32 px-8 relative flex flex-col justify-between gap-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.8 } }
          }}
          className="flex flex-col flex-1 justify-between gap-8 h-full"
        >
          <div className="font-quicksand text-lg sm:text-2xl tracking-[-1.5%] flex flex-col gap-6 max-w-[1440px] mx-auto w-full">
            <motion.h2 
              variants={{ 
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { staggerChildren: 0.1 } 
                } 
              }}
              className="font-luckiest-guy text-3xl sm:text-5xl tracking-[-1.5%]"
            >
              {textToWords("About Me “The Original Story”", cartoonishItem)}
            </motion.h2>
            
            <motion.div 
              variants={{ 
                visible: { transition: { staggerChildren: 0.6 } } 
              }}
              className="flex flex-col gap-6"
            >
              <motion.p variants={{ visible: { transition: { staggerChildren: 0.01 } } }}>
                {textToWords("Once upon a time in a world filled with creativity, a curious mind named Mansi found a passion for UI/UX design. After gaining hands-on experience through real-world projects, professional roles, and academic learning, Mansi mastered the art of crafting user-centric and visually compelling digital experiences.", fadeInItem)}
              </motion.p>
              <motion.p variants={{ visible: { transition: { staggerChildren: 0.01 } } }}>
                {textToWords("Now, Mansi focuses on blending aesthetics with functionality, ensuring every design is not only beautiful but also intuitive and accessible. With expertise in user research, wireframing, prototyping, and interface design, Mansi brings ideas to life using tools like Figma, Adobe XD, and Sketch.", fadeInItem)}
              </motion.p>
              <motion.p variants={{ visible: { transition: { staggerChildren: 0.01 } } }}>
                {textToWords("A firm believer in the power of human-centered design, Mansi strives to create meaningful digital experiences that delight users and solve real-world problems.", fadeInItem)}
              </motion.p>
            </motion.div>
          </div>

          <motion.div 
            variants={{ 
              visible: { transition: { staggerChildren: 0.5 } } 
            }}
            className="flex md:absolute md:bottom-0 md:left-0 w-full justify-center md:justify-between items-center gap-4 py-8 md:py-0"
          >
            <div className="flex items-center gap-4">
              <div>
                <Image src="/white-cat.png" alt="white cat" width={275} height={330} className="w-auto hidden md:block" />
              </div>
              <motion.p
                variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
                className="text-2xl md:text-5xl font-bold tracking-[-1.5%] font-rock-salt text-[#F54748]"
              >
                {textToWords("Waiiiit who is Mansi !", cartoonishItem)}
              </motion.p>
            </div>
            <div>
              <Image src="/love.png" alt="love sticker" width={272} height={195} className="w-auto hidden md:block" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-black text-white min-h-screen relative overflow-hidden flex flex-col px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto w-full relative z-20 pt-16 md:pt-32">
          <motion.h2 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-luckiest-guy tracking-[-1.5%]"
          >
            {textToWords("SKILLS: “SUPERPOWERS UNLOCKED”", cartoonishVariants)}
          </motion.h2>
          <motion.p 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="mt-4 font-quicksand text-lg md:text-2xl tracking-[-1.5%]"
          >
            {textToChars("Every creative mind has its unique abilities. Here are the skills that power my design journey:", {
              hidden: { opacity: 0 },
              visible: (i: number) => ({
                opacity: 1,
                transition: { delay: i * 0.03 }
              })
            })}
          </motion.p>
        </div>

        <div className="flex-1 relative mt-10 h-full w-full max-w-[1440px] mx-auto overflow-visible">
          {/* Green Glow */}
          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#CEFF48CC] rounded-full blur-[100px] md:blur-[120px] pointer-events-none z-0" />
          
          {/* Skills Labels */}
          {[
            { name: "WIREFRAMING", size: "text-xl sm:text-2xl md:text-3xl", top: "10%", left: "25%", delay: 0 },
            { name: "ILLUSTRATOR", size: "text-xl sm:text-2xl md:text-3xl", top: "15%", left: "50%", delay: 0.2 },
            { name: "USABILITY TESTING", size: "text-xl sm:text-3xl md:text-5xl", top: "25%", left: "75%", delay: 0.4 },
            { name: "PROTOTYPING", size: "text-xl sm:text-2xl md:text-3xl", top: "25%", left: "15%", delay: 0.6 },
            { name: "FIGMA", size: "text-xl sm:text-3xl md:text-5xl", top: "33%", left: "33%", delay: 0.8 },
            { name: "VISUAL DESIGN", size: "text-xl sm:text-2xl md:text-3xl", top: "45%", left: "68%", delay: 1.0 },
            { name: "MIRO", size: "text-sm sm:text-xl md:text-xl", top: "36%", left: "80%", delay: 1.2 },
            { name: "PROTO.IO", size: "text-xl sm:text-2xl md:text-3xl", top: "38%", left: "18%", delay: 1.4 },
            { name: "PHOTOSHOP", size: "text-xl sm:text-2xl md:text-3xl", top: "53%", left: "25%", delay: 1.6 },
            { name: "OPTIMAL WORKSHOP", size: "text-sm sm:text-lg md:text-xl", top: "45%", left: "42%", delay: 1.8 },
            { name: "BRANDING & IDENTITY DESIGN", size: "text-xs sm:text-xl md:text-3xl", top: "58%", left: "75%", delay: 2.0 },
            { name: "USER RESEARCH", size: "text-xl sm:text-3xl md:text-5xl", top: "68%", left: "20%", delay: 2.2 },
            { name: "SKETCH", size: "text-sm sm:text-lg md:text-xl", top: "60%", left: "38%", delay: 2.4 },
            { name: "INDESIGN", size: "text-xl sm:text-2xl md:text-3xl", top: "71%", left: "75%", delay: 2.6 },
            { name: "GRAPHIC DESIGN", size: "text-xl sm:text-2xl md:text-3xl", top: "80%", left: "35%", delay: 2.8 },
            { name: "PROBLEM-SOLVING", size: "text-xl sm:text-2xl md:text-3xl", top: "92%", left: "18%", delay: 3.0 },
            { name: "DESIGN THINKING", size: "text-xl sm:text-3xl md:text-5xl", top: "86%", left: "75%", delay: 3.2 },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, rotate: -25 }}
              viewport={{ once: true }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 12,
                  delay: skill.delay
                }
              }}
              animate={{ 
                y: [0, -5, 0],
                rotate: [0, 5, -5, 0],
                scaleX: [1, 1.1, 0.9, 1],
                scaleY: [1, 0.85, 1.1, 1],
              }}
              transition={{ 
                duration: 2.5 + (index % 2),
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: (index % 3) * 0.5
              }}
              whileHover={{ 
                scale: 1.25, 
                // rotate: [0, 15, -15, 0],
                transition: { duration: 0.2, ease: "easeInOut" }
              }}
              className={`absolute font-luckiest-guy pointer-events-auto cursor-default select-none text-center whitespace-nowrap transform -translate-x-1/2 -translate-y-1/2 z-10 ${skill.size}`}
              style={{ top: skill.top, left: skill.left }}
            >
              {skill.name}
            </motion.div>
          ))}

          {/* Character and Speech Bubble */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/3 w-full max-w-sm flex justify-center z-20">
            <div
              className="relative flex justify-center items-end"
            >
              <Image
                src="/alien.png"
                alt="Character"
                width={250}
                height={550}
                className="object-contain w-auto h-[40vh] md:h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-[#FDC55E] text-black relative overflow-hidden flex flex-col py-16 md:py-32 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto w-full relative z-20">
          <motion.h2 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-luckiest-guy tracking-[-1.5%]"
          >
            {textToWords("Experience: “The Quest Begins”", cartoonishVariants)}
          </motion.h2>
          <motion.p 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="mt-4 font-quicksand text-lg md:text-2xl tracking-[-1.5%] max-w-3xl"
          >
            {textToChars("Every journey is shaped by experiences that refine skills and creativity. Here’s how my path in UI/UX and design has evolved", {
              hidden: { opacity: 0 },
              visible: (i: number) => ({
                opacity: 1,
                transition: { delay: i * 0.03 }
              })
            })}
          </motion.p>
        </div>

        <div className="flex-1 relative mt-12 md:mt-20 w-full max-w-[1440px] mx-auto z-10 px-4">
          <div className="flex flex-col gap-6 md:gap-12">
            {[
              {
                title: "Academic Design Faculty – Collegedekho, Delhi",
                date: "Apr 2025- Current",
                color: "bg-[#EC7082]",
                marginClass: "ml-0",
                rotate: -1
              },
              {
                title: "Visiting Faculty – IIID Rajkot",
                date: "Nov 2024- March 2025",
                color: "bg-[#E4E7EC]",
                marginClass: "ml-2 md:ml-[10%]",
                rotate: 1
              },
              {
                title: "UI/UX Designer – Coretus Technologies, Rajkot",
                date: "Feb 2024 - Feb 2025",
                color: "bg-[#C77CFF]",
                marginClass: "ml-4 md:ml-[20%]",
                rotate: -1
              },
              {
                title: "UI Designer Intern – AP Ads, Rajkot",
                date: "Dec 2023 - Feb 2024",
                color: "bg-[#88D398]",
                marginClass: "ml-6 md:ml-[30%]",
                rotate: 1
              },
              {
                title: "Jr. Graphic Designer – ASEPL, Ahmedabad",
                date: "September 2021 - Jan 2023",
                color: "bg-[#5483E4]",
                marginClass: "ml-8 md:ml-[40%]",
                rotate: -1
              }
            ].map((exp, index, arr) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, x: -20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  x: 0,
                  transition: { 
                    delay: (arr.length - index - 1) * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  } 
                }}
                viewport={{ once: true, amount: 0.1 }}
                style={{ 
                  rotate: `${exp.rotate}deg`
                }}
                className={`flex flex-col gap-1 w-full max-w-full md:w-fit relative group z-10 ${exp.marginClass}`}
              >
                <div className="relative w-fit max-w-[calc(100vw-3rem)] md:max-w-full">
                  <div className={`${exp.color} border-2 border-black rounded-full px-5 py-3 md:px-10 md:py-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:scale-105 group-hover:-translate-y-1 duration-300`}>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-rock-salt leading-tight wrap-break-word">
                      {exp.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-quicksand font-bold ml-6 md:ml-10">{exp.date}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-[150px] md:w-[300px] z-0 pointer-events-none">
          <Image 
            src="/squid.png" 
            alt="Squidward" 
            width={300} 
            height={400} 
            className="object-contain"
          />
        </div>

        <div className="absolute top-[20%] -right-[7%] w-[150px] -rotate-45 md:w-[350px] z-0 pointer-events-none">
          <Image 
            src="/spongebob.png" 
            alt="SpongeBob" 
            width={350} 
            height={450} 
            className="object-contain"
          />
        </div>

        <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="dots-exp" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="black" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots-exp)" />
          </svg>
        </div>
      </section>

      <section className="bg-black text-white relative overflow-hidden flex flex-col px-4 md:px-8 pb-40">
        <div className="max-w-[1440px] mx-auto w-full relative z-20 pt-16 md:pt-32 md:grid md:grid-cols-[1fr_auto] gap-10">
          <div>
            <motion.h2 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-luckiest-guy tracking-[-1.5%]"
            >
              {textToWords(`Research & Projects: "The Discovery Chronicles"`, cartoonishVariants)}
            </motion.h2>
            <motion.p 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.01 } } }}
              className="mt-4 font-quicksand text-lg md:text-2xl tracking-[-1.5%]"
            >
              {textToWords("Every designer’s journey is a mix of curiosity, creativity… and a little bit of Netflix & chill 🎬 As someone who loves diving into stories on Netflix, I naturally developed an eye for experiences—how they flow, engage, and keep users hooked. That same curiosity translated into my design journey, where every project became an episode of exploration. From understanding user behavior to crafting seamless digital experiences, these research studies and projects shaped my perspective on UI/UX—teaching me how to design journeys that people don’t just use, but truly enjoy. 🚀", fadeInItem)}
            </motion.p>
          </div>
          <Image 
            src="/popcorn.svg" 
            alt="Popcorn" 
            width={188} 
            height={188} 
            className="object-contain absolute md:relative bottom-0 right-0 translate-y-1/2 md:translate-y-0 -z-1 opacity-20 md:opacity-100"
          />
          <Image
            src="/Netflix.png"
            alt="Netflix"
            width={188}
            height={188}
            className="z-0 w-full max-w-[40vw] lg:max-w-lg xl:max-w-xl mx-auto h-full opacity-60 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 max-h-[20%] lg:max-h-[40%]"
          />
        </div>
      </section>

      <section className="bg-black text-white min-h-screen relative overflow-hidden flex flex-col py-16">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProjectIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image 
                src={currentProject.image} 
                alt={currentProject.title} 
                fill
                className="object-cover opacity-40 grayscale-20"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />
        </div>

        <div className="flex-1 flex flex-col justify-end px-4 md:px-16 relative z-10 max-w-[1440px] mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeProjectIdx + "-content"}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl mb-12"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-base md:text-xl lg:text-[32px] font-bold text-gray-300">
                  {currentProject.category}
                </span>
              </div>

              <h2 className="text-5xl md:text-[64px] font-black mb-4 tracking-[5.5%] uppercase drop-shadow-2xl">
                {currentProject.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm md:text-xl font-bold">
                <span className="text-white">{currentProject.year}</span>
                <span className="px-2 md:text-base">PLATFORM: {currentProject.platform}</span>
                <span className="text-white font-medium">Experience: {currentProject.experience}</span>
              </div>

              <p className="text-lg md:text-xl text-[#A7A6A6] leading-relaxed mb-4 max-w-2xl drop-shadow-md">
                {currentProject.description}
              </p>

              <Image src="/stars.svg" alt="stars" width={212} height={34} className="mb-6" />
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#D40D1F] hover:bg-red-700 text-white px-8 py-2 rounded-[10px] flex items-center justify-center gap-2 font-bold text-lg transition-transform active:scale-95 group cursor-pointer shadow-lg shadow-red-900/20 min-w-68">
                  SCAN NOW
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-[#D40D1F] fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
                <button className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-2 rounded-[10px] font-bold text-lg transition-all active:scale-95 backdrop-blur-md cursor-pointer min-w-68">
                  START SHOPPING
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="w-full">
            <h3 className="text-xl md:text-2xl font-bold mb-4 px-2">Matched to You</h3>
            <div className="flex gap-4 overflow-x-auto py-12 px-2 no-scrollbar snap-x snap-mandatory -my-12">
              {projects.map((project, idx) => (
                <motion.div 
                  key={idx}
                  onClick={() => setActiveProjectIdx(idx)}
                  whileHover={{ 
                    scale: 1.025, 
                    zIndex: 50,
                    transition: { duration: 0.3 }
                  }}
                  className={`relative shrink-0 w-64 md:w-80 aspect-video rounded-lg overflow-hidden cursor-pointer group shadow-2xl snap-start`}
                >
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors ${activeProjectIdx === idx ? 'bg-black/0' : ''}`} />
                  
                  <div className="absolute inset-0 p-3 flex flex-col justify-end">
                    <h4 className="text-sm font-bold text-white drop-shadow-md line-clamp-2">
                       {project.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
