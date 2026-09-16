import { useState } from "react";

function Login({ onLogin }) {
  const [pin, setPin] = useState("1234");
  const [enteredpin, setEnteredpin] = useState("");
  const [message, setMessage] = useState("");

  function handleClick() {
    let Enterpin = Number(pin);
    let Correctpin = Number(enteredpin);

    if (Correctpin === Enterpin) {
      setMessage("Correct PIN");
      onLogin(true);
    } else {
      setMessage("Incorrect PIN");
    }
  }

  return (
    <div className="w-full max-w-md">
      {/* Login Card */}
      <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="bg-linear-to-br from-blue-600 to-indigo-700 px-6 py-8 text-center text-white">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-4xl">
            🏧
          </div>

          <h1 className="mt-5 text-2xl font-bold">ATM Banking</h1>

          <p className="mt-2 text-sm text-blue-100">
            Secure access to your account
          </p>
        </div>

        {/* Login Content */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-800">Welcome Back</h2>

          <p className="mt-1 text-sm text-slate-500">
            Enter your PIN to continue
          </p>

          {/* PIN Input */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Enter PIN
            </label>

            <input
              type="password"
              inputMode="numeric"
              maxLength="4"
              placeholder="••••"
              value={enteredpin}
              onChange={(e) => setEnteredpin(e.target.value)}
              className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3.5 text-center text-xl font-bold tracking-[0.5em] outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Login Button */}
          <button
            onClick={handleClick}
            className="mt-5 w-full rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 active:scale-95 cursor-pointer"
          >
            Login
          </button>

          {message && (
            <p className="mt-3 text-center text-sm font-semibold text-red-500">
              {message}
            </p>
          )}

          {/* Security */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
            <span>🔒</span>
            <span>Secure ATM Login</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
