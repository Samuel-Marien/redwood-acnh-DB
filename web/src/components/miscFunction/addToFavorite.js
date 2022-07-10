import { toast } from '@redwoodjs/web/toast'

const addToFavorite = (name, db, urlName) => {
  try {
    {
      // alert(db + '\n ' + urlName) /* Code to save a record... */
    }
    toast(`${name.toUpperCase()} \nHas been added to your collection! 🐻`)
  } catch (e) {
    // There's also methods for default styling:
    toast.error('Error creating post...')
  }
}

export default addToFavorite
