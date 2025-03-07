import React, { useContext, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { StateManageContext } from "../../context/StateManageContext";

const PriceTerms = ({ rows, addPriceTerms, setRows }) => {
  const { setPriceTerms, priceTermsEdit, setPriceTermsEdit } =
    useContext(StateManageContext);

  const [temp, setTemp] = useState(
    priceTermsEdit !== null
      ? rows[priceTermsEdit].content
      : [
          {
            deliverable: "",
            percentage: 0,
            value: 0,
          },
        ]
  );
  const [percentage, setPercentage] = useState(
    priceTermsEdit !== null ? rows[priceTermsEdit].options.percentage : false
  );
  const [value, setValue] = useState(
    priceTermsEdit !== null ? rows[priceTermsEdit].options.value : false
  );
  const [currency, setCurrency] = useState(
    priceTermsEdit !== null ? rows[priceTermsEdit].options.currency : "$"
  );

  const handleAddRow = () => {
    setTemp([
      ...temp,
      {
        deliverable: "",
        percentage: 0,
        value: 0,
      },
    ]);
  };

  const handleInputChange = (index, key, value) => {
    const updatedTemp = [...temp];
    updatedTemp[index][key] = value;

    if (key === "percentage" || key === "value") {
      const price = updatedTemp[index].percentage || 0;
      const quantity = updatedTemp[index].value || 0;
    }

    setTemp(updatedTemp);
  };

  const handleDeleteRow = (index) => {
    setTemp(temp.filter((_, i) => i !== index));
  };

  const calculateTotalAmount = () => {
    return temp.reduce((total, row) => total + (row.amount || 0), 0);
  };

  const calculateDiscountedAmount = () => {
    const total = calculateTotalAmount();
    return total - total * 0.1 - 10; // Subtract 10% discount
  };

  const width =
    percentage && value ? "60%" : percentage || value ? "80%" : "90%";

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg  max-w-3xl w-full transition-all transform scale-105 ">
        <div className="w-full flex flex-col items-center justify-center mt-6 border-b-[5px] border-gray-100">
          <h1 className="text-md font-bold text-gray-700">Add Price Terms</h1>
          <p className="text-sm text-gray-500 mb-6">
            Drag & Set your cost for your proposal
          </p>
        </div>
        <div className="mt-4 border-b-[3px] border-gray-100 ">
          {/* Table */}
          <div className=" w-full bg-gray-50 ">
            <div className="flex items-center pb-3 pl-4 border-b-[5px] border-gray-100 mb-2 gap-4">
              {/* Currency Dropdown */}
              <div className="flex items-center px-2 py-1 rounded-md bg-gray-100 gap-2">
                <label
                  htmlFor="currency"
                  className="text-sm font-semibold  text-gray-600"
                >
                  Currency:
                </label>
                <select
                  id="currency"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="border bg-gray-100 border-gray-100 rounded px-2 py-1 text-sm outline-none "
                >
                  <option value="$">USD ($)</option>
                  <option value="€">EUR (€)</option>
                  <option value="£">GBP (£)</option>
                  <option value="₹">INR (₹)</option>
                </select>
              </div>

              {/* Checkboxes */}
              <div className="flex items-center gap-4 ">
                <label
                  style={{
                    border: percentage
                      ? "1px solid rgba(223 , 6 , 78 , 1)"
                      : "none",
                  }}
                  className="flex bg-gray-100 px-2 py-1 rounded-md items-center text-sm font-semibold text-gray-600"
                >
                  <input
                    type="checkbox"
                    checked={percentage}
                    onChange={() => setPercentage(!percentage)}
                    className="mr-2 p-1 accent-graidient_bottom"
                  />
                  Percentage
                </label>
                <label
                  style={{
                    border: value ? "1px solid rgba(223 , 6 , 78 , 1)" : "none",
                  }}
                  className="flex bg-gray-100 px-2 py-1 rounded-md items-center text-sm font-semibold text-gray-600"
                >
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={() => setValue(!value)}
                    className="mr-2 p-1 accent-graidient_bottom"
                  />
                  Value
                </label>
              </div>
            </div>
            <table className="w-[95%] ml-2 text-xs border-collapse rounded-md bg-gray-50 mt-3 block max-h-[250px] overflow-y-auto">
              <thead className="sticky top-0 bg-gray-50">
                <tr>
                  <th className={` px-4 py-2 w-[${width}] text-left`}>
                    Services/Products
                  </th>
                  {percentage && (
                    <th className=" px-2 py-2 text-center">Percentage</th>
                  )}
                  {value && <th className=" px-2 py-2 text-center">Value</th>}

                  <th className="  text-center"></th>
                </tr>
              </thead>
              <tbody>
                {temp.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 border border-b-[13px]  border-gray-100 bg-white  "
                  >
                    <td className={` pr-8 px-2 py-1 w-[${width}]`}>
                      <input
                        type="text"
                        value={row.deliverable}
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "deliverable",
                            e.target.value
                          )
                        }
                        className="w-full border border-gray-300 bg-gray-50 rounded px-2 py-2"
                        placeholder="Deliverable"
                      />
                    </td>

                    {percentage && (
                      <td className=" px-2 py-2 ">
                        <input
                          type="number"
                          value={row.percentage}
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "percentage",
                              parseFloat(e.target.value)
                            )
                          }
                          max={100}
                          className="w-full border border-gray-300 bg-gray-50 rounded px-2 py-1"
                        />
                      </td>
                    )}
                    {value && (
                      <td className=" px-2 py-2 flex flex-row items-center justify-center gap-1 font-bold w-36  text-md">
                        {currency}
                        <input
                          type="number"
                          value={row.value}
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "value",
                              parseInt(e.target.value)
                            )
                          }
                          className="w-full border border-gray-300 bg-gray-50 rounded px-2 py-1 font-normal text-sm"
                        />
                      </td>
                    )}

                    <td className=" px-2 py-2 text-center">
                      <button
                        onClick={() => handleDeleteRow(index)}
                        className="px-2 py-2 rounded-md text-red-500 hover:text-red-700 bg-editor_header_button"
                      >
                        <MdOutlineDelete className="text-lg" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="w-[95%] flex text-sm items-end justify-end bg-gray-50 ml-2">
              <button
                onClick={handleAddRow}
                className=" flex felx-row items-center justify-center gap-2 px-4 py-2 text-graidient_bottom   rounded-md mb-2 "
              >
                <FaPlus className="text-md  rounded-sm font-bold bg-graidient_bottom text-white p-[2px]" />
                Add More
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 mb-5 mr-5 flex justify-end gap-4">
          <button
            onClick={() => {
              setPriceTermsEdit(null);
              setPriceTerms(false);
            }}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (priceTermsEdit !== null) {
                const updated = [...rows];
                updated[priceTermsEdit].content = temp;
                updated[priceTermsEdit].options = {
                  percentage: percentage,
                  value: value,
                  currency: currency,
                };
                setRows(updated);
              } else {
                addPriceTerms(temp, {
                  percentage: percentage,
                  value: value,
                  currency: currency,
                });
              }
              setPriceTermsEdit(null);
              setPriceTerms(false);
            }}
            className="px-4 py-2 bg-graidient_bottom text-white rounded-md hover:bg-shadow_Bottom"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceTerms;
