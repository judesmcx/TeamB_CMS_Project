import React, { useState } from "react";
import { Link } from "react-router-dom";

const SaveTopicPage = () => {
  const [topic, setTopic] = useState({
    title: "",
    description: "",
    videoLink: "",  // Add the videoLink field to the state
  });

  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);
  const [topics, setTopics] = useState([
    { title: "Chapter 1: Title 1", description: "" },
  ]);
  const [editableTopicIndex, setEditableTopicIndex] = useState(0);

  const handleInputChange = (e) => {
    setTopic({ ...topic, [e.target.name]: e.target.value });
  };

  const handleDescriptionFocus = () => {
    setIsDescriptionFocused(true);
  };

  const handleDescriptionBlur = () => {
    setIsDescriptionFocused(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for handling form submission
    console.log("Form Submitted");
    // Update the edited topic in the list of topics
    setTopics((prevTopics) => {
      const updatedTopics = [...prevTopics];
      updatedTopics[editableTopicIndex] = { ...topic };
      return updatedTopics;
    });
    // Clear the form fields after submission
    setTopic({ title: "", description: "", videoLink: "" });
  };

  const handleSave = () => {
    // Implement the logic to save the topic
    console.log("Saving Topic:", topic);
  };

  const handleAddNewTopic = () => {
    // Generate a new topic with the format "Chapter [index]: Title [index]"
    const newTopic = {
      title: `Chapter ${topics.length + 1}: Title ${topics.length + 1}`,
      description: "",
      videoLink: "",  // Add videoLink for the new topic
    };

    // Add the new topic to the list of topics
    setTopics([...topics, newTopic]);

    // Set the new topic as the current editable topic
    setEditableTopicIndex(topics.length);
  };

  return (
    <div className="flex h-[100vh]">
      {/* Side Navigation Bar */}
      <nav className="w-1/4 bg-[#1E6C0B] p-4">
        <ul className="bg-[#1E6C0B] flex flex-col h-full">
          <li className="mb-2">
            {/* Apply styling to the back button */}
            <button className="text-white hover:underline">
              <Link to="/">Back</Link>
            </button>
          </li>
          <li className="flex-grow text-white mb-4 font-bold">Topics:</li>
          {/* Display the list of topics */}
          {topics.map((t, index) => (
            <li
              key={index}
              className={`mb-2 cursor-pointer text-white ${
                editableTopicIndex === index ? "font-bold" : ""
              }`}
              onClick={() => setEditableTopicIndex(index)}
            >
              {t.title}
            </li>
          ))}
          {/* Add a button to add a new topic */}
          <li className="mt-auto">
            <button
              onClick={handleAddNewTopic}
              className="flex items-center text-blue-500"
            >
              Add New Topic
            </button>
          </li>
        </ul>
      </nav>

      {/* Content Area */}
      <div className="flex-grow p-4 flex flex-col items-center">
         {/* Save button added on the right top corner below the navigation bar */}
         <div className="mb-4 flex items-center justify-end w-full">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
        {/* Center content */}
        <div className="mb-5 flex items-center">
          <h1 className="text-2xl font-bold mb-2 mr-4">Course Title</h1>
        </div>
       
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          {/* Center form */}
          <div className="mb-4 flex items-center">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600 mr-2"
            >
              Chapter Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={topic.title}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded-md flex-grow"
              placeholder="Add Topic Title"
              required
            />
          </div>
          <div className="mb-4 w-full"> {/* Set width to full */}
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            ></label>
            <textarea
              id="description"
              name="description"
              value={topic.description}
              onChange={handleInputChange}
              onFocus={handleDescriptionFocus}
              onBlur={handleDescriptionBlur}
              rows="6"
              className={`mt-1 p-2 border border-gray-300 rounded-md w-full lg:w-100 resize-none ${
                isDescriptionFocused ? "" : "placeholder-opacity-50"
              }`}
              placeholder="Add Topic Description..."
              required
            ></textarea>
          </div>
 {/* Additional input for video link and file */}
<div className="mb-4 flex flex-col items-center w-full">
  {/* Center additional inputs */}
  <div className="mb-2 w-full flex justify-center"> {/* Set width to full and center content */}
    <div className="w-1/2 mr-2"> {/* Set width to half */}
      <label
        htmlFor="videoLink"
        className="block text-sm font-medium text-gray-600"
      >
        Video Link:
      </label>
      <input
        type="text"
        id="videoLink"
        name="videoLink"
        value={topic.videoLink}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded-md w-full"
        placeholder="Add Video Link"
      />
    </div>
    <div className="w-1/2"> {/* Set width to half */}
      <label
        htmlFor="file"
        className="block text-sm font-medium text-gray-600"
      >
        File:
      </label>
      <input
        type="file"
        id="file"
        name="file"
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded-md w-full"
      />
    </div>
  </div>
</div>
        </form>
      </div>
    </div>
  );
};

export default SaveTopicPage;
