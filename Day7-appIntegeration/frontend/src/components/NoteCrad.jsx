const NoteCrad = ({note, deleteNote}) => {
  return (
    <div className="w-[30%] flex flex-col gap-5` border border-white p-4 rounded-xl overflow-scroll">
      <h1>{note.title}</h1>
      <p>{note.description}</p>
      <p>{note._id}</p>
      <div className="flex justify-between">
        <button className="bg-yellow-500 border border-none rounded p-1">Update</button>
        <button onClick={()=> deleteNote(note._id)} className="bg-red-500 border border-none rounded p-1">Delete</button>
      </div>
    </div>
  );
};

export default NoteCrad;
