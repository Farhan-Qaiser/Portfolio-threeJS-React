import { motion } from "framer-motion"
import { styles } from "../styles"
import ComputersCanvas from "./canvas/ComputersCanvas"


const Hero = () => {
  return (
      <section className="relative h-screen w-full mx-auto">
          <div className={`${styles.paddingX} absolute inset-0 top-[7.5rem] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
              <div className="flex flex-col justify-center items-center mt-5">
                  <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
                  <div className="w-1 sm:h-80 h-40 violet-gradient"/>
              </div>
              <div>
                  <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className="text-[#915eff]">Farhan</span></h1>
                  <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop visuals, user <br className="sm:block hidden"/> interfaces and web applications.</p>
              </div>
          </div>
              <ComputersCanvas/>
          <div className="absolute xs:bottom-10 -bottom-32 w-full flex justify-center items-center">
              <a href="#about">
                  <div  className="w-[2.2rem] h-[4rem] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                      <motion.div animate={{y:[0,24,0]}} transition={{duration:1.5,repeatType:'loop',repeat:Infinity}} className="w-3 h-3 rounded-full bg-secondary mb-1">

                    </motion.div>
                  </div>
              </a>
              </div>
    </section>
  )
}

export default Hero
