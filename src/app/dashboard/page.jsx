'use client';

import './styles.css';
import CourseFlow from '../../components/CourseFlow';
import { useState } from 'react';

export default function Dashboard() {
  const [selectedMajor, setSelectedMajor] = useState('');
  const [showMinorDropdown, setShowMinorDropdown] = useState(false); // NEW
  const [selectedMinor, setSelectedMinor] = useState("");
  const [showDoubleMajorDropdown, setShowDoubleMajorDropdown] = useState(false); // NEW
  const [selectedDoubleMajor, setSelectedDoubleMajor] = useState("");
  const [showCompareMajors, setShowCompareMajors] = useState(false);
  const [showGEs, setShowGEs] = useState(false);
  
  


  const handleMajorChange = (e) => {
    setSelectedMajor(e.target.value);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2>📚 Menu</h2>
        <button>Dashboard</button>

        {/* Add Minor Section */}
        <button onClick={() => setShowMinorDropdown(!showMinorDropdown)}>Add Minor</button>
        {showMinorDropdown && (
          <div className="submenu">
            <select onChange={(e) => setSelectedMinor(e.target.value)} value={selectedMinor}>
              <option value="">Choose a minor</option>
              <option value="cs">cs</option>
              <option value="stats">Statistics</option>
              <option value="linguistics">Linguistics</option>
            </select>
          </div>
        )}

        {/* Add Double Major Section */}
        <button onClick={() => setShowDoubleMajorDropdown(!showDoubleMajorDropdown)}>Add Double Major</button>
        {showDoubleMajorDropdown && (
          <div className="submenu">
            <select onChange={(e) => setSelectedDoubleMajor(e.target.value)} value={selectedDoubleMajor}>
              <option value="">Choose a major</option>
              <option value="cs">Computer Science</option>
              <option value="econ">Economics</option>
              <option value="bio">Biology</option>
            </select>
          </div>
        )}

        {/* Compare Majors Section */}
        <button onClick={() => setShowCompareMajors(!showCompareMajors)}>Compare Majors</button>
        {showCompareMajors && (
          <div className="submenu compare">
            <select>
              <option value="">Choose a major</option>
              <option value="cs">Computer Science</option>
              <option value="econ">Economics</option>
              <option value="bio">Biology</option>
            </select>
            <span>with</span>
            <select>
              <option value="">Choose a major</option>
              <option value="cs">Computer Science</option>
              <option value="econ">Economics</option>
              <option value="bio">Biology</option>
            </select>
          </div>
        )}

        {/* GEs Section */}
        <button onClick={() => setShowGEs(!showGEs)}>GEs</button>
        {showGEs && (
          <div className="submenu">
            <p>🧾 GE Planning coming soon!</p>
          </div>
        )}

        <button className="logout" onClick={() => alert('Logging out...')}>Logout</button>
      </div>

      <div className="main">
        <div className="header">
          <h1>Welcome to your Dashboard</h1>
          <p>Logged in as <strong>name</strong>email</p>
        </div>

        {/* Major Dropdown */}
        <div className="dropdown-container">
          <label htmlFor="majorSelect" className="dropdown-label">Choose your major: </label>
          <select id="majorSelect" value={selectedMajor} onChange={handleMajorChange} className="dropdown">
            <option value="">-- Select Major --</option>
            <option value="cs">Computer Science</option>
            <option value="bio">Biology</option>
            <option value="econ">Economics</option>
          </select>
        </div>

        <p className="subtext">Here you'll see your course planning tools.</p>

        {/* Course Flowchart Based on Major */}
        <div id="courseFlow">
          {selectedMajor === 'cs' && <CourseFlow />}
          {selectedMajor === 'bio' && <p>🧬 Biology chart coming soon!</p>}
          {selectedMajor === 'econ' && <p>📊 Economics chart coming soon!</p>}
        </div>
        
        {selectedMinor && (
          <div id="minorFlow" style={{ marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Minor: {selectedMinor.toUpperCase()}</h3>
            <div style={{ width: '100%', maxWidth: '900px', height: '500px' }}>
              {selectedMinor === 'cs' && <CourseFlow />}
              {selectedMinor === 'stats' && <p>📈 Statistics chart coming soon!</p>}
              {selectedMinor === 'linguistics' && <p>📚 Linguistics chart coming soon!</p>}
            </div>
          </div>
        )}

        {selectedDoubleMajor && (
          <div id="DoubleMajorFlow" style={{ marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Double Major: {selectedDoubleMajor.toUpperCase()}</h3>
            <div style={{ width: '100%', maxWidth: '900px', height: '500px' }}>
              {selectedDoubleMajor === 'cs' && <CourseFlow />}
              {selectedDoubleMajor === 'stats' && <p>📈 Statistics chart coming soon!</p>}
              {selectedDoubleMajor === 'linguistics' && <p>📚 Linguistics chart coming soon!</p>}
            </div>
          </div>
        )}


        
        
      </div>
    </div>
  );
}
