import { useAuthContext } from "../context/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();


   
  const name = user?.name || "there";
  const email = user?.email || "No email available";




  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-12 text-white sm:px-6">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />

      <section className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-400/15 text-lg font-bold text-indigo-200">
            I
          </div>
          <span className="text-sm font-semibold tracking-wide text-slate-200">
            In Detail
          </span>
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Your account
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Welcome, <span className="text-indigo-300">{name}</span>
        </h1>
        <p className="mt-4 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
          You’re signed in. Here are the details associated with your account.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Email address
          </p>
          <p className="mt-2 break-all text-base font-medium text-white sm:text-lg">
            {email}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
