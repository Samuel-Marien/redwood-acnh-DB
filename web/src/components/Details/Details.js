const Details = (props) => {
  const { data } = props
  return (
    <>
      {data.name ? (
        <div className="border m-2 p-2">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl">{data.name['name-EUfr']}</h2>
            <p>id: #{data.id}</p>
          </div>
          <p className="text-xl">{data['catch-phrase']}</p>
          <img src={data.icon_uri} alt={data.name['name-EUen']} />
          <div className="border p-2 m-2">
            <h3>Disponibilité :</h3>
            <p>
              Toute la journée : {data.availability.isAllDay ? 'oui' : 'non'}
            </p>
            <p>
              Toute l&apos;année : {data.availability.isAllYear ? 'oui' : 'non'}
            </p>
            <p>Location : {data.availability.location}</p>
            <p>
              Heures : {data.availability.time ? data.availability.time : 'N/A'}
            </p>
            <p>
              Mois de dispo nord : {data.availability['month-array-northern']}
            </p>
            <p>
              Mois de dispo sud : {data.availability['month-array-southern']}
            </p>
          </div>
          <p className="p-2 m-2">{data['museum-phrase']}</p>
          <div className="border p-2 m-2">
            <p>Infos générales :</p>
            <p>Rareté : {data.availability.rarity} </p>
            <p>Prix : {data.price} $</p>
            <p>Prix-cj : {data['price-cj']} $</p>
            <p>Shadow : {data.shadow}</p>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Details
