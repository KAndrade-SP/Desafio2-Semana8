import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


import ErrorImg from '../../assets/images/404.png'

const Error404 = () => {

  const navigate = useNavigate()

  useEffect(() => {

    toast.warn('You will be redirected to the home in 5 seconds.', {
      position: "top-center",
      autoClose: 4500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })

    const timer = setTimeout(() => {
      navigate('/')
    }, 5000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className='bg-white flex justify-center items-center py-20 sm:py-14 md:py-4'>
      <img src={ErrorImg} className='' alt="Error404Image" />
    </div>
  )
}

export default Error404