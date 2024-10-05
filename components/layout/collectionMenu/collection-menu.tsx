'use client';

import clsx from 'clsx';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

interface MenuItemProps {
  item: Menu;
  isSubItem?: boolean; // Add a flag to check if it's a sub-item
}

export function CollectionMenuItem({ item, isSubItem = false }: MenuItemProps) {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.path);
  const [isOpen, setIsOpen] = useState(false); // State to control submenu visibility
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to hold the timeout

  useEffect(() => {
    setActive(pathname === item.path);
  }, [pathname, item.path]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear any existing timeout to prevent early hide
    }
    setIsOpen(true); // Show submenu
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false); // Hide submenu with a slight delay
    }, 300); // Adjust this delay to your preference
  };

  return (
    <li
      className={clsx('relative list-none', {
        'tracking-wide': isSubItem, // Add padding to sub-items for visual hierarchy
        'font-semibold': !isSubItem // Make top-level items bold
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center">
        <Link
          target={item.path.startsWith('#') ? '' : '_blank'}
          href={item.path}
          className={clsx(
            'p-2 text-lg underline-offset-4 hover:font-semibold hover:text-tertiary hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm',
            {
              'text-black dark:text-neutral-300': active,
              'text-gray-500': isSubItem // Apply a different color for sub-items
            }
          )}
        >
          {item.title}
        </Link>

        {/* Conditionally render the arrow icon if the item has sub-items */}
        {!isSubItem && item.subItems && item.subItems.length > 0 && (
          <span className="ml-1 inline-block">
            <svg
              className="h-4 w-4 fill-current text-gray-600 dark:text-neutral-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </span>
        )}
      </div>

      {/* Check if the item has sub-items */}
      {item.subItems && item.subItems.length > 0 && (
        <ul
          className={clsx(
            'absolute left-0 z-50 mt-2 w-40 bg-white p-2 shadow-lg transition-all duration-200',
            isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-10 opacity-0'
          )}
        >
          {item.subItems.map((subItem) => (
            <CollectionMenuItem key={subItem.title} item={subItem} isSubItem />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function CollectionMenu({ menu }: { menu: Menu[] }) {
  if (!menu.length) return null;

  return (
    <nav>
      <div className="flex gap-4">
        {menu.map((item: Menu) => (
          <CollectionMenuItem key={item.title} item={item} />
        ))}
      </div>
    </nav>
  );
}
