import { MetaTags } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import { RiLoginCircleFill, RiHome7Line } from 'react-icons/ri'
import { GiSecretBook, GiDatabase } from 'react-icons/gi'
import { BsPencilFill } from 'react-icons/bs'

const HomePage = () => {
  const { isAuthenticated, currentUser } = useAuth()
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="flex flex-col justify-between h-full">
        <div className="uppercase ml-2 md:ml-20 mt-5 text-3xl md:text-5xl font-inika">
          <p className="text-myBrown-100">Welcome to the ultimate </p>
          <p className="mt-1 font-extrabold text-myGreen-100">ACNH DataBase</p>
        </div>
        {isAuthenticated ? (
          <div className="flex w-5/12 ml-2 md:ml-20">
            <img
              src="images/clipart1175254.png"
              alt="thibou"
              className="w-2/12 mr-3 md:mr-10 hidden md:block"
            />
            <div className="flex flex-col">
              <p className="text-3xl md:text-5xl font-inika font-bold text-myBrown-100 mb-3">
                {/* What&apos;s up!{' '} */}
                Hi,{' '}
                <span className=" capitalize text-myGreen-100">
                  {currentUser.name}
                </span>
              </p>
              <div className="flex flex-col md:flex-row text-sm">
                <Link
                  to={routes.blog()}
                  className=" text-myBrown-100 cursor-pointer transition-colors duration-300 hover:animate-pulse w-80 md:w-auto"
                >
                  <div className="flex items-center border rounded-lg p-1 px-4 shadow-lg hover:shadow-none ">
                    <div className=" text-myBlue-300 ">
                      <GiSecretBook />
                    </div>

                    <p className="ml-1  font-inika uppercase">Blog</p>
                  </div>
                </Link>
                <div className="md-0 md:ml-5">
                  <Link
                    to={routes.fishsPage()}
                    className=" text-myBrown-100 cursor-pointer transition-colors duration-300 hover:animate-pulse"
                  >
                    <div className="flex items-center border rounded-lg p-1 px-4 shadow-lg hover:shadow-none mt-3 md:mt-0">
                      <div className=" text-myBlue-300 ">
                        <GiDatabase />
                      </div>
                      <p className="ml-1  font-inika uppercase">DataBase</p>
                    </div>
                  </Link>
                </div>
                <div className="md-0 md:ml-5">
                  <Link
                    to={routes.login()}
                    className=" text-myBrown-100 cursor-pointer transition-colors duration-300 hover:animate-pulse"
                  >
                    <div className="flex items-center border rounded-lg p-1 px-4 shadow-lg hover:shadow-none  mt-3 md:mt-0">
                      <div className=" text-myBlue-300 ">
                        <RiHome7Line />
                      </div>
                      <p className="ml-1  font-inika uppercase">My Island</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex mt-5 items-end  w-5/12 ml-2 md:ml-20">
            <img
              src="images/clipart1069616.png"
              alt="thibou"
              className="w-2/12 mr-3 md:mr-10"
            />
            <div className="flex flex-col justify-center">
              <p className="text-5xl font-inika font-bold text-myBrown-100 mb-3">
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
        )}

        <img src="\images\scott-zenteno-aczine-sandz-artist-3.jpg" alt="hero" />
      </div>
    </>
  )
}

export default HomePage
