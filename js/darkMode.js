// Dark Mode Toggle Script for Radio Buttons
class DarkModeToggle {
    constructor() {
        this.isDarkMode = false;
        this.init();
    }

    init() {
        // Check if there's a saved preference in localStorage
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'true') {
            this.isDarkMode = true;
            this.setRadioButton(true);
            this.applyDarkMode();
        } else {
            this.isDarkMode = false;
            this.setRadioButton(false);
            this.applyLightMode();
        }
        
        // Add event listeners to radio buttons
        this.attachEventListeners();
    }

    attachEventListeners() {
        const darkmodeOff = document.getElementById('darkmodeOff');
        const darkmodeOn = document.getElementById('darkmodeOn');

        if (darkmodeOff) {
            darkmodeOff.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.setMode(false);
                }
            });
        }

        if (darkmodeOn) {
            darkmodeOn.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.setMode(true);
                }
            });
        }
    }

    setRadioButton(darkMode) {
        const darkmodeOff = document.getElementById('darkmodeOff');
        const darkmodeOn = document.getElementById('darkmodeOn');

        if (darkMode) {
            if (darkmodeOn) darkmodeOn.checked = true;
            if (darkmodeOff) darkmodeOff.checked = false;
        } else {
            if (darkmodeOff) darkmodeOff.checked = true;
            if (darkmodeOn) darkmodeOn.checked = false;
        }
    }

    setMode(darkMode) {
        this.isDarkMode = darkMode;
        
        if (this.isDarkMode) {
            this.applyDarkMode();
        } else {
            this.applyLightMode();
        }

        // Save preference
        localStorage.setItem('darkMode', this.isDarkMode);
    }

    applyLightMode() {
        // Light mode styles (off)
        const styles = `
            body {
                display: flex;
                min-width: 600px;
                margin: 0;
                background-color: #43A047 !important;
                color: rgba(255, 255, 255, 0.8) !important;
                font-family: 'PT Sans', sans-serif;
                transition: background-color 0.3s ease, color 0.3s ease;
            }

            #sidebar {
                width: 50%;
                min-width: 300px;
                padding: 2em;
                background-color: #43A047 !important;
                font-size: 15px;
                transition: background-color 0.3s ease;
            }

            #background {
                z-index: 10;
                border-radius: 0 0 0 10px;
                background-color: #1F5768 !important;
                transition: background-color 0.3s ease;
            }
        `;
        
        this.applyStyles(styles);
    }

    applyDarkMode() {
        // Dark mode styles (on)
        const styles = `
            body {
                display: flex;
                min-width: 600px;
                margin: 0;
                background-color: #1b1a19 !important;
                color: rgba(255, 255, 255, 0.8) !important;
                font-family: 'PT Sans', sans-serif;
                transition: background-color 0.3s ease, color 0.3s ease;
            }

            #sidebar {
                width: 50%;
                min-width: 300px;
                padding: 2em;
                background-color: #1b1a19 !important;
                font-size: 15px;
                transition: background-color 0.3s ease;
            }

            #background {
                z-index: 10;
                border-radius: 0 0 0 10px;
                background-color: #464544 !important;
                transition: background-color 0.3s ease;
            }
        `;
        
        this.applyStyles(styles);
    }

    applyStyles(cssText) {
        // Remove existing dark mode styles
        const existingStyle = document.getElementById('darkModeStyles');
        if (existingStyle) {
            existingStyle.remove();
        }

        // Create new style element
        const style = document.createElement('style');
        style.id = 'darkModeStyles';
        style.textContent = cssText;
        document.head.appendChild(style);
    }

    // Method to programmatically set dark mode
    setDarkMode(enabled) {
        this.setMode(enabled);
        this.setRadioButton(enabled);
    }

    // Method to get current mode
    getCurrentMode() {
        return this.isDarkMode ? 'dark' : 'light';
    }

    // Method to toggle mode
    toggle() {
        this.setDarkMode(!this.isDarkMode);
    }
}

// Initialize dark mode toggle when DOM is loaded
function initializeDarkMode() {
    if (document.getElementById('darkmode')) {
        window.darkModeToggle = new DarkModeToggle();
    } else {
        // If the form doesn't exist yet, try again in a moment
        setTimeout(initializeDarkMode, 100);
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDarkMode);
} else {
    initializeDarkMode();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DarkModeToggle;
}