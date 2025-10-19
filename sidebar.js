// === ALLOPERA SIDEBAR CORE ===
// 🦖 A lovingly coded sidebar for Jacob.

// ========== DATE + TIME ==========
function updateDateTime() {
  const now = new Date();
  document.getElementById("date").textContent = now.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  document.getElementById("time").textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
setInterval(updateDateTime, 1000);
updateDateTime();

// ========== NOTES ==========
const noteArea = document.getElementById("note-area");

noteArea.addEventListener("input", () => {
  localStorage.setItem("alloperaNotes", noteArea.value);
});

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("alloperaNotes");
  if (saved) noteArea.value = saved;
});

// ========== TAB SAVER ==========
document.addEventListener("DOMContentLoaded", () => {
  renderSessions();
});

document.addEventListener("click", (e) => {
  if (e.target.id === "save-tabs") {
    const sessionName = document.getElementById("session-name").value.trim();
    if (!sessionName) return alert("Name your session!");
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      const urls = tabs.map(t => t.url);
      const sessions = JSON.parse(localStorage.getItem("alloperaSessions") || "[]");
      sessions.push({ name: sessionName, tabs: urls });
      localStorage.setItem("alloperaSessions", JSON.stringify(sessions));
      renderSessions();
    });
  }
});

function renderSessions() {
  const container = document.getElementById("saved-sessions");
  if (!container) return;
  container.innerHTML = "";
  const sessions = JSON.parse(localStorage.getItem("alloperaSessions") || "[]");
  sessions.forEach((s, i) => {
    const div = document.createElement("div");
    div.classList.add("session");
    div.innerHTML = `
      <span class="session-header">${s.name}</span>
      <div class="session-buttons">
        <button onclick="openSession(${i})">Open</button>
        <button onclick="deleteSession(${i})">Delete</button>
      </div>
    `;
    container.appendChild(div);
  });
}

function openSession(i) {
  const sessions = JSON.parse(localStorage.getItem("alloperaSessions") || "[]");
  sessions[i].tabs.forEach(url => chrome.tabs.create({ url }));
}

function deleteSession(i) {
  let sessions = JSON.parse(localStorage.getItem("alloperaSessions") || "[]");
  sessions.splice(i, 1);
  localStorage.setItem("alloperaSessions", JSON.stringify(sessions));
  renderSessions();
}

// ========== DINOSAUR OF THE DAY (placeholder) ==========
const dinoContainer = document.getElementById("creature-info");
if (dinoContainer) {
  dinoContainer.innerHTML = "<p>Loading dinosaur...</p>";
  // Will add the species list + logic later once you send them 🦕
}

// ========== TWITCH STATS (placeholder) ==========
const twitchInfo = document.getElementById("twitch-info");
if (twitchInfo) {
  twitchInfo.innerHTML = "<p>Followers: Loading...</p><p>Status: Checking...</p>";
}
