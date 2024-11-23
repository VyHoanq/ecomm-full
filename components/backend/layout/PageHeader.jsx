import React from 'react';
import { PlusSquare } from 'lucide-react';
import Link from 'next/link';
import Heading from './Heading';

export default function PageHeader({ title, linkTitle, href }) {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center py-4 mb-4">
        {/* Title */}
        <Heading title={title} />

        {/* Button */}
        <Link
          href={href}
          className="flex items-center justify-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:from-teal-400 dark:via-teal-500 dark:to-teal-600 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-3 text-center"
        >
          {/* Icon */}
          <PlusSquare className="w-5 h-5" />
          {/* Text: Hidden on small screens */}
          <span className="hidden sm:inline">{linkTitle}</span>
        </Link>
      </div>
    </div>
  );
}
