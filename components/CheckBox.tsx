import { useFormContext } from "react-hook-form";

interface CheckBoxProps {
  title: string;
  id: string;
  className?: string;
}

const CheckBox = ({ title, id, className }: CheckBoxProps): JSX.Element => {
  const { register, watch, setValue } = useFormContext();
  const checked = watch(id); // Get the value from react-hook-form

  return (
    <div className={`flex flex-row items-center justify-center py-4 px-4 ${className}`}>
      <div className="mr-4 text-lg lg:text-4xl">{title}</div>
      <input
        type="checkbox"
        {...register(id)}
        checked={checked || false} // Ensure it doesn't default to undefined
        onChange={() => setValue(id, !checked)} // Update react-hook-form state
        className="w-8 h-8"
      />
    </div>
  );
};

export default CheckBox;
