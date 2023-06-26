import React from "react";

const Form = () => {
  //   const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="form-component">
      <div form-container>
        <form action="">
          {/* onSubmit={(e) => setInputSearch(e.target.value)} */}
          <input type="text" />
          <input type="submit" />
        </form>
        <div className="btn-sort-container">
          <button id="goodToBad">
            Top
            <span>
              <i className="fa-solid fa-arrow-up fa-rotate-90"></i>
            </span>
          </button>
          <button id="badToGood">
            <span>
              <i className="fa-solid fa-arrow-up fa-rotate-90"></i>
            </span>
            Flop
          </button>
        </div>
        .
      </div>
    </div>
  );
};

export default Form;
