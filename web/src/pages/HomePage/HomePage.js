import { MetaTags } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { RiLoginCircleFill } from 'react-icons/ri'

import { BsPencilFill } from 'react-icons/bs'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="flex flex-col justify-between h-full">
        <div className="uppercase ml-2 md:ml-20 mt-10 text-3xl md:text-5xl font-inika">
          <p className="text-myBrown-100">Welcome to the ultimate </p>
          <p className="mt-1 font-extrabold text-myGreen-100">ACNH DataBase</p>
        </div>
        <div className="flex mt-5 items-end  w-5/12 ml-2 md:ml-20">
          <img
            src="images/clipart1069616.png"
            alt="thibou"
            className="w-1/4 mr-3 md:mr-10"
          />
          <div className="flex flex-col justify-center h-full">
            <p className="text-6xl font-inika font-bold text-myBrown-100 mb-5">
              Join US!
            </p>
            <div className="flex">
              <Link
                to={routes.login()}
                className=" text-myBrown-100 cursor-pointer transition-colors duration-300 hover:animate-pulse"
              >
                <div className="flex items-center border rounded-lg p-1 px-4 shadow-lg hover:shadow-none ">
                  <div className=" text-myBlue-300 ">
                    <RiLoginCircleFill />
                  </div>

                  <p className="ml-1  font-inika uppercase">Login</p>
                </div>
              </Link>
              <div className="w-28 ml-5">
                <Link
                  to={routes.signup()}
                  className=" text-myBrown-100 cursor-pointer transition-colors duration-300 hover:animate-pulse"
                >
                  <div className="flex items-center border rounded-lg p-1 px-4 shadow-lg hover:shadow-none ">
                    <div className=" text-myBlue-300 ">
                      <BsPencilFill />
                    </div>
                    <p className="ml-1  font-inika uppercase">Signup</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <img src="\images\scott-zenteno-aczine-sandz-artist-3.jpg" alt="hero" />
      </div>
    </>
  )
}

export default HomePage
