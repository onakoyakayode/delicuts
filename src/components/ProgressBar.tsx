import React, { useMemo, useState, useEffect } from "react";

const ProgressBar = () => {
  const initialData = useMemo(
    () => [
      { id: 1, name: "Meat Quality", percentage: 97 },
      { id: 2, name: "Butcher Skill", percentage: 93 },
      { id: 3, name: "Tool Cleanliness", percentage: 91 },
    ],
    []
  );

  const [data, setData] = useState(initialData);

  useEffect(() => {
    // You can replace this logic to fetch data from an API or another source
    setData(initialData);
  }, [setData, initialData]);

  return (
    <div className="px-[20px]">
      {data.map((item) => (
        <div key={item.id} className="text-center mb-2 text-primaryText">
          <label
            htmlFor={`fixedPercentage${item.id}`}
            className=" text-lg mb-2"
          >
            <div className="text-[0.9rem] font-semibold flex justify-between items-center">
              <h4>{item.name}</h4>
              <h4>{item.percentage}%</h4>
            </div>
          </label>
          {/* Progress bar container */}
          <div className="w-full bg-gray-200 h-2 rounded-md overflow-hidden mb-4">
            {/* Progress bar */}
            <div
              className=" bg-border-col h-full"
              style={{ width: `${item.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
      {/* Display other UI elements or components as needed */}
    </div>
  );
};

export default ProgressBar;
