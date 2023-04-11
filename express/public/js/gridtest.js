const submissionsContainer = document.getElementById("submissions_container");

fetch("../data/submissions.json")
   .then((response) => response.json())
   .then((jsonData) => {
   // Loop through each user
   jsonData.users.forEach((user) => {
   // Loop through each submission for this user
   user.submissions.forEach((submission) => {
   // Create a new div element with the grid_item class
const gridItem = document.createElement("div");
gridItem.classList.add("grid_item");

// Create a new img element and set its src, alt, width and height attributes
const img = document.createElement("img");
img.src = submission.image;
img.alt = submission.title;
img.width = 200;
img.height = 200;

// Append the img element to the grid_item div
gridItem.appendChild(img);

// Create a new div element with the overlay class
const overlay = document.createElement("div");
overlay.classList.add("overlay");

// Set the overlay's width and height to match the image
overlay.style.width = `${img.width}px`;
overlay.style.height = `${img.height}px`;

// Create a new h2 element with the submission title
const title = document.createElement("h2");
title.textContent = submission.title;

// Create a new p element with the submission description
const description = document.createElement("p");
description.textContent = submission.description;

// Create a new span element with the username
const username = document.createElement("span");
username.textContent = "by " + user.username;

// Append the title, description, and username elements to the overlay div
overlay.appendChild(title);
overlay.appendChild(description);
overlay.appendChild(username);

// Append the overlay div to the grid_item div
gridItem.appendChild(overlay);

// Append the grid_item div to the submissions container
submissionsContainer.appendChild(gridItem);
});
});
});