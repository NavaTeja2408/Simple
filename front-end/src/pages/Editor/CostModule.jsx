import React, { useContext, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { StateManageContext } from "../../context/StateManageContext";

const CostModule = ({ addCostModule, rows, setRows }) => {
  const { setCostModeule, setCostMouleEdit, costModuleEdit } =
    useContext(StateManageContext);
  const [temp, setTemp] = useState(
    costModuleEdit !== null
      ? rows[costModuleEdit].content
      : [
          {
            deliverable: "",
            price: null,
            discount: null,
            quantity: null,
            paymentDuration: "Monthly",
            amount: null,
          },
        ]
  );
  const [discount, setDiscount] = useState(
    costModuleEdit !== null ? rows[costModuleEdit].options.discount : false
  );
  const [quantity, setQuantity] = useState(
    costModuleEdit !== null ? rows[costModuleEdit].options.quantity : false
  );
  const [dropdown, setDropdown] = useState(null);
  const list = [
    "UI/UX Design",
    "Devlopment",
    "Production",
    "Full Stack",
    "Manifacturing",
    "Quality",
    "Meterial",
  ];
  const [tax, setTax] = useState(
    costModuleEdit !== null ? rows[costModuleEdit].options.tax : false
  );
  const [currency, setCurrency] = useState(
    costModuleEdit !== null ? rows[costModuleEdit].options.discount : "$"
  );
  const [values, setvalues] = useState({
    discount:
      costModuleEdit !== null ? rows[costModuleEdit].values.discount : 0,
    tax: costModuleEdit !== null ? rows[costModuleEdit].values.tax : 0,
  });

  const handleAddRow = () => {
    setTemp([
      ...temp,
      {
        deliverable: "",
        price: null,
        quantity: null,
        amount: null,
      },
    ]);
  };

  const handleInputChange = (index, key, value) => {
    const updatedTemp = [...temp];
    updatedTemp[index][key] = value;

    if (key === "price" || key === "quantity" || key === "discount") {
      const price = updatedTemp[index].price || 0;
      const quantity = updatedTemp[index].quantity || 1;
      const discount = updatedTemp[index].discount || 0;
      updatedTemp[index].amount =
        price * quantity - (price * quantity * discount) / 100;
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
    return discount ? total * (values.discount / 100) : 0;
  };
  const calculateTaxAmount = () => {
    const total = calculateTotalAmount();
    return tax ? total * (values.tax / 100) : 0;
  };

  const calculateFinalAmount = () => {
    const total = calculateTotalAmount();
    return total - calculateDiscountedAmount() + calculateTaxAmount();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center p-4 z-[1000] be-vietnam-pro-regular">
      <div className="bg-white rounded-lg shadow-lg   max-w-6xl w-full transition-all transform   ">
        <div className="w-full flex flex-col items-center justify-center mt-6 border-b-[5px] border-gray-100">
          <h1 className="text-md font-bold text-gray-700">Add Cost Module</h1>
          <p className="text-sm text-gray-500 mb-6">
            Drag & Set your cost for your proposal
          </p>
        </div>
        <div className="flex flex-row mt-4 border-b-[3px] border-gray-100  ">
          {/* Table */}
          <div className=" w-[75%] bg-gray-50 ">
            <div className="flex items-center pb-3 pl-4 border-b-[5px] border-gray-100 mb-2 gap-4 relative">
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
                  className="border border-gray-100  bg-gray-100 rounded px-2 py-1 text-sm outline-none "
                >
                  <option value="$">USD ($)</option>
                  <option value="€">EUR (€)</option>
                  <option value="£">GBP (£)</option>
                  <option value="₹">INR (₹)</option>
                </select>
              </div>

              {/* Checkboxes */}
              <div className="flex items-center gap-4  ">
                <label className="flex bg-gray-100 px-2 py-1 rounded-md items-center text-sm font-semibold text-gray-600">
                  <input
                    type="checkbox"
                    checked={discount}
                    onChange={() => setDiscount(!discount)}
                    className="mr-2 p-1 accent-graidient_bottom"
                  />
                  Discount
                </label>
                <label className="flex bg-gray-100 px-2 py-1 rounded-md items-center text-sm font-semibold text-gray-600">
                  <input
                    type="checkbox"
                    checked={quantity}
                    onChange={() => setQuantity(!quantity)}
                    className="mr-2 p-1 accent-graidient_bottom"
                  />
                  Quantity
                </label>
                <label className="flex bg-gray-100 px-4 py-1 rounded-md items-center text-sm font-semibold text-gray-600">
                  <input
                    type="checkbox"
                    checked={tax}
                    onChange={() => setTax(!tax)}
                    className="mr-2 p-1 accent-graidient_bottom"
                  />
                  Tax
                </label>
                <div className=" absolute top-3 right-4 text-gray-600 text-sm">
                  <p>Total Services: {temp.length}</p>
                </div>
              </div>
            </div>
            <table className="w-[95%] ml-2 table-auto text-xs border-collapse rounded-md bg-lvl_3_bg mt-3 block   h-[170px] overflow-y-auto scrollbar-thin pl-3">
              <thead className="sticky top-0 bg-gray-50 z-[5000]">
                <tr>
                  <th className="  py-2  text-center  w-16">S No.</th>
                  <th className=" px-4 py-2 w-80 text-left">
                    Services/Products
                  </th>
                  {quantity && (
                    <th className=" px-2 py-2 text-center">Unit Price</th>
                  )}

                  {quantity && (
                    <th className=" px-2 py-2 text-center">Quantity</th>
                  )}
                  <th className=" px-2 py-2 text-center">Amount</th>
                  <th className="  text-center"></th>
                </tr>
              </thead>
              <tbody>
                {temp.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 border border-b-[13px]  border-gray-100 bg-white h-16 rounded-md   "
                  >
                    <td className="px-4">{index + 1}</td>
                    <td
                      className={`pr-8 px-2 py-1 relative ${
                        quantity ? "w-[55%]" : "w-[78%]"
                      } ${dropdown === index ? "pb-10" : "pb-1"}`}
                    >
                      <div className="relative">
                        <input
                          type="text"
                          value={row.deliverable}
                          onFocus={() => setDropdown(index)}
                          onBlur={() => setDropdown(null)} // Delay closing
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "deliverable",
                              e.target.value
                            )
                          }
                          className="w-full border border-gray-300 bg-gray-50 rounded px-2 py-2 outline-none focus:border-gray-400"
                          placeholder="Deliverable"
                        />
                        {dropdown !== null && index === dropdown && (
                          <div className="absolute top-full  left-0 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-16 overflow-y-auto scrollbar-thin">
                            {list
                              .filter((item) =>
                                item
                                  .toLowerCase()
                                  .includes(
                                    temp[index].deliverable.toLowerCase()
                                  )
                              )
                              .map((item, i) => (
                                <div
                                  key={i}
                                  onMouseDown={() =>
                                    handleInputChange(
                                      index,
                                      "deliverable",
                                      item
                                    )
                                  }
                                  className="p-2 hover:bg-gray-100 cursor-pointer"
                                >
                                  {item}
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    </td>
                    {quantity && (
                      <td className=" px-2 py-2 w-[13%]  ">
                        <input
                          type="number"
                          value={row.price}
                          placeholder="Price"
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "price",
                              parseFloat(e.target.value)
                            )
                          }
                          className="w-full border border-gray-300 bg-gray-50  rounded px-2 py-2 no-spinner outline-none text-center focus:border-gray-400"
                        />
                      </td>
                    )}

                    {quantity && (
                      <td className=" px-2 py-2 w-[13%] ">
                        <input
                          type="number"
                          value={row.quantity}
                          placeholder="Qnt"
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "quantity",
                              parseInt(e.target.value)
                            )
                          }
                          className="w-full border border-gray-300 bg-gray-50 rounded px-2 py-2 no-spinner outline-none text-center focus:border-gray-400"
                        />
                      </td>
                    )}

                    <td className=" px-2 py-2 w-[15%] ">
                      <input
                        type="number"
                        value={row.amount}
                        placeholder="Amount"
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "amount",
                            parseInt(e.target.value)
                          )
                        }
                        readOnly={quantity}
                        className="w-full border border-gray-300 bg-gray-50 rounded px-2 py-2 no-spinner text-right outline-none focus:border-gray-400"
                      />
                    </td>
                    <td className=" px-2 py-2 text-center">
                      <button
                        onClick={() => handleDeleteRow(index)}
                        className="px-2 py-2 rounded-md text-gray-500 hover:text-graidient_bottom"
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

          {/* Total */}
          <div className=" pl-7 pr-6 w-[25%] ">
            <div className="flex flex-col justify-between ">
              <h3 className="font-bold">Cost Break Down:</h3>
              <div className="flex flex-col w-full mt-5 gap-2">
                <div className="w-full flex flex-row justify-between">
                  <span className="text-sm text-gray-600 ">Total:</span>
                  <span className="text-sm">
                    {currency}
                    {calculateTotalAmount().toFixed(2)}
                  </span>
                </div>
                {discount && (
                  <div className="w-full flex flex-row justify-between">
                    <span className="text-sm text-gray-600 flex flex-row items-center justify-center ">
                      Discount:{" "}
                      <div className="ml-1 flex flex-row items-center justify-center bg-gray-100 rounded-sm border border-gray-200">
                        <input
                          className="bg-gray-100 outline-none w-8 no-spinner px-1 rounded-md text-center"
                          value={values.discount}
                          type="number"
                          onChange={(e) =>
                            setvalues({ ...values, discount: e.target.value })
                          }
                        />
                        %
                      </div>
                    </span>
                    <span className="text-sm">
                      {currency}
                      {Math.abs(calculateDiscountedAmount().toFixed(2))}
                    </span>
                  </div>
                )}

                {tax && (
                  <div className="w-full flex flex-row justify-between">
                    <span className="text-sm text-gray-600 flex flex-row items-center justify-center ">
                      Tax:{" "}
                      <div className="ml-1 flex flex-row items-center justify-center bg-gray-100 rounded-sm border border-gray-200">
                        <input
                          className="bg-gray-100 outline-none w-8 no-spinner px-1 rounded-md text-center"
                          value={values.tax}
                          type="number"
                          onChange={(e) =>
                            setvalues({ ...values, tax: e.target.value })
                          }
                        />
                        %
                      </div>
                    </span>
                    <span className="text-sm">
                      {currency}
                      {Math.abs(calculateTaxAmount().toFixed(2))}
                    </span>
                  </div>
                )}

                <div>
                  <div className="w-full flex flex-row justify-between">
                    <span className="text-sm text-gray-600 ">
                      Payable Amount:
                    </span>
                    <span className="text-sm">
                      {currency}
                      {calculateFinalAmount().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 mb-5 mr-5 flex justify-end gap-4">
          <button
            onClick={() => {
              setCostMouleEdit(null);
              setCostModeule(false);
            }}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (costModuleEdit !== null) {
                const updated = [...rows];
                updated[costModuleEdit].content = temp;
                updated[costModuleEdit].options = {
                  discount: discount,
                  quantity: quantity,
                  currency: currency,
                  tax: tax,
                };
                updated[costModuleEdit].values = values;
                setRows(updated);
              } else {
                addCostModule(
                  temp,
                  {
                    discount: discount,
                    quantity: quantity,
                    currency: currency,
                    tax: tax,
                  },
                  values
                );
              }
              setCostMouleEdit(null);
              setCostModeule(false);
            }}
            className="bg-footer_gradient_bot text-white px-4 rounded-md py-2 text-center text-sm flex gap-1 items-center justify-center hover:bg-hover_dark_btn active:bg-gradient_darker"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CostModule;
