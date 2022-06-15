import { Link } from '@redwoodjs/router'

import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi'

const HousewareThumbnail = (props) => {
  const { state, myRoutes } = props

  console.log(state)

  return (
    <div className="border p-4 m-2 shadow-lg hover:shadow-none rounded w-72 md:w-1/3 bg-myBrown-200">
      <Link to={myRoutes}>
        <div className="flex justify-between items-center">
          <p className=" font-inika font-black text-myBrown-100 text-4xl uppercase">
            {state.name['name-EUfr']}
          </p>
          <p className=" p-2 rounded-full shadow-md text-myBrown-100">
            #
            <span className=" text-myPink-200 font-bold font-inika">
              {state['internal-id']}
            </span>
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={state.image_uri}
            alt={state.name['name-EUfr']}
            style={{ width: '200px' }}
            className="border-4 border-myBrown-100 shadow-lg bg-slate-50 mt-2 rounded-full hover:animate-pulse"
          />
        </div>
        <div className="mt-5  flex justify-center w-full text-myYellow-100">
          <div className="bg-white  text-sm shadow rounded-2xl flex p-1">
            <p className="flex mr-4">
              <span className="text-xl mr-1 text-myBrown-100">
                <GiPayMoney />
              </span>
              {state['buy-price'] ? state['buy-price'] : 'N/A'}
            </p>
            <p className="flex">
              {' '}
              <span className="text-xl text-myBrown-100">
                <GiReceiveMoney />
              </span>
              {state['sell-price'] ? state['sell-price'] : 'N/A'}
            </p>
          </div>
        </div>
        <p className="font text-center text-sm font-thin my-2 italic text-gray-500">
          - {state.source} -
        </p>
        <div className="flex justify-between w-full">
          <p className="flex justify-center mt-3 px-3 py-1 bg-myYellow-100 text-white  text-xs font-medium rounded-full">
            {state['version']}
          </p>
          <p className="flex justify-between mt-3 px-3 py-1 bg-myYellow-100 text-white  text-xs font-medium rounded-full">
            {state['size']}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default HousewareThumbnail
