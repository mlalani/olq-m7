"use client";
import { useState, useEffect } from "react";

const ALL_COUNTRIES = [
  { name: "United States", flag: "🇺🇸", symbol: "$", currency: "US Dollar" },
  { name: "United Kingdom", flag: "🇬🇧", symbol: "£", currency: "Pound Sterling" },
  { name: "European", flag: "🇪🇺", symbol: "€", currency: "Euro" },
  { name: "Japan", flag: "🇯🇵", symbol: "¥", currency: "Yen" },
  { name: "India", flag: "🇮🇳", symbol: "₹", currency: "Rupee" },
  { name: "Russia", flag: "🇷🇺", symbol: "₽", currency: "Ruble" },
  { name: "China", flag: "🇨🇳", symbol: "¥", currency: "Yuan" },
  { name: "Australia", flag: "🇦🇺", symbol: "A$", currency: "Australian Dollar" },
];

function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function useQuestionPool(count = 8) {
  const [pool, setPool] = useState(ALL_COUNTRIES.slice(0, count));
  
  useEffect(() => {
    setPool(shuffle(ALL_COUNTRIES).slice(0, count));
  }, [count]);
  
  return pool;
}

function buildOptions(correct, pool) {
  // Build 4 choices: correct symbol + 3 distractors (unique, shuffled)
  const distractors = [];
  const seen = new Set([correct.symbol]);
  const candidates = shuffle(pool);
  for (const c of candidates) {
    if (!seen.has(c.symbol)) {
      distractors.push(c.symbol);
      seen.add(c.symbol);
    }
    if (distractors.length === 3) break;
  }
  const opts = shuffle([correct.symbol, ...distractors]);
  return opts;
}

export default function Com() {
  const questions = useQuestionPool(8); // choose how many rounds
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [options, setOptions] = useState([]);
  const [isClient, setIsClient] = useState(false);

  const q = questions[step];
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    if (q && isClient) {
      setOptions(buildOptions(q, ALL_COUNTRIES));
    }
  }, [q, isClient]);

  function pick(option) {
    setSelected(option);
    const isCorrect = option === q.symbol;
    if (isCorrect) {
      setShowAnswer(true);
    } else {
      setShowAnswer(false);
    }
  }

  function next() {
    if (step < questions.length - 1) {
      setStep(step + 1);
      setSelected(null);
      setShowAnswer(false);
    } else {
      // restart
      window.location.reload();
    }
  }



  // Don't render until client-side hydration is complete
  if (!isClient || !q || options.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-sky-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-sky-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">


        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8">
          <header className="flex items-center justify-center gap-4 mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Currency Match‑Up</h1>
          </header>

          <section className="mb-6">
            <div className="text-slate-600 text-sm mb-2">Pick the correct symbol for:</div>
            <div className="flex items-center gap-3 text-2xl sm:text-3xl font-semibold">
              <span className="text-4xl" aria-hidden>{q.flag}</span>
              <span>{q.name}</span>
            </div>
          </section>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {options.map((opt) => {
              const isCorrect = showAnswer && selected === opt && opt === q.symbol;
              const isWrong = selected === opt && opt !== q.symbol;
              return (
                <button
                  key={opt}
                  onClick={() => pick(opt)}
                  className={[
                    "rounded-2xl border text-lg sm:text-xl font-bold py-4 sm:py-5 shadow-sm",
                    "transition transform active:scale-95",
                    isCorrect
                      ? "bg-emerald-100 border-emerald-300 text-emerald-800"
                      : isWrong
                      ? "bg-rose-100 border-rose-300 text-rose-800"
                      : "bg-white hover:bg-slate-50 border-slate-200 text-slate-800",
                  ].join(" ")}
                  aria-label={`Option ${opt}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {showAnswer && (
            <div className="mb-6 p-4 rounded-2xl border bg-slate-50 text-slate-700">
              {selected === q.symbol ? (
                <p className="font-semibold">Great job! {q.symbol} is correct for {q.name}. The currency is called <span className="text-2xl font-bold">{q.currency}</span>.</p>
              ) : (
                <p>
                  Nice try! Thats not the correct answer. Keep trying!
                </p>
              )}
            </div>
          )}

          <div className="flex items-center justify-center gap-3">
            {selected === q.symbol ? (
              step < questions.length - 1 ? (
                <button
                  onClick={next}
                  className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md"
                >
                  Next
                </button>
              ) : (
                <div className="text-sm text-emerald-600 px-5 py-3 font-semibold">
                  All questions answered correctly!
                </div>
              )
            ) : (
              <div className="text-sm text-slate-500 px-5 py-3">
                Select the correct answer to continue
              </div>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}