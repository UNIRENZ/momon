'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Love() {
  const router = useRouter();
  const startDate = new Date('2024-12-25T00:00:00'); // เปลี่ยนวันเริ่มคบได้ตรงนี้

  const [daysTogether, setDaysTogether] = useState(0);
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const diff = now - startDate; // คำนวณมิลลิวินาทีที่ต่าง

      // แปลงเป็นวัน
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      setDaysTogether(days);

      // แปลงเวลาที่เหลือเป็น hh:mm:ss
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setTimeString(`${hours}:${minutes}:${seconds}`);
    }

    updateTime(); // เรียกครั้งแรก
    const timer = setInterval(updateTime, 1000); // อัปเดตทุกวินาที

    return () => clearInterval(timer); // เคลียร์เวลาที่ตั้งไว้ตอน unmount
  }, []);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-pink-50"
      style={{ backgroundImage: "url('/images/love-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-white bg-opacity-80 rounded-3xl p-10 max-w-md text-center shadow-lg">
        <h1 className="text-3xl font-extrabold text-pink-600 mb-6">Our Anniversary ❤️</h1>
        <p className="text-pink-700 text-lg mb-2">
          We are together for <span className="font-bold">{daysTogether}</span> days already naa
        </p>
        <p className="text-pink-700 text-lg mb-2">
         รักอ้วนมากๆเลยนาา
        </p>
        <button
          onClick={() => router.push('/')}
          className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition"
        >
          Back to home
        </button>
        <button
  onClick={() => router.push('/gallery')}
  className="mt-4 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
>
  Gallery
</button>
      </div>
    </main>
  );
}
