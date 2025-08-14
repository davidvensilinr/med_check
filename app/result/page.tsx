"use client"
import { useSearchParams } from "next/navigation";
import drugsData from "@/data/drug.json";
import TitleCard from "../components/TitleCard";
import Navbar from "../components/Navbar";

export default function Results() {
    const searchParams = useSearchParams();
    
    // Log all search parameters for debugging
    console.log('All search params:', Object.fromEntries(searchParams.entries()));
    
    // Get all form data from URL parameters
    const formData = {
        name: searchParams.get('name') || '',
        age: searchParams.get('age') || '',
        sex: searchParams.get('sex') || '',
        pregnancyStatus: searchParams.get('pregnancyStatus') || '',
        breastfeeding: searchParams.get('breastfeeding') || '',
        allergies: searchParams.get('allergies') || '',
        medicalConditions: searchParams.get('medicalConditions') || '',
        currentMedications: searchParams.get('currentMedications') || '',
        drugToAnalyse: searchParams.get('drugToAnalyse') || ''
    };
    
    console.log('Form data from URL:', formData);
    
    // Find the drug information
    const drugInfo = formData.drugToAnalyse ? drugsData.find(
        (d) => d.drug_name.toLowerCase() === formData.drugToAnalyse.toLowerCase()
    ) : null;
    
    console.log('Found drug info:', drugInfo);

    return (
        <div>
        <TitleCard/>
        <Navbar/>
        <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left: User Details */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Your Details</h2>
                    <ul className="space-y-2 text-gray-700">
                        {Object.entries(formData).map(([key, value]) => (
                            value && key !== 'drugToAnalyse' && (
                                <li key={key}>
                                    <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:
                                    </span> {value || "Not provided"}
                                </li>
                            )
                        ))}
                    </ul>
                    
                </div>
                
                {/* Right: Additional Information or Actions */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-800 mt-6">Drug Information</h2>
                    {drugInfo ? (
                        <div className="space-y-2 text-gray-700">
                            <p><strong>Name:</strong> {drugInfo.drug_name}</p>
                            <p><strong>Description:</strong> {drugInfo.description}</p>
                            <p><strong>Uses:</strong> {drugInfo.primary_uses}</p>
                            <p><strong>Side Effects:</strong> {drugInfo.side_effects_common}</p>
                            <p><strong>Warnings:</strong> {drugInfo.cautions}</p>
                        </div>
                    ) : (
                        <p className="text-red-500">No information found for "{formData.drugToAnalyse || 'this drug'}"</p>
                    )}
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Additional Information</h2>
                    <p className="text-gray-700">
                        This information is for educational purposes only and does not constitute medical advice. 
                        Please consult with a healthcare professional before making any medical decisions.
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
}