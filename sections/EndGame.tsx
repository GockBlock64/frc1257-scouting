import CheckBox from "@/components/CheckBox"
import MultipleChoice from "@/components/MultipleChoice"
import { useFormContext } from "react-hook-form"

interface EndGameProps {}

const EndGame = ({}: EndGameProps): JSX.Element => {
  const { register, watch, setValue } = useFormContext();
  return (
    <>
    <div className="max-w-full w-screen inline-block mx-28 justify-center">
      <div className="flex items-center justify-center mt-16 mb-4 text-7xl font-semibold">
        End Game
      </div>
      <div className="flex flex-col border-0 border-gray-600 w-96 md:w-1/2 mx-auto mb-0">
        <div className="flex flex-row items-center justify-center gap-4">
          <MultipleChoice
            title="End Position"
            id="end_position"
            options={[
              "None",
              "Parked",
              "Shallow",
              "Deep",
            ]}
            className="w-24 md:w-32 lg:w-40 xl:w-64"
          />
         <CheckBox 
          title="Malfunction?" 
          id="malfunction"  
          /> 
        </div>
      </div>
    </div>
    </>
  )
}

export default EndGame
