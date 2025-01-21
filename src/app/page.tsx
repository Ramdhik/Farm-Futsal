import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image src="/logo.svg" alt="Logo" width={100} height={100} className="w-auto h-auto" />
      <h1 className="text-3xl font-bold">Welcome to Farm Futsal Family</h1>
      <p className="text-lg">This is a project for the Futsal Family, a group of students from University of Padang, Indonesia.</p>
      <Button className="mt-4">Learn More</Button>
    </div>
  );
}
