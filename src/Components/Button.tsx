interface Botton {
  selectedColor: string | null;
  setSelectedColor: (option: string) => void;
  colorOptions: { name: string; price: number; colorClass: string }[];
}

const Button: React.FC<Botton> = ({ selectedColor, setSelectedColor, colorOptions }) => {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="text-lg font-semibold">Color Options</h3>
      {colorOptions.map(option => (
        <button
          key={option.name}
          onClick={() => setSelectedColor(option.name)}
          className={`px-4 py-2 text-sm text-red-400 ${option.colorClass} rounded-md border-2 border-transparent focus:outline-none ${selectedColor === option.name ? 'ring-2 ring-opacity-50' : ''}`}
        >
          {option.name} ${option.price}
        </button>
      ))}
    </div>
  );
};

export default Button;
