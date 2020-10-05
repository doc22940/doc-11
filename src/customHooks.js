import { useSpring } from 'react-spring'

export function useFade() {
	const props = useSpring({ from: { opacity: 0 }, opacity: 1 })
	return { props }
}
