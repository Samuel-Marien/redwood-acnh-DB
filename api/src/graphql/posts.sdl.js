export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    ImageSrc: String!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    title: String!
    body: String!
    ImageSrc: String!
  }

  input UpdatePostInput {
    title: String
    body: String
    ImageSrc: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`