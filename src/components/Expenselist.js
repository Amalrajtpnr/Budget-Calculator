import React from "react";
import Item from "./Expenseitems";
import { MdDelete } from "react-icons/md";

export const Expenselist = ({
  expenses,
  handleEdit,
  handleDelete,
  clearItems,
}) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <Item
              key={expense.id}
              expense={expense}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
          <MdDelete className="btn-coin" />;
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          Clear expenses
        </button>
      )}
    </>
  );
};

export default Expenselist;
