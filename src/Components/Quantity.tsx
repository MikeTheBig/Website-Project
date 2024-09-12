import React from 'react';

interface QuantityInputProps {
  quantity: number;
  onQuantityChange: (value: number) => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({ quantity, onQuantityChange }) => {
  return (
    <div className="flex flex-col mt-4">
      <h4 className="text-lg font-semibold">Quantity:</h4>
      <input
        type="number"
        value={quantity}
        onChange={(e) => onQuantityChange(Number(e.target.value))}
        min="1"
        className="mt-1 px-2 py-1 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default QuantityInput;
