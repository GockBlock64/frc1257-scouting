import CheckBox from "@/components/CheckBox"
import NumberButton from "@/components/NumberButton"

interface AutoProps {}

// Autonomous section of the app
const Auto = ({}: AutoProps): JSX.Element => {
  return (
    <>
      <div className="flex items-center justify-center mt-16 mb-4 text-4xl font-semibold">
        Autonomous
      </div>
      <div className="flex flex-col w-min mx-auto border-2 border-gray-600">
        <div className="flex flex-row">
          <NumberButton
            id="auto_amp"
            title="Amp"
            className="border-green-500 bg-green-500"
            min={0}
            max={40}
          />
          <NumberButton
            id="auto_speaker"
            title="Speaker"
            className="border-purple-500 bg-purple-500"
            min={0}
            max={40}
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <NumberButton
            id="auto_amp_miss"
            title="Amp Missed"
            className="border-green-500 bg-green-500"
            min={0}
            max={40}
          />
          <NumberButton
            id="auto_speaker_miss"
            title="Speaker Missed"
            className="border-purple-500 bg-purple-500"
            min={0}
            max={40}
          />
        </div>
        <CheckBox title="Mobility (robot exited zone)" id="mobility" />
      </div>
    </>
  )
}

export default Auto
