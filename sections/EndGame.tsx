import CheckBox from "@/components/CheckBox"
import MultipleChoice from "@/components/MultipleChoice"
import NumberButton from "@/components/NumberButton"
import TextInput from "@/components/TextInput"

interface EndGameProps {}

const EndGame = ({}: EndGameProps): JSX.Element => {
  return (
    <>
      <div className="flex items-center justify-center mt-16 mb-4 text-4xl font-semibold">
        End Game
      </div>
      <div className="flex flex-col border-2 border-gray-600 w-96 md:w-1/2 mx-auto mb-16">
        <div className="flex flex-row items-center justify-center">
          <MultipleChoice
            title="End Position"
            id="end_position"
            options={[
              "None",
              "Parked",
              "Onstage"
            ]}
            className="w-24 md:w-32 lg:w-40 xl:w-64"
          />
          <div className="flex w-6" />
          <CheckBox
            title="Trap"
            id="trap"
          />
          <div className="flex w-6" />
          <NumberButton
            title="Harmony"
            id="harmony"
            className="bg-green-500 border-green-500"
            min={0}
            max={2}
          />
        </div>
        <TextInput
          title="Notes (If you're asking, I made it not accept commas on purpose)"
          id="notes"
          className="w-full"
          rows={3}
          validChars={/[a-zA-Z0-9 \./"';:()?!]/}
        />
        <CheckBox title="Malfunction" id="malfunction" />
      </div>
    </>
  )
}

export default EndGame
