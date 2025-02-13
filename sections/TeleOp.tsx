import CheckBox from "@/components/CheckBox"
import NumberButton from "@/components/NumberButton"
import Vertical from "@/components/Vertical"

interface teleProps {}

// Autonomous section of the app
const TeleOp = ({}: teleProps): JSX.Element => {
  return (
    <>
      <div className="flex items-center justify-center mt-16 mb-4 text-7xl font-semibold">
        Tele-Operated
      </div>
      <div className="flex items-center justify-center mt-8 mb-4 text-4xl font-semibold ">
        Coral
      </div>
      <div className="flex flex-row justify-center gap-4">
        <div className="flex flex-col border-0 border-gray-600">
          <NumberButton
            id="tele_coral1"
            title="L1"
            className="border-green-500 bg-green-500"
            min={0}
            max={40}
          />
          <NumberButton
            id="tele_coral2"
            title="L2"
            className="border-green-500 bg-green-500"
            min={0}
            max={40}
          />
          <NumberButton
            id="tele_coral3"
            title="L3"
            className="border-green-500 bg-green-500"
            min={0}
            max={40}
          />
          <NumberButton
            id="tele_coral4"
            title="L4"
            className="border-purple-500 bg-purple-500"
            min={0}
            max={40}
          />
        </div>
        <div className="flex flex-col border-0 border-gray-600 w-">
          <Vertical
            id="tele_coral_miss"
            title="Coral Miss"
            className="border-purple-500 bg-purple-500"
            min={0}
            max={40}
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-16 mb-4 text-4xl font-semibold">
        Algae
      </div>
      <div className="flex flex-row w-min gap-4 mx-auto border-0 border-gray-600">
      <div className="flex flex-col border-0 border-gray-600">
        <NumberButton
          id="tele_processor"
          title="Proc."
          className="border-purple-500 bg-purple-500"
          min={0}
          max={40}
        />
        <NumberButton
          id="tele_net"
          title="Net"
          className="border-purple-500 bg-purple-500"
          min={0}
          max={40}
        />
        </div>
       <div className="flex flex-col border-0 border-gray-600">
        <NumberButton
          id="tele_processor_miss"
          title="Proc. Miss"
          className="border-purple-500 bg-purple-500"
          min={0}
          max={40}
        />
        <NumberButton
          id="tele_net_miss"
          title="Net Miss"
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
