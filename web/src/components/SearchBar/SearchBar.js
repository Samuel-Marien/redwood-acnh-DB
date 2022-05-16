import { Link, routes } from '@redwoodjs/router'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import { GiArchiveResearch } from 'react-icons/gi'
import { BiReset } from 'react-icons/bi'

const SearchBar = (props) => {
  const {
    state,
    onSubmit,
    onClick,
    name,
    placeholder,
    ressourcesName,
    dataBase,
  } = props
  return (
    <div className="mb-5 flex flex-col justify-center items-center">
      <img src="images/illustration-cut.jpg" alt="hero" />
      <h1 className="text-4xl mb-3 font-inika font-bold text-myBrown-100">
        {ressourcesName} Ressources
      </h1>
      <div className="flex justify-center items-center">
        {state.id ? (
          <div>
            <Link to={routes.fishsPage()}>
              <button
                onClick={onClick}
                className="text-3xl mr-2 text-myPink-100 hover:text-myPink-200 transition-colors hover:animate-pulse"
              >
                <BiReset />
              </button>
            </Link>
          </div>
        ) : null}
        <Form onSubmit={onSubmit} style={{ fontSize: '2rem' }}>
          <div className="flex items-center">
            <TextField
              name={name}
              placeholder={placeholder}
              validation={{ required: true }}
              className="border border-myYellow-100  h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            />
            {state.id ? (
              <Link
                to={routes.details({ id: state.id, dataBase })}
                style={{ transform: 'translate(-120%)' }}
                className="mt-1"
              >
                <Submit className=" text-myGreen-200">
                  <GiArchiveResearch />
                </Submit>
              </Link>
            ) : null}
          </div>
        </Form>
      </div>
    </div>
  )
}

export default SearchBar
