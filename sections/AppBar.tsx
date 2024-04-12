import snailIcon from "@/assets/snail_logo.png"
import Image from "next/image"

interface AppBarProps {}

// Bar that appears at the top of the app
const AppBar = ({}: AppBarProps): JSX.Element => {
  return (
    <nav className="w-full flex h-16 px-6 items-center border-gray-600 border-b-2">
      <div className="justify-start">
        <Image src={snailIcon} alt="1257 Logo" width={48}></Image>
      </div>
      <div className="flex-grow"></div>
      <div className="absolute items-center left-1/2 -translate-x-1/2 text-sm sm:text-2xl lg:text-3xl font-bold">
        Team 1257 Scouting App
      </div>
      <div className="text-sm sm:text-lg">Parallel Universe</div>
    </nav>
  )
}

export default AppBar
