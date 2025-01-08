document.getElementById("sendButton").addEventListener("click", sendMessage);
document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = document.getElementById("userInput").value.trim();
    
    if (userMessage) {
        // Display user's message
        addMessage("You", userMessage);
        
        // Clear input field
        document.getElementById("userInput").value = "";
        
        // Simulate a system response
        setTimeout(() => {
            addMessage("Opponent", getSystemResponse());
        }, 1000); // Wait for 1 second before responding
    }
}

function addMessage(sender, message) {
    const messageContainer = document.getElementById("messages");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = `${sender}: ${message}`;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight; // Auto-scroll to bottom
}

function getSystemResponse() {
    // Array of sample responses for the opponent
    const responses = [
        "I understand your point, but here is why I disagree...",
        "That's an interesting perspective. However, research shows...",
        "I see where you're coming from, but have you considered...",
        "I respectfully disagree because...",
        "Your argument is valid, but here’s an opposing viewpoint...",
    ];
    
    // Randomly select a response
    return responses[Math.floor(Math.random() * responses.length)];
}
