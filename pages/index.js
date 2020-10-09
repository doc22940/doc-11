
import Main from '../components/main'
import data from '../src/data.json'
import { useFade } from '../src/customHooks'
import { animated } from 'react-spring'
import {AiOutlineArrowDown} from 'react-icons/ai'

export default function Index({ data }) {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2'>


			<Hero />



			<Main {...data}/>


		</div>
	)
}

export function getStaticProps() {
	return {
		props: { data },
	}
}

function Hero() {
	const { props } = useFade()
	return (
		<div className="grid col-span-1  justify-center items-center  h-screen bg-indigo-400 text-white">
			<animated.div style={props}>
				<img src="/jcmdevwhite.png" alt="jesus" className="md:ml-48" />
			</animated.div>
			<div className="flex flex-col mt-4 md:ml-48 text-2xl text-center md:text-right">
				<h1 className="font-bold">JavaScript Developer</h1>
				<p>Jesus Cova 👋</p>
				<AiOutlineArrowDown className='self-center animate-bounce mt-3 md:hidden'/>
			</div>
		</div>
	)
}
