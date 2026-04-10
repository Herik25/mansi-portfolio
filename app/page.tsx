"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

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
            <motion.svg 
              animate={{ 
                rotate: [0, 5, -5, 0],
                y: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute bottom-1/3 left-[10%] xl:bottom-1/3 xl:left-1/5 hidden sm:block" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path 
                variants={draw}
                initial="hidden"
                animate="visible"
                custom={1}
                d="M14.7162 40.8016C15.4583 40.4742 17.4369 38.5056 20.8244 34.7477L23.2487 32.1068L30.4872 32.9278C38.8001 33.8803 39.8581 33.8604 40.3851 32.8495C41.0097 31.6513 39.7884 30.1575 35.1466 26.5473C32.7045 24.6552 30.5993 22.9388 30.4527 22.6719C30.1221 22.1186 31.7421 19.0108 35.0185 14.0045C38.0818 9.31574 38.1467 8.82579 35.7878 7.5961C34.964 7.16668 28.456 5.58363 21.3605 4.12285C14.247 2.60512 7.15303 1.04994 5.51707 0.625696C2.03841 -0.282945 0.374956 -0.197719 0.0172402 0.853885C-0.122581 1.3048 0.609139 3.82907 1.65833 6.56644C2.70752 9.30382 4.69873 15.5322 6.05143 20.4278C10.2187 35.3619 10.5951 36.5581 11.3021 38.3076C12.0091 40.0571 13.6324 41.2366 14.7162 40.8016ZM11.4002 30.2636C10.3327 26.3738 8.72905 20.6808 7.83601 17.6438C6.94297 14.6069 6.25188 11.9134 6.27459 11.6871C6.30049 11.272 7.74324 13.0717 16.2436 24.1695C19.976 29.0674 21.0248 30.7094 20.6782 31.1002C16.5048 35.5436 14.1634 37.7515 13.7889 37.5563C13.5643 37.4392 12.5051 34.1728 11.4002 30.2636ZM13.8111 17.2348C6.70603 7.38826 5.67675 5.70887 7.71184 7.10306C14.5074 11.7884 24.9959 20.3511 28.018 23.6884C29.1123 24.8778 31.027 26.6855 32.3507 27.7089C33.6174 28.7501 34.7897 29.7898 34.8988 30.0372C35.008 30.2845 33.325 30.4072 31.2122 30.2582C29.1174 30.1662 26.4935 30.0841 25.4356 30.104L23.5279 30.1095L22.0461 28.3847C21.232 27.3889 17.5012 22.3965 13.8111 17.2348ZM25.0031 17.6882C22.696 15.6284 10.06 5.61291 9.01163 5.06638C8.05762 4.52145 10.2437 4.80389 14.9675 5.79022C17.6583 6.38337 23.1 7.36294 27.0554 7.99633C30.9735 8.61021 34.3625 9.23404 34.5872 9.35115C34.999 9.56586 34.2784 10.8569 29.7772 17.9388C28.9426 19.2657 28.095 20.2524 27.8703 20.1352C27.6831 20.0376 26.361 18.9199 25.0031 17.6882Z" fill="#F54748" />
            </motion.svg>
            <motion.svg 
              animate={{ 
                scale: [1, 1.1, 0.9, 1],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute bottom-[26%] left-[15%] xl:bottom-1/4 xl:left-[23%] hidden sm:block" width="33" height="69" viewBox="0 0 33 69" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path 
                variants={draw}
                initial="hidden"
                animate="visible"
                custom={2}
                d="M22.7165 68.1778C25.8399 66.3012 28.2205 63.705 30.1897 59.9276C31.9607 56.5302 32.4475 54.669 32.533 51.0275C32.5921 48.9434 32.4183 47.8859 31.4857 44.9222C30.4166 41.5249 30.3731 41.2605 30.7919 39.8775C32.4641 34.5252 30.0344 26.5511 24.5944 19.425C19.67 12.9906 10.3859 5.00866 3.55704 1.35823C1.21741 0.108389 0.586319 -0.129953 0.247641 0.0560614C-0.369814 0.429103 -0.0154714 0.734673 3.4347 2.92599C11.5457 8.00013 18.8898 14.4874 23.5311 20.6533C27.1185 25.3635 29.3913 30.5667 29.7739 34.8752C29.9006 36.603 29.6475 39.5226 29.346 39.6374C29.2376 39.6715 28.5051 39.048 27.7034 38.2675C25.9699 36.6085 24.7944 35.9655 22.9312 35.5985C20.9843 35.2181 19.3445 35.8135 18.3732 37.2711C17.4133 38.7648 17.2689 39.5053 17.6278 40.9614C18.0312 42.6219 19.1966 43.8639 21.1354 44.7235C23.7166 45.8576 26.0939 45.5861 28.0266 43.9651C28.5614 43.5187 29.1417 43.217 29.3318 43.316C29.807 43.5637 30.9134 47.5849 31.035 49.6121C31.4388 55.5028 28.4296 61.971 23.287 66.33C22.2174 67.2226 21.376 68.0832 21.3977 68.2154C21.4371 68.7194 21.8089 68.7017 22.7165 68.1778ZM20.0956 42.4291C19.1524 41.5144 18.6466 39.5286 19.142 38.5783C20.108 36.7252 22.1507 36.4002 24.7041 37.7615C26.8423 38.8761 28.4851 40.941 27.9898 41.8913C27.3705 43.0792 25.4737 43.9939 23.8089 43.9418C22.1327 43.8536 21.264 43.4914 20.0956 42.4291Z" fill="#F54748"/>
            </motion.svg>
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

      <section className="bg-black text-white min-h-screen relative overflow-hidden flex flex-col">
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
      
      <section className="bg-[#FDC55E] text-black min-h-screen relative overflow-hidden flex flex-col py-16 md:py-32 px-4 md:px-8">
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
                    <h3 className="text-sm sm:text-base md:text-2xl font-rock-salt leading-tight break-words">
                      {exp.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-[10px] sm:text-xs md:text-xl font-quicksand font-bold ml-6 md:ml-10">{exp.date}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-0 left-0 w-[150px] md:w-[300px] z-20 pointer-events-none"
        >
          <Image 
            src="/squid.png" 
            alt="Squidward" 
            width={300} 
            height={400} 
            className="object-contain"
          />
        </motion.div>

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute top-[20%] -right-[7%] w-[150px] -rotate-45 md:w-[350px] z-0 pointer-events-none"
        >
          <Image 
            src="/spongebob.png" 
            alt="SpongeBob" 
            width={350} 
            height={450} 
            className="object-contain"
          />
        </motion.div>

        <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="dots-exp" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="black" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots-exp)" />
          </svg>
        </div>
      </section>
    </main>
  );
}
