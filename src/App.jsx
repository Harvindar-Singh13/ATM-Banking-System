
import { useState } from "react";
import Login from "./Login";

function App() {
  const [balance, setBalance] = useState(1000);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [withdraw, setWithdraw] = useState("");
  const [deposit, setDeposit] = useState("");
  const [authenticate, setAuthenticate] = useState(false);

  function handleWithdraw() {
    let withdrawal = Number(amount);

    if (withdrawal <= balance && withdrawal % 100 === 0) {
      setBalance(balance - withdrawal);
      setWithdraw(withdrawal);
      setMessage("withdrawal successful");
    } else {
      setMessage("invalid amount");
    }
  }

  function handleDeposit() {
    let addAmount = Number(deposit);

    if (addAmount > 0 && addAmount % 100 === 0) {
      setBalance(balance + addAmount);
      setDeposit(addAmount);
      setMessage("Deposit successful");
    } else {
      setMessage("Invaild amount");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-8">

      {authenticate ? (

        <div className="w-full max-w-lg">

          {/* Main Card */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">

            {/* Header */}
            <div className="bg-linear-to-br from-blue-600 to-indigo-700 px-6 py-7 text-white">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-blue-100">
                    Welcome back
                  </p>

                  <h1 className="mt-1 text-2xl font-bold">
                    ATM Banking
                  </h1>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                  🏧
                </div>

              </div>

              <p className="mt-4 text-sm text-blue-100">
                Manage your money securely
              </p>

            </div>

            {/* Content */}
            <div className="p-6">

              {/* Available Balance */}
              <div className="rounded-2xl bg-slate-900 p-5 text-white shadow-lg">

                <div className="flex items-center justify-between">

                  <p className="text-sm text-slate-400">
                    Available Balance
                  </p>

                  <span className="rounded-lg bg-green-500/10 px-2 py-1 text-xs font-semibold text-green-400">
                    ACTIVE
                  </span>

                </div>

                <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
                  ₹{balance}
                </h2>

                <p className="mt-2 text-xs text-slate-400">
                  Current account balance
                </p>

              </div>

              {/* Deposit & Withdrawal Balance */}
              <div className="mt-4 grid grid-cols-2 gap-3">

                {/* Deposit */}
                <div className="rounded-2xl border border-green-100 bg-green-50 p-4">

                  <div className="flex items-center justify-between">

                    <p className="text-sm font-medium text-slate-500">
                      Deposit
                    </p>

                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-green-100 text-green-600">
                      ↑
                    </span>

                  </div>

                  <h3 className="mt-2 text-2xl font-bold text-green-600">
                    ₹{deposit}
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Last deposit
                  </p>

                </div>

                {/* Withdrawal */}
                <div className="rounded-2xl border border-red-100 bg-red-50 p-4">

                  <div className="flex items-center justify-between">

                    <p className="text-sm font-medium text-slate-500">
                      Withdraw
                    </p>

                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-100 text-red-600">
                      ↓
                    </span>

                  </div>

                  <h3 className="mt-2 text-2xl font-bold text-red-500">
                    ₹{withdraw}
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Last withdrawal
                  </p>

                </div>

              </div>

              {/* Deposit Input */}
              <div className="mt-6">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Deposit Money
                </label>

                <div className="relative">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-slate-400">
                    ₹
                  </span>

                  <input
                    type="number"
                    placeholder="Enter deposit amount"
                    value={deposit}
                    onChange={(e) => setDeposit(e.target.value)}
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 py-3.5 pl-10 pr-4 font-medium outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                  />

                </div>

              </div>

              {/* Withdrawal Input */}
              <div className="mt-4">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Withdraw Money
                </label>

                <div className="relative">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-slate-400">
                    ₹
                  </span>

                  <input
                    type="number"
                    placeholder="Enter withdrawal amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 py-3.5 pl-10 pr-4 font-medium outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
                  />

                </div>

              </div>

              {/* Message */}
              <p
                className={`mt-4 rounded-xl px-4 py-3 text-center text-sm font-semibold ${
                  message
                    ? "bg-blue-50 text-blue-600"
                    : "hidden"
                }`}
              >
                {message}
              </p>

              {/* Buttons */}
              <div className="mt-5 grid grid-cols-2 gap-3">

                <button
                  onClick={handleDeposit}
                  className="rounded-xl bg-green-600 py-3.5 font-bold text-white shadow-lg shadow-green-200 transition hover:bg-green-700 active:scale-95 cursor-pointer"
                >
                  + Deposit
                </button>

                <button
                  onClick={handleWithdraw}
                  className="rounded-xl bg-red-500 py-3.5 font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-600 active:scale-95 cursor-pointer"
                >
                  − Withdraw
                </button>

              </div>

              {/* Footer */}
              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
                <span>🔒</span>
                <span>Secure ATM Transaction</span>
              </div>

            </div>
          </div>

        </div>

      ) : (

        <Login onLogin={setAuthenticate} />

      )}

    </div>
  );
}

export default App;


