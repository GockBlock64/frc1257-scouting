import { FormValues } from "@/pages"
import { useFormContext } from "react-hook-form"

interface NumberInputProps {
  title: string
  id: keyof FormValues
  className?: string
  min?: number
  max?: number
}

const NumberInput = (props: NumberInputProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>()

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 border-2 border-gray-600">
        <div className="text-lg lg:text-2xl mb-2">{props.title}</div>
        <input
          type="number"
          {...register(props.id, { required: true })}
          className={`text-black rounded-md text-lg lg:text-xl p-1 ${props.className}`}
          min={props.min}
          max={props.max}
          onKeyDown={(e) => {
            if (["e", "E", "+", "-", ".", "Enter"].includes(e.key))
              e.preventDefault()
          }}
          onWheel={(e) => e.currentTarget.blur()}
          placeholder={props.title}
        />
        {errors[props.id] && (
          <div className="text-red-500">This field is required</div>
        )}
      </div>
    </>
  )
}

export default NumberInput
