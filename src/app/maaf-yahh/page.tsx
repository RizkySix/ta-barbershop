"use client";

import { useState } from "react";

export default function Comp() {
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ top: "65%", left: "50%" });

  const moveNoButton = () => {
    // Range aman 20% - 80% agar tidak keluar layar HP
    const randomTop = Math.floor(Math.random() * 60) + 20;
    const randomLeft = Math.floor(Math.random() * 60) + 20;
    setNoPos({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  return (
    // Gunakan fixed inset-0 agar container menutupi seluruh layar tanpa celah
    <main className="fixed inset-0 bg-pink-100 text-gray-800 overflow-hidden flex items-center justify-center touch-none">
      
      {!accepted ? (
        <>
          {/* BAGIAN TEKS DAN TOMBOL YA */}
          <div className="relative z-10 text-center px-6 pointer-events-auto">
            <h1 className="text-3xl font-bold mb-4 drop-shadow-sm">
              Untuk Nona ASTRY GHANA LESTARI 😬
            </h1>

            <p className="mb-8 text-lg font-medium">
              Aku minta maaf ya... 🥺
              <br />
              Mau maafin aku nggak?
            </p>

            <div className="flex justify-center">
              <button
                type="button"
                // PENGGANTI onClick: Langsung ke-trigger saat jari menyentuh layar
                onPointerDown={() => setAccepted(true)}
                className="px-10 py-4 bg-green-400 text-gray-900 font-bold rounded-2xl shadow-xl active:scale-90 transition-transform"
              >
                Ya 💕
              </button>
            </div>
          </div>

          {/* TOMBOL NO (Iuhhh) - Dipisah agar tidak terhalang hitbox teks */}
          <button
            type="button"
            // Langsung lari begitu disentuh (PointerDown)
            onPointerDown={(e) => {
              e.preventDefault();
              moveNoButton();
            }}
            style={{
              position: "fixed",
              top: noPos.top,
              left: noPos.left,
              transform: "translate(-50%, -50%)",
              zIndex: 100,
              touchAction: "none",
            }}
            className="px-6 py-2 bg-red-400 text-gray-900 font-semibold rounded-xl shadow-md transition-all duration-200"
          >
            Iuhhh 😝
          </button>
        </>
      ) : (
        /* LAYAR SETELAH ACCEPTED */
        <div className="relative z-[200] flex flex-col items-center p-4">
          <div className="bg-white p-8 rounded-3xl shadow-2xl text-center border-4 border-pink-200 animate-in zoom-in duration-300">
            <h2 className="text-2xl font-bold mb-4 text-pink-600">Uhuiy Makasih ya 😹</h2>
            <img
              src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
              alt="love"
              className="w-48 mx-auto rounded-xl shadow-inner"
            />
          </div>
          
          <div className="fixed inset-0 pointer-events-none">
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
          to { transform: translateY(110vh) rotate(360deg); }
        }
      `}</style>
    </main>
  );
}