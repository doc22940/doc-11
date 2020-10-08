import {useState} from 'react'
import { SiJavascript } from 'react-icons/si'
import { FiFolder, FiMessageSquare } from 'react-icons/fi'
import { useFade } from '../src/customHooks'
import {animated} from 'react-spring'
import { AiOutlineMobile, AiOutlineCloudServer } from 'react-icons/ai'
import { BsLock } from 'react-icons/bs'
import { VscGithubAlt } from 'react-icons/vsc'
import { HiOutlineUserAdd } from 'react-icons/hi'
import { RiLinkedinLine } from 'react-icons/ri'
import { CgInstagram } from 'react-icons/cg'

export default function Main({social, chars}) {
  const [nav, setNav] = useState('SERVICES')
  const changeNav = (newVal) => setNav(newVal)
  return(
    <div className='flex flex-col justify-center items-center p-2 '>
      <nav className="flex p-5 px-1 shadow-lg text-indigo-600 font-bold rounded-lg mb-4">
        <ButtonNav text="Services" onClick={() => changeNav('SERVICES')} />
        <ButtonNav text="Stack" onClick={() => changeNav('STACK')} />
        <ButtonNav text="Portfolio" onClick={() => changeNav('PORTFOLIO')} />
      </nav>

      <section className='h-full shadow-lg rounded-lg'>
        {nav === 'SERVICES' && <Services social={social} chars={chars} />}
      </section>

    </div>
  )
}

const ButtonNav = ({ text, onClick }) => (
	<div
		onClick={onClick}
		className="flex items-center py-3 w-32 mx-1 rounded-lg transition 
	duration-300 justify-evenly cursor-pointer hover:bg-gray-400 hover:text-white"
	>
		{text === 'Services' && <FiMessageSquare />}
		{text === 'Stack' && <SiJavascript className="ml-2" />}
		{text === 'Portfolio' && <FiFolder />}

		<h2 className="text-lg">{text}</h2>
	</div>
)

const Services = ({social, chars}) => {
  const {props} = useFade()
  return(
    <animated.div style={props}>
      <div className='w-full pb-2 pt-6'>
			<h1 className="text-center text-gray-800 text-2xl font-bold">Services</h1>


      {chars.map((char) => (
				<DescriptionChar key={char.id} text={char.text} icon={char.icon} />
			))}

      <nav className="flex items-center justify-center mt-16">
        {social.map((social) => (
          <a
            key={social.id}
            href={social.url}
            aria-label={social.ariaLabel}
            target="_blank"
            rel="noopener"
            className="mx-3 p-3 rounded-full text-indigo-500 text-2xl transition duration-300  hover:bg-indigo-100 "
          >
            {social.social === 'github' && <VscGithubAlt />}
            {social.social === 'linkedin' && <RiLinkedinLine />}
            {social.social === 'instagram' && <CgInstagram />}
          </a>
        ))}
      </nav>

      </div>
    </animated.div>
  )
}


const DescriptionChar = ({ text, icon }) => {
	return (
		<div className="flex items-base my-1 mx-10 p-3 px-5 text-gray-600 rounded-lg transition duration-300 hover:bg-gray-300 hover:text-gray-500">
			{icon === 'platform' && (
				<AiOutlineMobile className="text-indigo-400 text-2xl" />
			)}
			{icon === 'auth' && <BsLock className="text-indigo-400 text-2xl" />}
			{icon === 'api' && (
				<AiOutlineCloudServer className="text-indigo-400 text-2xl" />
			)}
			{icon === 'seo' && (
				<HiOutlineUserAdd className="text-indigo-400 text-2xl" />
			)}
			<p className="ml-4 mr-8 text-lg">{text}</p>
		</div>
	)
}
  