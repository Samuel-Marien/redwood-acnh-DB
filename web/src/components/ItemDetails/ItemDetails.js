import { useState } from 'react'
import { toast } from '@redwoodjs/web/toast'

import { RiHeartAddFill } from 'react-icons/ri'

const ItemDetails = (props) => {
  const [state, setState] = useState(0)
  const { data } = props
  // console.log(data)

  const addToFavorite = (pokeName) => {
    try {
      {
        /* Code to save a record... */
      }
      toast(`${pokeName.toUpperCase()} \nHas been added to your collection! 🐻`)
    } catch (e) {
      // There's also methods for default styling:
      toast.error('Error creating post...')
    }
  }

  const changeImageClick = (userIndex) => {
    setState(userIndex)
  }

  return (
    <>
      {data.length !== 0 ? (
        <div className="shadow-lg py-4 px-2 md:px-8 font-inika lg:w-6/12 w-10/12 mx-auto bg-myBrown-200 rounded-xl">
          {/* header  */}
          <div className="flex items-center">
            <button
              className="text-red-500 text-3xl shadow-inner p-1 rounded-full hover:shadow-none duration-300 cursor-pointer hover:text-red-700 active:text-red-300 "
              onClick={() => addToFavorite(data[0].name['name-EUfr'])}
            >
              <RiHeartAddFill />
            </button>
            <h2 className="text-2xl md:text-4xl font-extrabold text-myBrown-100 mx-auto uppercase">
              {data[0].name['name-EUfr']}
            </h2>
            <p className=" font-thin">
              #
              <span className="text-xl font-extrabold text-myPink-200">
                {data[0]['internal-id']}
              </span>
            </p>
          </div>
          <div className="">
            <img
              src={data[state].image_uri}
              alt={data[state].name['name-EUfr']}
              className=" transition-all duration-700"
            />
            <div className="flex">
              {data.map((item, i) => {
                return (
                  <div key={i} className="w-1/12 mr-1 ">
                    <button
                      onMouseEnter={() => changeImageClick(i)}
                      // onClick={() => changeImageClick(i)}
                      className="bg-white rounded-2xl hover:bg-slate-200  transition-all active:border-2 focus:ring focus:ring-slate-300"
                    >
                      <img src={item.image_uri} alt={item.name['name-EUfr']} />
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default ItemDetails

{
  /* TODO : Regarder les def de l'api pour mieux ecrire le label  */
}
{
  /* <p>Buy-price: {item['buy-price']}</p>
                      <p>Sell-price: {item['sell-price']}</p>
                      <p>
                        Can Customize Body:{' '}
                        {item.canCustomizeBody ? 'true' : 'false'}
                      </p>
                      <p>
                        Can Customize Pattern:{' '}
                        {item.canCustomizePattern ? 'true' : 'false'}
                      </p>
                      <p>Color 1: {item['color-1']}</p>
                      <p>Color 2: {item['color-2']}</p>
                      <p>hha-concept-1: {item['hha-concept-1']}</p>
                      <p>hha-concept-2: {item['hha-concept-2']}</p>
                      <p>hha-series: {item['hha-series']}</p>
                      <p>hha-set: {item['hha-set']}</p>
                      <p>Is Catalog: {item.isCatalog ? 'true' : 'false'}</p>
                      <p>Is diy: {item.isDiy ? 'true' : 'false'}</p>
                      <p>
                        Is intercative: {item.isInteractive ? 'true' : 'false'}
                      </p>
                      <p>Is Outdoor: {item.isOutdoor ? 'true' : 'false'}</p>
                      <p>Kit cost: {item['kit-cost']}</p>
                      <p>Lighting-type: {item['lighting-type']}</p>
                      <p>Size: {item.size}</p>
                      <p>Source: {item.source}</p>
                      <p>Source-detail: {item['source-detail']}</p>
                      <p>Speaker-type: {item['speaker-type']}</p>
                      <p># {item.tag}</p>
                      <p>Variant: {item.variant}</p>
                      <p>Version: {item.version}</p> */
}
