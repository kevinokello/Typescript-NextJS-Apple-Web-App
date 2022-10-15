import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
      <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
          <div className="flex items-center justify-center md:w-1/5">
              <Link href="/">
                  <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
                      <Image
                          src="https://rb.gy/vsvv2o"
                          layout="fill"
                          objectFit="contain"
                      />
                  </div>
              </Link>
          </div>
     
      </header>
  )
}
