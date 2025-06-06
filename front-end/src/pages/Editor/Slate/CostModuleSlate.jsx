import React, { useContext } from "react";
import { StateManageContext } from "../../../context/StateManageContext";
import { FaEdit } from "react-icons/fa";

const CostModuleSlate = ({ index, rows, selected, settings, preview }) => {
  const calculateTotalAmount = () => {
    return rows.content?.reduce((total, row) => total + (row.amount || 0), 0);
  };

  const calculateDiscountedAmount = () => {
    const total = calculateTotalAmount();
    return total * (rows.values.discount / 100);
  };

  const calculateTaxAmount = () => {
    const total = calculateTotalAmount();
    return total * (rows.values.tax / 100);
  };

  const calculatePayableAmount = () => {
    const total = calculateTotalAmount();
    return total - calculateDiscountedAmount() - calculateTaxAmount(); // Subtract 10% discount
  };

  const { setCostModeule, setCostMouleEdit } = useContext(StateManageContext);

  return (
    <div className={`p-7 py-6 relative font-${settings.body}`}>
      {selected !== null && preview !== true && (
        <button
          onClick={() => {
            setCostModeule(true);
            setCostMouleEdit(index);
          }}
          className="absolute top-2 right-4 hover:text-graidient_bottom"
        >
          <FaEdit />
        </button>
      )}
      <table className="w-full border border-gray-300 rounded-sm">
        <thead className="">
          <tr className="bg-gray-100 text-center">
            <th className="border border-r-gray-200 px-2 py-2 text-center w-[65%]">
              Deliverables
            </th>
            {rows.options.quantity && (
              <th className="border border-r-gray-200 px-2 py-2">Price</th>
            )}
            {rows.options.quantity && (
              <th className="border border-r-gray-200 px-2 py-1 text-right">
                Quantity
              </th>
            )}

            <th className="border px-2 py-1 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {rows.content?.map((row, index) => (
            <tr key={index}>
              <td className="border px-2 py-1">{row.deliverable}</td>
              {rows.options.quantity && (
                <td className="border px-2 py-1">
                  {rows.options.currency}
                  {row.price}
                </td>
              )}
              {rows.options.quantity && (
                <td className="border px-2 py-1 text-right">{row.quantity}</td>
              )}

              <td className="border px-2 py-1 text-right">
                {rows.options.currency}
                {row.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-2 pt-4 px-4">
        <div className="flex justify-end items-center gap-16">
          <span className=" font-semibold">Total Amount:</span>
          <span className=" font-semibold">
            ${calculateTotalAmount().toFixed(2)}
          </span>
        </div>
        {rows.options.discount && (
          <div className="flex justify-end items-center gap-12">
            <span className=" font-semibold">
              Discount: {rows.values?.discount}%
            </span>
            <span className=" font-semibold">
              {rows.options.currency}
              {calculateDiscountedAmount().toFixed(2)}
            </span>
          </div>
        )}
        {rows.options.tax && (
          <div className="flex justify-end items-center gap-10">
            <span className=" font-semibold">Tax: {rows.values?.tax}%</span>
            <span className=" font-semibold">
              {rows.options.currency}
              {calculateTaxAmount().toFixed(2)}
            </span>
          </div>
        )}

        <div className="flex justify-end items-cente gap-16 ">
          <span className=" font-semibold ">Payable Amount:</span>
          <span className=" font-semibold">
            {rows.options.currency}
            {calculatePayableAmount().toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CostModuleSlate;
