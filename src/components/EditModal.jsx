import { useState } from "react";

function EditModal({ item = {}, onClose, onSave }) {
  const [date, setDate] = useState(item.date || "");
  const [img, setImg] = useState(item.img || "");
  const [title, setTitle] = useState(item.title || "");
  const [desc, setDesc] = useState(item.desc || "");
  const id = item.id || null;

  const newItem = {
    id: id,
    date: date.trim(),
    img: img.trim(),
    title: title.trim(),
    desc: desc.trim(),
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center ">
        <div className="bg-white rounded-lg shadow-lg w-3/6 p-8">
          <div className="px-6 py-4 flex justify-between items-center">
            <h2 className="text-4xl font-semibold">New Diary Entry</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>
          <h2 className="px-6 pb-4 text-xl">Create a new diary entry</h2>
          <div className="p-6">
            <form>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="date" className="lable-style">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="input-style"
                    value={date}
                    onChange={(event) => {
                      setDate(event.target.value);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="img" className="lable-style">
                    Img URL
                  </label>
                  <input
                    type="text"
                    id="img"
                    placeholder="Placeholder"
                    name="img"
                    className="input-style"
                    value={img}
                    onChange={(event) => {
                      setImg(event.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="title" className="lable-style">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Placeholder"
                  name="title"
                  className="input-style"
                  value={title}
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="content" className="lable-style">
                  Content
                </label>
                <textarea
                  id="content"
                  placeholder="Placeholder"
                  name="content"
                  rows="5"
                  className="input-style"
                  value={desc}
                  onChange={(event) => {
                    setDesc(event.target.value);
                  }}
                ></textarea>
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => onSave(newItem)}
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md"
                >
                  Add Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditModal;
