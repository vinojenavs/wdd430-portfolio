
export default function Loading() {
  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">
        Open Source Projects
      </h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="animate-pulse rounded-lg border p-5 shadow-sm"
          >
            {/* Project title */}
            <div className="mb-4 h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />

            {/* Project description */}
            <div className="mb-2 h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
            <div className="mb-2 h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="mb-4 h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />

            {/* Technology badges */}
            <div className="mb-4 flex gap-2">
              <div className="h-6 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />
              <div className="h-6 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
              <div className="h-6 w-14 rounded-full bg-gray-200 dark:bg-gray-700" />
            </div>

            {/* Project link */}
            <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700" />
          </div>
        ))}
      </div>
    </section>
  );
}
