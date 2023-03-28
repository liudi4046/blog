import Image from "next/image"
import React from "react"

export default function MyProfilePic() {
  return (
    <div className="w-full">
      <Image
        src="/images/horse.png"
        className="mx-auto rounded-full drop-shadow-2xl border-slate-400 border-2"
        alt="profilePic"
        width={100}
        height={100}
      />
    </div>
  )
}
