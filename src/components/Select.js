import React from "react";

const Select = ({ setOption }) => {
  const optionHandler = (e) => {
    setOption(e.target.value);
  };

  return (
    <form>
      <div>
        <select onChange={optionHandler}>
          <option value="16">4 on 4</option>
          <option value="9">3 on 3</option>
          <option value="4">2 on 2</option>
        </select>
      </div>
    </form>
  );
};

export default Select;
