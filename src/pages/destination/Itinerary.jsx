import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, X, Edit3, Trash2 } from "lucide-react";

const Itinerary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const destination = location.state;

  // Load itinerary from localStorage
  const [itinerary, setItinerary] = useState(() => {
    const saved = localStorage.getItem(`itinerary-${destination.id}`);
    return saved ? JSON.parse(saved) : [];
  });

  const [form, setForm] = useState({
    day: "",
    time: "",
    activity: "",
    description: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // Save itinerary to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      `itinerary-${destination.id}`,
      JSON.stringify(itinerary)
    );
  }, [itinerary, destination.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addPlan = () => {
    if (!form.day || !form.time || !form.activity)
      return alert("Please fill all required fields");

    setItinerary([...itinerary, { id: Date.now(), ...form }]);
    resetForm();
  };

  const editPlan = (item) => {
    setForm({
      day: item.day,
      time: item.time,
      activity: item.activity,
      description: item.description,
    });
    setEditId(item.id);
    setIsEditing(true);
    setShowModal(true);
  };

  const updatePlan = () => {
    setItinerary(
      itinerary.map((item) =>
        item.id === editId ? { ...item, ...form } : item
      )
    );
    resetForm();
  };

  const resetForm = () => {
    setForm({ day: "", time: "", activity: "", description: "" });
    setShowModal(false);
    setIsEditing(false);
    setEditId(null);
  };

  const confirmDeletePlan = (id) => {
    setDeleteId(id);
    setConfirmDelete(true);
  };

  const deletePlan = () => {
    setItinerary(itinerary.filter((item) => item.id !== deleteId));
    setConfirmDelete(false);
    setDeleteId(null);
  };

  return (
    <div className="p-6 text-white">
      {/* Header */}
      <div className="w-full flex items-center pl-[50px]">
        <ArrowLeft
          strokeWidth={4}
          size={30}
          className="w-[50px] h-[35px] hover:cursor-pointer hover:bg-[rgba(255,255,255,0.3)] rounded-md"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-[40px] text-outline font-bold w-full pl-[30px]">
          {destination.city} - {destination.region}
        </h1>
      </div>

      {/* Add Activity Button */}
      <div className="mt-6">
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 flex items-center gap-2 px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all"
        >
          <Plus size={18} /> Add Activity
        </button>
      </div>

      {/* --- Itinerary Table --- */}
      <table className="table-fixed w-full border-collapse mt-8">
        <thead className="bg-[rgba(255,255,255,0.4)] text-black">
          <tr>
            <th className="w-[100px] p-2">Day</th>
            <th className="w-[120px] p-2">Time</th>
            <th className="w-[200px] p-2">Activity</th>
            <th className="w-[300px] p-2">Description</th>
            <th className="w-[150px] p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {itinerary.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center font-bold bg-[rgba(255,255,255,0.3)] py-4 text-gray-900">
                No activities yet. Click “Add Activity” to start planning!
              </td>
            </tr>
          ) : (
            itinerary.map((item) => (
              <tr key={item.id} className="text-black font-semibold">
                <td className="bg-[rgba(255,255,255,0.8)] p-2 rounded-md">
                  {item.day}
                </td>
                <td className="bg-[rgba(255,255,255,0.8)] p-2 rounded-md">
                  {item.time}
                </td>
                <td className="bg-[rgba(255,255,255,0.8)] p-2 rounded-md">
                  {item.activity}
                </td>
                <td className="bg-[rgba(255,255,255,0.8)] p-2 rounded-md">
                  {item.description}
                </td>
                <td className="bg-[rgba(255,255,255,0.8)] p-2 justify-center gap-2 rounded-md flex">
                  <button
                    onClick={() => editPlan(item)}
                    className="text-blue-600 hover:underline hover:cursor-pointer flex items-center gap-1"
                  >
                    <Edit3 size={16} /> Edit
                  </button>
                  <button
                    onClick={() => confirmDeletePlan(item.id)}
                    className="text-red-500 hover:underline hover:cursor-pointer flex items-center gap-1"
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* --- Add/Edit Modal --- */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
          <div className="bg-white text-black p-6 rounded-2xl w-[400px] relative animate-fadeIn">
            <button
              onClick={resetForm}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
              {isEditing ? "Edit Activity" : "Add Activity"}
            </h2>
            <div className="flex flex-col gap-3">
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
                onClick={isEditing ? updatePlan : addPlan}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 font-semibold"
              >
                {isEditing ? "✏️ Update Activity" : "➕ Save Activity"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- Delete Confirmation Modal --- */}
      {confirmDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
          <div className="bg-white text-black p-6 rounded-2xl w-[350px] text-center">
            <h2 className="text-xl font-bold mb-4 text-red-600">
              Confirm Deletion
            </h2>
            <p className="mb-6 text-gray-700">
              Are you sure you want to delete this activity? This action cannot
              be undone.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={deletePlan}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Itinerary;
