"use client";

import Image from "next/image";
import React, { useState, useEffect, ChangeEvent, FocusEvent, useId } from "react";
import { Range, getTrackBackground } from "react-range";

interface PriceRangeSelectorProps {
  defaultMin?: number;
  defaultMax?: number;
}

const MIN = 500;
const MAX = 10000;
const STEP = 500;

const PriceRangeSelector: React.FC<PriceRangeSelectorProps> = ({
  defaultMin = 2500,
  defaultMax = 10000,
}) => {
  // Clamp defaults to [MIN, MAX]
  const initialMin = Math.max(MIN, Math.min(defaultMin, MAX));
  const initialMax = Math.max(MIN, Math.min(defaultMax, MAX));

  // State for the actual slider values
  const [values, setValues] = useState<number[]>([initialMin, initialMax]);

  // Stable unique ids for inputs
  const uid = useId();

  // State for the raw text in each input
  const [minInput, setMinInput] = useState("");
  const [maxInput, setMaxInput] = useState("");

  // Track if user is focused in min/max input
  const [isMinFocused, setIsMinFocused] = useState(false);
  const [isMaxFocused, setIsMaxFocused] = useState(false);

  // Helper: format a number into e.g. "$2,500" or "$10,000+"
  const formatDisplay = (val: number) => {
    if (val >= MAX) return "$10,000+";
    return `$${val.toLocaleString()}`;
  };

  // Whenever the slider changes, update the inputs IF not focused
  useEffect(() => {
    if (!isMinFocused) {
      setMinInput(formatDisplay(values[0]));
    }
  }, [values[0], isMinFocused]);

  useEffect(() => {
    if (!isMaxFocused) {
      setMaxInput(formatDisplay(values[1]));
    }
  }, [values[1], isMaxFocused]);

  // -------------------- MIN INPUT HANDLERS --------------------
  const handleMinFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsMinFocused(true);
    // Remove all non-digits so the user sees only the raw number
    const numeric = e.target.value.replace(/\D/g, "");
    setMinInput(numeric);
  };

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Only allow digits while typing
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setMinInput(onlyDigits);
  };

  const handleMinBlur = () => {
    setIsMinFocused(false);
    let newVal = parseInt(minInput.replace(/\D/g, ""), 10);
    // If blank or invalid, default to MIN
    if (isNaN(newVal)) newVal = MIN;
    // Clamp to [MIN, currentMax]
    newVal = Math.max(MIN, Math.min(newVal, values[1]));
    // Update the slider
    setValues([newVal, values[1]]);
  };

  // -------------------- MAX INPUT HANDLERS --------------------
  const handleMaxFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsMaxFocused(true);
    const numeric = e.target.value.replace(/\D/g, "");
    setMaxInput(numeric);
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setMaxInput(onlyDigits);
  };

  const handleMaxBlur = () => {
    setIsMaxFocused(false);
    let newVal = parseInt(maxInput.replace(/\D/g, ""), 10);
    // If blank or invalid, default to the current min
    if (isNaN(newVal)) newVal = values[0];
    // Clamp to [currentMin, MAX]
    newVal = Math.max(values[0], Math.min(newVal, MAX));
    setValues([values[0], newVal]);
  };

  return (
    <div className="w-full">
      {/* Range Slider */}
      <div className="my-4 px-2">
        <Range
          step={STEP}
          min={MIN}
          max={MAX}
          values={values}
          onChange={(vals) => setValues(vals)}
          renderTrack={({ props, children }) => {
            const { ref, onMouseDown, onTouchStart, style, ...rest } = props;
            return (
              <div
                ref={ref}
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}
                className="relative h-2 w-full rounded bg-6b"
                style={{
                  ...style,
                  background: getTrackBackground({
                    values,
                    colors: ["#ccc", "#999", "#ccc"],
                    min: MIN,
                    max: MAX,
                  }),
                }}
                {...rest}
              >
                {children}
              </div>
            );
          }}
          renderThumb={({ index, props }) => {
            const { key, ref, style, ...rest } = props;
            return (
              <div
                key={key}
                ref={ref}
                style={style}
                {...rest}
                className="h-6 w-6 rounded-full bg-white border-2 border-gray-500 cursor-grab flex items-center justify-center p-[5px]"
              >
                <Image
                  src="/assets/icons/threeline.svg"
                  alt="threeline"
                  width={16}
                  height={16}
                />
              </div>
            );
          }}
        />
      </div>

      <div className="flex items-center gap-2 max-w-md mt-8">
        {/* Min Input */}
        <div className="flex-1 relative">
          <div className="absolute -top-2 left-3 px-1 bg-white text-textcolor1 text-xs">
            Min
          </div>
          <input
            type="text"
            name="minBudget"
            id={`${uid}-minBudget`}
            value={minInput}
            onFocus={handleMinFocus}
            onChange={handleMinChange}
            onBlur={handleMinBlur}
            className="w-full px-3 py-2 border border-e1 focus:outline-none focus:border-myred focus:placeholder:text-myred"
          />
        </div>

        {/* Divider */}
        <div className="text-e1 self-center w-2 border" />

        {/* Max Input */}
        <div className="flex-1 relative">
          <div className="absolute -top-2 left-3 px-1 bg-white text-textcolor1 text-xs">
            Max
          </div>
          <input
            type="text"
            name="maxBudget"
            id={`${uid}-maxBudget`}
            value={maxInput}
            onFocus={handleMaxFocus}
            onChange={handleMaxChange}
            onBlur={handleMaxBlur}
            className="w-full px-3 py-2 border border-e1 focus:outline-none focus:border-myred focus:placeholder:text-myred"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSelector;
