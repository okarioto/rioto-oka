
const restaurantLogger = {
    title: "Restaurant Logger", link: "https://github.com/okarioto/Food-Diary",
    bullets: ["Designed and developed a full-stack web application using the PERN stack (PostgreSQL, Express, React, Node.js) to log and manage restaurant entries with dual ratings, price points, and user comments.",
        "Implemented dynamic sorting features and optimized PostgreSQL queries, enabling efficient ordering of restaurants by name, ratings, or price points while ensuring data integrity through robust backend validation.", "Built an interactive React front end with Axios-powered API requests, delivering a seamless user experience and handling CRUD operations via secure RESTful endpoints.",
    ],
    techs: ["JavaScript", "expressJS", "reactJS", "PostgreSQL", "CSS"]
}
const easyReader = {
    title: "Easy reader", link: "https://github.com/okarioto/Easy-Reader", bullets: ["Developed a Chrome Extension in a 12 hour Hackathon which increases readability of web pages for users with dyslexia using the React.js framework combined with HTML and CSS", "Learned the Chrome API to inject modified CSS into any web page to alter fonts displayed into dyslexia friendly fonts at just a click of a button", "Collaborated with 2 other developers utilizing Git for seamless version control and an efficient workflow to create a MVP within the time constraint"],
    techs: ["JavaScript", "HTML", "CSS", "reactJS"]
}
const flashCards = {
    title: "Flash Card", link: "https://github.com/okarioto/Flashcard-Simulator", bullets: ["Created a flashcard simulator which allows users to add/remove cards and save/delete decks utilizing Java and JSON objects to receive an overall grade of 106 % ", "Employed the singleton design pattern to maintain an Event Log of system updates for ease of debugging and generated complete and thorough unit tests using the JUnit library", "Developed a simple interactive graphical user interface using Java Swing to allow for an intuitive user experience"],
    techs: ['Java', 'JUnit', 'JSON', 'Java Swing']
}

const projectDets = [restaurantLogger, easyReader, flashCards]


export {projectDets};