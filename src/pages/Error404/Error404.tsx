import ErrorImg from '../../assets/images/404.png'

const Error404 = () => {

  return (
    <div className='bg-white flex justify-center items-center py-20 sm:py-14 md:py-4'>
      <img src={ErrorImg} className='' alt="Error404Image" />
    </div>
  )
}

export default Error404