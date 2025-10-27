
const restaurant_logger = {
    title: 'Restaurant Logger', 
    link: 'https://github.com/okarioto/Food-Diary',
    bullets: [
        'Designed and developed a full-stack web application using the PERN stack (PostgreSQL, Express, React, Node.js) to log and manage restaurant entries with dual ratings, price points, and user comments.',
        'Implemented dynamic sorting features and optimized PostgreSQL queries, enabling efficient ordering of restaurants by name, ratings, or price points while ensuring data integrity through robust backend validation.', 
        'Built an interactive React front end with Axios-powered API requests, delivering a seamless user experience and handling CRUD operations via secure RESTful endpoints.',
    ],
    techs: ['JavaScript', 'expressJS', 'reactJS', 'PostgreSQL', 'Axios', 'Bootstrap', 'HTML','CSS']
}
const auction_house = {
    title: 'Mock Auction House', 
    link: 'https://github.com/okarioto/',
    bullets: [
        'Collaborated in a team to develop a full-stack auction company application that allows users from the auction company side to make changes and/or update databases containing information regarding auction sessions, auctioneers, items, delivery vehicles, storage facilities, appraisers, and customers.',
        'Designed and optimized complex database queries using GROUP BY, sorting, and division techniques to support dynamic filtering and efficient data retrieval.',
        'Built RESTful API endpoints to handle backend logic, integrating seamlessly with the front end and delivering the project to a grader with a focus on performance and functionality',
    ],
    techs: ['JavaScript', 'expressJS', 'OracleDB', 'HTML','CSS']
}
const easy_reader = {
    title: 'Easy reader', 
    link: 'https://github.com/okarioto/Easy-Reader', 
    bullets:[ 
    'Developed a Chrome Extension in a 12 hour Hackathon which increases readability of web pages for users with dyslexia using the React.js framework combined with HTML and CSS', 
    'Learned the Chrome API to inject modified CSS into any web page to alter fonts displayed into dyslexia friendly fonts at just a click of a button', 
    'Collaborated with 2 other developers utilizing Git for seamless version control and an efficient workflow to create a MVP within the time constraint'],
    techs: ['JavaScript','reactJS', 'HTML','CSS',]
}
const flash_cards = {
    title: 'Flash Card', 
    link: 'https://github.com/okarioto/Flashcard-Simulator', 
    bullets: [
        'Created a flashcard simulator which allows users to add/remove cards and save/delete decks utilizing Java and JSON objects to receive an overall grade of 106 % ', 
        'Employed the singleton design pattern to maintain an Event Log of system updates for ease of debugging and generated complete and thorough unit tests using the JUnit library', 
        'Developed a simple interactive graphical user interface using Java Swing to allow for an intuitive user experience'],
    techs: ['Java', 'JUnit', 'JSON', 'Java Swing']
}

const project_list = [restaurant_logger, auction_house, easy_reader, flash_cards]


export { project_list };