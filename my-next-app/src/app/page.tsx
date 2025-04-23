import Image from "next/image";
import Hello from "./components/hello";
import Link from "next/link";

export default function Home() {
  console.log("What am i doing here -- SERVER/CLIENT");

  return (

    <>
      <div className="max-w-7xl mx-auto  py-8">
        <h1 className="text-3xl font-bold">Welcome to Next.js!</h1>
        {/* <Hello /> */}
      </div>

    </>
  );
}
