interface Button {
  selectedColor: string | null;
  setSelectedColor: (option: string) => void;
  colorOptions: { name: string; price: number; colorClass: string; imageUrl: string }[];
}

const Button: React.FC<Button> = ({ selectedColor, setSelectedColor, colorOptions }) => {
  {/* Get the image URL based on what the selected color is*/}
  const selectedImage = colorOptions.find(option => option.name === selectedColor)?.imageUrl;

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-semibold">Color Options</h3>


      {/* Color Option Buttons */}
      <div className="flex space-x-2 text-red-400">
        {colorOptions.map(option => (
          <button
            key={option.name}
            onClick={() => setSelectedColor(option.name)}
            className={`px-4 py-2 text-sm ${option.colorClass} rounded-md border-2 border-transparent focus:outline-none ${
              selectedColor === option.name ? 'ring-2 ring-opacity-50' : ''
            }`}
          >
            {option.name} ${option.price} {/* Display product name and price */}
          </button>
        ))}
      </div>

      {/* Show the image that corresponds to the selected color */}
      {selectedImage && (
        <div className="mt-4">
          <img src={selectedImage} alt={selectedColor || 'Selected color'} className="w-64 h-64 object-cover rounded-md" />
        </div>
      )}
    </div>
  );
};

export default Button;
