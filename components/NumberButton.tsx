import { FormValues } from "@/pages"
import { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"

interface NumberButtonProps {
  title: string
  id: keyof FormValues
  className?: string
  min: number
  max: number
}

const NumberButton = (props: NumberButtonProps): JSX.Element => {
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
      <div className="flex flex-row items-center justify-center p-1 pt-3 w-[300px] lg:w-[24rem]">
        <div className="grow-0 mb-4 text-3xl w-15 mr-2">{text?.()}</div>
        <button
          type="button"
          onClick={incrementValue}
          className={`h-14 w-16 text-3xl rounded-l-lg border-4 ${props.className}`}
        >
        +
        </button>
        <input
          type="text"
          {...register(props.id)}
          className={`text-center h-14 w-14 text-4xl font-bold border-y-4 ${props.className} !bg-neutral-900 rounded-none`}
          readOnly
        ></input>
        <button
          type="button"
          onClick={decrementValue}
          className={`h-14 w-16 text-3xl rounded-r-lg border-4 flex items-center justify-center ${props.className}`}
        >
          -
        </button>
      </div>
  )
}

export default NumberButton
