import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Itinerary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const destination = location.state;

  // Load itinerary from localStorage (unique per destination)
  const [itinerary, setItinerary] = useState(() => {
    const saved = localStorage.getItem(`itinerary-${destination.id}`);
    return saved ? JSON.parse(saved) : [];
  });

  const [form, setForm] = useState({
    day: "",
    time: "",
    activity: "",
    description: ""
  });

  // Save itinerary whenever it changes
  useEffect(() => {
    localStorage.setItem(`itinerary-${destination.id}`, JSON.stringify(itinerary));
  }, [itinerary, destination.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addPlan = () => {
    if (!form.day || !form.time || !form.activity) return alert("Please fill all required fields");
    setItinerary([...itinerary, { id: Date.now(), ...form }]);
    setForm({ day: "", time: "", activity: "", description: "" });
  };

  const deletePlan = (id) => {
    setItinerary(itinerary.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        🧳 Itinerary for {destination.city}, {destination.region}
      </h1>

      {/* --- Input Form --- */}
      <div className="mb-6 flex flex-col gap-3 w-[400px]">
        <input
          name="day"
          value={form.day}
          onChange={handleChange}
          placeholder="Day (e.g. Day 1)"
          className="border p-2 rounded"
        />
        <input
          name="time"
          value={form.time}
          onChange={handleChange}
          placeholder="Time (e.g. 9:00 AM)"
          className="border p-2 rounded"
        />
        <input
          name="activity"
          value={form.activity}
          onChange={handleChange}
          placeholder="Activity (e.g. Visit Hachiko Statue)"
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description (optional)"
          className="border p-2 rounded"
        />
        <button
          onClick={addPlan}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ➕ Add Activity
        </button>
      </div>

      {/* --- Itinerary Table --- */}
      <table className="w-full border-collapse border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Day</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">Activity</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {itinerary.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">
                No activities yet. Add one above!
              </td>
            </tr>
          ) : (
            itinerary.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">{item.day}</td>
                <td className="border p-2">{item.time}</td>
                <td className="border p-2">{item.activity}</td>
                <td className="border p-2">{item.description}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => deletePlan(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
      >
        ← Back to Destination
      </button>
    </div>
  );
};

export default Itinerary;
