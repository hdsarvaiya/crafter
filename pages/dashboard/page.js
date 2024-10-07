"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";
import Link from "next/link";
import DashNav from "@/components/DashNav";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter(); // Using the Next.js router for redirection
  const [savedLayouts, setSavedLayouts] = useState([]);
  const [websiteName, setWebsiteName] = useState("");
  const [showModal, setShowModal] = useState(false); // To control the modal for website name input

  // Fetch saved layouts on mount
  useEffect(() => {
    if (session) {
      axios
        .get(`http://localhost:5000/api/load-layouts`, {
          params: { user: session?.user?.email },
        })
        .then((response) => {
          setSavedLayouts(response.data.layouts);
        })
        .catch((error) => {
          console.error("Error fetching layouts:", error);
        });
    }
  }, [session]);

  // Handle creating a new website
  const handleCreateNewWebsite = async () => {
    if (!websiteName) return;

    try {
      // Send POST request to create a new layout
      const response = await axios.post("/app/api/create-layout", {
        name: websiteName,
        user: session?.user?.email,
      });

      // On success, get the layoutId and redirect to buildArea
      const { layoutId } = response.data;
      router.push(`/buildArea?layoutId=${layoutId}`);
    } catch (error) {
      console.error("Error creating new layout:", error);
    }
  };

  // Redirect to Login if not authenticated
  if (!session) {
    router.push("/Login");
    return null; // return early to avoid rendering the rest of the component
  }

  return (
    <>
      <DashNav />
      <div className="w-full bg-[#021526] h-screen text-white">
        <div className="flex items-center p-4 justify-center">
          {/* Button to trigger modal for entering website name */}
          <button
            onClick={()=>router.push("/buildArea") }
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            Create New Project
          </button>
        </div>

        {/* Modal for entering website name */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg text-black w-96">
              <h2 className="text-lg font-semibold mb-4">Enter Website Name</h2>
              <input
                type="text"
                value={websiteName}
                onChange={(e) => setWebsiteName(e.target.value)}
                className="w-full p-2 border rounded mb-4"
                placeholder="Website Name"
              />
              <div className="flex justify-end">
                <button
                  onClick={handleCreateNewWebsite}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Create
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="ml-2 bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Display Saved Layouts */}
        <div className="p-6">
          <h2 className="text-2xl mb-4">Your Saved Projects</h2>
          {savedLayouts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedLayouts.map((layout, index) => (
                <div key={index} className="bg-white p-4 rounded-lg text-black">
                  <h3 className="text-lg font-semibold">{layout.name}</h3>
                  <Link href={`/buildArea?layoutId=${layout._id}`}>
                    <button className="mt-4 text-white bg-purple-600 px-4 py-2 rounded">
                      Continue Project
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p>No saved projects found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
