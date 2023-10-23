import React, { ChangeEvent } from "react";
import Card from "./card";
import PrimaryButton from "./buttons/primaryButton";
import CancelButton from "./buttons/cancelButton";

interface NodeFormProps {
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onAddClick?: () => void;
  onCancelClick?: () => void;
}

const NodeForm: React.FC<NodeFormProps> = ({
  label = "",
  onChange = () => {},
  value = "",
  onAddClick = () => {},
  onCancelClick = () => {},
}) => {
  return (
    <Card>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">
        {label}
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-0 focus:border-blue-300 block w-full p-2.5 "
        placeholder="New Folder"
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        value={value}
      />
      <div className="mt-4">
        <PrimaryButton onClick={onAddClick} />
        <CancelButton onClick={onCancelClick} />
      </div>
    </Card>
  );
};

export default NodeForm;
