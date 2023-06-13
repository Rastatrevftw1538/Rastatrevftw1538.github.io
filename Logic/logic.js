import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.esm.browser.js'
const fs = require('fs');
document.addEventListener('DOMContentLoaded', function() {
    fetch('messages.json') // Replace 'data.json' with the path to your JSON file
    .then(response => response.json())
    .then(data => {
      // Process the fetched JSON data
        console.log(data);
        displayMessages(data)
      // Update the DOM or perform any other operations with the data
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
});
function displayMessages(messages) {
    const container = document.getElementById('messageContainer');

    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `
        <strong>Name:</strong> ${message.name}<br>
        <strong>Message:</strong> ${message.message}<br><br>
        `;
        container.appendChild(messageElement);
    });
}

document.getElementById('messageForm').addEventListener('submit', function(event) {
event.preventDefault(); // Prevent form submission

var name = document.getElementById('nameInput').value;
var message = document.getElementById('messageInput').value;

var messageObj = { name: name, message: message };
var jsonData = JSON.stringify(messageObj);


document.getElementById('nameInput').value = '';
document.getElementById('messageInput').value = '';
localStorage.setItem('messages', jsonData);
});