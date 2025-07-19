'use client';

import { useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { useRouter } from 'next/navigation';
import 'keen-slider/keen-slider.min.css';

export default function VerticalGallery() {

     const router = useRouter();

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
  });
  const items = [
    {
      image: '/image/movie1.jpg',
      text: 'เรื่องแรกที่ดูด้วยกัน ไปผิดโรง ไปโรงเมเจอข้างนอก แต่ซื้อตั๋วในฟิวเจอร์ไว้ ไปไม่ทัน หนังเริ่มไปแล้ว ในติ๊กต่อกบอกน่ากลัว ทีเซอร์ก็น่ากลัว ของจริงไม่น่ากลัวเลย ร้องไห้ในโรง ไอม่อนไอตลอดดูรู้เรื่องเปล่าไม่รู้ 555',
    },
    {
      image: '/image/movie2.jpg',
      text: 'ตัวอย่างหนังก่อนเข้าโรงน่าดูมาก ไปถุงบอกอยากดูมาก ของจริงแมวป่าอะไรไม่รู้ โคตรปัญญาอ่อน หนังน่าเบื่อ ตลกเกิน',
    },
    {
      image: '/image/movie3.jpg',
      text: 'ตอนแรกว่าจะดูเรื่องนี้ด้วยกัน แต่เพื่อนนัดว่าจะดูด้วย สุดท้ายเพื่อนบิด เลยอดดูด้วยกัน ไอม่อนเลยไปดูกับเพื่อน ไอถุงอยากดูมากๆ กลัวคุยกับไอม่อนไม่รู้เรื่่อง เลยรีบแจ้นไปดูที่ฟิววันเดียวกันเลย สนุกมากน้ำตาไหล',
    },
    {
      image: '/image/movie4.jpg',
      text: 'ไอม่อนไม่เคยดูเรื่องพี่นาคเลย เลยไปดูภาค 1 2 3 รู้สึกว่าสนุกเลยดู 4 ต่อ ดูกับเฟิร์น พลอย ด้วย แต่ไม่มีที่นั่งเลยนั่งแยกกัน พี่นาค 4 ไม่น่ากลัวเลย เห็นเป็นผีตาโขนคิดว่าจะน่ากลัว ออกแนวตลก',
    },
    {
      image: '/image/movie5.jpg',
      text: 'น่ากลัว = 0 คืออะไรไม่รู้ งงไปหมด ย้อนอดีตไปมางง หลับกันทั้งเรื่อง ไม่มีอะไรจะรีวิวละ',
    },
    {
      image: '/image/movie6.jpg',
      text: 'เรื่องนี้เห็นเป็นผีตอนแรกก็คิดว่าจะน่ากลัว น่ารักเฉย ตลกมากตอนฉากธามไท แต๋วเกิน จากผีๆเป็นโรแมนติกเฉย',
    },
     {
      image: '/image/movie8.jpg',
      text: 'เรื่องนี้ถุงเงินบอกอยากดู ละวันนั้นวันพุธด้วย ตั๋วถูกจัด ไปดูเลย เรื่องนี้สนุกดี ม่อนชอบหนังต่อยตีอยู่ละ ชอบทรงผมคนที่ชื่อไรไม่รู้ ทรงคล้ายมูลเล็ต เท่ดี',
    },
     {
      image: '/image/movie9.jpg',
      text: 'เรื่องนี้ถุงเงินก็บอกอยากดู ตอนแรกคิดว่าน่ากลัว น่าขยะแขยงมากกว่า ให้ความรู้สึกเหมือนหนังต่อสู้นิดนึงตอนแก้แค้น รวมๆก็สนุกดี',
    }, 
    {
      image: '/image/movie10.jpg',
      text: 'ตอนนั้นเลือกว่าจะดูห่าก้อมหรือ Attack13 ม่อนเลือกเรื่องนี้ ดู trailer มาก่อนทั้ง 2 เรื่อง รู้สึกว่าเรื่องห่าก้อมดูงงๆ Attack13 สนุกกว่าและรีวิวห่าก้อมไม่สนุกด้วย ตอนแรกเข้าไปในโรงน่ากลัวมากมืดๆไม่มีคนเลยออกไปรอหน้าโรงให้คนอื่นเข้าก่อน สรุปมี 4 คน ละคนข้างๆกินขนมเหม็นมาก ความรู้สึกตอนดูรู้สึกสนุกนะ จั้มสแกแอบเยอะน่ากลัว ตอนจบพีค ไอม่อนดูจบก็งงอีกละ หงส์ชุบบุษบามาเพื่อล้างแค้นเพราะถูกเพิ่อนรุมฆ่า',
    },
 {
      image: '/image/movie11.jpg',
      text: 'เรื่องนี้ถุงอยากดูเหมือนกันแต่ยังไม่ว่างไปดูเลยยังไม่ได้ชวนม่อน ละม่อนก็ทักมาชวนพอดีก็เลยไปเลย เพราะเป็นวันพุธด้วยหนังถูกกว่าปกติ วันนั้นม่อนออกจากบ้านไม่ได้เลยแอบย่าออกไปจังหวะเผลอ เรื่องนี้สนุกมาก เป็นเรื่องที่ทำให้ถุงเริ่มดู F1 ได้รู้อะไรหลายอย่างในเรื่อง คนในโรงเยอะมาก ตอนจบจะดู end credit แต่เหมือนพนักงานมาไล่เลยต้องออกจากโรงก่อน คนนั่งแถวเดียวกันกลิ่นตัวเหม็นมากที่สุดแบบจะตายขนาดออกจากโรงยังได้กลิ่นระหว่างทาง ออกจากโรงมาฝนตกหนักมาก ม่อนบอกให้รอในร่มเดี๋ยวเอารถมารับ ม่อนน่ารักที่สุด❤️ ',
    }, 
  ];

  return (
     <main className="min-h-screen bg-pink-50 flex flex-col"
     style={{
    backgroundImage: "url('/image/lovemovie.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'}}>
      {/* 🔺 Top bar */}
      <div className="w-full bg-pink-100 p-4 shadow-md flex justify-between items-center">
        <button
          onClick={() => router.push('/love')}
          className="text-pink-700 font-semibold hover:underline"
        >
          ← Back
        </button>
        <h2 className="text-xl font-bold text-pink-600">Movie Together 🎥</h2>
        <div className="w-16" /> {/* placeholder ปุ่มขวา */}
      </div>

      {/* 🔻 สไลด์แนวนอน */}
      <div className="relative flex-1 flex items-center justify-center px-4">
        <div ref={sliderRef} className="keen-slider w-full max-w-3xl">
          {items.map((item, index) => (
            <div
              key={index}
              className="keen-slider__slide flex flex-col items-center bg-white border-4 border-pink-300 rounded-3xl shadow-lg p-6"
            >
              <img
                src={item.image}
                alt={`img-${index}`}
                className="w-full max-h-[400px] object-contain rounded-xl mb-4"
              />
              <p className="text-pink-700 text-lg text-center whitespace-pre-wrap">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* 🔸 ปุ่มเลื่อน */}
        <button
          onClick={() => slider.current?.prev()}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-pink-200 hover:bg-pink-300 text-pink-700 px-3 py-1 rounded-full shadow"
        >
          ◀
        </button>
        <button
          onClick={() => slider.current?.next()}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-200 hover:bg-pink-300 text-pink-700 px-3 py-1 rounded-full shadow"
        >
          ▶
        </button>
      </div>
    </main>
  );
}
