import { useState } from 'react'
import addToFavorite from 'src/components/miscFunction/addToFavorite'

import { RiHeartAddFill, RiPaintBrushFill } from 'react-icons/ri'
import { IoCaretBackOutline, IoCaretForwardOutline } from 'react-icons/io5'
import {
  GiPayMoney,
  GiReceiveMoney,
  GiSwapBag,
  GiGearStickPattern,
  GiBookshelf,
  GiForest,
  GiClosedDoors,
} from 'react-icons/gi'
import { MdPhotoSizeSelectSmall, MdLabelImportantOutline } from 'react-icons/md'
import { GoVersions } from 'react-icons/go'
import { BsShopWindow, BsFillTagFill } from 'react-icons/bs'
import { FaTools } from 'react-icons/fa'
import { AiOutlineInteraction } from 'react-icons/ai'

const MyPills = (props) => {
  const { data, myBg } = props
  return (
    <>
      {data ? (
        <p
          className={
            'font-sans rounded-full p-1 px-2 text-xs font-bold text-white w-max ' +
            myBg
          }
        >
          {data ? data.slice(0, 1).toUpperCase() + data.slice(1) : null}
        </p>
      ) : null}
    </>
  )
}

const MyInteractiveLogo = (props) => {
  const { data, icon } = props
  return (
    <div
      className={
        'bg-white text-xl md:text-3xl p-2 shadow w-max rounded-full ' +
        `${data ? 'text-green-500' : 'text-red-400'}`
      }
    >
      {icon}
    </div>
  )
}

const MyTooltip = (props) => {
  const { title } = props
  return (
    <span className="tooltip rounded shadow-lg p-2 font-sans bg-gray-200 text-myBrown-100 -mt-8 ">
      {title}
    </span>
  )
}

const ItemDetails = (props) => {
  const [state, setState] = useState(0)
  const [myVariant, setMyVariant] = useState('')
  const [myColor1, setMyColor1] = useState('')
  const [myColor2, setMyColor2] = useState('')
  const [myPattern, setMyPattern] = useState('')
  const [myPatternTitle, setMyPatternTitle] = useState('')
  const [prev, setPrev] = useState(0)
  const [next, setNext] = useState(4)

  const { data, dataBase } = props
  // console.log(data)

  const changeImageOnClick = (uservariantId) => {
    return data.map((item, index) => {
      if (item['variant-id'] === uservariantId) {
        console.log(item)
        setState(index)
        setMyVariant(item.variant)
        setMyColor1(item['color-1'])
        setMyColor2(item['color-2'])
        setMyPattern(item['pattern'])
        setMyPatternTitle(item['pattern-title'])
      }
    })
  }

  const handleClickPlus = (maxItem) => {
    if (next === maxItem) {
      return
    } else {
      setPrev(prev + 1)
      setNext(next + 1)
    }
  }

  const handleClickMinus = () => {
    if (prev === 0) {
      return
    } else {
      setPrev(prev - 1)
      setNext(next - 1)
    }
  }

  return (
    <>
      {data.length !== 0 ? (
        <div
          className="shadow-lg py-4 px-2 md:px-8 font-inika 
         w-10/12 xl:w-7/12 2xl:w-5/12 mx-auto bg-myBrown-200 rounded-xl"
        >
          {/* header  */}
          <div className="flex items-center">
            <button
              className="text-red-500 text-3xl shadow-inner p-1 rounded-full 
              hover:shadow-none duration-300 cursor-pointer hover:text-red-700 active:text-red-300 "
              onClick={() =>
                addToFavorite(
                  data[0].name['name-EUfr'],
                  dataBase,
                  data[0].name['name-EUen'].replaceAll(' ', '_')
                )
              }
            >
              <RiHeartAddFill />
            </button>
            <h2 className="text-2xl md:text-4xl font-extrabold text-myBrown-100 mx-auto uppercase">
              {data[0].name['name-EUfr']}
            </h2>
            <p className=" font-thin">
              #
              <span className="text-xl font-extrabold text-myPink-200">
                {data[0]['internal-id']}
              </span>
            </p>
          </div>
          <p className="flex justify-center my-2 italic text-slate-400">
            {data[0]['source-detail']}
          </p>

          {/* body */}
          <div className="flex flex-col md:flex-row justify-around">
            {/* Section image  */}
            <div className="w-full md:w-80 shadow-md rounded-xl border-x-2 border-b-2 border-white rounded-b-xl">
              {/* Main image  */}
              <div className="rounded-t-xl flex justify-center w-full  bg-white rounded">
                <img
                  src={data[state].image_uri}
                  alt={data[state].name['name-EUfr']}
                  className="w-40 transition-all duration-700"
                />
              </div>

              {/* Carousel  */}
              <div className="py-2 flex rounded-b-xl">
                {data.length > 4 ? (
                  <button
                    onClick={() => handleClickMinus()}
                    className=" text-2xl text-myBlue-300 flex justify-center items-center 
                active:text-myGreen-200 transition-all"
                  >
                    <IoCaretBackOutline />
                  </button>
                ) : null}

                {/* Displayer fo 4 pics or more  */}
                {data.length >= 4 ? (
                  <div className="flex  mx-auto ">
                    {data.slice(prev, next).map((item, i) => {
                      return (
                        <div
                          key={i}
                          className="m-1 flex justify-center items-center "
                        >
                          <button
                            onMouseEnter={() =>
                              changeImageOnClick(item['variant-id'])
                            }
                            className="shadow-md bg-white rounded-2xl hover:bg-slate-200 
                        transition-all active:shadow-inner focus:ring focus:ring-slate-300"
                          >
                            <img
                              src={item.image_uri}
                              alt={item.name['name-EUfr']}
                            />
                          </button>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  // Displayer for 4 pics or less
                  <div className="flex justify-evenly w-full">
                    {data.map((item, i) => {
                      return (
                        <button
                          key={i}
                          onMouseEnter={() =>
                            changeImageOnClick(item['variant-id'])
                          }
                          className=" bg-white rounded-2xl hover:bg-slate-200 
                        transition-all active:shadow-inner focus:ring focus:ring-slate-300"
                        >
                          <img
                            src={item.image_uri}
                            alt={item.name['name-EUfr']}
                            className="w-16"
                          />
                        </button>
                      )
                    })}
                  </div>
                )}
                {data.length > 4 ? (
                  <button
                    onClick={() => handleClickPlus(data.length)}
                    className="text-2xl text-myBlue-300 flex justify-center items-center 
                active:text-myGreen-200 transition-all"
                  >
                    <IoCaretForwardOutline />
                  </button>
                ) : null}
              </div>
            </div>
            {/* Section info  */}
            <div className="px-2 w-full md:w-48 ">
              {/* Price section  */}
              <div className="mt-2 md:mt-0  ">
                <p className="flex text-xl font-bold justify-center ">
                  <span className="text-xl  text-myBlue-100 self-end">
                    <GiPayMoney />
                  </span>
                  <span className="ml-1 text-myBrown-100">
                    {data[0]['buy-price'] ? (
                      data[0]['buy-price']
                    ) : (
                      <span className="text-sm">N/A</span>
                    )}
                  </span>
                  <span className="text-2xl mx-2 text-myBlue-100 self-center">
                    <GiSwapBag />
                  </span>
                  <span className="mr-1 text-myBrown-100">
                    {data[0]['sell-price'] ? (
                      data[0]['sell-price']
                    ) : (
                      <span className="text-sm">N/A</span>
                    )}
                  </span>
                  <span className="text-xl text-myBlue-100  self-center">
                    <GiReceiveMoney />
                  </span>
                </p>
              </div>

              {/* Body title section  */}
              {data[0]['body-title'] ? (
                <div className="mt-2">
                  <p className="flex items-center text-myBrown-100 font-bold">
                    <span className="text-myBlue-100 text-xl">
                      <MdLabelImportantOutline />
                    </span>
                    {data[0]['body-title']}
                  </p>
                </div>
              ) : null}

              {/* Concept, light-type & speaker-type section */}
              <div className="mt-2 flex md:block justify-center md:justify-start">
                <div className="flex">
                  <MyPills
                    data={data[0]['hha-concept-1']}
                    myBg="bg-myPink-200 mr-1"
                  />
                  <MyPills
                    data={data[0]['hha-concept-2']}
                    myBg="bg-myGreen-200"
                  />
                </div>
                <div className="flex mt-0 md:mt-1 ml-1 md:ml-0">
                  <MyPills
                    data={data[0]['hha-series']}
                    myBg="bg-myYellow-200 mr-1"
                  />
                  <MyPills data={data[0]['hha-set']} myBg="bg-myBlue-200" />
                  <MyPills
                    data={data[0]['lighting-type']}
                    myBg="bg-myBlue-200"
                  />
                  <MyPills
                    data={data[0]['speaker-type']}
                    myBg="bg-myBlue-200"
                  />
                </div>
              </div>

              {/* Source  */}
              <div className="mt-4 text-xl">
                {data[0].source !== 'Crafting' ? (
                  <p className="text-myBlue-100 flex items-baseline font-bold justify-center md:justify-start">
                    <BsShopWindow />
                    <span className="ml-1 text-myBrown-100">
                      {data[0].source}
                    </span>
                  </p>
                ) : (
                  <p className="text-myBlue-100 flex items-baseline font-bold ">
                    <FaTools />
                    <span className="ml-1 text-myBrown-100">
                      {data[0].source}
                    </span>
                  </p>
                )}
              </div>

              {/* Tag(s)  */}
              {data[0].tag ? (
                <div className="mt-2 font-sans">
                  <p className="flex items-center text-myBrown-100 italic">
                    <span className="text-myBlue-100 mr-2">
                      <BsFillTagFill />
                    </span>
                    <span className="font-thin text-myBlue-100">#</span>
                    {data[0].tag.replace(' ', ` #`)}
                  </p>
                </div>
              ) : null}

              {/* Size, version  */}
              <div className="mt-2">
                <div className="flex">
                  <p className="mr-2 flex items-center text-myBlue-100 text-xl">
                    <MdPhotoSizeSelectSmall />
                    <span className="mx-2 text-myBrown-100 text-base font-sans">
                      {data[0].size}
                    </span>
                  </p>
                  <p className="flex items-center text-myBlue-100 text-xl">
                    <GoVersions />
                    <span className="text-myBrown-100 text-base ml-1 font-sans">
                      {data[0].version}
                    </span>
                  </p>
                </div>
              </div>

              {/* Variant & colors  */}
              <div className="mt-2">
                <div className="flex items-center">
                  {myVariant ? (
                    <>
                      <p className="flex items-center mr-2 text-myBlue-100">
                        <span className="mr-2 text-xl">
                          <RiPaintBrushFill />
                        </span>
                        <span className="text-myBrown-100 font-sans">
                          {myVariant}
                        </span>
                      </p>
                      <p
                        className={
                          'mr-1 rounded-full w-5 h-5 ' +
                          `${
                            myColor1 === 'Beige' || myColor1 === 'White'
                              ? 'border border-myBrown-100'
                              : ''
                          }`
                        }
                        style={{
                          backgroundColor: `${myColor1}`,
                        }}
                      ></p>
                      <p
                        className={
                          ' rounded-full w-5 h-5 ' +
                          `${
                            myColor1 === 'Beige' || myColor1 === 'White'
                              ? 'border border-myBrown-100'
                              : ''
                          }`
                        }
                        style={{
                          backgroundColor: `${myColor2}`,
                        }}
                      ></p>
                    </>
                  ) : (
                    <>
                      <p className="flex items-center mr-2 text-myBlue-100">
                        <span className="mr-2 text-xl">
                          <RiPaintBrushFill />
                        </span>
                        <span className="text-myBrown-100 font-sans">
                          {data[0].variant}
                        </span>
                      </p>
                      <p
                        className={
                          'mr-1 rounded-full w-5 h-5 ' +
                          `${
                            data[0]['color-1'] === 'Beige' ||
                            data[0]['color-1'] === 'White'
                              ? 'border border-myBrown-100'
                              : ''
                          }`
                        }
                        style={{
                          backgroundColor: `${data[0]['color-1']}`,
                        }}
                      ></p>
                      <p
                        className={
                          ' rounded-full w-5 h-5 ' +
                          `${
                            data[0]['color-2'] === 'Beige' ||
                            data[0]['color-2'] === 'White'
                              ? 'border border-myBrown-100'
                              : ''
                          }`
                        }
                        style={{
                          backgroundColor: `${data[0]['color-2']}`,
                        }}
                      ></p>
                    </>
                  )}
                </div>
              </div>

              {/* Pattern & pattern title  */}
              {myPattern && myPatternTitle ? (
                <div className="mt-2 flex items-center text-myBrown-100 font-sans">
                  <span className="text-xl text-myBlue-100 mr-2">
                    <GiGearStickPattern />
                  </span>
                  <p>{myPattern}</p>
                  <p> /{myPatternTitle}</p>
                </div>
              ) : (
                <>
                  {data[0].pattern && data[0]['pattern-title'] ? (
                    <div className="mt-2 flex items-center text-myBrown-100 font-sans">
                      <span className="mr-2 text-xl text-myBlue-100">
                        <GiGearStickPattern />
                      </span>
                      <p>{data[0].pattern ? data[0].pattern : null}</p>
                      <p>
                        /
                        {data[0]['pattern-title']
                          ? data[0]['pattern-title']
                          : null}
                      </p>
                    </div>
                  ) : null}
                </>
              )}
            </div>

            {/* options section I */}
            <div className="mt-4 md:mt-0">
              <div className="shadow rounded-xl pb-2 ">
                <p className=" py-2 px-10 rounded-t-xl text-sm font-sans bg-myBrown-100 text-myBrown-300">
                  Customizable
                  <span className="inline md:hidden"> / General</span>
                </p>
                <div className="flex justify-evenly mt-2 ">
                  <div className="has-tooltip">
                    <MyTooltip title="Can you customize the body?" />
                    <MyInteractiveLogo
                      data={data[0].canCustomizeBody}
                      icon={<RiPaintBrushFill />}
                    />
                  </div>
                  <div className="has-tooltip">
                    <MyTooltip title="Can you customize the pattern?" />
                    <MyInteractiveLogo
                      data={data[0].canCustomizePattern}
                      icon={<GiGearStickPattern />}
                    />
                  </div>
                  <div className="has-tooltip block md:hidden">
                    <MyTooltip title="Can the item be ordered from the catalog?" />
                    <MyInteractiveLogo
                      data={data[0].isCatalog}
                      icon={<GiBookshelf />}
                    />
                  </div>
                  <div className="has-tooltip block md:hidden">
                    <MyTooltip title="Can the item be crafted?" />
                    <MyInteractiveLogo
                      data={data[0].isDIY}
                      icon={<FaTools />}
                    />
                  </div>
                  <div className="has-tooltip block md:hidden">
                    <MyTooltip title="Can you interact with the item?" />
                    <MyInteractiveLogo
                      data={data[0].isInteractive}
                      icon={<AiOutlineInteraction />}
                    />
                  </div>
                  <div className="has-tooltip block md:hidden">
                    <MyTooltip title="Can the item be placed outdoors?" />
                    <MyInteractiveLogo
                      data={data[0].isOutdoor}
                      icon={<GiForest />}
                    />
                  </div>
                  <div className="has-tooltip block md:hidden">
                    <MyTooltip title="Can the item be a door deco?" />
                    <MyInteractiveLogo
                      data={data[0].isDoorDeco}
                      icon={<GiClosedDoors />}
                    />
                  </div>
                </div>
              </div>

              {/* options section II */}
              <div className="mt-2 shadow rounded-xl pb-2 hidden md:block">
                <p className="text-center py-2 px-10 rounded-t-xl text-sm font-sans bg-myBrown-100 text-myBrown-300">
                  General
                </p>
                <div className="flex justify-evenly mt-2">
                  <div className="has-tooltip">
                    <MyTooltip title="Can the item be ordered from the catalog?" />
                    <MyInteractiveLogo
                      data={data[0].isCatalog}
                      icon={<GiBookshelf />}
                    />
                  </div>
                  <div className="has-tooltip">
                    <MyTooltip title="Can the item be crafted?" />
                    <MyInteractiveLogo
                      data={data[0].isDIY}
                      icon={<FaTools />}
                    />
                  </div>
                </div>
                <div className="flex justify-evenly mt-2">
                  <div className="has-tooltip">
                    <MyTooltip title="Can you interact with the item?" />
                    <MyInteractiveLogo
                      data={data[0].isInteractive}
                      icon={<AiOutlineInteraction />}
                    />
                  </div>
                  <div className="has-tooltip">
                    <MyTooltip title="Can the item be placed outdoors?" />
                    <MyInteractiveLogo
                      data={data[0].isOutdoor}
                      icon={<GiForest />}
                    />
                  </div>
                  <div className="has-tooltip">
                    <MyTooltip title="Can the item a be door deco?" />
                    <MyInteractiveLogo
                      data={data[0].isDoorDeco}
                      icon={<GiClosedDoors />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default ItemDetails
