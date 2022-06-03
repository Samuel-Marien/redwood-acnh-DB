import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      {/* <img
        src="/images/illustration.jpg"
        alt="hero"
        className=" self-end hidden md:block h-full"
      /> */}
      {/* <img src="\images\illus2.jpg" alt="hero" className="self-end md:hidden" /> */}
      <img src="\images\illus2.jpg" alt="hero" className="self-end w-2/4" />
    </>
  )
}

export default HomePage
