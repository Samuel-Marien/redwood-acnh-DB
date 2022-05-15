import Thumbnail from './Thumbnail'

export const generated = () => {
  return (
    <Thumbnail
      state={{
        name: {
          ['name-EUfr']: 'bouvière',
        },
        id: 1,
        icon_uri: 'https://acnhapi.com/v1/icons/fish/1',
        price: 900,
        availability: {
          location: 'River',
          rarity: 'Common',
        },
        ['catch-phrase']:
          'I caught a pale chub! That name seems a bit judgy...',
      }}
    />
  )
}

export default { title: 'Components/Thumbnail' }
