import {useState} from 'react'
import { SiJavascript } from 'react-icons/si'
import { FiFolder, FiMessageSquare } from 'react-icons/fi'

export default function Main() {
  const [nav, setNav] = useState('DESCRIPTION')
  const changeNav = (newVal) => setNav(newVal)
  return(
    <div className='flex flex-col justify-center items-center p-2 '>
      <nav className="flex p-5 px-1 shadow-lg text-indigo-600 font-bold rounded-lg mb-4">
        <ButtonNav text="Services" onClick={() => changeNav('DESCRIPTION')} />
        <ButtonNav text="Stack" onClick={() => changeNav('STACK')} />
        <ButtonNav text="Portfolio" onClick={() => changeNav('PORTFOLIO')} />
      </nav>

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