import { FormValues } from "@/pages/index"
import { useFormContext } from "react-hook-form"

interface TextInputProps {
  title: string
  id: keyof FormValues
  className?: string
  maxLength?: number
  rows?: number
  validChars: RegExp
}

const TextInput = (props: TextInputProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>()

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 border-2 border-gray-600">
        <div className="text-lg lg:text-2xl mb-2">{props.title}</div>
        <textarea
          rows={props.rows}
          {...register(props.id, { required: true })}
          className={`text-black rounded-md text-lg lg:text-2xl p-1 break-words ${props.className} resize-none`}
          maxLength={props.maxLength}
          onKeyDown={(e) => {
            if (!props.validChars.test(e.key)) e.preventDefault()
          }}
          placeholder={props.title}
        />
        {errors[props.id] && (
          <div className="text-red-500">This field is required</div>
        )}
      </div>
    </>
  )
}

export default TextInput
