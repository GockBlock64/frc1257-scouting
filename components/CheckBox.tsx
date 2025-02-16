import { useFormContext } from "react-hook-form";

interface CheckBoxProps {
  title: string;
  id: string; // Changed to string since it’s being used as a string key
  className?: string;
  checked?: boolean;
  setValue: (value: boolean) => void;
}

const CheckBox = ({ title, id, className, checked, setValue }: CheckBoxProps): JSX.Element => {
  return (
    <div className={`flex flex-row items-center justify-center py-4 px-4 ${className}`}>
      <div className="mr-4 text-lg lg:text-4xl">{title}</div>
      <input
        type="checkbox"
        checked={checked} // Ensure it reflects the correct state
        onChange={() => setValue(!checked)} // Toggle the state
        className="w-8 h-8"
      />
    </div>
  );
};

export default CheckBox;