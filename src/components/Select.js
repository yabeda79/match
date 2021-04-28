import React from "react";

const Select = ({ option, setOption }) => {
  const optionHandler = (e) => {
    setOption(e.target.value);
  };

  return (
    <form>
      <div>
        <select value={option} onChange={optionHandler}>
          <option value="8">4 on 4</option>
          <option value="3">3 on 3</option>
          <option value="2">2 on 2</option>
        </select>
      </div>
    </form>
  );
};

export default Select;
