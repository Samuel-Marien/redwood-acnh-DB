import { MetaTags } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import {
  Form,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
  Label,
} from '@redwoodjs/forms'
import { BiHomeCircle } from 'react-icons/bi'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <div className="flex justify-end mr-20 mt-2 text-myBrown-100 underline">
        <Link to={routes.home()} className="flex items-center">
          <span className="mr-1">
            <BiHomeCircle />
          </span>
          Home
        </Link>
      </div>
      <div className="flex justify-center mt-1 lg:mt-20 ">
        <img
          src="images/illus2.jpg"
          alt="message"
          className="w-5/12 hidden md:block"
        />
        <div className="">
          <p className="text-5xl font-inika uppercase font-extrabold text-myBrown-100 mb-2 md:mb-16 mx-10 lg:mx-20">
            Contact
          </p>
          <Form
            onSubmit={onSubmit}
            config={{ mode: 'onBlur' }}
            className="flex flex-col shadow-inner px-7 py-5 rounded-3xl bg-myBrown-200"
          >
            <Label
              htmlFor="name"
              className="font-inika uppercase font-extrabold text-myBrown-100"
            >
              Name
            </Label>
            <TextField
              name="name"
              validation={{ required: true }}
              errorClassName="border border-red-700"
              className="p-1 border rounded-lg"
            />
            <FieldError name="name" className="text-red-700" />
            <Label
              htmlFor="email"
              className="mt-5 font-inika uppercase font-extrabold text-myBrown-100"
            >
              Email
            </Label>
            <TextField
              name="email"
              validation={{
                required: true,
                pattern: {
                  value: /^[^@]+@[^.]+\..+$/,
                  message: 'Please enter a valid email address',
                },
              }}
              errorClassName="border border-red-700"
              className="p-1 border rounded-lg"
            />
            <FieldError name="email" className="text-red-700" />
            <Label
              htmlFor="message"
              className="mt-5 font-inika uppercase font-extrabold text-myBrown-100"
            >
              Message
            </Label>
            <TextAreaField
              name="message"
              validation={{ required: true }}
              errorClassName="border border-red-700"
              className="p-1 border rounded-lg h-72"
            />
            <FieldError name="message" className="text-red-700" />
            <Submit
              className="border rounded-2xl p-2 font-inika uppercase
            font-extrabold w-1/3 mx-auto bg-myGreen-200 text-myBrown-200 hover:bg-myBrown-300 hover:text-myBrown-100 my-2 md:my-5 shadow"
            >
              Send
            </Submit>
          </Form>
        </div>
      </div>
    </>
  )
}

export default ContactPage
