import Image from 'next/image'
import me from '../../public/me.jpg'
import { BsGithub, BsLinkedin, BsMailbox, BsRobot, } from 'react-icons/bs'
import {CgFigma} from 'react-icons/cg'
import {CiLaptop} from 'react-icons/ci'
import {FaHtml5, FaJs, FaCss3, FaPython, FaJava, FaFigma,} from 'react-icons/fa'

export default function Home() {
  return (
    <main className=" bg-slate-50 text-slate-900 px-10 overflow">
      <section id='SnehaMichelle'>
      <nav>
        <ul className=" p-4 py-4 flex justify-between space-x-2">
          <li><a href="#SnehaMichelle">Sneha Michelle</a></li>
          <li className='md:text-xs'><a href="#SnehaMichelle">Home</a> </li>
          <li><a href="#services">Services</a> </li>
          <li><a href="#skills">Skills</a> </li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <hr className=" fill-black"/>
      </nav>
      <div className=' py-20  sm:flex sm:justify-center'>
        <div>
        <div className='p-30 sm:p-40'>
          <h1 className='text-center sm:text-left text-5xl'>I am <span className=" font-bold">Sneha Michelle</span></h1>
          <h2 className='text-center sm:text-left mt-2 text-2xl'>Front-end developer, designer, and student.</h2>
          </div>
          <div className='m-5 sm:mt-0 flex justify-evenly'>
            <a href="https://github.com/Namslay26"><BsGithub className=' text-3xl'/></a>
            <a href="https://www.linkedin.com/in/sneha-michelle-vimal-1b73b0213/"><BsLinkedin className=' text-3xl'/></a>
            <a href="vsnehamichelle@gmail.com"><BsMailbox className=' text-3xl'/></a>
          </div>
        </div>
        <div className='p-30'>
          <Image  className='md:shrink-0 w-400 h-400' src={me} alt="Sneha Michelle" width={400} height={400}/>
        </div>
      </div>
      </section>
      <section className='px-20' id='services'>
        <h1 className=' text-center sm:text-left sm:py-10 sm:m-2 text-3xl font-bold'>What do I do?</h1>
        <br />
        <div className=' sm:flex sm:justify-between'>
        <div className="shadow-lg  p-5 rounded-xl my-10">
          <CgFigma className=' w-10 h-10  ' />
          <h3 className=' text-lg font-medium pt-8 pb-2'>UI/UX Design</h3>
          <p className=' py-2'>I can help you translate your ideas into presentable and intuitive designs.</p>
        </div>
        <div className="shadow-lg p-5 rounded-xl my-10">
          <CiLaptop className=' w-10 h-10 ' />
          <h3 className='text-lg font-medium pt-8 pb-2'>Front End Applications</h3>
          <p className='py-2'> Im a skilled front-end developer with expertise in HTML, CSS, JavaScript, React, and Next.js, ready to bring your web projects to life. </p>
        </div>
        <div className="shadow-lg  p-5 rounded-xl my-10">
          <BsRobot className=' w-10 h-10' />
          <h3 className=' text-lg font-medium pt-8 pb-2'>Machine Learning and Data Science</h3>
          <p className=' py-2'>Im a passionate machine learning enthusiast with a deep curiosity for the world of AI, eager to explore and innovate in the realm of machine learning. </p>
        </div>
        </div>
      </section>
      <br />
      <section className='px-5 sm:px-20 mt-20' id='skills'>
          <h1 className=' sm:text-left py-10 text-3xl font-bold'>Skills</h1>
          <div className=' py-10  flex justify-between space-x-5  sm:space-x-3'>
            <div className='flex space-x-2'>
              <div><FaHtml5 className='text-3xl'/></div>
              <div><p className='text-3xl  font-semibold'>HTML</p></div>
            </div>
            <div className='flex space-x-2'>
              <div><FaCss3 className='text-3xl'/></div>
              <div><p className='text-3xl font-semibold'>CSS</p></div>
            </div>
            <div className='flex space-x-2 '>
              <div><FaJs className='text-3xl'/></div>
              <div><p className='text-3xl font-semibold'>Javascript</p></div>
            </div>
            <div className='flex space-x-2'>
              <div><FaPython className='text-3xl'/></div>
              <div><p className='text-3xl  font-semibold'>Python</p></div>
            </div>
          </div>
          <hr />
          <div className='py-10 flex justify-evenly'>
            <div className='flex space-x-1'>
              <FaJava className='text-3xl'/><p className='text-3xl font-semibold'>Java</p>
            </div>
            <div className='flex space-x-1'>
              <FaFigma className='text-3xl'/><p className='text-3xl  font-semibold'>Figma</p>
            </div>
          </div>
      </section>
      <section className='px-20 mt-20' id='projects'>
      <h1 className='text-center sm:text-left py-10 text-3xl font-bold'>Projects</h1>
      <div>
        <h2 className='text-center sm:text-left py-5 text-2xl font-semibold'>Gesture Based Electronic Device Control - April 2023</h2>
        <p className='text-center sm:text-left'>The gesture recognition control of electronic devices project aims to develop a system that allows users to interact with electronic devices using hand gestures. The project utilizes computer vision techniques, specifically hand tracking and gesture recognition algorithms, implemented with libraries such as OpenCV and MediaPipe. By tracking the position of the hand and analyzing hand gestures, the system can interpret user actions and perform corresponding actions, such as controlling the mouse, keyboard, screen brightness, or audio playback. The project modularizes different tasks, such as hand tracking, gesture recognition, and device control, to ensure efficient and accurate interaction between the user and the electronic devices.</p>
        <h5 className='text-center sm:text-left py-3 font-medium'>Tech Stack Used:OpenCV, MediaPipe, Numpy, PyAutoGUI, Screen Brightness Control.</h5>
        <h4 className='text-center sm:text-left py-4 font-mono'><a href="https://github.com/Namslay26/gesture-recognition-project">Link to the project</a></h4>
      </div>
      <hr />
      <div>
        <h2 className='text-center sm:text-left py-5 text-2xl font-semibold'>BookIO - November 2022</h2>
        <p className='text-center sm:text-left'>Book.IO is an innovative online platform designed to streamline the process of finding and reviewing academic textbooks. It caters to teachers, professors, students, and academic enthusiasts, allowing them to save time by accessing reviews and recommendations from a diverse community. With a user-friendly interface, Book.IO aims to connect users with appropriate textbooks for their academic references, enhancing the learning experience.</p>
        <h5 className='text-center sm:text-left py-3 font-medium'>Tech Stack Used:HTML5, CSS3, JavaScript, Bootstrap, Firebase.</h5>
        <h4 className='text-center sm:text-left py-4 font-mono'><a href="https://github.com/Namslay26/BookIO">Link to the project</a></h4>
      </div>
      </section>
      <section  className='  bg-slate-950  text-white px-20 mt-20 ' id='contact'>
        <h1 className='py-10 text-3xl font-bold'>Contact me!</h1>
        <div className='py-10 sm:flex justify-evenly'>
          <div>
            <h2 className='py-5 text-2xl font-bold'>Just say hi!</h2>
            <p className='py-4 text-lg font-medium'>I would love to collaborate and work on projects together !</p>
          </div>
          <div>
            <h2 className='py-5 text-2xl font-bold'>Social Media Links</h2>
            <ul>
              <li><a href="https://github.com/Namslay26">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/sneha-michelle-vimal-1b73b0213/">LinkedIn</a></li>
              <li><a href="vsnehamichelle@gmail.com">Email</a></li>
              <li><a href="https://www.behance.net/snehamvimal">Behance</a></li>
            </ul>
          </div>
        </div>
      </section >
    </main>
  )
}
