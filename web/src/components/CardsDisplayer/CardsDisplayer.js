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

const Card = (props) => {
  const { item } = props
  return (
    <div className=" font-inika border p-3 m-2 shadow-lg hover:shadow-none bg-white rounded-xl w-48">
      <div className="flex justify-between items-center">
        <p className=" uppercase font-bold text-myBrown-100">
          {item.name['name-EUfr']}
        </p>
        <p className="text-sm text-myPink-100">
          #<span className="text-lg font-bold text-myBrown-100">{item.id}</span>
        </p>
      </div>
      <div className="flex justify-center border-4 border-myPink-200 rounded-full m-4 bg-myBrown-200">
        <img src={item.icon_uri} alt={item.name['name-EUfr']} />
      </div>
      <p className="text-center mb-2 text-xl font-bold text-myBrown-100">
        {item.price} $
      </p>
      <div className="flex justify-between">
        <p className="w-1/3 flex justify-center px-3 py-1 bg-myYellow-100 text-white text-sm font-medium rounded-full">
          {item.availability.location.slice(0, 5) === 'River'
            ? item.availability.location.slice(0, 5)
            : item.availability.location.slice(0, 3) === 'Sea'
            ? item.availability.location.slice(0, 3)
            : item.availability.location}
        </p>
        <p className=" flex justify-center  px-3 py-1 bg-myBrown-100 text-myYellow-100 text-sm font-medium rounded-full">
          {item.availability.rarity}
        </p>
      </div>
    </div>
  )
}

const MySortButton = (props) => {
  const { name, icon, onClick } = props

  return (
    <li className=" hover:bg-myBrown-100 ">
      <button
        onClick={onClick}
        className="text-lg flex items-center p-2 hover:text-myYellow-200"
      >
        <span className="text-sm font-inika font-extrabold">{name}</span>
        {icon}
      </button>
    </li>
  )
}

const CardsDisplayer = (props) => {
  const { cardsDatas, dataBase } = props
  const [currentPage, setCurrentPage] = useState(1)
  const pagePostsLimit = 10
  const datasSanityze = []
  const [data, setData] = useState([])

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
      console.log('Some error with sorting methods!')
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

  // console.log(data)

  return (
    <div className="px-0 sm:px-20 md:px-32 lg:px-60 bg-myBrown-200 pt-7 ">
      <div className="flex items-center justify-center">
        <div className="p-4">
          <div className="group relative">
            <button className="bg-myBrown-100 text-white px-4 h-8 rounded">
              Sort
            </button>
            <nav
              className=" border-2 bg-white invisible border-myBrown-100 rounded w-32 absolute left-0 top-full
          transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-90 group-focus-within:translate-y-1"
            >
              <ul className="py-1">
                <MySortButton
                  name="Id"
                  icon={<BsSortNumericDown />}
                  onClick={() => sortFunction('id', 'asc')}
                />
                <MySortButton
                  name="Id"
                  icon={<BsSortNumericUpAlt />}
                  onClick={() => sortFunction('id', 'des')}
                />
                <MySortButton
                  name="Price"
                  icon={<BsSortNumericDown />}
                  onClick={() => sortFunction('price', 'asc')}
                />
                <MySortButton
                  name="Price"
                  icon={<BsSortNumericUpAlt />}
                  onClick={() => sortFunction('price', 'des')}
                />
                <MySortButton
                  name="Name"
                  icon={<BsSortAlphaDown />}
                  onClick={() => sortFunction2('asc')}
                />
                <MySortButton
                  name="Name"
                  icon={<BsSortAlphaUpAlt />}
                  onClick={() => sortFunction2('des')}
                />
                <MySortButton
                  name="Rarity"
                  icon={<BsSortAlphaUpAlt />}
                  onClick={() => sortFunction3('asc')}
                />
                <MySortButton
                  name="Rarity"
                  icon={<BsSortAlphaUpAlt />}
                  onClick={() => sortFunction3('des')}
                />
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
                'custom-root font-inika text-myYellow-100  flex justify-center mb-1',
            }}
          />
        ) : null}
      </div>

      <div className="flex flex-row  justify-center flex-wrap">
        {data.length < 1 && datasSanityze
          ? datasSanityze
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
