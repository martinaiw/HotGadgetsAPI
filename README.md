# Phone Hunter - Gadget Finder

A professional and modern phone search platform built as part of my frontend development internship. This application connects to a real-time API to fetch mobile device specifications and features.

---

## Key Features

* **Dynamic Search Engine:** Search for any phone brand (iPhone, Samsung, Oppo, etc.) and get instant results.
* **Interactive UI Modal:** Device details are displayed in a custom-built, stylish modal window instead of browser alerts.
* **Pagination Logic:** Implements a "Show All" feature to manage large datasets and improve page performance.
* **Asynchronous Operations:** Uses `async/await` and `fetch` to handle API requests smoothly.
* **Modern Footer:** A professional footer section including company details and social media links.
* **Responsive Design:** Fully adaptive layout built with CSS Grid and Flexbox.

---

## Technical Implementation

In this project, I applied core JavaScript functionalities taught during the internship:

1.  **Fetch API:** To communicate with the Phone Hunting API and handle JSON data.
2.  **DOM Manipulation:** Dynamically creating HTML elements for each phone card and updating the modal content.
3.  **Conditional Rendering:** Logic to show or hide the "Show All" button and the loading spinner based on search results.
4.  **Event Handling:** Structured event listeners for search triggers, closing modals, and "Show All" requests.

---

## Project Structure

* `index.html` - Semantic structure and main components (Hero, Search, Results).
* `style.css` - Custom styling, animations, and responsiveness.
* `script.js` - Main logic, API integration, and UI updates.

---

## API Documentation

* **Search API:** `https://openapi.programming-hero.com/api/phones?search={brand}`
* **Details API:** `https://openapi.programming-hero.com/api/phone/{id}`

---

## How to Deploy

1.  Clone this repository to your local machine.
2.  Open the project in VS Code and use **Live Server** to run it.
3.  To host it, push your code to **GitHub** and enable **GitHub Pages** in the repository settings.

---
*Created with a focus on clean code and user experience during my internship journey at GAOTek.*
