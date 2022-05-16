import { Link, routes } from '@redwoodjs/router'

const CardsDisplayer = (props) => {
  const { cardsDatas, dataBase } = props

  const datasSanityze = []

  try {
    for (let item of Object.getOwnPropertyNames(cardsDatas)) {
      datasSanityze.push(cardsDatas[item])
    }
  } catch (err) {
    console.log(err)
  }

  // console.log(datasSanityze)

  return (
    <div className="px-0 sm:px-20 md:px-48 lg:px-60 bg-myBrown-200 pt-7">
      <div className="flex flex-row  justify-center flex-wrap">
        {datasSanityze
          ? datasSanityze.map((item) => {
              return (
                <Link
                  to={routes.details({ id: item.id, dataBase })}
                  key={item.id}
                >
                  <div className=" font-inika border p-3 m-2 shadow-lg hover:shadow-none bg-white rounded-xl w-48">
                    <div className="flex justify-between items-center">
                      <p className=" uppercase font-bold text-myBrown-100">
                        {item.name['name-EUfr']}
                      </p>
                      <p className="text-sm text-myPink-100">
                        #
                        <span className="text-lg font-bold text-myBrown-100">
                          {item.id}
                        </span>
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
                </Link>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default CardsDisplayer
