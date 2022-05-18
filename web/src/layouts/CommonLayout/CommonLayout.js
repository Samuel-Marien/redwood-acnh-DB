import React, { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import {
  RiLoginCircleFill,
  RiSunFill,
  RiMoonFill,
  RiLogoutCircleRLine,
} from 'react-icons/ri'
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
} from 'react-icons/gi'

const MyLink = (props) => {
  const { myRoutes, icon, name } = props
  return (
    <Link
      className="flex text-myGreen-100 hover:text-myGreen-200 cursor-pointer mr-4 transition-colors duration-300 hover:animate-pulse"
      to={myRoutes}
    >
      <div className="flex flex-col items-center ">
        <div className="text-2xl">{icon}</div>
        <p className="text-center text-xs">{name}</p>
      </div>
    </Link>
  )
}

const LoginBlock = () => {
  return (
    <>
      <MyLink
        name="Login"
        icon={<RiLoginCircleFill />}
        myRoutes={routes.bugs()}
      />
      <div className="flex flex-col">
        <span className="mb-2 text-myGreen-100 hover:text-myGreen-200 cursor-pointer">
          <RiMoonFill />
        </span>
        <span className=" text-myGreen-100 hover:text-myGreen-200 cursor-pointer">
          <RiSunFill />{' '}
        </span>
      </div>
    </>
  )
}

const MyTinyLink = (props) => {
  const { myRoutes, icon, name, onClick } = props
  return (
    <Link to={myRoutes} onClick={onClick}>
      <li className="flex items-center pl-2  border-b py-2 shadow bg-slate-200 hover:bg-slate-400 transition-colors duration-300">
        <span className="mr-2 text-2xl text-myBlue-100">{icon}</span>
        <span className="text-myBlue-100 ">{name}</span>
      </li>
    </Link>
  )
}

const CommonLayout = ({ children }) => {
  const [show, setShow] = useState(false)

  return (
    <div className="h-screen flex flex-col">
      <header className="">
        <nav className="px-2 lg:px-20 py-2 flex flex-col lg:flex-row items-center justify-between bg-myBrown-100">
          <div className="flex justify-between w-full lg:w-auto">
            <Link to={routes.home()}>
              <div className="flex items-center text-myBrown-200 mr-6">
                <div className="border-2 border-myBrown-200 shadow-lg p-1 rounded-xl bg-myYellow-200">
                  <GiZigzagLeaf size={40} color={'#786951'} />
                </div>
                <p className="font-inika text-4xl ml-2  subpixel-antialiased font-black tracking-tight">
                  ACNH <span className=" text-myGreen-100">DB</span>
                </p>
              </div>
            </Link>
            <button className="lg:hidden btn btn-square btn-ghost text-myYellow-200">
              <HiOutlineMenu
                size={35}
                onClick={() => (show ? setShow(false) : setShow(true))}
                className="shadow rounded p-1"
              />
            </button>
          </div>
          <div className="lg:flex items-center hidden">
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
                myRoutes={routes.bugs()}
              />
              <MyLink
                name="Songs"
                icon={<GiLoveSong />}
                myRoutes={routes.bugs()}
              />
              <MyLink
                name="Arts"
                icon={<GiPaintBrush />}
                myRoutes={routes.bugs()}
              />
              <MyLink
                name="House"
                icon={<GiFamilyHouse />}
                myRoutes={routes.bugs()}
              />
              <MyLink
                name="Paper"
                icon={<GiStoneWall />}
                myRoutes={routes.bugs()}
              />
              <MyLink name="Misc" icon={<GiCubes />} myRoutes={routes.bugs()} />
            </div>
          </div>
          <div className="lg:flex hidden" items-center>
            <LoginBlock />
          </div>
        </nav>
        <div className="lg:hidden">
          {show ? (
            <nav className="">
              <ul>
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
                  myRoutes={routes.bugs()}
                  onClick={() => (show ? setShow(false) : setShow(true))}
                />
                <MyTinyLink
                  name="Songs"
                  icon={<GiLoveSong />}
                  myRoutes={routes.bugs()}
                  onClick={() => (show ? setShow(false) : setShow(true))}
                />
                <MyTinyLink
                  name="Arts"
                  icon={<GiPaintBrush />}
                  myRoutes={routes.bugs()}
                  onClick={() => (show ? setShow(false) : setShow(true))}
                />
                <MyTinyLink
                  name="House"
                  icon={<GiFamilyHouse />}
                  myRoutes={routes.bugs()}
                  onClick={() => (show ? setShow(false) : setShow(true))}
                />
                <MyTinyLink
                  name="Paper"
                  icon={<GiStoneWall />}
                  myRoutes={routes.bugs()}
                  onClick={() => (show ? setShow(false) : setShow(true))}
                />
                <MyTinyLink
                  name="Misc"
                  icon={<GiCubes />}
                  myRoutes={routes.bugs()}
                  onClick={() => (show ? setShow(false) : setShow(true))}
                />

                <MyTinyLink
                  name="Login"
                  icon={<RiLoginCircleFill />}
                  myRoutes={routes.bugs()}
                  onClick={() => (show ? setShow(false) : setShow(true))}
                />
                <MyTinyLink
                  name="Logout"
                  icon={<RiLogoutCircleRLine />}
                  myRoutes={routes.bugs()}
                  onClick={() => (show ? setShow(false) : setShow(true))}
                />
              </ul>
            </nav>
          ) : null}
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default CommonLayout
