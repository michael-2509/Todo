import Image from "next/image";
import sun from "../public/assets/icon-sun.svg";
import Input from "@/components/Input";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="h-[25vh] bg-hero-pattern bg-cover px-8">
        {" "}
        <div className="flex items-center justify-between py-10">
          {" "}
          <h2 className="text-2xl font-bold text-white">T O D O</h2>
          <Image src={sun} alt="bg-hero" />
        </div>
        <Input />
      </div>
    </main>
  );
}
