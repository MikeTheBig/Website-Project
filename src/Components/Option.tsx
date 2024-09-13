import React from 'react';

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
  onFeatureChange: (feature: string) => void;
}

const ExtraFeatures: React.FC<ExtraFeatures> = ({ extraFeatures, featurePrices, onFeatureChange }) => {
  return (
    <div className="flex flex-col mt-4">
      <h4 className="text-lg font-semibold">Extra Features:</h4>
      <div className="flex flex-col space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={extraFeatures.extendedWarranty}
            onChange={() => onFeatureChange('extendedWarranty')}
            className="form-checkbox"
          />
          <span>5 Years Extended Warranty (${featurePrices.extendedWarranty})</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={extraFeatures.broughtUpToCurb}
            onChange={() => onFeatureChange('broughtUpToCurb')}
            className="form-checkbox"
          />
          <span>Brought up to curb (${featurePrices.broughtUpToCurb})</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={extraFeatures.Setup}
            onChange={() => onFeatureChange('Setup')}
            className="form-checkbox"
          />
          <span>Set it all up (${featurePrices.Setup})</span>
        </label>
      </div>
    </div>
  );
};

export default ExtraFeatures;
