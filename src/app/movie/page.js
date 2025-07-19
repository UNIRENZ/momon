'use client';

export default function VerticalGallery() {
  const items = [
    {
      image: '/image/movie1.jpg',
      text: 'เรื่องแรกที่ดูด้วยกัน ไปผิดโรง ไปโรงเมเจอข้างนอก แต่ซื้อตั๋วในฟิวเจอร์ไว้ ไปไม่ทัน',
    },
    {
      image: '/image/2.jpg',
      text: 'วันนี้ชั้นพาแกไปเขาเขียว ไปเดทที่สวนสัตว์...',
    },
    {
      image: '/image/3.jpg',
      text: 'เดินขาลากที่ซาฟารีเวิลด์แต่ก็สนุกมากเลย~',
    },
    {
      image: '/image/4.jpg',
      text: 'วันที่เรานั่งดูหนังด้วยกันแล้วหลับไปทั้งคู่ 💤',
    },
  ];

  return (
    <main className="min-h-screen bg-pink-50 py-10 overflow-y-auto">
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-10">
        Movie Together 🎥
      </h1>

      <div className="flex flex-col items-center gap-10 px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white border-4 border-pink-300 rounded-3xl shadow-lg p-6 w-full max-w-xl"
          >
            <img
              src={item.image}
              alt={`img-${index}`}
              className="w-full h-95 object-contain rounded-xl mb-4"
            />
            <p className="text-pink-700 text-lg text-center whitespace-pre-wrap">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
