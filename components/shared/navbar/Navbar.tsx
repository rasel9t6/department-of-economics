import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className='flex background-light800_dark200 border-b border-light-100 dark:border-dark-500 dark:shadow-none justify-between items-center w-full fixed z-50 py-6 px-10'>
      <Link
        href='/'
        className='flex items-center gap-3'
      >
        <Image
          src='/assets/logo.ico'
          width={50}
          height={50}
          alt='NGC'
        />
        <p className='h2-bold text-dark-100 dark:text-light-900 '>
          Department of <span className='text-primary-500'>Economics</span>
        </p>
      </Link>
      <div className='flex justify-between font-semibold items-center font-notoSansBengali gap-5'>
        <Link
          href='/'
          className='text-2xl'
        >
          <FaHome />
        </Link>
        <Link href='/about'>পরিচিতি</Link>
        <Link href='/contact'>যোগাযোগ</Link>
        <Link href='/notice'>নোটিশ</Link>
        <Link href='/gallery'>অনুষ্ঠান</Link>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
