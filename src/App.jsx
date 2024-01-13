import getRandomColor from "./helpers/getRandomColor";
import "./index.css";

const directions = {
  h: "column",
  v: "row",
};

function App() {
  function handleMutateBlock(e, direction) {
    e.stopPropagation();

    if (directions[direction] === undefined) {
      throw new Error("Invalid direction");
    }

    const parentBtnGroupEl = e.target.parentElement;
    const parentBlockEl = e.target.parentElement.parentElement;
    parentBlockEl.style.flexDirection = directions[direction];

    const blockEl = document.createElement("div");
    blockEl.classList.add("block");
    blockEl.style.background = getRandomColor();
    blockEl.style.flexBasis = "50%";

    const btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group");

    const hBtn = document.createElement("button");
    hBtn.classList.add("btn");
    hBtn.addEventListener("click", function horaizontalBlock(e) {
      handleMutateBlock(e, "h");
    });
    hBtn.textContent = "H";

    const vBtn = document.createElement("button");
    vBtn.classList.add("btn");
    vBtn.addEventListener("click", function horaizontalBlock(e) {
      handleMutateBlock(e, "v");
    });
    vBtn.textContent = "V";

    blockEl.appendChild(btnGroup);
    btnGroup.appendChild(hBtn);
    btnGroup.appendChild(vBtn);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("btn");
    removeBtn.addEventListener("click", handleRemoveBlock);
    removeBtn.textContent = "-";

    blockEl.appendChild(btnGroup);
    btnGroup.appendChild(hBtn);
    btnGroup.appendChild(vBtn);
    btnGroup.appendChild(removeBtn);

    parentBtnGroupEl.insertAdjacentElement("afterend", blockEl);
  }

  function handleRemoveBlock(e) {
    e.stopPropagation();
    const blockEl = e.target.parentElement.parentElement;
    blockEl.parentElement.removeChild(blockEl);
  }

  return (
    <div className="block-container">
      <div className="block">
        <div className="btn-group">
          <button
            className="btn"
            onClick={(e) => {
              handleMutateBlock(e, "h");
            }}
          >
            H
          </button>
          <button
            className="btn"
            onClick={(e) => {
              handleMutateBlock(e, "v");
            }}
          >
            V
          </button>
          <button className="btn" onClick={(e) => handleRemoveBlock(e)}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
