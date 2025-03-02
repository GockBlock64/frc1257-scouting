import { useEffect } from "react";
import CheckBox from "@/components/CheckBox";
import NumberButton from "@/components/NumberButton";
import DropDown from "@/components/DropDown";
import TextInput from "@/components/TextInput";
import { useFormContext, Controller } from "react-hook-form";

const PostGame = (): JSX.Element => {
  const { control, watch, setValue } = useFormContext();
  const isStrategyMember = watch("strategy_member", false); // Watch for changes

  // When strategy_member is false, set all relevant fields to "N/A"
  useEffect(() => {
    if (!isStrategyMember) {
      // Set the fields to N/A if strategy_member is not selected
      setValue("speed", "N/A");
      setValue("stability", "N/A");
      setValue("intake", "N/A");
      setValue("driver_skill", "N/A");
      setValue("cycle_consistency", "N/A");
      setValue("versatility", "N/A");
      setValue("archetype", "N/A");
    } else {
      // Reset fields back to their numeric default when strategy_member is selected
      setValue("speed", 5);
      setValue("stability", 5);
      setValue("intake", 5);
      setValue("driver_skill", 5);
      setValue("cycle_consistency", 5);
      setValue("versatility", 5);
      setValue("archetype", "");  // Optionally reset archetype to empty if needed
    }
  }, [isStrategyMember, setValue]); // Trigger when isStrategyMember changes

  return (
    <>
    <div className="max-w-full w-screen inline-block mx-28 justify-center">
      <div className="flex items-center justify-center mt-16 mb-4 text-7xl font-semibold">
        Post Game
      </div>
      {/* Strategy Scouting Section */}
      <div className="flex items-center justify-center mt-16 mb-4 text-4xl font-semibold">
        Behavioral
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <Controller
          name="strategy_member"
          control={control}
          render={({ field }) => (
            <CheckBox title="Strategy Member?" id="strategy_member" {...field} />
          )}
        />
      </div>

      {isStrategyMember && (
        <div className="flex flex-col items-center border-0 border-gray-600 p-4 mt-4">
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
            className="border-purple-500 bg-purple-500"
            min={0}
            max={40}
          />
          <NumberButton
            id="intake"
            title="Intake"
            className="border-green-500 bg-green-500"
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
            className="border-green-500 bg-green-500"
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
          <DropDown
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
          className="w-[30rem]"
          rows={5}
          validChars={/[a-zA-Z0-9 \./"';:()?!]/}
        />
      </div>
      </div>
    </>
  );
};

export default PostGame;
