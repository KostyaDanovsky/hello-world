const messages = [
  "A tiny static website that is ready to expand into something bigger.",
  "Hello from plain HTML, CSS, and JavaScript.",
  "This page is simple on purpose, so you can build on it easily.",
];

const messageNode = document.getElementById("message");
const timestampNode = document.getElementById("timestamp");
const button = document.getElementById("hello-button");

function updateTimestamp() {
  const formatted = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "medium",
  });

  timestampNode.textContent = formatted;
}

button.addEventListener("click", () => {
  const currentMessage = messageNode.textContent.trim();
  const currentIndex = messages.indexOf(currentMessage);
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % messages.length : 0;
  messageNode.textContent = messages[nextIndex];
  updateTimestamp();
});

updateTimestamp();
