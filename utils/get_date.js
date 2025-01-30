export default function get_date() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
    const date = new Date();
    const weekday = days[date.getDay()];
    const datenumber = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const fullDate = `${weekday}, ${month} ${datenumber} ${year}`
    return fullDate;
}