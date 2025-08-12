'use client'
import Link from "next/link";
export default function Navbar(){
    return(
        <div>
            <nav className="bg-blue-600 text-white shadow-sm">
                <div className="max-w-5xl mx-auto flex justify-center space-x-8 py-3">
                    <Link href="/"><h1>Analyse</h1></Link>
                    <Link href="/profile"><h1>Your Profile</h1></Link>
                </div>
            </nav>
        </div>
    )
}