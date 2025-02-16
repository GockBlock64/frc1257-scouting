import CheckBox from "@/components/CheckBox";
import NumberButton from "@/components/NumberButton";
import MultipleChoice from "@/components/MultipleChoice";
import TextInput from "@/components/TextInput";
import { useState } from "react";

interface postGameProps {}

// Post Game section of the app
const PostGame = ({}: postGameProps): JSX.Element => {
  const [isStrategyMember, setIsStrategyMember] = useState(false);

  return (
    <>
      {/* Strategy Scouting Section */}
      <div className="flex items-center justify-center mt-16 mb-4 text-4xl font-semibold">
        Behavioral
      </div>
      <div className="flex flex-col w-min mx-auto border-2 border-gray-600 p-4">
        <CheckBox title="Strategy Member?" id="strategy_member"  checked={isStrategyMember} setValue={setIsStrategyMember} />
      </div>
      {isStrategyMember && (
        <div className="flex flex-col w-min mx-auto border-2 border-gray-600 p-4 mt-4">
        <NumberButton
          id="speed"
          title="Speed"
          className="border-green-500 bg-green-500"
          min={0}
          max={40}
        />
        <NumberButton
          id="stability"
          title="Stability"
          className="border-green-500 bg-green-500"
          min={0}
          max={40}
        />
        <NumberButton
          id="intake"
          title="Intake"
          className="border-purple-500 bg-purple-500"
          min={0}
          max={40}
        />
        <NumberButton
          id="driver_skill"
          title="Driver Skill"
          className="border-purple-500 bg-purple-500"
          min={0}
          max={40}
          />
        <NumberButton
          id="cycle_consistency"
          title="Cycle Consistency"
          className="border-purple-500 bg-purple-500"
          min={0}
          max={40}
        />
        <NumberButton
          id="versatility"
          title="Versatility"
          className="border-purple-500 bg-purple-500"
          min={0}
          max={40}
        />
        <MultipleChoice
            id="archetype"
            title="Archetype"
            options={["High Coral", "Low Coral", "Algae", "Defense"]}
        />
        </div>
      )}
      <div className="flex items-center justify-center mt-16 mb-4 text-4xl font-semibold">
        Notes
      </div>
      <div>
      <TextInput
          title="Notes (If you're asking, I made it not accept commas on purpose)"
          id="notes"
          className="w-full"
          rows={3}
          validChars={/[a-zA-Z0-9 \./"';:()?!]/}
        />
        </div>
    </>
  );
};

export default PostGame;
