import { FormValues } from "@/pages"
import { useFormContext } from "react-hook-form"

interface MultipleChoiceProps {
  title: string
  options: string[]
  id: keyof FormValues
  className?: string
}

const MultipleChoice = (props: MultipleChoiceProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>()

  const optionElements: JSX.Element[] = props.options.map((option) => (
    <option
      key={option}
      value={option}
      className="p-1 checked:text-white checked:bg-gray-700"
    >
      {option}
    </option>
  ))

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="text-md md:text-lg lg:text-2xl mb-2">{props.title}</div>
        <div className="flex flex-col items-center justify-center">
          <select
            {...register(props.id, { required: true })}
            size={props.options.length}
            className={`text-center overflow-y-auto rounded-md text-md md:text-lg lg:text-2xl p-1 bg-neutral-900 border-2 border-gray-600 ${props.className}`}
          >
            {optionElements}
          </select>
        </div>
        {errors[props.id] && (
          <div className="text-red-500">This field is required</div>
        )}
      </div>
    </>
  )
}

export default MultipleChoice
