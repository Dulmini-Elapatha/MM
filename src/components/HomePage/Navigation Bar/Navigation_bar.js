import React, { useState } from 'react';
import './Navigation_bar.css'; // Import your CSS file
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet"></link>

function Navigation() {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("mode") === "dark-mode");

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("mode", newMode ? "dark-mode" : "light-mode");
    };

    const [searchActive, setSearchActive] = useState(false);
    const toggleSearch = () => {
        setSearchActive(!searchActive);
    };

    const [sidebarActive, setSidebarActive] = useState(false);
    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    const closeSidebar = (e) => {
        if (!e.target.classList.contains("sidebarOpen") && !e.target.classList.contains("menu")) {
            setSidebarActive(false);
        }
    };

    return (
        <nav>
            <div className="nav-bar">
                <i className='bx bx-menu sidebarOpen' onClick={toggleSidebar}></i>
                <span className="logo navLogo"><a href="#">MindMate</a></span>

                <div className="menu">
                    <div className="logo-toggle">
                        <span className="logo"><a href="#">CodingLab</a></span>
                        <i className='bx bx-x siderbarClose' onClick={toggleSidebar}></i>
                    </div>

                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Questionnaire</a></li>
                        <li><a href="#">chatbot</a></li>
                        <li><a href="#">Find a Friend</a></li>
                    </ul>
                </div>

                <div className="darkLight-searchBox">
                    <div className="dark-light" onClick={toggleDarkMode}>
                        <i className={darkMode ? 'bx bx-sun sun' : 'bx bx-moon moon'}></i>
                    </div>

                    <div className="searchBox">
                        <div className="searchToggle" onClick={toggleSearch}>
                            <i className='bx bx-x cancel'></i>
                            <i className='bx bx-search search'></i>
                        </div>

                        <div className={`search-field ${searchActive ? 'active' : ''}`}>
                            <input type="text" placeholder="Search..." />
                            <i className='bx bx-search'></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
