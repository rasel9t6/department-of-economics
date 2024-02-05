import { Button } from '@/components/ui/button';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col items-center justify-between'>
      
      <div>{children}</div>
    </main>
  );
}
