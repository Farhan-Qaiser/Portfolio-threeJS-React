import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWraper } from '../hoc'
import { fadeIn,textVariant } from '../Utils/motions'
import { testimonials } from '../Constants'


const FeedbackCard = ({ index, testimonial, name, designation, company, image}) => {
    return (
        <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)} className='bg-black-200 p-10 rounded-3xl xl:w-[23.125rem] md:w-[20rem] w-full'>
            <p className='text-white font-black text-[3rem]'>"</p>
            <div className="mt-1">
            <p className='text-white tracking-wider text-[1.1rem]'>{ testimonial }</p>
                <div className='mt-7 flex justify-between items-center gap-1'>
                    <div className='flex-1 flex flex-col'>
                        <p className='text-white font-medium text-[1rem]'>
                            <span className='blue-text-gradient'>@</span> {name}
                        </p>
                        <p className='mt-1 text-secondary text-[.7rem]'>{designation} of {company}</p>
                    </div>
                    <img src={ image } alt={`Feedback_By_${name}`} className='w-10 h-10 rounded-full object-cover'/>
            </div>
            </div>
        </motion.div>
    )
}



const Feedbacks = () => {
  return (
      <div className='mt-12 bg-black-100 rounded-[1.2rem]'>
          <div className={`${styles.padding} rounded-2xl min-h-[18.75rem]`}>
              <motion.div variants={textVariant()}>
                  <p className={styles.sectionSubText}>What others say</p>
                  <h2 className={styles.sectionHeadText}>Testimonials.</h2>
              </motion.div>
          </div>

          <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
              {testimonials.map((testimonial, index) => (
                  <FeedbackCard key={ testimonial.name } index={index} {...testimonial} />
              ))}
          </div>
    </div>
  )
}

export default SectionWraper(Feedbacks,'')
