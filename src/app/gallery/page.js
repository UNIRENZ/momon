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
    {
      image: '/image/4.png',
      text: 'วันนี้เราไปกิน mixue กันเป็นครั้งแรกๆที่ชั้นไปหาแก',
    },
    {
      image: '/image/5.jpg',
      text: 'เราไปก้ำด้วยกัน ชั้นอ้วกเยอะมากเลยวันนั้น',
    },
     {
      image: '/image/6.jpg',
      text: 'วันนี้เป็นช่วงวันเกิดแก แต่แกไม่ให้ชั้นเขียน hbd ที่รูป แกบอกว่ากลัวชั้นเขียนไม่สวย',
    },
    {
      image: '/image/7.png',
      text: 'วันนี้เราไปเดินเซนกัน ชั้นพาแกไปสัมภาษณ์ที่SF แต่ก็ไม่ได้เพราะเขาต้องการคนทำยาวๆ แกจะทำแค่แปปเดียว',
    },
    {
      image: '/image/8.jpg',
      text: 'เราไปเดินเล่นกันที่มอแกเพราะมอแกมีงานวันนั้น ก่อนหน้านั้นชั้นก็ขับรถไปส่งแกที่คณะ แกไปงาน back to school',
    },
    {
      image: '/image/9.jpg',
      text: 'ชั้นลากแกให้แกไปซื้อโทรศัพท์กับชั้นที่เซน',
    },
    {
      image: '/image/10.jpg',
      text: 'เราไปร้องเกะกันที่มอแกแล้วเพื่อนแกก็ทำกุญแจรถหาย',
    },
    {
      image: '/image/11.jpg',
      text: 'แกบอกอยากไปถ่ายรูปที่ทะเลตอนกลางคืน แต่ชั้นก็ออกมาไม่ถูกใจแกอยู่ดี',
    },
    {
      image: '/image/12.jpg',
      text: 'เราไปเล่นสงกรานต์ด้วยกันปีแรก มีไอน้ำติดไปด้วย แล้วไปจบที่กินเหล้าฟรี',
    },
    {
      image: '/image/13.jpg',
      text: 'อันนี้เราไปไหนกันวะ',
    },
    {
      image: '/image/14.jpg',
      text: 'อันนี้ย่าชั้นชวนแกไป impact เมืองทอง ไปเดินงานอะไรสักอย่าง',
    },
    {
      image: '/image/15.jpg',
      text: 'อันนี้วันเดียวกัน แต่ชั้นว่ารูปที่เท่ดี',
    },
    {
      image: '/image/16.jpg',
      text: 'วันนี้น้าแจงชวนไปร้านนั่งชิลหลังหมู่บ้าน แกชอบไปเต้นกับใครก็ไม่รู้',
    },
    {
      image: '/image/17.jpg',
      text: 'วันเกิดชั้นน แกซื้อBirken ให้ชั้น แต่ทิ้งชั้นไปไหนไม่รู้ชั้นเลยต้องเดินไปร้านจนไอฟิงเห็นเลยให้แม่มันรับชั้นไปด้วย',
    },
    {
      image: '/image/18.jpg',
      text: 'อันนี้ไม่มีไร หน้าแกอ้อนเย็ด ชั้นเห็นแล้วควยแข็งเฉยๆ',
    },
     {
      image: '/image/19.jpg',
      text: 'อันนี้เหมือนกัน ชั้นเห็นแล้วควยแข็งหุ่นแกน่าเย็ดอะ',
    },
     {
      image: '/image/20.jpg',
      text: 'ไปกิน Hachiban กันค่าาาา',
    },
    
     {
      image: '/image/21.jpg',
      text: 'แฟนใครเนี่ยยย สวยที่ฉุดเยยย',
    },
    
     {
      image: '/image/22.jpg',
      text: 'เซะซี่อ่าาาาาาาา น่าโดนนน',
    },
     {
      image: '/image/23.jpg',
      text: 'first time Siam together',
    },
    
    
    
  ];

  return (
    <main
  className="min-h-screen relative flex flex-col bg-pink-50"
  style={{
    backgroundImage: "url('/image/lovebg.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}
>
  {/* Top Bar */}
  <div className="w-full bg-pink-100/90 p-4 flex justify-between items-center shadow-md">
    <button
      onClick={() => router.push('/love')}
      className="text-pink-700 font-semibold hover:underline"
    >
      ← Back
    </button>
    <h1 className="text-xl font-bold text-pink-600">Our Gallery 🥰</h1>
    <div className="w-16" />
  </div>

  {/* Slider */}
  <div className="flex justify-center py-8 px-4">
    <div className="w-full max-w-md">
      <div ref={sliderInstanceRef} className="keen-slider rounded-xl">
        {items.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide flex flex-col items-center bg-white p-4 rounded-xl shadow-lg min-h-[550px] gap-4"
          >
            <img
              src={item.image}
              alt={`photo-${index}`}
              className="rounded-xl w-full h-100 object-cover"
            />
            <div className="text-pink-700 text-base text-center overflow-y-auto max-h-48 px-2 whitespace-pre-wrap">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* ปุ่มเลื่อนชิดขอบจอ */}
  <button
    onClick={() => slider.current?.prev()}
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-pink-200 hover:bg-pink-300 text-pink-700 px-4 py-2 rounded-full shadow z-10"
  >
    ◀
  </button>
  <button
    onClick={() => slider.current?.next()}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-pink-200 hover:bg-pink-300 text-pink-700 px-4 py-2 rounded-full shadow z-10"
  >
    ▶
  </button>
</main>

  );
}
