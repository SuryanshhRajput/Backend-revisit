const NoteCrad = ({note}) => {
  return (
    <div className="w-[30%] flex flex-col gap-2` border border-white p-4 rounded-xl overflow-scroll">
      <h1>{note.title}</h1>
      <p>{note.description}</p>
      <div className="flex justify-between">
        <button className="bg-yellow-500 border border-none rounded p-1">Update</button>
        <button className="bg-red-500 border border-none rounded p-1">Delete</button>
      </div>
    </div>
  );
};

export default NoteCrad;
