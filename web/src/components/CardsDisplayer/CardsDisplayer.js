/* eslint-disable react-hooks/exhaustive-deps */
import { Link, routes } from '@redwoodjs/router'
import { useState, useEffect } from 'react'
import { Pagination } from 'react-pagination-bar'
import 'react-pagination-bar/dist/index.css'
import './index.css'

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

const CardsDisplayer = (props) => {
  const { cardsDatas, dataBase } = props
  const [currentPage, setCurrentPage] = useState(1)
  const pagePostsLimit = 15
  const datasSanityze = []

  try {
    for (let item of Object.getOwnPropertyNames(cardsDatas)) {
      datasSanityze.push(cardsDatas[item])
    }
  } catch (err) {
    console.log(err)
  }

  useEffect(() => {
    console.log(datasSanityze.length)
  }, [datasSanityze])

  return (
    <div className="px-0 sm:px-20 md:px-32 lg:px-60 bg-myBrown-200 pt-7 ">
      {datasSanityze.length ? (
        <Pagination
          initialPage={currentPage}
          itemsPerPage={pagePostsLimit}
          onPageСhange={(pageNumber) => setCurrentPage(pageNumber)}
          totalItems={datasSanityze.length}
          pageNeighbours={2}
          startLabel={'<<'}
          endLabel={'>>'}
          nextLabel={'>'}
          prevLabel={'<'}
          customClassNames={{
            rpbItemClassName: 'bg-myBrown-100 px-2 m-1 rounded-full ',
            rpbItemClassNameActive:
              'bg-yellow-500 text-myBrown-100 custom-item--active',
            rpbGoItemClassName: 'custom-go-item',
            rpbItemClassNameDisable: 'opacity-50',
            rpbProgressClassName: 'custom-progress-bar',
            rpbRootClassName:
              'custom-root font-inika text-myYellow-100  flex justify-center mb-1',
          }}
        />
      ) : null}

      <div className="flex flex-row  justify-center flex-wrap">
        {datasSanityze
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
          : null}
      </div>
    </div>
  )
}

export default CardsDisplayer
