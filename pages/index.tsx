import Image from "next/image";
import sun from "../public/assets/icon-sun.svg";
import Input from "@/src/components/Input";
import TodoList from "@/src/components/TodoList";
import Category from "@/src/components/category";

export default function Home() {
  return (
    <main className="min-h-screen bg-Very-Dark-Blue">
      <div className="h-[25vh] bg-hero-mobile bg-cover px-8 lg:bg-hero-desktop">
        {" "}
        <div className="flex items-center justify-between py-10">
          {" "}
          <h2 className="text-2xl font-bold text-white">T O D O</h2>
          <Image src={sun} alt="bg-hero" />
        </div>
        <Input />
      </div>
      <div>
        <TodoList />
      </div>
    </main>
  );
}
