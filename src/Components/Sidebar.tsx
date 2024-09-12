import React from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full p-4">
      <h2 className="text-lg font-semibold mb-4">Velkommen til </h2>
      <div>
        <Menu as="div" className="relative">
          <div>
            <MenuButton className="inline-flex w-full justify-between px-4 py-2 text-sm font-medium bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Product Type
              <ChevronDownIcon className="w-5 h-5 ml-2" aria-hidden="true" />
            </MenuButton>
          </div>

          <MenuItems className="absolute w-full mt-2 origin-top-right bg-white text-gray-900 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <MenuItem>
                {({ active }) => (
                  <a
                    href="#"
                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                  >
                    Standard
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <a
                    href="#"
                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                  >
                    Premium
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <a
                    href="#"
                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                  >
                    Deluxe
                  </a>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </aside>
  );
};

export default Sidebar;
