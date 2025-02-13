import { FormValues } from "@/pages"
import { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"

interface VerticalProps {
  title: string
  id: keyof FormValues
  className?: string
  min: number
  max: number
}

const Vertical = (props: VerticalProps): JSX.Element => {
  const { register, setValue, getValues } = useFormContext<FormValues>()

  const incrementValue = () => {
    let value = Number(getValues(props.id))
    if (value < props.max) setValue(props.id, value + 1)
  }

  const decrementValue = () => {
    let value = Number(getValues(props.id))
    if (value > props.min) setValue(props.id, value - 1)
  }

  const [text, setText] = useState<() => JSX.Element>()
  useEffect(() => {
    const match = /^(.*)( Drop)$/gi.exec(props.title)
    if (match) {
      const [name, drop] = match.slice(1)
      setText(
        () =>
          function Text() {
            return (
              <>
                {name}
                <span className="text-red-500">{drop}</span>
              </>
            )
          }
      )
    } else {
      setText(
        () =>
          function Text() {
            return <>{props.title}</>
          }
      )
    }
  }, [props.title])

  return (
      <div className="flex flex-col items-center justify-center p-4 pt-3 w-[156px] lg:w-[24rem]">
        <div className="grow-0 mb-4 text-lg lg:text-3xl w-15 mr-2">{text?.()}</div>
        <button
          type="button"
          onClick={incrementValue}
          className={`h-14 w-16 text-3xl rounded-t-lg border-4 ${props.className}`}
        >
        +
        </button>
        <input
          type="text"
          {...register(props.id)}
          className={`text-center h-14 w-16 text-4xl font-bold border-x-4  ${props.className} !bg-neutral-900 rounded-none`}
          readOnly
        ></input>
        <button
          type="button"
          onClick={decrementValue}
          className={`h-14 w-16 text-3xl rounded-b-lg border-4 flex items-center justify-center ${props.className}`}
        >
          -
        </button>
      </div>
  )
}

export default Vertical
