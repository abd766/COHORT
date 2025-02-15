export default function RevenueCard({
  title,
  showWarning,
  orderCount,
  amount,
}) {
  return (
    <div className="bg-white-500 rounded-lg shadow-sm p-7">
      <div className="flex text-slate-500 text-md pb-2 gap-1">
        <div className="">
          {title}
          {showWarning ? <div>{showWarning}</div> : null}
        </div>
        <div className="pt-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="text-black-500 font-medium text-3xl font-mono">
          ₹{amount}
        </div>
        {orderCount ? (
          <div className="flex text-blue-500 pt-2">
            <div className="underline">{orderCount} order(s)</div>
            <div className="pt-0.5">
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              }
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
