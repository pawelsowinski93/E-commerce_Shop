import React from "react";

import "./formInput.scss";

const FormInput = ({ handleChange, label, ...restProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...restProps} />
    {label ? (
      <label
        className={`${restProps.value.length ? "srink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
