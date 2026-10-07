import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Register = () => {
  const {
    register,
    reset,

    handleSubmit,
  } = useForm();

  let navigate = useNavigate();
  const registerSubmit = (data) => {
    console.log(data);
    navigate("/home");
    reset();
  };

  return (
    <div>
      <div className="flex flex-col gap-2  justify-center  items-center h-screen border border-none">
        <form
          onSubmit={handleSubmit(registerSubmit)}
          className="flex flex-col gap-2 justify-center  items-center  border border-none bg-zinc-200 p-4 w-[30%] rounded-4xl text-2xl"
          action=""
        >
          <input
            {...register("name")}
            className="outline-none  w-full"
            type="text"
            placeholder="name"
          />
          <input
            {...register("email")}
            className="outline-none  w-full"
            type="email"
            placeholder="email"
          />
          <input
            {...register("password")}
            className="outline-none  w-full"
            type="password"
            placeholder="password"
          />
          <button className="outline-none  w-full border border-none rounded bg-blue-500 text-white p-2 rounded-4xl">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
