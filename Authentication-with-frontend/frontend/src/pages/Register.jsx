import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useApi } from "../shared/useApi";
import { useAuthContext } from "../context/useAuthContext";

const Register = () => {
  const {
    register,
    reset,

    handleSubmit,
  } = useForm();

  const authContext = useAuthContext();
  const api = useApi();

  let navigate = useNavigate();

  const registerSubmit = async (data) => {
    console.log(data);
    const response = await api.post("/auth/register", data);

    console.log(response);
    authContext.setAccessToken(response.data.accessToken);
    authContext.setUser(response.data.data.user);

    navigate("/home");
    reset();
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-12 text-white sm:px-6">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />

      <section className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30 backdrop-blur-xl md:grid-cols-2">
        <div className="flex flex-col justify-between bg-gradient-to-br from-indigo-500/20 via-slate-900/30 to-cyan-400/10 p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-400/15 text-lg font-bold text-indigo-200">
              I
            </div>
            <span className="text-sm font-semibold tracking-wide text-slate-200">
              In Detail
            </span>
          </div>

          <div className="mt-10 md:mt-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Get started
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Create your account
            </h1>
            <p className="mt-4 max-w-sm leading-7 text-slate-300">
              Sign up to get started and keep your account details in one place.
            </p>
          </div>

          <p className="mt-10 text-sm text-slate-400 md:mt-0">
            A simple start, with everything in detail.
          </p>
        </div>

        <div className="p-6 sm:p-10">
          <h2 className="text-xl font-semibold text-white">Register</h2>
          <p className="mt-2 text-sm text-slate-400">
            Enter your details below to create an account.
          </p>

          <form
            onSubmit={handleSubmit(registerSubmit)}
            className="mt-8 flex flex-col gap-5"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Name
              </label>
              <input
                {...register("name")}
                id="name"
                autoComplete="name"
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                type="text"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Email address
              </label>
              <input
                {...register("email")}
                id="email"
                autoComplete="email"
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Password
              </label>
              <input
                {...register("password")}
                id="password"
                autoComplete="new-password"
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                type="password"
                placeholder="Create a password"
              />
            </div>

            <button className="mt-2 w-full rounded-xl bg-indigo-500 px-4 py-3 font-semibold text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-slate-950">
              Create account
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Register;
