import Image from "next/image";
import TitleCard from "../components/TitleCard";
import Navbar from "../components/Navbar";
import ProfileInfo from "../components/Profileinfo";
export default function profile() {
  return (
    <div >
      <TitleCard/>
      <Navbar/>
      <ProfileInfo/>
    </div>
  );
}
