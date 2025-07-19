'use client';

import { useRouter } from 'next/navigation';

export default function GridGalleryPage() {
  const router = useRouter();

  const items = [
    '/image/d1.jpg', '/image/d2.jpg', '/image/d3.jpg', '/image/d4.jpg',
    '/image/d5.jpg', '/image/d6.jpg', '/image/d7.jpg', '/image/d8.jpg',
    '/image/d9.jpg', '/image/d10.jpg', '/image/d11.jpg', '/image/d12.jpg',
    '/image/d13.jpg', '/image/d14.jpg', '/image/d15.jpg', '/image/d16.jpg',
    '/image/d17.jpg', '/image/d18.jpg', '/image/d19.jpg','/image/d20.jpg','/image/d21.jpg','/image/d22.jpg',
  ];

  return (
    <main
      className="min-h-screen bg-black"
    >
      {/* 🔝 Navigation Bar */}
      <div className="w-full bg-gray-700 p-4 flex justify-between items-center shadow-md">
    <button
      onClick={() => router.push('/love')}
      className="text-white font-semibold hover:underline"
    >
      ← Back
    </button>
    <h1 className="text-xl font-bold text-white">Secret 🔒</h1>
    <div className="w-16" />
  </div>

      {/* 🖼️ Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 pb-10">
        {items.map((src, index) => (
          <div
            key={index}
            className="bg-black rounded-2xl shadow-lg p-2 border-4 border-white"
          >
            <img
              src={src}
              alt={`photo-${index}`}
              className="w-full h-185 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
