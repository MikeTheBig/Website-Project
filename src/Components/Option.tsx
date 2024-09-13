import React from 'react';

// Define the props that the ExtraFeatures component will receive
interface ExtraFeatures {
  extraFeatures: {
    extendedWarranty: boolean;
    broughtUpToCurb: boolean;
    Setup: boolean;
  };
  featurePrices: {
    extendedWarranty: number;
    broughtUpToCurb: number;
    Setup: number;
  };
  onFeatureChange: (feature: string) => void; // Function to handle changes in feature selection
}

// Define the ExtraFeatures component
const ExtraFeatures: React.FC<ExtraFeatures> = ({ extraFeatures, featurePrices, onFeatureChange }) => {
  return (
    <div className="flex flex-col mt-4">
      <h4 className="text-lg font-semibold">Extra Features:</h4>
      <div className="flex flex-col space-y-2">
        {/* Checkbox for the 'extended warranty' feature */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={extraFeatures.extendedWarranty}
            onChange={() => onFeatureChange('extendedWarranty')}
            className="form-checkbox"
          />
          
          {/* Display the feature name and price */}
          <span>5 Years Extended Warranty (${featurePrices.extendedWarranty})</span>
        </label>

         {/* Checkbox for the 'brought up to curb' feature */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={extraFeatures.broughtUpToCurb}
            onChange={() => onFeatureChange('broughtUpToCurb')}
            className="form-checkbox"
          />
            
            {/* Display the feature name and price */}
          <span>Brought up to curb (${featurePrices.broughtUpToCurb})</span>
        </label>
        
         {/* Checkbox for the 'setup' feature */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={extraFeatures.Setup}
            onChange={() => onFeatureChange('Setup')}
            className="form-checkbox"
          />
            
            {/* Display the feature name and price */}
          <span>Set it all up (${featurePrices.Setup})</span>
        </label>
      </div>
    </div>
  );
};

export default ExtraFeatures;
