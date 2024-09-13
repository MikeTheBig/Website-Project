import React from 'react';

// Define the props that the QuantityInput component will receive
interface QuantityInput {
  quantity: number;
  onQuantityChange: (value: number) => void;
}

// Define the QuantityInput component
const QuantityInput: React.FC<QuantityInput> = ({ quantity, onQuantityChange }) => {
  return (
    <div className="flex flex-col mt-4">
      <h4 className="text-lg font-semibold">Quantity:</h4>
      {/* Input field for the quantity */}
      <input
        type="number"
        value={quantity}
        onChange={(e) => onQuantityChange(Number(e.target.value))} // Update quantity when input changes
        min="1"
        className="mt-1 px-2 py-1 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default QuantityInput;
