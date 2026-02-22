import { cn } from "@/lib/utils";
import { SVGProps, useEffect, useState } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
  strokeWidth?: number;
  className?: string;
  src: string; // Path to the SVG file
};

const Icon = ({
  size = 24,
  strokeWidth = 2,
  className,
  src,
  ...props
}: IconProps) => {
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    if (!src) return;
    fetch(`/assets/icons/${src}.svg`)
      .then((res) => res.text())
      .then((data) => setSvgContent(data))
      .catch((err) => console.error("Error loading SVG:", err));
  }, [src]);

  return svgContent ? (
    <div
      className={cn("w-full h-full flex items-center justify-center object-contain", className)}
    //   style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      {...(props as React.HTMLAttributes<HTMLDivElement>)}
    />
  ) : null;
};

export default Icon;
