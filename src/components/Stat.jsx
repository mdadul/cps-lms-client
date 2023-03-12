export const Statistic = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div className="text-center">
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
          <svg
            className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <h6 className="text-4xl font-bold text-deep-purple-accent-400">5+</h6>
        <p className="mb-2 font-bold text-md">Courses</p>
        <p className="text-gray-700">
          It’s something that’s many of the wisest people in history have kept
          in mind.
        </p>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
          <svg
            className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <h6 className="text-4xl font-bold text-deep-purple-accent-400">500+</h6>
        <p className="mb-2 font-bold text-md">Students</p>
        <p className="text-gray-700">
          For many men, the acquisition of wealth does not end their troubles,
          it only changes them.
        </p>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
          <svg
            className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <h6 className="text-4xl font-bold text-deep-purple-accent-400">3+</h6>
        <p className="mb-2 font-bold text-md">Mentor</p>
        <p className="text-gray-700">
          It's a helluva start, being able to recognize what makes you happy
          today, in this moment.
        </p>
      </div>
    </div>
  );
};
