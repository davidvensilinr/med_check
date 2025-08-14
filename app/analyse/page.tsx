'use client';
import {useState} from "react";
import { useRouter } from "next/navigation";

export default function Analyse(){
    const router = useRouter();
    const [formData,setFormData]=useState({
        name:"",
        age:"",
        sex:"",
        pregnancyStatus:"",
        breastfeeding:"",
        allergies:"",
        medicalConditions:"", // Fix typo here
        currentMedications:"", 
        drugToAnalyse:"",

    });
    const handleChange=(
        e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>
    )=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,

        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data being submitted:', formData);
        const queryString = new URLSearchParams(formData as any).toString();
        console.log('Query string:', queryString);
        router.push(`/result?${queryString}`);
    };
    
    return(
        <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-200 flex items-center justify-center p-4">
            <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg w-full">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">User Medical Profile</h1>
                <form onSubmit={handleSubmit}  className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Name</label>
                        <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>


                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Age: </label>
                        <input 
                        type="number"
                        name="age"
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>

                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Sex : </label>
                        <select
                        name="sex"
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Preganancy Status (if applicable)</label>
                        <select 
                        name="preganncyStatus"
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">Not Applicable</option>
                            <option value="firs_trimester">First Trimester</option>
                            <option value="second_trimester">Second Trimester</option>
                            <option value="third_trimester">Third Trimester</option>

                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">
                            Breastfeeding (If applicable )
                        </label>
                        <select 
                        name="breastfeeding"
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">
                            Allergies : 
                        </label>
                        <textarea
                        name="allergies"
                        onChange={handleChange}
                        placeholder="E.g., NSAIDS, pencillin..."
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Medical Conditions: </label>
                        <textarea
                        name="medicalConditions"
                        onChange={handleChange}
                        placeholder="E.g., Diabetes, Kidnedy disease..."
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">
                            Current Medications :
                        </label>
                        <textarea
                        name="currentMedications"
                        onChange={handleChange}
                        placeholder="List medicines you are taking..."
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                    <div>
                        <label className="block text-gray-700 font-medium">Drug to Analyse</label>
                        <select 
                        name="drugToAnalyse"
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">Select</option>
                            <option value="ibuprofen">ibuprofen</option>
                            <option value="amoxicillin">amoxicillin</option>
                            <option value="metformin">metformin</option>
                            <option value="albuterol">albuterol</option>
                            <option value="sertraline">sertraline</option>

                        </select>
                    </div>
                    </div>
                    <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
                    >
                        Run Safety Analysis
                    </button>

                </form>

            </div>

        </div>
    )
    }
