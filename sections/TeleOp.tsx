import NumberButton from "@/components/NumberButton"

interface TeleOpProps {}

const TeleOp = ({}: TeleOpProps): JSX.Element => {
  return (
    <>
      <div className="flex items-center justify-center mt-16 mb-4 text-4xl font-semibold">
        Tele-Operated
      </div>
      <div className="flex flex-row sm:flex-col w-min mx-auto border-2 border-gray-600">
        <div className="flex flex-col sm:flex-row">
          <NumberButton
            id="tele_amp"
            title="Amp"
            className="border-green-500 bg-green-500"
            min={0}
            max={40}
          />
          <NumberButton
            id="tele_speaker"
            title="Speaker"
            className="border-purple-500 bg-purple-500"
            min={0}
            max={40}
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <NumberButton
            id="tele_amp_miss"
            title="Amp Missed"
            className="border-green-500 bg-green-500"
            min={0}
            max={40}
          />
          <NumberButton
            id="tele_speaker_miss"
            title="Speaker Missed"
            className="border-purple-500 bg-purple-500"
            min={0}
            max={40}
          />
        </div>
      </div>
    </>
  )
}

export default TeleOp
