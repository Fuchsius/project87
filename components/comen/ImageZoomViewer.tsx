"use client";

import { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Button } from "@/components/ui/button";
import { X, ZoomIn, ZoomOut } from "lucide-react";

interface ImageZoomViewerProps {
  imageSrc: string;
  onClose: () => void;
  opend: boolean;
}

const ImageZoomViewer: React.FC<ImageZoomViewerProps> = ({
  opend,
  imageSrc,
  onClose,
}) => {
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    if (imageSrc) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    // Cleanup function to reset scroll behavior if component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [imageSrc]);

  return (
    <div className="fixed inset-0 bg-white flex flex-col justify-center items-center z-50">
      <TransformWrapper
        onWheelStart={() => setShowControls(false)}
        onWheelStop={() => setShowControls(true)}
        initialScale={1}
        centerOnInit
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <div className="relative w-screen h-screen flex items-center justify-center">
            <TransformComponent>
              <img
                src={imageSrc}
                alt="Zoomable content"
                className="w-screen h-auto max-h-screen object-contain"
              />
            </TransformComponent>

            {/* {showControls && ( */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <button
                onClick={onClose}
                className="bg-white border border-border2 flex items-center justify-center w-8 h-8"
              >
                <img src="/assets/icons/close-dark.svg" alt="" className="w-4 h-4"/>
              </button>
              <button
                onClick={() => zoomIn()}
                className="bg-white  border border-border2 flex items-center justify-center w-8 h-8"
              >
                <img src="/assets/icons/plus.svg" alt="" />
              </button>
              <button
                onClick={() => zoomOut()}
                className="bg-white border border-border2 flex items-center justify-center w-8 h-8"
              >
                <img src="/assets/icons/minus.svg" alt="" />
              </button>
              {/* <Button
                  onClick={() => resetTransform()}
                  variant="secondary"
                  size="sm"
                  className="flex justify-center items-center p-2"
                >
                  <span className="text-sm">Reset</span>
                </Button> */}
            </div>
            {/* )} */}
          </div>
        )}
      </TransformWrapper>
    </div>
  );
};

export default ImageZoomViewer;

