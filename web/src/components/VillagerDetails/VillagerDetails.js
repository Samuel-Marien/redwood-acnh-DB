import addToFavorite from 'src/components/miscFunction/addToFavorite'

import { RiHeartAddFill } from 'react-icons/ri'
import { FaBirthdayCake } from 'react-icons/fa'
import { BsGenderAmbiguous } from 'react-icons/bs'
import { GiFrogFoot, GiAura, GiBasketballBall } from 'react-icons/gi'

const VillagerDetails = (props) => {
  const { data, dataBase } = props

  return (
    <>
      {data.name ? (
        <div className="shadow-lg py-4 px-2 md:px-8 font-inika lg:w-6/12 w-10/12 mx-auto bg-myBrown-200 rounded-xl">
          {/* header  */}
          <div className="flex items-center">
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
            <h2 className="text-3xl md:text-6xl font-extrabold text-myBrown-100 mx-auto uppercase">
              {data.name['name-EUfr']}
            </h2>
            <p className=" font-thin">
              #
              <span className="text-xl font-extrabold text-myPink-200">
                {data.id}
              </span>
            </p>
          </div>
          <p className=" text-base md:text-xl text-center my-5 text-slate-500 italic">
            {data['catch-phrase']}
          </p>

          {/* body section  */}
          <div className="flex flex-col ">
            {/* Images section  */}
            <div className=" flex flex-col md:flex-row mb-5 md:mb-0 mx-auto">
              <img
                src={data.icon_uri}
                alt={data.name['name-EUen']}
                className="w-48 h-48  rounded-full bg-white"
                style={{
                  border: `${
                    data['bubble-color']
                      ? `6px solid ${data['bubble-color']}`
                      : `6px solid pink`
                  }`,
                }}
              />
              <img
                src={data.image_uri}
                alt={data.name['name-EUen']}
                className="w-48 h-48  rounded-full bg-white ml-0 md:ml-10 mt-5 md:mt-0"
                style={{
                  border: `${
                    data['bubble-color']
                      ? `6px solid ${data['bubble-color']}`
                      : `6px solid pink`
                  }`,
                }}
              />
            </div>
            <div className="w-full flex justify-center my-4  text-base md:text-xl  text-slate-500 italic">
              {data.saying}
            </div>
            {/* Infos section  */}
            <div className="flex ml-0 md:ml-5  justify-center">
              <div className="mr-3 md:mr-10">
                <div className="flex items-baseline">
                  <span className="mr-1 text-myBrown-100">
                    <FaBirthdayCake />
                  </span>
                  {data['birthday-string']}
                </div>
                <div className="flex items-baseline">
                  <span className="mr-1 text-myBrown-100">
                    <BsGenderAmbiguous />
                  </span>
                  {data.gender}
                </div>
                <div className="flex items-baseline">
                  <span className="mr-1 text-myBrown-100">
                    <GiAura />
                  </span>
                  {data.personality}
                </div>
              </div>
              <div>
                <div className="flex items-baseline">
                  <span className="mr-1 text-myBrown-100">
                    <GiFrogFoot />
                  </span>
                  {data.species} [{data.subtype}]
                </div>
                <div className="flex items-baseline">
                  <span className="mr-1 text-myBrown-100">
                    <GiBasketballBall />
                  </span>
                  {data.hobby}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default VillagerDetails
