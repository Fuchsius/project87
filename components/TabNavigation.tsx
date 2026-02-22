"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import React, { Fragment } from "react";

interface Tab {
  name: string; // Query parameter value for the tab
  label: string; // Display label for the tab
}

interface TabNavigationProps {
  tabs: Tab[]; // Array of tabs
  defaultTab?: string; // Default tab name if no query parameter is present
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  defaultTab = "itinerary",
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get the active tab from the URL or fall back to the default tab
  const activeTab = searchParams.get("tab") || defaultTab;

  // Handle tab click to update the URL with the selected tab
  const handleTabClick = (tab: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab); // Set the selected tab as a query parameter
    router.push(`${pathname}?${params.toString()}`); // Update the URL
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="bg-bggray1 w-full h-[70px] sticky top-0 z-10">
      <div className="my-container flex w-full h-full gap-1">
        {tabs.map((tab, index) => (
          <Fragment key={index}>
            <div
              key={tab.name}
              className={`flex flex-col h-full ${
                activeTab === tab.name ? "" : "p-1"
              }`}
            >
              {/* Tab button */}
              <div
                onClick={() => handleTabClick(tab.name)}
                className={`text-lg h-full flex items-center justify-center px-8 cursor-pointer ${
                  activeTab === tab.name
                    ? "font-bold text-textcolor1"
                    : "text-textcolor2 hover:bg-e6 rounded-md transition-colors duration-200"
                }`}
              >
                {tab.label}
              </div>
              {/* Active tab underline */}
              {activeTab === tab.name && (
                <div className="border-myred border-b-[4px] rounded-full mx-2"></div>
              )}
            </div>
            {/* Divider between tabs */}
            {index < tabs.length - 1 && (
              <div className="h-6 border-[1px] border-textcolor3 my-auto" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
