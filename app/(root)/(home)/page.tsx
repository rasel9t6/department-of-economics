import Carousel from '@/components/ui/Carousel';
const images = [
  'image-1.jpg',
  'image-2.jpg',
  'image-3.jpg',
  'image-4.jpg',
  'image-5.jpg',
  'image-6.jpg',
  'image-7.jpg',
  'image-8.jpg',
  'image-9.jpg',
];
export default function Home() {
  return (
    <div className='flex w-[90%] justify-center mx-auto relative h-screen'>
      <h1 className='text-5xl mt-10 font-extrabold absolute z-10 flex justify-center'>
        অর্থনীতি বিভাগ
      </h1>
      <Carousel images={images} />
    </div>
  );
}
