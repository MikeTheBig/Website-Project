import React, { useState } from 'react';
import ProductDropdown from './Dropdown';
import ColorPicker from './Button';
import ExtraFeatures from './Option';
import QuantityInput from './Quantity';

const productOptions = [
  { name: 'Aircondition 2000 ', price: 200 },
  { name: 'Aircondition 3000', price: 299 },
  { name: 'Aircondition 4000', price: 349 },
];

const colorOptions = [
  { name: 'Black', price: 15, colorClass: 'bg-black' },
  { name: 'White', price: 15, colorClass: 'bg-white' },
];

const Sidebar: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>(productOptions[0].name);
  const [selectedColor, setSelectedColor] = useState<string | null>(colorOptions[0].name);
  const [quantity, setQuantity] = useState<number>(1);
  const [extraFeatures, setExtraFeatures] = useState({
    extendedWarranty: false,
    broughtUpToCurb: false,
    Setup: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // For controlling modal visibility

  const featurePrices = {
    extendedWarranty: 60,
    broughtUpToCurb: 30,
    Setup: 100,
  };

  // Find the selected product price
  const selectedProductPrice = productOptions.find((option) => option.name === selectedProduct)?.price || 0;

  // Find the selected color price
  const selectedColorPrice = colorOptions.find((option) => option.name === selectedColor)?.price || 0;

  // Calculate the total price for extra features
  const totalExtraFeaturesPrice = Object.keys(extraFeatures).reduce((total, key) => {
    return (
      total +
      (extraFeatures[key as keyof typeof extraFeatures]
        ? featurePrices[key as keyof typeof featurePrices]
        : 0)
    );
  }, 0);

  // Calculate the total price
  const totalPrice = (selectedProductPrice + selectedColorPrice + totalExtraFeaturesPrice) * quantity;

  const handleFeatureChange = (feature: string) => {
    setExtraFeatures((prevState) => ({
      ...prevState,
      [feature]: !prevState[feature as keyof typeof extraFeatures],
    }));
  };

  // Function to reset the order
  const resetOrder = () => {
    setSelectedProduct(productOptions[0].name);
    setSelectedColor(colorOptions[0].name);
    setQuantity(1);
    setExtraFeatures({
      extendedWarranty: false,
      broughtUpToCurb: false,
      Setup: false,
    });
  };

  return (
    <div className="bg-red-400 flex flex-col space-y-4 p-4">
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
      <ExtraFeatures
        extraFeatures={extraFeatures}
        onFeatureChange={handleFeatureChange}
      />
      <QuantityInput quantity={quantity} onQuantityChange={setQuantity} />
      
      {/* Display Total Price */}
      <div className="flex flex-col mt-4">
        <h4 className="text-lg font-semibold">Total Price:</h4>
        <p className="text-xl">${totalPrice.toFixed(2)}</p>
      </div>

      {/* Generate Quote Button */}
      <button
        className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
        onClick={() => setIsModalOpen(true)}
      >
        Generate Quote
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Is your order correct?</h2>
            <p><strong>Product:</strong> {selectedProduct || 'None selected'}</p>
            <p><strong>Color:</strong> {selectedColor || 'None selected'}</p>
            <p><strong>Additional Features:</strong></p>
            <ul className="list-disc ml-6">
              {Object.entries(extraFeatures).map(([feature, isSelected]) =>
                isSelected ? <li key={feature}>{feature}</li> : null
              )}
            </ul>
            <p><strong>Quantity:</strong> {quantity}</p>
            <p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>

            {/* Close Button */}
            <button
              className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
            <button
              className="mt-4 ml-12 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
              onClick={() => {
                alert('Your order is confirmed!');
                resetOrder();
                setIsModalOpen(false);
              }}
            >
              Confirm Order!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
