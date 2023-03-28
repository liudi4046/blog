import Link from "next/link"
import React from "react"
import { FaGithub } from "react-icons/fa"
export default function Navbar() {
  return (
    <nav className="bg-slate-500 sticky top-0 p-4 z-10 drop-shadow-2xl">
      <div className="prose mx-auto flex justify-between">
        <Link href="/" className="text-white text-xl no-underline">
          Steven
        </Link>
        <div className="gap-4 flex">
          <Link href="" className="no-underline">
            Blog
          </Link>
          <Link href="" className="no-underline">
            Project
          </Link>
          <Link href="" className="no-underline">
            关于我
          </Link>
        </div>
        {/* <div className="w-fit">
          <Link href="https://github.com/liudi4046">
            <FaGithub />
          </Link>
        </div> */}
      </div>
    </nav>
  )
}
