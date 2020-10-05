
// import Main from '../src/Main'
import data from '../src/data.json'
import { useFade } from '../src/customHooks'
import { animated } from 'react-spring'

export default function Index({ data }) {
	return (
		<div className='flex'>
			<Hero />
			{/* <Main data={data} /> */}
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
		<div className="flex flex-col justify-center items-center w-full md:max-w-xl h-screen bg-indigo-400 text-white">
			<animated.div style={props}>
				<img src="/jcmdevwhite.png" alt="jesus" className="md:ml-48" />
			</animated.div>
			<div className="flex flex-col mt-4 md:ml-48 text-2xl text-center md:text-right">
				<h1 className="font-bold">Javascript Developer</h1>
				<p>Jesus Cova 👋</p>
			</div>
		</div>
	)
}
