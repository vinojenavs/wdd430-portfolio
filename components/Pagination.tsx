
"use client";

import Link from "next/link";
import {
  usePathname,
  useSearchParams,
} from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function createPageURL(pageNumber: number) {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    params.set("page", pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  }

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-8 flex items-center justify-center gap-4">

      {/* Previous Page */}
      <Link
        href={createPageURL(currentPage - 1)}
        aria-disabled={currentPage <= 1}
        tabIndex={currentPage <= 1 ? -1 : undefined}
        className={`rounded-lg border px-4 py-2 ${
          currentPage <= 1
            ? "pointer-events-none opacity-40"
            : "hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
      >
        Previous
      </Link>

      {/* Current Page */}
      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Page */}
      <Link
        href={createPageURL(currentPage + 1)}
        aria-disabled={currentPage >= totalPages}
        tabIndex={currentPage >= totalPages ? -1 : undefined}
        className={`rounded-lg border px-4 py-2 ${
          currentPage >= totalPages
            ? "pointer-events-none opacity-40"
            : "hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
      >
        Next
      </Link>

    </div>
  );
}
