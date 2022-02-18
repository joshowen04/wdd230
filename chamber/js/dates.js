const lastmod = document.querySelector("#lastmod");
const copywriteyear = document.querySelector("#copywriteyear");
const d = new Date();
const year = d.getFullYear();

copywriteyear.textContent += `${year} | Las Condes Chamber of Commerce | Joshua Owen | Santiago Chile | Last modified: ${document.lastModified}`;

/*lastmod.innerHTML = */

// select the elements to manipulate (output to)
const currentDate = document.querySelector("#currentDate");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
let day = now.getDay();

if (day === 1 || day === 2) {
	console.log(day)
	let chamberMeetBanner = document.querySelector(".displayed")
	chamberMeetBanner.classList.toggle("displayed")
}
// long, medium, short options ... try them

currentDate.innerHTML = `<em>${fulldate}</em>`;

const sinceLast = document.querySelector("#sinceLast");

let currentVisit = Number(Date.now())
let lastVisit = window.localStorage.getItem("lastVisit")
let difference = Math.round((currentVisit - lastVisit) / (1000*60*60*24))

/*console.log(`${currentVisit} - ${lastVisit} - ${difference}`);*/
localStorage.setItem("lastVisit", currentVisit);

if (difference < 1) {
	sinceLast.textContent = "It has been less than a day since you last visited.";
}
else {
	sinceLast.textContent = `Days since last visit: ${difference}`
}