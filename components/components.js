import {useState} from 'react'
import {AiOutlineLoading, AiOutlineCheck} from 'react-icons/ai'
import {motion} from 'framer-motion'

export function ButtonUpload({classProps}) {
  const [state, setState] = useState('idle')

  function changeState() {
    setState('loading')
    setInterval(() => {
      setState('loaded')
    }, 2000)
  }
  return(
    <button className={`flex items-center transition duration-300 ${state === 'loading' ? 'px-8' : 'px-4'} ${state === 'loaded' ? 'bg-green-300' : 'bg-black'} py-3  rounded-full text-white focus:outline-none ${classProps}`} onClick={changeState}>
     {state === 'loading' && <LoadingSpin />}
     {state === 'idle' && <p>SUBIR ARCHIVO</p>}
     {state === 'loading' && <MovedText />}
     {state === 'loaded' && <motion.div initial={{opacity: 0}} animate={{ opacity: 1, transition: 'ease-in-out' }}>
       <AiOutlineCheck className='text-green-500' />
     </motion.div>}
   </button>
  )
}


const LoadingSpin = () => <motion.div initial={{opacity: 0}} animate={{ opacity: 1 }}  className='mr-4'>
<AiOutlineLoading className='animate-spin transition duration-300' />
</motion.div>

const MovedText = () => <motion.p initial={{ x: 0}} animate={{x: 20, transition: 'ease-in-out'}}>
          
SUBIR ARCHIVO
</motion.p>