import { Link } from '@redwoodjs/router'

const Thumbnail = (props) => {
  const { state, myRoutes } = props
  return (
    <div className="border p-4 m-2 shadow-lg hover:shadow-none rounded w-72 md:w-1/3 bg-myBrown-200">
      <Link to={myRoutes}>
        <div className="flex justify-between items-center">
          <p className=" font-inika font-black text-myBrown-100 text-4xl uppercase">
            {state.name['name-EUfr']}
          </p>
          <p className=" p-2 rounded-full shadow-md text-myBrown-100">
            #
            <span className="text-2xl text-myPink-200 font-bold font-inika">
              {state.id}
            </span>
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={state.icon_uri}
            alt={state.name['name-EUfr']}
            style={{ width: '200px' }}
            className="border-4 border-myBrown-100 shadow-lg bg-slate-50 mt-2 rounded-full hover:animate-pulse"
          />
        </div>
        <p className="text-center mb-2 font-inika font-bold text-4xl text-myBrown-100">
          {state.price} $
        </p>
        <p className=" font text-center text-sm font-thin mt-2 mb-5 italic text-gray-500">
          - {state['catch-phrase']} -
        </p>
        <div className="flex justify-between">
          <p className=" flex justify-center px-3 py-1 bg-myYellow-100 text-white text-sm font-medium rounded-full">
            {state.availability.location}
          </p>
          <p className=" flex justify-center px-3 py-1 bg-myBrown-100 text-myYellow-100 text-sm font-medium rounded-full">
            {state.availability.rarity}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Thumbnail
