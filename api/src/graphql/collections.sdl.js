export const schema = gql`
  type Collection {
    id: Int!
    ownerId: Int!
    owner: Int!
    fish: [String]!
    sea: [String]!
    bugs: [String]!
    villagers: [String]!
    songs: [String]!
    art: [String]!
    houseware: [String]!
    wallmounted: [String]!
    misc: [String]!
    createdAt: DateTime!
  }

  type Query {
    collections: [Collection!]! @requireAuth
    collection(id: Int!): Collection @requireAuth
  }

  input CreateCollectionInput {
    ownerId: Int!
    # fish: [String]!
    # sea: [String]!
    # bugs: [String]!
    # villagers: [String]!
    # songs: [String]!
    # art: [String]!
    # houseware: [String]!
    # wallmounted: [String]!
    # misc: [String]!
  }

  input UpdateCollectionInput {
    ownerId: Int
    fish: [String]!
    sea: [String]!
    bugs: [String]!
    villagers: [String]!
    songs: [String]!
    art: [String]!
    houseware: [String]!
    wallmounted: [String]!
    misc: [String]!
  }

  type Mutation {
    createCollection(input: CreateCollectionInput!): Int! @requireAuth
    updateCollection(id: Int!, input: UpdateCollectionInput!): Collection!
      @requireAuth
    deleteCollection(id: Int!): Collection! @requireAuth
  }
`
