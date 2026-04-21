const messages = [
    "Keep going. You are learning something valuable.",
    "Small progress is still progress.",
    "Every expert started as a beginner.",
    "Practice makes your skills stronger.",
    "Your future projects start with simple steps like this one."
    ];
    
    const button = document.getElementById("messageBtn");
    const messageBox = document.getElementById("message");
    
    button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageBox.textContent = messages[randomIndex];
    });