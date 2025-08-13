import Image from "next/image";
import TitleCard from "./components/TitleCard";
import Navbar from "./components/Navbar";
import Analyse from "./components/Analyse";
export default function Home() {
  return (
    <div >
      <TitleCard/>
      <Navbar/>
      <Analyse/>
    </div>
  );
}
