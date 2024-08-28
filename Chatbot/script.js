document.getElementById("send-btn").addEventListener("click", function() {
    sendMessage();
});

document.getElementById("user-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const messageText = userInput.value.trim();

    if (messageText === "") return;

    appendMessage("user", messageText);
    userInput.value = "";

    setTimeout(() => {
        botReply(messageText);
    }, 500);
}

function appendMessage(sender, text) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = text;

    const chatBody = document.getElementById("chat-body");
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function botReply(userMessage) {
    const botMessage = "Yoo. Du sagde: " + userMessage;
    appendMessage("bot", botMessage);
}
