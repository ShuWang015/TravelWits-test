import React, { ReactNode, useState } from "react";

interface RatingInputProps {
  ceiling: string;
  floor: string;
  setCeiling: (Input: string) => void;
  setFloor: (Input: string) => void;
}
const RatingInput = ({
  ceiling,
  floor,
  setCeiling,
  setFloor,
}: RatingInputProps) => {
  const handleCeilingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCeiling(event.target.value);
  };
  const handleFloorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCeiling(event.target.value);
  };
  return (
    <div className="input-group">
      <span className="input-group-text">Rating between</span>
      <input
        type="number"
        aria-label="0.0"
        className="form-control"
        value={floor}
        onChange={handleFloorChange}
      />
      <input
        type="number"
        aria-label="10.0"
        className="form-control"
        value={ceiling}
        onChange={handleCeilingChange}
      />
    </div>
  );
};

export default RatingInput;
