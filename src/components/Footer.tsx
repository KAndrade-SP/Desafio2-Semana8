

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-row justify-around">

        <div className="flex flex-col gap-4">
          <h2 className="text text-5xl font-ebgaramond-bold mb-4">Stay fresh</h2>
          <p className="text-sm font-raleway-regular">compassinhos@gmail.com</p>
          <p className="text-sm font-raleway-regular">+55 41 99999-9999</p>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row gap-10">

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-raleway-bold">Links</h3>
              <ul className="leading-9">
                <li className="font-raleway-regular">About us</li>
                <li className="font-raleway-regular">Products</li>
                <li className="font-raleway-regular">Blogs</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-raleway-bold">Community</h3>
              <ul className="leading-9">
                <li className="font-raleway-regular">About us</li>
                <li className="font-raleway-regular">Products</li>
                <li className="font-raleway-regular">Blogs</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer