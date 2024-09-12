import React, { useState } from 'react';
import ProductDropdown from './Dropdown';
import ColorPicker from './Button'; 

const productOptions = [
  { name: 'Standard', price: 50 },
  { name: 'Premium', price: 100 },
  { name: 'Deluxe', price: 150 },
];

const colorOptions = [
  { name: 'Red', price: 10, colorClass: 'bg-red-500' },
  { name: 'Blue', price: 15, colorClass: 'bg-blue-500' },
  { name: 'Green', price: 20, colorClass: 'bg-green-500' },
];

const Sidebar: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const selectedProductPrice = productOptions.find(option => option.name === selectedProduct)?.price || 0;

  const selectedColorPrice = colorOptions.find(option => option.name === selectedColor)?.price || 0;

  const totalPrice = selectedProductPrice + selectedColorPrice;

  return (
    <div className="flex flex-col space-y-4 p-4">
      <ProductDropdown
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        productOptions={productOptions} 
      />
      <ColorPicker
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        colorOptions={colorOptions}
      />
      <div className="flex flex-col mt-4">
        <h4 className="text-lg font-semibold">Total Price:</h4>
        <p className="text-xl">
          ${totalPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
