import React, { useContext } from "react";
import { StateManageContext } from "../../../context/StateManageContext";
import { FaEdit } from "react-icons/fa";

const PriceTermSlate = ({ index, rows, selected }) => {
  const calculateTotalPercentage = () => {
    let value = 0;
    rows.content.forEach((element) => {
      value += element.percentage;
    });
    return value;
  };
  const calculateTotalValue = () => {
    let value = 0;
    rows.content.forEach((element) => {
      value += element.value;
    });
    return value;
  };
  const { setPriceTerms, setPriceTermsEdit } = useContext(StateManageContext);

  return (
    <div className="w-full flex flex-row min-h-[100px] px-6 py-8">
      {selected !== null && (
        <button
          onClick={() => {
            setPriceTerms(true);
            setPriceTermsEdit(index);
          }}
          className="absolute top-2 right-4 hover:text-graidient_bottom"
        >
          <FaEdit />
        </button>
      )}
      <div className="w-full flex items-center justify-center">
        <table className="w-full">
          <thead>
            <th className="w-[70%] bg-gray-200 py-2">Deliverables</th>
            {rows.options.percentage && (
              <th className="border-2 border-gray-200 py-2">Percentage</th>
            )}
            {rows.options.value && (
              <th className="border-2 border-gray-200 py-2">Value</th>
            )}
          </thead>
          <tbody>
            {rows.content.map((row, index) => {
              return (
                <tr>
                  <td className="w-[70%] border-t-2 border-gray-300 py-2 bg-gray-200 ">
                    {row.deliverable}
                  </td>
                  {rows.options.percentage && (
                    <td className="border-2 border-gray-200 py-2">
                      {row.percentage}%
                    </td>
                  )}
                  {rows.options.value && (
                    <th className="border-2 border-gray-200 py-2 font-normal">
                      ${row.value}
                    </th>
                  )}
                </tr>
              );
            })}

            <tr>
              <td className=" border-t-2 border-gray-300 py-2 bg-gray-200 font-bold ">
                Total
              </td>

              {rows.options.percentage && (
                <td className="border-2 border-gray-200 py-2 font-bold">
                  {calculateTotalPercentage()}%
                </td>
              )}
              {rows.options.value && (
                <th className="border-2 border-gray-200 py-2 font-bold">
                  ${calculateTotalValue()}
                </th>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTermSlate;
