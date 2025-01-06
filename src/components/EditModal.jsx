import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./EditModal.css";
import * as yup from "yup";

function EditModal({ item = {}, onClose, onSave, storedItems, buttonName }) {
  const id = item.id || null;

  const existingDate = (date, id) => {
    const foundItem = storedItems.find((item) => item.date === date);

    if (!foundItem) {
      return false;
    }

    return foundItem.id !== id;
  };

  const schema = yup.object({
    date: yup
      .string()
      .test("date-taken", "This date is already taken", function (value) {
        return !existingDate(value, id);
      }),
    img: yup
      .string()
      .required("Image URL is required")
      .max(300, "Maximum length is 300 characters"),
    title: yup
      .string()
      .required("Title is required")
      .max(30, "Maximum length is 30 characters"),
    desc: yup
      .string()
      .min(5, "Description must be at least 5 characters long")
      .max(400, "Maximum length is 400 characters")
      .required("Description is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      date: item.date || format(new Date(), "yyyy-MM-dd"),
      img: item.img || "",
      title: item.title || "",
      desc: item.desc || "",
    },
  });

  const onSubmit = (data) => {
    const newItem = {
      id: id,
      ...data,
    };

    onSave(newItem);
    onClose();
  };

  return (
    <div className="modalBody">
      <div className="modalContainer">
        <div className="modalHeader">
          <h2 className="text-3xl">
            {item.title ? "Edit Diary Entry" : "New Diary Entry"}
          </h2>
          <button onClick={onClose} className="text-3xl">
            &times;
          </button>
        </div>
        <div className="p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)(e);
            }}
            className="formGrid"
          >
            <div className="inputGroup">
              <div className="fieldContainer">
                <label htmlFor="date" className="lable-style">
                  Date
                  <input
                    {...register("date")}
                    type="date"
                    id="date"
                    name="date"
                    className="input-style"
                  />
                </label>
                {errors.date && (
                  <span className="error">{errors.date.message}</span>
                )}
              </div>
              <div className="fieldContainer">
                <label htmlFor="img" className="lable-style">
                  Img URL
                  <input
                    {...register("img")}
                    type="text"
                    id="img"
                    name="img"
                    className="input-style"
                  />
                </label>
                {errors.img && (
                  <span className="error">{errors.img.message}</span>
                )}
              </div>
            </div>

            <div className="fieldContainer">
              <label htmlFor="title" className="lable-style">
                Title
                <input
                  {...register("title")}
                  type="text"
                  id="title"
                  name="title"
                  className="input-style"
                />
              </label>
              {errors.title && (
                <span className="error">{errors.title.message}</span>
              )}
            </div>

            <div className="fieldContainer">
              <label htmlFor="desc" className="lable-style">
                Description
                <textarea
                  {...register("desc")}
                  id="desc"
                  name="desc"
                  rows="3"
                  className="input-style"
                ></textarea>
              </label>
              {errors.desc && (
                <span className="error">{errors.desc.message}</span>
              )}
            </div>

            <div className="buttonContainer">
              <button
                type="submit"
                className={`${!isValid ? "disabled" : "submitButton"}`}
              >
                {buttonName}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
