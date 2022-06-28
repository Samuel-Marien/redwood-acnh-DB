import { toast } from '@redwoodjs/web/toast'

import {
  BiTimeFive,
  BiCalendar,
  BiStar,
  BiCurrentLocation,
} from 'react-icons/bi'
import {
  GiSwapBag,
  GiButterflyWarning,
  GiPartyPopper,
  GiCompass,
} from 'react-icons/gi'
import { SiShadow } from 'react-icons/si'
import { RiHeartAddFill } from 'react-icons/ri'

const currentMonth = new Date().getMonth() + 1
// console.log(currentMonth)

const Details = (props) => {
  const { data } = props

  console.log(data)

  const lastMonthSouthAvailability = data.availability
    ? data.availability['month-array-southern'][
        data.availability['month-array-southern'].length - 1
      ]
    : null

  const newMonthSouthAvailability = data.availability
    ? data.availability['month-array-southern'][0]
    : null

  const lastMonthNorthAvailability = data.availability
    ? data.availability['month-array-northern'][
        data.availability['month-array-northern'].length - 1
      ]
    : null

  const newMonthNorthAvailability = data.availability
    ? data.availability['month-array-northern'][0]
    : null

  // console.log(newMonthSouthAvailability)

  const addToFavorite = (pokeName) => {
    try {
      {
        /* Code to save a record... */
      }
      toast(`${pokeName.toUpperCase()} \nHas been added to your collection!!`)
    } catch (e) {
      // There's also methods for default styling:
      toast.error('Error creating post...')
    }
  }

  return (
    <>
      {data.name ? (
        <div className="shadow-lg py-4 px-8 font-inika lg:w-6/12 w-8/12 mx-auto bg-myBrown-200 rounded-xl">
          <div className="flex items-center">
            <button
              className="text-red-500 text-3xl shadow-inner p-1 rounded-full hover:shadow-none duration-300 cursor-pointer hover:text-red-700 active:text-red-300 "
              onClick={() => addToFavorite(data.name['name-EUfr'])}
            >
              <RiHeartAddFill />
            </button>
            <h2 className="text-6xl font-extrabold text-myBrown-100 mx-auto uppercase">
              {data.name['name-EUfr']}
            </h2>
            <p className=" font-thin">
              #
              <span className="text-xl font-extrabold text-myPink-200">
                {data.id}
              </span>
            </p>
          </div>
          <p className="text-xl text-center my-5 text-slate-500 italic">
            {data['catch-phrase']}
          </p>

          {/* body section   */}
          <div className="flex flex-col md:flex-row">
            {/* image section & Availibility  */}
            <div>
              <img
                src={data.icon_uri}
                alt={data.name['name-EUen']}
                className="w-48 border-4 border-myPink-200 rounded-full bg-white"
              />

              {/* availibilty section  */}
              {/* south  */}
              {lastMonthSouthAvailability === currentMonth ? (
                <div>
                  <p className="flex items-center justify-center my-1 text-red-400 border-t rounded-full border-red-400 mt-2">
                    <span className="text-xl mr-1">
                      <GiCompass />
                    </span>
                    South
                  </p>
                  <p className="flex text-sm items-center justify-between bg-red-400 px-2 py-1  rounded-3xl text-center text-white">
                    <span className=" text-myYellow-100 text-2xl mr-1">
                      <GiButterflyWarning />
                    </span>
                    Last month
                    <span className=" text-myYellow-100 text-2xl mr-1">
                      <GiButterflyWarning />
                    </span>
                  </p>
                </div>
              ) : null}
              {newMonthSouthAvailability === currentMonth ? (
                <div className="">
                  <p className="flex items-center justify-center my-1 text-green-400 border-t rounded-full border-green-400 mt-2">
                    <span className="text-xl mr-1">
                      <GiCompass />
                    </span>
                    South
                  </p>
                  <p className="flex text-sm items-center justify-between bg-green-400 px-2 py-1 rounded-3xl text-center text-white">
                    <span className=" text-myPink-100 text-2xl mr-1">
                      <GiPartyPopper />
                    </span>
                    Newly available
                    <span className=" text-myPink-100 text-2xl mr-1">
                      <GiPartyPopper />
                    </span>
                  </p>
                </div>
              ) : null}

              {/* north  */}
              {lastMonthNorthAvailability === currentMonth ? (
                <div>
                  <p className="flex items-center justify-center my-1 text-red-400 border-t rounded-full border-red-400 mt-2">
                    <span className="text-xl mr-1">
                      <GiCompass />
                    </span>
                    North
                  </p>
                  <p className="flex text-sm items-center justify-between bg-red-400 px-2 py-1  rounded-3xl text-center text-white">
                    <span className=" text-myYellow-100 text-2xl mr-1">
                      <GiButterflyWarning />
                    </span>
                    Last month
                    <span className=" text-myYellow-100 text-2xl mr-1">
                      <GiButterflyWarning />
                    </span>
                  </p>
                </div>
              ) : null}
              {newMonthNorthAvailability === currentMonth ? (
                <div>
                  <p className="flex items-center justify-center my-1 text-green-400 border-t rounded-full border-green-400 mt-2">
                    <span className="text-xl mr-1">
                      <GiCompass />
                    </span>
                    North
                  </p>
                  <p className="flex text-sm items-center justify-between bg-green-400 px-2 py-1 rounded-3xl text-center text-white">
                    <span className=" text-myBrown-100 text-2xl mr-1">
                      <GiPartyPopper />
                    </span>
                    Newly available
                    <span className=" text-myYellow-100 text-2xl mr-1">
                      <GiButterflyWarning />
                    </span>
                  </p>
                </div>
              ) : null}
            </div>

            {/* info section   */}
            <div className="ml-5 w-48">
              <p className="flex items-center flex-nowrap">
                <span className="mr-1 text-xl text-myBrown-100">
                  <BiTimeFive />
                </span>
                {data.availability.isAllDay
                  ? 'All days'
                  : data.availability.time}
              </p>
              <div>
                {data.availability.isAllYear ? (
                  <div className="flex items-center">
                    <span className="mr-1  text-xl text-myBrown-100">
                      <BiCalendar />
                    </span>
                    All year
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center">
                      <span className="mr-1  text-xl text-myBrown-100">
                        <BiCalendar />
                      </span>
                      <p>North: {data.availability['month-northern']}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-1  text-xl text-myBrown-100">
                        <BiCalendar />
                      </span>
                      <div>South: {data.availability['month-southern']}</div>
                    </div>
                  </div>
                )}
              </div>
              <p className="flex item-center">
                <span className="mr-1 text-xl text-myBrown-100">
                  <BiCurrentLocation />
                </span>
                {data.availability.location}
              </p>

              <p className="flex items-center">
                <span className="mr-1  text-xl text-myBrown-100">
                  <BiStar />
                </span>
                {data.availability.rarity}{' '}
              </p>
              <p className="flex items-center">
                <span className="mr-1  text-xl text-myBrown-100">
                  <GiSwapBag />
                </span>
                {data.price} <span className="ml-1 italic text-xs">(Nook)</span>
              </p>
              <p className="flex items-center">
                <span className="mr-1  text-xl text-myBrown-100">
                  <GiSwapBag />
                </span>
                {data['price-cj']}{' '}
                <span className="ml-1 italic text-xs">(Pollux)</span>
              </p>
              <p className="flex items-center">
                <span className="mr-1 text-myBrown-100">
                  <SiShadow />
                </span>
                {data.shadow}
              </p>
            </div>

            {/* citation   */}
            <p className="w-6/12">{data['museum-phrase']}</p>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Details
