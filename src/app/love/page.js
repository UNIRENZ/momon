'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Love() {
  const router = useRouter();
  const startDate = new Date('2024-12-25T00:00:00'); // วันเริ่มคบ

  const [daysTogether, setDaysTogether] = useState(0);
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      setDaysTogether(days);

      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setTimeString(`${hours}:${minutes}:${seconds}`);
    }

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main
      className="flex flex-col min-h-screen bg-pink-50"
      style={{
        backgroundImage: "url('/image/heart.jpg')",
        backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
      }}
    >
      {/* 🔝 Navigation Bar */}
      <nav className="w-full bg-pink-100/90 bg-opacity-90 shadow-md px-4 py-3 flex justify-between items-center">
        <button
          onClick={() => router.push('/')}
          className="text-pink-600 font-semibold hover:underline"
        >
          🏠 Home
        </button>
        <button
          onClick={() => router.push('/gallery')}
          className="text-pink-600 font-semibold hover:underline"
        >
          📷 Gallery
        </button>
        <button
          onClick={() => router.push('/movie')}
          className="text-pink-600 font-semibold hover:underline"
        >
          🎥 Movie
        </button>
      </nav>

      {/* 💌 Content */}
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <div className="bg-white bg-opacity-80 rounded-3xl p-10 max-w-md text-center shadow-lg">
          <h1 className="text-3xl font-extrabold text-pink-600 mb-6">
            Our Anniversary ❤️
          </h1>
          <p className="text-pink-700 text-lg mb-2">
            We are together for <span className="font-bold">{daysTogether}</span> days already naa
          </p>
          <p className="text-pink-700 text-lg mb-6">รักอ้วนมากๆเลยนาา</p>
          <button
  onClick={() => router.push('/secretpass')}
  className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition"
>
  🔒 Secret
</button>

        </div>
      </div>
    </main>
  );
}
