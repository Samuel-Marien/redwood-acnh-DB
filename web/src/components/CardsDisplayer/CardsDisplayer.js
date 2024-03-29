/* eslint-disable react-hooks/exhaustive-deps */
import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'
import { Pagination } from 'react-pagination-bar'
import 'react-pagination-bar/dist/index.css'
import './index.css'

import addToFavorite from 'src/components/miscFunction/addToFavorite'

import {
  BsSortNumericDown,
  BsSortNumericUpAlt,
  BsSortAlphaDown,
  BsSortAlphaUpAlt,
  BsSpeedometer,
} from 'react-icons/bs'
import {
  GiPriceTag,
  GiCutDiamond,
  GiAura,
  GiFrogFoot,
  GiPayMoney,
  GiReceiveMoney,
  GiResize,
} from 'react-icons/gi'
import { HiOutlineHashtag } from 'react-icons/hi'
import { FaUserTag } from 'react-icons/fa'
import { SiShadow } from 'react-icons/si'
import { MdMoneyOff } from 'react-icons/md'
import { VscVersions } from 'react-icons/vsc'
import { RiHeartAddFill } from 'react-icons/ri'

const Card = (props) => {
  const { item, myDataBase, myRoute } = props

  // locationCut: cut if it's multiple's words description
  const locationCut = (locationWord) => {
    if (locationWord.length > 15) {
      return locationWord.slice(0, 8) + ' ...'
    } else if (locationWord.indexOf('O') === 0) {
      return locationWord.slice(3)
    } else {
      if (locationWord.indexOf(' ') !== -1) {
        const i = locationWord.indexOf(' ')
        return locationWord.slice(0, i)
      } else {
        return locationWord
      }
    }
  }

  return (
    <div className="font-inika p-3 m-2 shadow-lg hover:shadow-none bg-white rounded-xl w-48">
      <div className="flex justify-between items-center ">
        <p className=" uppercase font-bold text-myBrown-100">
          <span>
            {item.id === 53
              ? item.name['name-EUfr'].slice(0, 10) + ' ...'
              : item.name['name-EUfr']}
          </span>
          {/* button here */}
          <button
            className="text-red-500 shadow-inner p-1 rounded-full 
              hover:shadow-none duration-300 cursor-pointer hover:text-red-700 active:text-red-300 "
            onClick={() =>
              addToFavorite(
                item.name['name-EUfr'],
                myDataBase,
                item.name['name-EUen'].replaceAll(' ', '_')
              )
            }
          >
            <RiHeartAddFill />
          </button>
          {/* Button end here  */}
        </p>
        <p className="text-sm text-myPink-100">
          #<span className="text-lg font-bold text-myBrown-100">{item.id}</span>
        </p>
      </div>
      {item.icon_uri ? (
        <Link to={myRoute}>
          <div
            className="flex justify-center rounded-full m-4 bg-myBrown-200"
            style={{
              border: `${
                item['bubble-color']
                  ? `6px solid ${item['bubble-color']}`
                  : `6px solid pink`
              }`,
            }}
          >
            <img src={item.icon_uri} alt={item.name['name-EUfr']} />
          </div>
        </Link>
      ) : (
        <div className="flex justify-center border-4 border-myPink-200 rounded-full m-4 bg-myBrown-200">
          <img src={item.image_uri} alt={item.name['name-EUfr']} />
        </div>
      )}

      {item.price ? (
        <p className="text-center mb-2 text-xl font-bold text-myBrown-100">
          {item.price} $
        </p>
      ) : null}

      {/* this section for fishs&bugs */}
      {item.availability ? (
        <div className="flex justify-between text-xs">
          <p className="capitalize flex justify-center  bg-myYellow-100 text-white font-medium rounded-full">
            {item.availability.location ? (
              <span className="p-1">
                {locationCut(item.availability.location)}
              </span>
            ) : null}
          </p>
          <p className=" flex justify-center bg-myBrown-100 text-myYellow-100 font-medium rounded-full">
            {item.availability.rarity ? (
              <span className="p-1">{item.availability.rarity}</span>
            ) : null}
          </p>
        </div>
      ) : null}
      {item.shadow && !item.availability.location ? (
        <div className="flex justify-between  text-xs">
          <p className=" capitalize flex justify-center px-1 py-1 bg-myYellow-100 text-white font-medium rounded-full">
            {item.shadow}
          </p>
          <p className="capitalize flex justify-center p-1 bg-myBrown-100 text-myYellow-100 font-medium rounded-full">
            {item.speed ? item.speed : null}
          </p>
        </div>
      ) : null}

      {/* this section for villagers */}
      <div className="flex justify-between  text-xs">
        {item.species ? (
          <p className="capitalize flex justify-center px-1 py-1 bg-myYellow-100 text-white font-medium rounded-full">
            {item.species}
          </p>
        ) : null}
        {item.personality ? (
          <p className="capitalize flex justify-center p-1 bg-myBrown-100 text-myYellow-100 font-medium rounded-full">
            {item.personality}
          </p>
        ) : null}
      </div>

      {/* this section for songs */}
      <div className="flex justify-center w-full text-myYellow-100">
        {item['buy-price'] ? (
          <div className="text-sm shadow rounded-2xl flex p-1">
            <p className="flex mr-4">
              <span className="text-xl mr-1 text-myBrown-100">
                <GiPayMoney />
              </span>
              {item['buy-price']}
            </p>
            <p className="flex">
              {' '}
              <span className="text-xl text-myBrown-100">
                <GiReceiveMoney />
              </span>
              {item['sell-price']}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

const Card2 = (props) => {
  const { item, myDataBase, myRoute } = props
  return (
    <div className=" font-inika border p-3 m-2 shadow-lg hover:shadow-none bg-white rounded-xl w-48">
      <div className="flex justify-between items-center">
        <p className=" uppercase font-bold text-myBrown-100">
          {item[0].name['name-EUfr']}
          {/* button here */}
          <button
            className="text-red-500 shadow-inner p-1 rounded-full 
              hover:shadow-none duration-300 cursor-pointer hover:text-red-700 active:text-red-300 "
            onClick={() =>
              addToFavorite(
                item[0].name['name-EUfr'],
                myDataBase,
                item[0].name['name-EUen'].replaceAll(' ', '_')
              )
            }
          >
            <RiHeartAddFill />
          </button>
          {/* Button end here  */}
        </p>
        <p className="text-xs text-myPink-100">
          #
          <span className="text-xs font-bold text-myBrown-100">
            {item[0]['internal-id']}
          </span>
        </p>
      </div>
      <Link to={myRoute}>
        <div className="flex justify-center border-4 border-myPink-200 rounded-full m-4 bg-myBrown-200">
          <img src={item[0].image_uri} alt={item[0].name['name-EUfr']} />
        </div>
      </Link>
      <div className="flex justify-center w-full text-myYellow-100">
        {item[0]['buy-price'] || item[0]['sell-price'] ? (
          <div className="text-sm shadow rounded-2xl flex p-1">
            <p className="flex mr-4">
              <span className="text-xl mr-1 text-myBrown-100">
                <GiPayMoney />
              </span>
              {item[0]['buy-price'] ? item[0]['buy-price'] : 'N/A'}
            </p>
            <p className="flex">
              {' '}
              <span className="text-xl text-myBrown-100">
                <GiReceiveMoney />
              </span>
              {item[0]['sell-price'] ? item[0]['sell-price'] : 'N/A'}
            </p>
          </div>
        ) : null}
      </div>
      <div className="flex justify-between w-full">
        <p className="flex justify-center mt-3 px-3 py-1 bg-myYellow-100 text-white  text-xs font-medium rounded-full">
          {item[0]['version']}
        </p>
        <p className="flex justify-between mt-3 px-3 py-1 bg-myYellow-100 text-white  text-xs font-medium rounded-full">
          {item[0]['size']}
        </p>
      </div>
    </div>
  )
}

const MySortButton = (props) => {
  const { name, icon, icon2, onClick } = props

  return (
    <li className=" hover:bg-myBrown-100 hover:text-myYellow-200">
      <button
        onClick={onClick}
        className="text-lg flex items-center p-2  border-t w-full  justify-between"
      >
        <span className="mr-2">{icon2}</span>
        <span className="text-sm font-inika font-extrabold">By {name}</span>
        <span className="ml-1">{icon}</span>
      </button>
    </li>
  )
}

const CardsDisplayer = (props) => {
  const { cardsDatas, dataBase } = props
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState([])
  const pagePostsLimit = 12
  const datasSanityze = []
  const originalName = []

  try {
    for (let item of Object.getOwnPropertyNames(cardsDatas)) {
      // console.log(item)
      originalName.push(item)

      datasSanityze.push(cardsDatas[item])
    }
  } catch (err) {
    console.log(err)
  }

  const sortFunction = (type, level) => {
    if (level === 'asc') {
      const sorted = datasSanityze.sort(function (a, b) {
        return a[type] - b[type]
      })
      setData(sorted)
    } else if (level === 'des') {
      const sorted = datasSanityze
        .sort(function (a, b) {
          return a[type] - b[type]
        })
        .reverse()
      setData(sorted)
    } else {
      console.log('Some error(s) with sorting methods!')
    }
  }

  const sortFunction2 = (level) => {
    let mapped = datasSanityze.map(function (e, i) {
      return { index: i, item: e, value: e.name['name-EUfr'] }
    })

    mapped.sort(function (a, b) {
      return a.value.localeCompare(b.value)
    })
    let result
    if (level === 'asc') {
      result = mapped.map(function (e) {
        return datasSanityze[e.index]
      })
    } else {
      result = mapped
        .map(function (e) {
          return datasSanityze[e.index]
        })
        .reverse()
    }
    setData(result)
  }

  const sortFunction3 = (level) => {
    let mapped = datasSanityze.map(function (e, i) {
      return { index: i, item: e, value: e.availability.rarity }
    })

    mapped.sort(function (a, b) {
      return a.value.localeCompare(b.value)
    })
    let result
    if (level === 'asc') {
      result = mapped.map(function (e) {
        return datasSanityze[e.index]
      })
    } else {
      result = mapped
        .map(function (e) {
          return datasSanityze[e.index]
        })
        .reverse()
    }
    setData(result)
  }

  const sortFunctionShadow = (level, type) => {
    let mapped = datasSanityze.map(function (e, i) {
      return { index: i, item: e, value: e[type] }
    })

    mapped.sort(function (a, b) {
      return a.value.localeCompare(b.value)
    })
    let result
    if (level === 'asc') {
      result = mapped.map(function (e) {
        return datasSanityze[e.index]
      })
    } else {
      result = mapped
        .map(function (e) {
          return datasSanityze[e.index]
        })
        .reverse()
    }
    setData(result)
  }

  const sortFunctionItems = (type, level) => {
    if (level === 'asc') {
      const sorted = datasSanityze.sort(function (a, b) {
        if (type === 'version') {
          return a[0][type].slice(2, 3) - b[0][type].slice(2, 3)
        } else if (type === 'size') {
          return a[0][type].slice(0, 1) - b[0][type].slice(0, 1)
        } else {
          return a[0][type] - b[0][type]
        }
      })
      setData(sorted)
    } else if (level === 'des') {
      const sorted = datasSanityze
        .sort(function (a, b) {
          if (type === 'version') {
            return a[0][type].slice(2, 3) - b[0][type].slice(2, 3)
          } else if (type === 'size') {
            return a[0][type].slice(0, 1) - b[0][type].slice(0, 1)
          } else {
            return a[0][type] - b[0][type]
          }
        })
        .reverse()
      setData(sorted)
    } else {
      console.log('Some error(s) with sorting methods!')
    }
  }

  // console.log(cardsDatas)
  // console.log(dataBase)
  // console.log(
  //   datasSanityze
  //     ? datasSanityze.map((item) => item).filter((item) => item.length === 2)
  //     : null
  // )
  // console.log(originalName.length)
  // console.log(data)

  return (
    <div className="px-0 sm:px-20 md:px-32 lg:px-60 bg-gradient-to-t via-myBrown-200  from-myBrown-200">
      <div className="flex items-center justify-center pb-10">
        <div className="px-4">
          <div className="group relative">
            <button className="bg-myBrown-100 text-white px-4 h-8 rounded">
              Sort
            </button>
            <nav
              className=" border-2 bg-white invisible border-myBrown-100 rounded w-48 absolute left-0 top-full
          transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-90 group-focus-within:translate-y-1"
            >
              <ul className="py-1">
                <div
                  className={
                    dataBase === 'houseware' ||
                    dataBase === 'wallmounted' ||
                    dataBase === 'misc'
                      ? 'hidden'
                      : 'block'
                  }
                >
                  <MySortButton
                    name="Id"
                    icon2={<HiOutlineHashtag />}
                    icon={<BsSortNumericDown />}
                    onClick={() => sortFunction('id', 'asc')}
                  />
                  <MySortButton
                    name="Id"
                    icon2={<HiOutlineHashtag />}
                    icon={<BsSortNumericUpAlt />}
                    onClick={() => sortFunction('id', 'des')}
                  />
                </div>
                <div
                  className={
                    dataBase === 'villagers' ||
                    dataBase === 'songs' ||
                    dataBase === 'art' ||
                    dataBase === 'houseware' ||
                    dataBase === 'wallmounted' ||
                    dataBase === 'misc'
                      ? 'hidden'
                      : 'block'
                  }
                >
                  <MySortButton
                    name="Price"
                    icon={<BsSortNumericDown />}
                    icon2={<GiPriceTag />}
                    onClick={() => sortFunction('price', 'asc')}
                  />
                  <MySortButton
                    name="Price"
                    icon={<BsSortNumericUpAlt />}
                    icon2={<GiPriceTag />}
                    onClick={() => sortFunction('price', 'des')}
                  />
                </div>
                <div
                  className={
                    dataBase === 'houseware' ||
                    dataBase === 'wallmounted' ||
                    dataBase === 'misc'
                      ? 'hidden'
                      : 'block'
                  }
                >
                  <MySortButton
                    name="Name"
                    icon2={<FaUserTag />}
                    icon={<BsSortAlphaDown />}
                    onClick={() => sortFunction2('asc')}
                  />
                  <MySortButton
                    name="Name"
                    icon={<BsSortAlphaUpAlt />}
                    icon2={<FaUserTag />}
                    onClick={() => sortFunction2('des')}
                  />
                </div>
                <div
                  className={
                    dataBase === 'sea' ||
                    dataBase === 'villagers' ||
                    dataBase === 'songs' ||
                    dataBase === 'art' ||
                    dataBase === 'houseware' ||
                    dataBase === 'wallmounted' ||
                    dataBase === 'misc'
                      ? 'hidden'
                      : 'block'
                  }
                >
                  <MySortButton
                    name="Rarity"
                    icon={<BsSortAlphaDown />}
                    icon2={<GiCutDiamond />}
                    onClick={() => sortFunction3('asc')}
                  />
                  <MySortButton
                    name="Rarity"
                    icon={<BsSortAlphaUpAlt />}
                    icon2={<GiCutDiamond />}
                    onClick={() => sortFunction3('des')}
                  />
                </div>
                {/* sort buttons for sea creatures */}
                <div className={dataBase === 'sea' ? 'block' : 'hidden'}>
                  <MySortButton
                    name="shadow"
                    icon={<BsSortAlphaDown />}
                    icon2={<SiShadow />}
                    onClick={() => sortFunctionShadow('asc', 'shadow')}
                  />
                  <MySortButton
                    name="shadow"
                    icon={<BsSortAlphaUpAlt />}
                    icon2={<SiShadow />}
                    onClick={() => sortFunctionShadow('des', 'shadow')}
                  />
                  <MySortButton
                    name="speed"
                    icon={<BsSortAlphaDown />}
                    icon2={<BsSpeedometer />}
                    onClick={() => sortFunctionShadow('asc', 'speed')}
                  />
                  <MySortButton
                    name="speed"
                    icon={<BsSortAlphaUpAlt />}
                    icon2={<BsSpeedometer />}
                    onClick={() => sortFunctionShadow('des', 'speed')}
                  />
                </div>
                {/* this section for villagers */}
                <div className={dataBase === 'villagers' ? 'block' : 'hidden'}>
                  <MySortButton
                    name="species"
                    icon={<BsSortAlphaDown />}
                    icon2={<GiFrogFoot />}
                    onClick={() => sortFunctionShadow('asc', 'species')}
                  />
                  <MySortButton
                    name="species"
                    icon={<BsSortAlphaUpAlt />}
                    icon2={<GiFrogFoot />}
                    onClick={() => sortFunctionShadow('des', 'species')}
                  />
                  <MySortButton
                    name="personality"
                    icon={<BsSortAlphaDown />}
                    icon2={<GiAura />}
                    onClick={() => sortFunctionShadow('asc', 'personality')}
                  />
                  <MySortButton
                    name="personality"
                    icon={<BsSortAlphaUpAlt />}
                    icon2={<GiAura />}
                    onClick={() => sortFunctionShadow('des', 'personality')}
                  />
                </div>
                {/* this section for songs */}
                <div className={dataBase === 'songs' ? 'block' : 'hidden'}>
                  {' '}
                  <MySortButton
                    name="Unorderable"
                    icon={<BsSortNumericDown />}
                    icon2={<MdMoneyOff />}
                    onClick={() => sortFunction('buy-price', 'asc')}
                  />
                  <MySortButton
                    name="Orderable"
                    icon={<BsSortNumericUpAlt />}
                    icon2={<GiPayMoney />}
                    onClick={() => sortFunction('buy-price', 'des')}
                  />
                </div>
                {/* this section for house&co  */}
                <div
                  className={
                    dataBase === 'houseware' ||
                    dataBase === 'wallmounted' ||
                    dataBase === 'misc'
                      ? 'block'
                      : 'hidden'
                  }
                >
                  <MySortButton
                    name="Buy price"
                    icon={<BsSortNumericDown />}
                    icon2={<GiPayMoney />}
                    onClick={() => sortFunctionItems('buy-price', 'asc')}
                  />
                  <MySortButton
                    name="Buy price"
                    icon={<BsSortNumericUpAlt />}
                    icon2={<GiPayMoney />}
                    onClick={() => sortFunctionItems('buy-price', 'des')}
                  />
                  <MySortButton
                    name="Sell price"
                    icon={<BsSortNumericDown />}
                    icon2={<GiReceiveMoney />}
                    onClick={() => sortFunctionItems('sell-price', 'asc')}
                  />
                  <MySortButton
                    name="Sell price"
                    icon={<BsSortNumericUpAlt />}
                    icon2={<GiReceiveMoney />}
                    onClick={() => sortFunctionItems('sell-price', 'des')}
                  />

                  <MySortButton
                    name="Version"
                    icon={<BsSortNumericDown />}
                    icon2={<VscVersions />}
                    onClick={() => sortFunctionItems('version', 'asc')}
                  />
                  <MySortButton
                    name="Version"
                    icon={<BsSortNumericUpAlt />}
                    icon2={<VscVersions />}
                    onClick={() => sortFunctionItems('version', 'des')}
                  />
                  <MySortButton
                    name="Size"
                    icon={<BsSortNumericDown />}
                    icon2={<GiResize />}
                    onClick={() => sortFunctionItems('size', 'asc')}
                  />
                  <MySortButton
                    name="Size"
                    icon={<BsSortNumericUpAlt />}
                    icon2={<GiResize />}
                    onClick={() => sortFunctionItems('size', 'des')}
                  />
                </div>
              </ul>
            </nav>
          </div>
        </div>

        {/* Pagination bloc */}
        {datasSanityze.length ? (
          <Pagination
            initialPage={currentPage}
            itemsPerPage={pagePostsLimit}
            onPageСhange={(pageNumber) => setCurrentPage(pageNumber)}
            totalItems={datasSanityze.length}
            pageNeighbours={1}
            startLabel={'<<'}
            endLabel={'>>'}
            nextLabel={'>'}
            prevLabel={'<'}
            customClassNames={{
              rpbItemClassName: 'bg-myBrown-100 px-2 m-1 rounded-full ',
              rpbItemClassNameActive: 'bg-yellow-500 text-myBrown-100',
              rpbItemClassNameDisable: 'opacity-50 ',
              rpbRootClassName:
                'custom-root font-inika text-myYellow-100 flex justify-center mb-1',
            }}
          />
        ) : null}
      </div>

      {/* Displayer section */}
      <div className="flex flex-row justify-center flex-wrap">
        {data.length < 1 && datasSanityze
          ? datasSanityze
              .slice(
                (currentPage - 1) * pagePostsLimit,
                (currentPage - 1) * pagePostsLimit + pagePostsLimit
              )
              .map((item, index) => {
                if (
                  dataBase !== 'houseware' &&
                  dataBase !== 'wallmounted' &&
                  dataBase !== 'misc'
                ) {
                  return (
                    <Card
                      key={item.id}
                      item={item}
                      myDataBase={dataBase}
                      myRoute={routes.details({ id: item.id, dataBase })}
                    />
                  )
                } else {
                  return (
                    <Card2
                      key={index}
                      item={item}
                      myDataBase={dataBase}
                      myRoute={routes.details({
                        id: item[0].name['name-EUen'].replaceAll(' ', '_'),
                        dataBase,
                      })}
                    />
                  )
                }
              })
          : data
              .slice(
                (currentPage - 1) * pagePostsLimit,
                (currentPage - 1) * pagePostsLimit + pagePostsLimit
              )
              .map((item, index) => {
                if (
                  dataBase !== 'houseware' &&
                  dataBase !== 'wallmounted' &&
                  dataBase !== 'misc'
                ) {
                  return (
                    <Card
                      key={item.id}
                      item={item}
                      myDataBase={dataBase}
                      myRoute={routes.details({ id: item.id, dataBase })}
                    />
                  )
                } else {
                  return (
                    <Card2
                      key={index}
                      item={item}
                      myDataBase={dataBase}
                      myRoute={routes.details({
                        id: item[0].name['name-EUen'].replaceAll(' ', '_'),
                        dataBase,
                      })}
                    />
                  )
                }
              })}
      </div>
      <div className="py-5 flex items-center justify-center">
        {datasSanityze.length ? (
          <Pagination
            initialPage={currentPage}
            itemsPerPage={pagePostsLimit}
            onPageСhange={(pageNumber) => setCurrentPage(pageNumber)}
            totalItems={datasSanityze.length}
            pageNeighbours={1}
            startLabel={'<<'}
            endLabel={'>>'}
            nextLabel={'>'}
            prevLabel={'<'}
            customClassNames={{
              rpbItemClassName: 'bg-myBrown-100 px-2 m-1 rounded-full ',
              rpbItemClassNameActive: 'bg-yellow-500 text-myBrown-100',
              rpbItemClassNameDisable: 'opacity-50 ',
              rpbRootClassName:
                'custom-root font-inika text-myYellow-100  flex justify-center mb-1',
            }}
          />
        ) : null}
      </div>
    </div>
  )
}

export default CardsDisplayer
