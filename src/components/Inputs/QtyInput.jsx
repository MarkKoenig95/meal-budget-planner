import React from "react";

function QtyInput(props) {
  return (
    <div className="qty">
      <div className="qty-label-section">
        <label className="qty-label">Quantity</label>
        <div className="group">
          <input
            id="fraction-check"
            type="checkbox"
            name="isFraction"
            checked={props.qty.isFraction}
            value={props.qty.isFraction}
            onChange={props.onChange}
          />{" "}
          <label className="checkbox-label">Use Fraction</label>
        </div>
      </div>
      <div className="qty-input-section">
        <input
          className="qty-input qty-input-whole"
          name="whole"
          value={props.qty.whole}
          onChange={props.onChange}
        />
        {props.qty.isFraction && (
          <div className="group">
            and
            <input
              className="qty-input"
              name="numerator"
              value={props.qty.numerator}
              onChange={props.onChange}
            />
            /
            <input
              className="qty-input"
              name="denominator"
              value={props.qty.denominator}
              onChange={props.onChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default QtyInput;
