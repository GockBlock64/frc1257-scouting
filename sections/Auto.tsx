import CheckBox from "@/components/CheckBox"
import NumberButton from "@/components/NumberButton"
import Vertical from "@/components/Vertical"

interface AutoProps {}

// Autonomous section of the app
const Auto = ({}: AutoProps): JSX.Element => {
  return (
    <>
      <div className="flex items-center justify-center mt-16 mb-4 text-7xl font-semibold">
        Autonomous
      </div>
      <div className="flex flex-col w-min mx-auto border-2 border-gray-600">
        <CheckBox title="Mobility?" id="mobility" />
      </div>
      <div className="flex items-center justify-center mt-8 mb-4 text-4xl font-semibold ">
        Coral
      </div>
      <div className="flex flex-row justify-center gap-4">
        <div className="flex flex-col border-0 border-gray-600">
          <NumberButton
            id="auto_coral1"
            title="L1"
            className="border-green-500 bg-green-500"
            min={0}
            max={40}
          />
          <NumberButton
            id="auto_coral2"
            title="L2"
            className="border-green-500 bg-green-500"
            min={0}
            max={40}
          />
          <NumberButton
            id="auto_coral3"
            title="L3"
            className="border-green-500 bg-green-500"
            min={0}
            max={40}
          />
          <NumberButton
            id="auto_coral4"
            title="L4"
            className="border-purple-500 bg-purple-500"
            min={0}
            max={40}
          />
        </div>
        <div className="flex flex-col border-0 border-gray-600 w-">
          <Vertical
            id="auto_coral_miss"
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
          id="auto_processor"
          title="Proc."
          className="border-purple-500 bg-purple-500"
          min={0}
          max={40}
        />
        <NumberButton
          id="auto_net"
          title="Net"
          className="border-purple-500 bg-purple-500"
          min={0}
          max={40}
        />
        </div>
       <div className="flex flex-col border-0 border-gray-600">
        <NumberButton
          id="auto_processor_miss"
          title="Proc. Miss"
          className="border-purple-500 bg-purple-500"
          min={0}
          max={40}
        />
        <NumberButton
          id="auto_net_miss"
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

export default Auto
