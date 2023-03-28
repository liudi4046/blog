import Link from "next/link"
import MyProfilePic from "./components/MyProfilePic"
import Posts from "./components/Posts"

export default function Home() {
  return (
    <main className="p-4 mx-auto">
      <MyProfilePic />
      <p className="text-center mt-10 text-xl">
        Hello and Welcome! &#128075; I am{" "}
        <span className="font-bold">Steven</span>
      </p>
      <p className="text-center text-lg leading-loose">
        I am interested in Web Development and AI.
        <br />
        My skillset: Typescript Next.js React.js Node.js Python Keras
      </p>
      <Posts />
    </main>
  )
}
