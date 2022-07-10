import addToFavorite from 'src/components/miscFunction/addToFavorite'

import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi'
import { RiHeartAddFill } from 'react-icons/ri'

const SongDetails = (props) => {
  const { data, dataBase } = props

  return (
    <>
      {data.name ? (
        <div className="my-5 md:my-0 shadow-lg py-4 px-2 md:px-8 font-inika lg:w-6/12 w-10/12 mx-auto bg-myBrown-200 rounded-xl">
          <div className="flex justify-between items-center mb-8 md:mb-0">
            <button
              className="text-red-500 text-3xl shadow-inner p-1 rounded-full hover:shadow-none duration-300 cursor-pointer hover:text-red-700 active:text-red-300 "
              onClick={() =>
                addToFavorite(
                  data.name['name-EUfr'],
                  dataBase,
                  data.name['name-EUen'].replaceAll(' ', '_')
                )
              }
            >
              <RiHeartAddFill />
            </button>
            <p className=" font-inika font-black text-myBrown-100 text-4xl uppercase">
              {data.name['name-EUfr']}
            </p>
            <p className=" p-2 rounded-full shadow-md text-myBrown-100">
              #
              <span className="text-2xl text-myPink-200 font-bold font-inika">
                {data.id}
              </span>
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={data.image_uri}
              alt={data.name['name-EUfr']}
              style={{ width: '400px' }}
              className="mb-2 md:mb-0 border-4 border-myBrown-100 shadow-lg bg-slate-50 mt-2 rounded-full"
            />
          </div>
          <div className="mt-5 mb-10 md:mb-0 md:mt-2  flex justify-center w-full text-myYellow-100">
            <div className="bg-white  text-sm shadow rounded-2xl flex p-1">
              <p className="flex mr-4">
                <span className="text-xl mr-1 text-myBrown-100">
                  <GiPayMoney />
                </span>
                {data['buy-price'] ? data['buy-price'] : 'N/A'}
              </p>
              <p className="flex">
                {' '}
                <span className="text-xl text-myBrown-100">
                  <GiReceiveMoney />
                </span>
                {data['sell-price'] ? data['sell-price'] : 'N/A'}
              </p>
            </div>
          </div>

          <figure className=" opacity-50 flex justify-center my-5">
            <audio controls src={data.music_uri}>
              <track kind="captions" />
              <code>audio</code> element.
            </audio>
          </figure>
        </div>
      ) : null}
    </>
  )
}

export default SongDetails
