import { toast } from '@redwoodjs/web/toast'
// import { MetaTags, useMutation } from '@redwoodjs/web'

// const CREATE_COLLECTION = gql`
//   mutation CreateCollectiontMutation($input: CreateCollectionInput!) {
//     createCollection(input: $input) {
//       id
//     }
//   }
// `

const addToFavorite = (name, db, urlName) => {
  try {
    {
      // alert(db + '\n ' + urlName) /* Code to save a record... */
      console.log(db + '\n' + urlName)
    }
    toast(`${name.toUpperCase()} \nHas been added to your collection! 🐻`)
  } catch (e) {
    // There's also methods for default styling:
    toast.error('Error creating post...')
  }
}

export default addToFavorite
