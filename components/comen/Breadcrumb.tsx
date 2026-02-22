import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

/**
 * Breadcrumb component for rendering a navigable breadcrumb trail.
 *
 * @param {Array} items - Array of breadcrumb items. Each item should have `label` and optional `href`.
 * Example: [{ label: 'Home', href: '/' }, { label: 'Tours' }, { label: 'Tour Name' }]
 */
interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="flex items-center gap-2 font-light text-xs text-textcolor1 my-container">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <Link href={item.href} className="underline">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && <ChevronRight size={16} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
