"use client";

import { useEffect, useState } from "react";

export default function Comp() {
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ top: "65%", left: "50%" });

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 60) + 20;
    const randomLeft = Math.floor(Math.random() * 60) + 20;
    setNoPos({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  // 🔥 DETEKSI JARI MENDEKAT (SIMULASI "HOVER" DI MOBILE)
  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const btn = document.getElementById("no-btn");

      if (!btn) return;

      const rect = btn.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = Math.abs(touch.clientX - centerX);
      const distanceY = Math.abs(touch.clientY - centerY);

      // radius deteksi (semakin besar semakin sensitif)
      if (distanceX < 100 && distanceY < 100) {
        moveNoButton();
      }
    };

    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <main className="fixed inset-0 bg-pink-100 text-gray-800 overflow-hidden flex items-center justify-center">

      {!accepted ? (
        <>
          {/* CONTENT */}
          <div className="relative z-10 text-center px-6">
            <h1 className="text-3xl font-bold mb-4">
              Untuk Nona ASTRY GHANA LESTARI 😬
            </h1>

            <p className="mb-8 text-lg">
              Aku minta maaf ya... 🥺
              <br />
              Mau maafin aku nggak?
            </p>

            <button
              onClick={() => setAccepted(true)}
              className="px-10 py-4 bg-green-400 font-bold rounded-2xl shadow-xl active:scale-90 transition"
            >
              Ya 💕
            </button>
          </div>

          {/* TOMBOL NO */}
          <button
            id="no-btn"
            onClick={moveNoButton} // fallback kalau sempat ke klik
            style={{
              position: "fixed",
              top: noPos.top,
              left: noPos.left,
              transform: "translate(-50%, -50%)",
              zIndex: 100,
            }}
            className="px-6 py-2 bg-red-400 font-semibold rounded-xl shadow-md transition-all duration-200"
          >
            Iuhhh 😝
          </button>
        </>
      ) : (
        <div className="relative z-20 flex flex-col items-center p-4">
          <div className="bg-white p-8 rounded-3xl shadow-2xl text-center border-4 border-pink-200">
            <h2 className="text-2xl font-bold mb-4 text-pink-600">
              Uhuiy Makasih ya 😹
            </h2>

            <img
              src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
              alt="love"
              className="w-48 mx-auto rounded-xl"
            />
          </div>

          {/* BUNGA JATUH */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <span
                key={i}
                className="absolute text-2xl animate-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${2 + Math.random() * 4}s`,
                }}
              >
                🌸
              </span>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-fall {
          top: -10%;
          position: absolute;
          animation: fall linear infinite;
        }

        @keyframes fall {
          to {
            transform: translateY(110vh) rotate(360deg);
          }
        }
      `}</style>
    </main>
  );
}