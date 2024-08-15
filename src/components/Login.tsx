"use client"

import { EyeFilledIcon, EyeSlashFilledIcon } from "./ui/icons"
import { BackgroundBeams } from "./ui/background-beams"
import React, { ChangeEvent, FormEvent } from "react"
import { Button, Input } from "@nextui-org/react"
import ValidateForm from "@/utils/validateForm"
import { LoginResponse } from "@/types/auth"
import { useRouter } from "next/navigation"
import { FlipWords } from "./ui/flip-words"
import Auth from "@/services/auth"
import { toast } from "sonner"
import Link from "next/link"
import cookies from "js-cookie"

export function Login() {

  const router = useRouter()
  const words = [ "CLASS", "CLEAN CODE", "BEAUTIFUL", "MODERN" ]

  const [ isVisible, setIsVisible ] = React.useState( false )
  const [ loading, setLoading ] = React.useState( false )
  const [ dataForm, setDataForm ] = React.useState( {
    email: '',
    password: ''
  })

  const handleChange = ( e: ChangeEvent<HTMLInputElement>) => {
    setDataForm({
      ...dataForm,
      [ e.target.name ]: e.target.value
    })
  }

  const toggleVisibility = () => setIsVisible( !isVisible )

  const handleSubmit = async ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault()

    setLoading( true )

    const { email, password } = dataForm

    // Email required
    if( !ValidateForm.notIsEmpy( email, toast.error, "Email is required" ) ) return setLoading( false )
    // Valid Email
    if( !ValidateForm.isValidEmail( email, toast.error ) ) return setLoading( false )
    // Password required
    if( !ValidateForm.notIsEmpy( password, toast.error, "Password is required" ) ) return setLoading( false )
    // Password min length
    if( !ValidateForm.isMinLength( password, 8, toast.error ) ) return setLoading( false )


    try {
      const res: LoginResponse = await Auth.signIn( email, password )
      const token = res.token
      // save token in cookie
      cookies.set( "token", token )
      // redirect to dashboard
      router.push( "/dashboard" )
    } catch ( error: any ) {
      setLoading( false )
      if(error.response.data.errors) {
        toast.error( error.response.data.errors[0].msg )
      } else {
        toast.error( error.response.data.message )
      }
    }
  }

  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="text-4xl text-center mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        API
        <FlipWords
          words={words}
          className="font-medium"
        />
        <br />
        Testing a new api in express
      </div>
      <form
        className="max-w-sm w-full mx-auto p-4 mt-16"
        onSubmit={ handleSubmit }
        noValidate
      >
        <h1 className="relative z-10 text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold h-16">
          Sign In
        </h1>
        <p className="text-neutral-500 max-w-xs mx-auto text-base text-center relative z-10">
          Enter your credentials to log in.
        </p>
        <div className="mt-10">
          <Input
            isRequired
            fullWidth
            type="email"
            name="email"
            label="Email"
            className="relative z-10"
            onChange={ handleChange }
          />
          <Input
            isRequired
            name="password"
            label="Password"
            fullWidth
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="relative z-10 mt-8"
            onChange={ handleChange }
          />
          <div className="relative z-10 w-full text-end">
            <Link href="#" className="font-medium text-default-400 hover:text-warning-500 text-sm">Forgot password</Link>
          </div>
        </div>
        <div className="mt-10">
          <Button
            className="relative z-10"
            color="warning"
            fullWidth
            size="lg"
            type="submit"
            isLoading={ loading }
          >
            Sign In
          </Button>
        </div>
        <div className="relative z-10 mt-2">
          <p className="text-default-300 text-center">
            Not yet account? {" "}
            <Link href="#" className="font-medium text-default-400 hover:text-warning-500">Register now</Link>
          </p>
        </div>
      </form>
      <BackgroundBeams />
    </div>
  );
}
