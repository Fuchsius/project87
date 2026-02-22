"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { usePublicStore } from "@/stores/publicStores";

interface DestinationSelectorProps {
  destinations: {
    name: string;
    locations: string[];
  }[];
}

const DestinationSelector: React.FC<DestinationSelectorProps> = ({
  destinations,
}) => {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(
    null
  );
  const { selectedLocations, setSelectedLocations } = usePublicStore();

  const handleLocationChange = (location: string, checked: boolean) => {
    if (checked) {
      setSelectedLocations([...selectedLocations, location]);
    } else {
      setSelectedLocations(selectedLocations.filter(loc => loc !== location));
    }
  };

  return (
    <div className="w-full">
      {/* Main View - List of Destinations */}
      {selectedDestination === null ? (
        <div className="">
          {destinations.map((destination) => (
            <button
              key={destination.name}
              onClick={() => setSelectedDestination(destination.name)}
              className="w-full flex justify-between items-center p-3 border text-sm bg-white transition-all duration-300 hover:bg-gray-100"
            >
              <span className="text-textcolor1 font-medium">
                {destination.name}
              </span>
              <span className="text-textcolor1">
                <ChevronRight size={20} />
              </span>
            </button>
          ))}
        </div>
      ) : (
        // Expanded View - Locations within a Destination
        <div>
          {/* Top Bar with Back Button */}
          <div className="flex justify-between items-center bg-myblue text-white px-4 text-sm tracking-wider py-3">
            <span className="font-medium">{selectedDestination}</span>
            <button
              onClick={() => setSelectedDestination(null)}
              className="font-medium"
            >
              BACK
            </button>
          </div>

          {/* List of Locations with Checkboxes */}
          <div className="border border-gray-300 h-64 overflow-y-auto px-5 py-3 bg-white text-textcolor1 font-light space-y-3">
            {destinations
              .find((d) => d.name === selectedDestination)
              ?.locations.map((location) => (
                <label
                  key={location}
                  className="flex items-center space-x-3 mb-2"
                >
                  <input
                    name={`location-${location}`}
                    type="checkbox"
                    checked={selectedLocations.includes(location)}
                    onChange={(e) => handleLocationChange(location, e.target.checked)}
                    className="w-6 h-6 rounded-none"
                  />
                  <span>{location}</span>
                </label>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationSelector;
