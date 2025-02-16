import { useState } from "react";
import CheckBox from "@/components/CheckBox"
import MultipleChoice from "@/components/MultipleChoice"
import NumberButton from "@/components/NumberButton"
import TextInput from "@/components/TextInput"
import { useFormContext } from "react-hook-form"
import DropDown from "@/components/DropDown"

interface EndGameProps {}

const EndGame = ({}: EndGameProps): JSX.Element => {
  const { register, watch, setValue } = useFormContext();
  return (
    <>
      <div className="flex items-center justify-center mt-16 mb-4 text-4xl font-semibold">
        End Game
      </div>
      <div className="flex flex-col border-2 border-gray-600 w-96 md:w-1/2 mx-auto mb-16">
        <div className="flex flex-row items-center justify-center gap-4">
          <DropDown
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
    </>
  )
}

export default EndGame
