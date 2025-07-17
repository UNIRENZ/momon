'use client';

import { useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useRouter } from 'next/navigation';


export default function NextPage() {
  const sliderRef = useRef(null);
  const router = useRouter();
  const [sliderInstanceRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  const items = [
    {
      image: '/image/1.jpg',
      text: 'วันแรกที่เราคบกัน แกอยากไปคาเฟ่ในวันคริสมาสต์ เราหาคาเฟ่กันแล้วชั้นก็พาแกไป ของในคาเฟ่แพงชิบหาย ชั้นก็ถ่ายรูปให้แกเพราะแกอยากไปถ่ายรูป',
    },
    {
      image: '/image/2.jpg',
      text: 'วันนี้ชั้นพาแกไปเขาเขียว ไปเดทที่สวนสัตว์ ชั้นบอกให้แกระวังฮิปโป มันจะขี้ พูดไม่ทันขาดคำ แล้วขี้กระเด็นไกลมาก',
    },
    {
      image: '/image/3.jpg',
      text: 'วันนี้ชั้นพาแกไปซาฟารีเวิลด์ บริษัทพ่อชั้นจัดงานแล้วพ่อชั้นมีบัตรเข้าฟรี เดินกันจนขาลากเลย',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-pink-50 px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">
        Our Gallery 🥰
      </h1>

      {/* กล่อง wrapper */}
      <div className="relative w-full max-w-md">
        <div ref={sliderInstanceRef} className="keen-slider rounded-xl">
          {items.map((item, index) => (
            <div
              key={index}
              className="keen-slider__slide flex flex-col items-center bg-white p-4 rounded-xl shadow-lg min-h-[550px] gap-4"
            >
              <img
                src={item.image}
                alt={`photo-${index}`}
                className="rounded-xl w-full h-64 object-cover"
              />
              <div className="text-pink-700 text-base text-center overflow-y-auto max-h-48 px-2 whitespace-pre-wrap">
                {item.text}
              </div>
               <button
          onClick={() => router.push('./love')}
          className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition"
        >
          Back
        </button>
            </div>
          ))}
        </div>

        {/* ปุ่มเลื่อน */}
        <button
          onClick={() => slider.current?.prev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-pink-200 hover:bg-pink-300 text-pink-700 px-3 py-1 rounded-full shadow z-10"
        >
          ◀
        </button>
        <button
          onClick={() => slider.current?.next()}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-pink-200 hover:bg-pink-300 text-pink-700 px-3 py-1 rounded-full shadow z-10"
        >
          ▶
        </button>
        
      </div>
    </main>
  );
}
