import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image src="/form.png" alt="logo" width={2000} height={4000} />
    </div>
  );
}
