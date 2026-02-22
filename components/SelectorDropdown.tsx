
"use client";
import { useState, useRef, useEffect } from "react";

interface SelectorDropdownProps {
  label: string; // Label displayed before the selected item (e.g., "Sort by:")
  items: string[]; // List of dropdown options
  defaultSelected?: string; // Optional: Default selected item
  onSelect: (selected: string) => void; // Callback function when an item is selected
}

const SelectorDropdown: React.FC<SelectorDropdownProps> = ({
  label,
  items,
  defaultSelected,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultSelected || items[0]); // Default to first item if not provided
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
    onSelect(item); // Pass selected item to parent component
  };

  return (
    <div className="relative inline-block w-full h-full" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between px-4 py-2 border w-full h-full border-e1 bg-white text-textcolor1"
      >
        <span className="font-bold text-sm">
          {label} {selectedItem}
        </span>
        {/* Caret Icon */}
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute z-10 left-0 right-0 mt-1 bg-white border border-e1 shadow-md transition-all duration-200 transform origin-top
          ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
      >
        {items.map((item) => (
          <div
            key={item}
            onClick={() => handleSelect(item)}
            className={`px-4 py-2 text-base cursor-pointer hover:bg-e1 text-textcolor1 font-bold ${
              item === selectedItem ? "bg-e1" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorDropdown;
