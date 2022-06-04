import { Link } from '@redwoodjs/router'

const VillagerThumbnail = (props) => {
  const { state, myRoutes } = props
  console.log(state)
  return (
    <div
      className="border p-4 m-2 shadow-lg hover:shadow-none rounded-xl w-72 md:w-1/3 "
      style={{
        border: `5px solid ${state['bubble-color']}`,
        backgroundColor: `${state['text-color']}`,
      }}
    >
      <Link to={myRoutes}>
        <div className="flex justify-between items-center">
          <p
            className=" font-inika font-black text-4xl uppercase"
            style={{ color: `${state['bubble-color']}` }}
          >
            {state.name['name-EUfr']}
          </p>
          <p className=" p-2 rounded-full shadow-md text-myBrown-100">
            #
            <span
              className="text-2xl text-myPink-200 font-bold font-inika"
              style={{ color: `${state['bubble-color']}` }}
            >
              {state.id}
            </span>
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={state.icon_uri}
            alt={state.name['name-EUfr']}
            style={{
              width: '200px',
              border: `5px solid ${state['bubble-color']}`,
            }}
            className="shadow-lg bg-slate-50 mt-2 rounded-full hover:animate-pulse"
          />
        </div>
        <p
          className=" font text-center text-sm font-thin mt-2 mb-5 italic text-gray-500"
          style={{ color: `${state['bubble-color']}` }}
        >
          - {state.saying} -
        </p>
        <div className="flex justify-between  text-xs">
          <p className="px-3 capitalize flex justify-center py-1 bg-myYellow-100 text-white font-medium rounded-full">
            {state.species}
          </p>

          <p className="px-3 capitalize flex justify-center p-1 bg-myBrown-100 text-myYellow-100 font-medium rounded-full">
            {state.personality}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default VillagerThumbnail
