const CardsDisplayer = (props) => {
  const { cardsDatas } = props

  const datasSanityze = []

  try {
    for (let item of Object.getOwnPropertyNames(cardsDatas)) {
      datasSanityze.push(cardsDatas[item])
    }
  } catch (err) {
    console.log(err)
  }

  console.log(datasSanityze)

  return (
    <div>
      <h2>{'CardsDisplayer'}</h2>
      <div className="border p-2 flex flex-row flex-wrap">
        {datasSanityze
          ? datasSanityze.map((item) => {
              return (
                <div className="border p-2 m-2 shadow" key={item.id}>
                  <div className="flex justify-between items-center">
                    <p>{item.name['name-EUfr']}</p>
                    <p className="text-xs">#{item.id}</p>
                  </div>
                  <img src={item.icon_uri} alt={item.name['name-EUfr']} />
                  <p className="text-center mb-2">{item.price} $</p>
                  <div className="flex justify-between">
                    <p className="w-1/3 flex justify-center px-1 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full">
                      {item.availability.location}
                    </p>
                    <p className=" flex justify-center px-1 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
                      {item.availability.rarity}
                    </p>
                  </div>
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default CardsDisplayer
