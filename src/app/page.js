'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const correctCode = '2512';

  const handlePress = (digit) => {
    if (code.length < 4) {
      const newCode = code + digit;
      setCode(newCode);
      if (newCode.length === 4) {
        if (newCode === correctCode) {
          router.push('/love');
        } else {
          setError('wrong password 💔');
          setTimeout(() => {
            setCode('');
            setError('');
          }, 1500);
        }
      }
    }
  };

  const handleClear = () => {
    setCode('');
    setError('');
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/image/bg.jpg')" }}
    >
      {/* กล่องกรอบเดียว ครอบทั้งข้อความ ช่องรหัส และปุ่มกด */}
      <div className="border-4 border-pink-400 rounded-2xl p-6 bg-white shadow-lg w-64 flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold text-pink-700 text-center">
          Please Enter Our Password 💘
        </h1>

        <div className="flex space-x-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full border-2 border-pink-400 bg-white"
            >
              {code[i] ? (
                <div className="w-full h-full bg-pink-600 rounded-full" />
              ) : null}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 w-full">
          {[...'123456789'].map((digit) => (
            <button
              key={digit}
              className="bg-pink-100 text-pink-700 font-bold py-2 rounded shadow hover:bg-pink-200"
              onClick={() => handlePress(digit)}
            >
              {digit}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="bg-red-300 text-white py-2 rounded shadow hover:bg-red-400"
          >
            Del
          </button>
          <button
            className="bg-pink-100 text-pink-700 font-bold py-2 rounded shadow hover:bg-pink-200"
            onClick={() => handlePress('0')}
          >
            0
          </button>
          <div></div>
        </div>
      </div>

      {error && <p className="text-red-600 mt-6">{error}</p>}
    </main>
  );
}
