import "./SmallCard.css";
import { format } from "date-fns";

function AddCardButton({ onAdd }) {

  const getTodayDate = () => {
    const today = new Date();
    return format(new Date(), "yyyy-MM-dd");
  };

  return (
    <div className="">
      <button onClick={() => {onAdd()}} className="card-add-btn">
        <div className="card-content">
          <h2 className="card-title">Add Diary Entry</h2>
          <p className="card-date">{getTodayDate()}</p>
        </div>
      </button>
    </div>
  );
}

export default AddCardButton;
