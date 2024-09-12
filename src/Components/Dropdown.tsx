import React from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface Dropdown {
  selectedProduct: string;
  setSelectedProduct: (option: string) => void;
  productOptions: { name: string; price: number }[];
}

const Dropdown: React.FC<Dropdown> = ({ selectedProduct, setSelectedProduct, productOptions }) => {
  return (
    <div className="relative inline-block text-left">
      <h2 className="block px-4 py-2 text-3xl w-full text-left font-bold">Chose your CoolBreeze</h2>
      <Menu as="div" className="relative">
        <div>
          <Menu.Button className="inline-flex w-full justify-between px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            {selectedProduct || 'Select a product'}
            <ChevronDownIcon className="w-5 h-5 ml-2" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
            {productOptions.map(option => (
              <Menu.Item key={option.name}>
                {({ active }) => (
                  <button
                    onClick={() => setSelectedProduct(option.name)}
                    className={`block px-4 py-2 text-sm w-full text-left ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                  >
                    {option.name} ${option.price}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default Dropdown;
