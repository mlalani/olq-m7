"use client";

import Image from "next/image";
import s1 from "../assets/s1.png";

export default function Com() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <h1 className="text-3xl font-extrabold text-indigo-700 mb-4 text-center">From Plate to Paper</h1>
      <Image src={s1} alt="Bill or Receipt" width={500} height={500} className="rounded-xl shadow-md" />
    </div>
  );
}