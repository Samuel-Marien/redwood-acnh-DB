import React, { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Toaster } from '@redwoodjs/web/toast'

import MyLink from 'src/components/layoutCompos/MyLink'
import MyNavBlockLink from 'src/components/layoutCompos/MyNavBlockLink'
import NavBlock from 'src/components/layoutCompos/NavBlock'
import MyTinyLink from 'src/components/layoutCompos/MyTinyLink'

import { RiLoginCircleFill, RiLogoutCircleRLine } from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi'
import {
  GiFlatfish,
  GiSeahorse,
  GiSpottedBug,
  GiBearFace,
  GiLoveSong,
  GiPaintBrush,
  GiFamilyHouse,
  GiCubes,
  GiStoneWall,
  GiZigzagLeaf,
  GiSecretBook,
} from 'react-icons/gi'
import { SiTinyletter, SiRedwoodjs } from 'react-icons/si'
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaLeaf,
} from 'react-icons/fa'

const CardDetailLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const [show, setShow] = useState(false)

  return (
    <div className="h-max md:h-screen flex flex-col justify-between">
      <header className="">
        <nav className="px-2 lg:px-20 py-2 flex flex-col lg:flex-row items-center justify-between bg-myBrown-100">
          {/* Logo & button & logged username here :  */}
          <div className="flex justify-between w-full lg:w-auto">
            <Link to={routes.home()}>
              <div className="flex items-center text-myBrown-200 mr-6">
                <div className="border-2 border-myGreen-200 shadow-lg p-1 rounded-xl bg-myYellow-200">
                  <span className="text md:text-4xl">
                    <GiZigzagLeaf color={'#786951'} />
                  </span>
                </div>
                <p className="font-inika text-4xl ml-2  subpixel-antialiased font-black tracking-tight">
                  ACNH <span className=" text-myGreen-100">DB</span>
                </p>
              </div>
            </Link>
            {isAuthenticated ? (
              <div className="flex items-center mt-3">
                <span className="text-myBrown-200 capitalize text-sm">
                  Hi, {currentUser.name} 🐻
                </span>
              </div>
            ) : null}
            <button className="lg:hidden btn btn-square btn-ghost text-myYellow-200">
              <HiOutlineMenu
                size={35}
                onClick={() => (show ? setShow(false) : setShow(true))}
                className=""
              />
            </button>
          </div>

          {/* NavBlock & login here :  */}
          <div className="lg:flex hidden">
            {isAuthenticated ? <NavBlock /> : null}

            {isAuthenticated ? (
              <MyNavBlockLink
                onClick={logOut}
                name=""
                icon={<RiLogoutCircleRLine />}
                myRoutes={routes.home()}
              />
            ) : (
              <MyNavBlockLink
                name="Login"
                icon={<RiLoginCircleFill />}
                myRoutes={routes.login()}
              />
            )}
          </div>
        </nav>

        {/* responsive NavBar here :  */}
        {isAuthenticated ? (
          <div className="lg:hidden">
            {show ? (
              <nav className="">
                <ul>
                  <MyTinyLink
                    name="Blog"
                    icon={<GiSecretBook />}
                    myRoutes={routes.blog()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />

                  <MyTinyLink
                    name="Contact"
                    icon={<SiTinyletter />}
                    myRoutes={routes.contact()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />

                  {isAuthenticated ? (
                    <MyTinyLink
                      name="Logout"
                      icon={<RiLogoutCircleRLine />}
                      onClick={logOut}
                      myRoutes={routes.home()}
                    />
                  ) : (
                    <MyTinyLink
                      name="Login"
                      icon={<RiLoginCircleFill />}
                      myRoutes={routes.login()}
                    />
                  )}
                  <p className="font-bold uppercase font-inika text-lg flex justify-center text-myBrown-100 py-1 bg-myBlue-200">
                    DataBase
                  </p>
                  <MyTinyLink
                    name="Fish"
                    icon={<GiFlatfish />}
                    myRoutes={routes.fishsPage()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />
                  <MyTinyLink
                    name="Sea creat."
                    icon={<GiSeahorse />}
                    myRoutes={routes.seaCreatures()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />
                  <MyTinyLink
                    name="Bugs"
                    icon={<GiSpottedBug />}
                    myRoutes={routes.bugs()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />
                  <MyTinyLink
                    name="Villagers"
                    icon={<GiBearFace />}
                    myRoutes={routes.villagers()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />
                  <MyTinyLink
                    name="Songs"
                    icon={<GiLoveSong />}
                    myRoutes={routes.songs()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />
                  <MyTinyLink
                    name="Arts"
                    icon={<GiPaintBrush />}
                    myRoutes={routes.arts()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />
                  <MyTinyLink
                    name="House"
                    icon={<GiFamilyHouse />}
                    myRoutes={routes.houseware()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />
                  <MyTinyLink
                    name="Paper"
                    icon={<GiStoneWall />}
                    myRoutes={routes.papers()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />
                </ul>
              </nav>
            ) : null}
          </div>
        ) : null}

        {/* Nav bar here :  */}
        {isAuthenticated ? (
          <div className="lg:flex justify-center hidden bg-myYellow-100">
            <div className="flex ">
              <MyLink
                name="Fish"
                icon={<GiFlatfish />}
                myRoutes={routes.fishsPage()}
              />
              <MyLink
                name="Sea creat."
                icon={<GiSeahorse />}
                myRoutes={routes.seaCreatures()}
              />
              <MyLink
                name="Bugs"
                icon={<GiSpottedBug />}
                myRoutes={routes.bugs()}
              />
              <MyLink
                name="Villagers"
                icon={<GiBearFace />}
                myRoutes={routes.villagers()}
              />
              <MyLink
                name="Songs"
                icon={<GiLoveSong />}
                myRoutes={routes.songs()}
              />
              <MyLink
                name="Arts"
                icon={<GiPaintBrush />}
                myRoutes={routes.arts()}
              />
              <MyLink
                name="House"
                icon={<GiFamilyHouse />}
                myRoutes={routes.houseware()}
              />
              <MyLink
                name="Paper"
                icon={<GiStoneWall />}
                myRoutes={routes.papers()}
              />
              <MyLink name="Misc" icon={<GiCubes />} myRoutes={routes.misc()} />
            </div>
          </div>
        ) : null}
      </header>

      <Toaster />
      {/* Children here :  */}
      <main className="h-full">{children}</main>

      {/* Footer here :  */}
      <div className=" bg-myBrown-100 w-full py-2 md:py-4 flex justify-center ">
        <div className="flex flex-col md:flex-row items-center">
          <Link to={routes.home()}>
            <div className="flex items-center text-myBrown-200 mb-2 md:mb-0">
              <div className="border-2 border-myGreen-200 shadow-lg p-1 rounded-xl bg-myYellow-200">
                <span className="text md:text-4xl">
                  <GiZigzagLeaf color={'#786951'} />
                </span>
              </div>
              <p className="font-inika text-xl md:text-4xl ml-2  font-black tracking-tight">
                ACNH <span className=" text-myGreen-100">DB</span>
              </p>
            </div>
          </Link>
          <p className="text-myBrown-200 text-xs ml-5 pl-4 border-l border-r pr-4 flex  mb-2 md:mb-0">
            Build with ❤️ /{' '}
            <a href="https://redwoodjs.com/" className="flex items-center">
              <span className="mx-1">RedwoodJs</span>
              <SiRedwoodjs />
            </a>{' '}
            <a href="http://acnhapi.com/" className="flex items-center">
              <span className="mx-1">/ ACNH API</span>
              <FaLeaf />
            </a>
          </p>
          <p className="ml-5 text-2xl text-myYellow-100 flex">
            <a
              className="hover:text-myGreen-100"
              href="https://github.com/Samuel-Marien"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <FaGithubSquare />
            </a>
            <a
              className="hover:text-myGreen-100 ml-2"
              href="https://twitter.com/Samuel_Marien"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <FaTwitterSquare />
            </a>
            <a
              className="hover:text-myGreen-100 ml-2"
              href="https://www.linkedin.com/in/samuel-marien/"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <FaLinkedin />
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardDetailLayout
