import Navbar from '@/components/shared/navbar/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      <main className='flex background-light800_dark200'>
        <section className='flex min-h-screen flex-1 flex-col px-6 pt-40 max-md:pb-14 sm:px-14'>
          <div className='mx-auto w-full'>{children}</div>
        </section>
      </main>
    </>
  );
}
