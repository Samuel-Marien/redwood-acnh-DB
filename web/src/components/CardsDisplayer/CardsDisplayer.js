/* eslint-disable react-hooks/exhaustive-deps */
import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'
import { Pagination } from 'react-pagination-bar'
import 'react-pagination-bar/dist/index.css'
import './index.css'
import {
  BsSortNumericDown,
  BsSortNumericUpAlt,
  BsSortAlphaDown,
  BsSortAlphaUpAlt,
} from 'react-icons/bs'
import { GiPriceTag, GiCutDiamond } from 'react-icons/gi'
import { HiOutlineHashtag } from 'react-icons/hi'
import { FaUserTag } from 'react-icons/fa'
import { SiShadow } from 'react-icons/si'
import { BsSpeedometer } from 'react-icons/bs'

const Card = (props) => {
  const { item } = props

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
    <div className=" font-inika border p-3 m-2 shadow-lg hover:shadow-none bg-white rounded-xl w-48">
      <div className="flex justify-between items-center">
        <p className=" uppercase font-bold text-myBrown-100">
          {item.id === 53
            ? item.name['name-EUfr'].slice(0, 10) + ' ...'
            : item.name['name-EUfr']}
        </p>
        <p className="text-sm text-myPink-100">
          #<span className="text-lg font-bold text-myBrown-100">{item.id}</span>
        </p>
      </div>
      {item.icon_uri ? (
        <div className="flex justify-center border-4 border-myPink-200 rounded-full m-4 bg-myBrown-200">
          <img src={item.icon_uri} alt={item.name['name-EUfr']} />
        </div>
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
      {item.availability.location ? (
        <div className="flex justify-between  text-xs">
          <p className=" capitalize flex justify-center px-1 py-1 bg-myYellow-100 text-white font-medium rounded-full">
            {item.availability.location
              ? locationCut(item.availability.location)
              : null}
          </p>
          <p className=" flex justify-center p-1 bg-myBrown-100 text-myYellow-100 font-medium rounded-full">
            {item.availability.rarity ? item.availability.rarity : null}
          </p>
        </div>
      ) : null}
      {item.shadow && !item.availability.location ? (
        <div className="flex justify-between  text-xs">
          <p className=" capitalize flex justify-center px-1 py-1 bg-myYellow-100 text-white font-medium rounded-full">
            {item.shadow}
          </p>
          <p className=" flex justify-center p-1 bg-myBrown-100 text-myYellow-100 font-medium rounded-full">
            {item.speed ? item.speed : null}
          </p>
        </div>
      ) : null}
    </div>
  )
}

const Card2 = (props) => {
  const { item } = props
  return (
    <div className=" font-inika border p-3 m-2 shadow-lg hover:shadow-none bg-white rounded-xl w-48">
      <div className="flex justify-between items-center">
        <p className=" uppercase font-bold text-myBrown-100">
          {item[0].name['name-EUfr']}
        </p>
        <p className="text-xs text-myPink-100">
          #
          <span className="text-xs font-bold text-myBrown-100">
            {item[0]['internal-id']}
          </span>
        </p>
      </div>
      <div className="flex justify-center border-4 border-myPink-200 rounded-full m-4 bg-myBrown-200">
        <img src={item[0].image_uri} alt={item[0].name['name-EUfr']} />
      </div>
      <div className="flex justify-between ">
        <p className="w-1/3 flex justify-center px-3 py-1 bg-myYellow-100 text-white  text-xs font-medium rounded-full">
          {item[0]['version']}
        </p>
        <p className="text-xs flex justify-center  px-3 py-1 bg-myBrown-100 text-myYellow-100 font-medium rounded-full">
          {item[0]['buy-price'] ? item[0]['buy-price'] : 'N/A'} $ /{' '}
          {item[0]['sell-price']} $
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

  try {
    for (let item of Object.getOwnPropertyNames(cardsDatas)) {
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

  // console.log(dataBase)

  return (
    <div className="px-0 sm:px-20 md:px-32 lg:px-60 bg-gradient-to-t via-myBrown-200  from-myBrown-200">
      <div className="flex items-center justify-center pb-10">
        <div className="px-4">
          <div className="group relative">
            <button className="bg-myBrown-100 text-white px-4 h-8 rounded">
              Sort
            </button>
            <nav
              className=" border-2 bg-white invisible border-myBrown-100 rounded w-36 absolute left-0 top-full
          transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-90 group-focus-within:translate-y-1"
            >
              <ul className="py-1">
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
                <div className={dataBase === 'villagers' ? 'hidden' : 'block'}>
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
                <div
                  className={
                    dataBase === 'sea' ||
                    dataBase === 'villagers' ||
                    dataBase === 'songs'
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
              </ul>
            </nav>
          </div>
        </div>
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
                    <Link
                      to={routes.details({ id: item.id, dataBase })}
                      key={item.id}
                    >
                      <Card item={item} />
                    </Link>
                  )
                } else {
                  return (
                    <Link
                      to={routes.details({
                        id: item[0]['internal-id'],
                        dataBase,
                      })}
                      key={index}
                    >
                      <Card2 item={item} />
                    </Link>
                  )
                }
              })
          : data
              .slice(
                (currentPage - 1) * pagePostsLimit,
                (currentPage - 1) * pagePostsLimit + pagePostsLimit
              )
              .map((item) => {
                return (
                  <Link
                    to={routes.details({ id: item.id, dataBase })}
                    key={item.id}
                  >
                    <Card item={item} />
                  </Link>
                )
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
