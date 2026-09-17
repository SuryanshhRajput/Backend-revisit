import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import NoteCrad from "./components/NoteCrad";

const App = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  const [allNotes, setAllNotes] = useState([]);

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //api calls
    let res = await axios.post(
      "http://localhost:3000/notes/create",
      formValues,
    );
    console.log(res);

    setFormValues({
      title: "",
      description: "",
    });
  };

  let getAllNotes = async () => {
    try {
      let res = await axios.get("http://localhost:3000/notes/allNotes");

      setAllNotes(res.data.data);
    } catch (error) {
      console.log("error in get all notes api", error);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  console.log(allNotes);

  let deleteNotes = async (id) => {
    try {
      let res = await axios.delete(`http://localhost:3000/notes/${id}`);
      console.log(res);

      getAllNotes();
    } catch (error) {
      console.log("error in delete notes", error.message);
    }
  };

let noteForUpdate = (note) => {

}

  return (
    <div className="h-screen w-full bg-zinc-900 text-white ">
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 justify-center p-30 "
          action=""
        >
          <input
            value={formValues.title}
            onChange={handleChange}
            name="title"
            className="border p-5 rounded-2xl bg-zinc-600"
            type="text"
            placeholder="title"
          />
          <input
            value={formValues.description}
            onChange={handleChange}
            name="description"
            className="border p-5 rounded-2xl bg-zinc-600"
            type="text"
            placeholder="description"
          />
          <button className="border w-40 rounded-2xl bg-blue-600 p-3 border-none">
            {" "}
            Add note
          </button>
        </form>

        <div className="flex gap-5 flex-wrap overflow-hidden">
          {allNotes.map((val) => (
            <NoteCrad key={val._id} note={val} deleteNote = {deleteNotes}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
