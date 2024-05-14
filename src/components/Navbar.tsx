import { useState, useRef } from "react"

const Navbar = () => {

  const ref = useRef<HTMLDivElement>(null)
  const [toggle, setToggle] = useState(false)

  const outsideClick = (e: MouseEvent) => {

    const element = ref.current

    if (toggle && element && !element.contains(e.target as Node)) {
      setToggle(!toggle)
    }
  }

  const handleClick = () => {
    setToggle(!toggle)
  }

  document.addEventListener("mousedown", outsideClick)

  return (
    <header ref={ref} className="w-full h-[80px]">
      <div className="max-w-[1280px] mx-5 lg:m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        
        <p className="text-lg">Logo</p>

        <div className="hidden md:flex items-center ">
          <ul className="flex gap-4">
            <li className="text-sm">Home</li>
            <li className="text-sm">Register</li>
            <li className="text-sm">Products</li>
            <li className="text-sm">About us</li>
          </ul>
        </div>

        <div className="hidden md:flex">

          <div>
            <a
              onClick={handleClick}
              className="flex justify-end gap-4 items-center cursor-pointer hover:text-[#a0a2ab]"
            >
              <p className="lg:m-auto md:text-sm">UserIcon</p>
            </a>

            <div
              onClick={handleClick}
              className={
                toggle
                  ? "absolute bg-slate-400 rounded-xl mt-0.1 dropdown translate-y-10 z-10 w-[150px] px-2"
                  : "hidden"
              }
            >
                
              <ul>
                <div className="flex pl-4 pt-2 items-center nav-link">
                  <li className="p-4">Perfil</li>
                </div>
                  
                <div className="flex pl-4 pt-2 items-center nav-link">
                  <li className="p-4">Sair</li>
                </div>
              </ul>

            </div>
          </div>

        </div>

      </div>
    </header>
  )
}

export default Navbar
