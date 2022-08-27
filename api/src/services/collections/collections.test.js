import {
  collections,
  collection,
  createCollection,
  updateCollection,
  deleteCollection,
} from './collections'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('collections', () => {
  scenario('returns all collections', async (scenario) => {
    const result = await collections()

    expect(result.length).toEqual(Object.keys(scenario.collection).length)
  })

  scenario('returns a single collection', async (scenario) => {
    const result = await collection({ id: scenario.collection.one.id })

    expect(result).toEqual(scenario.collection.one)
  })

  scenario('creates a collection', async (scenario) => {
    const result = await createCollection({
      input: {
        ownerId: scenario.collection.two.ownerId,
        fish: 'String',
        sea: 'String',
        bugs: 'String',
        villagers: 'String',
        songs: 'String',
        art: 'String',
        houseware: 'String',
        wallmounted: 'String',
        misc: 'String',
      },
    })

    expect(result.ownerId).toEqual(scenario.collection.two.ownerId)
    expect(result.fish).toEqual('String')
    expect(result.sea).toEqual('String')
    expect(result.bugs).toEqual('String')
    expect(result.villagers).toEqual('String')
    expect(result.songs).toEqual('String')
    expect(result.art).toEqual('String')
    expect(result.houseware).toEqual('String')
    expect(result.wallmounted).toEqual('String')
    expect(result.misc).toEqual('String')
  })

  scenario('updates a collection', async (scenario) => {
    const original = await collection({ id: scenario.collection.one.id })
    const result = await updateCollection({
      id: original.id,
      input: { fish: 'String2' },
    })

    expect(result.fish).toEqual('String2')
  })

  scenario('deletes a collection', async (scenario) => {
    const original = await deleteCollection({ id: scenario.collection.one.id })
    const result = await collection({ id: original.id })

    expect(result).toEqual(null)
  })
})
