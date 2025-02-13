import { FormValues } from "@/pages/index"
import { useFormContext } from "react-hook-form"

interface CheckBoxProps {
  title: string
  id: keyof FormValues
  className?: string
}

const CheckBox = (props: CheckBoxProps): JSX.Element => {
  const { register } = useFormContext<FormValues>()
  return (
    <>
      <div className={`flex flex-row items-center justify-center py-4 px-4 ${props.className}`}>
        <div className="mr-4 text-lg lg:text-4xl">{props.title}</div>
        <input type="checkbox" {...register(props.id)} className="w-8 h-8" />
      </div>
    </>
  )
}

export default CheckBox
