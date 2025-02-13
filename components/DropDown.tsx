import { FormValues } from "@/pages"
import { useFormContext } from "react-hook-form"

interface DropDownProps {
  title: string
  options: string[]
  id: keyof FormValues
  className?: string
}

const DropDown = (props: DropDownProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>()

  const optionElements: JSX.Element[] = props.options.map((option) => (
    <option key={option} value={option} className="p-1">
      {option}
    </option>
  ))

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="text-lg lg:text-2xl mb-2">{props.title}</div>
        <select
          {...register(props.id, { required: true })}
          className={`rounded-md text-lg lg:text-2xl p-1 bg-neutral-900 border-2 border-gray-600 ${props.className}`}
        >
          {optionElements}
        </select>
        {errors[props.id] && (
          <div className="text-red-500">This field is required</div>
        )}
      </div>
    </>
  )
}

export default DropDown
