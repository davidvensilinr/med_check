'use client'
import {useState} from "react";
export default function ProfileInfo(){
    return(
        <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          User Medical Profile
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name:</label>
            <input
              type="text"
              name="name"
              
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Age:</label>
            <input
              type="number"
              name="age"
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Sex:</label>
            <select
              name="sex"
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Pregnancy Status (if applicable):
            </label>
            <select
              name="pregnancyStatus"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Not applicable</option>
              <option value="first_trimester">First Trimester</option>
              <option value="second_trimester">Second Trimester</option>
              <option value="third_trimester">Third Trimester</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Breastfeeding:
            </label>
            <select
              name="breastfeeding"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Allergies:</label>
            <textarea
              name="allergies"
              placeholder="E.g., NSAIDs, penicillin..."
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Medical Conditions:
            </label>
            <textarea
              name="medicalConditions"
              placeholder="E.g., Diabetes, kidney disease..."
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Current Medications:
            </label>
            <textarea
              name="currentMedications"
              placeholder="List medicines you are taking..."
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
    );
}