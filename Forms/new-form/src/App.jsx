import { useForm } from "react-hook-form"
import "./app.css"

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing its name

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("username", { required:{value:true , message:"this feild is required"} , minLength:{value:3,message:"the min length is 3"} , maxLength:{value:8 , message:"the max length is 8"}})} />
      {/* errors will return when field validation fails  */}
      { errors.username &&<span>{errors.username.message}</span>}

      <input type="submit" />
    </form>
  )
}
