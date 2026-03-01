// Resume Data
const resumeData = {
    swe: {
        title: "Software Engineering Focus",
        summary: "Systems-minded software engineer with experience building web interfaces, backend routing with Flask, and maintaining distributed technical environments.",
        highlights: [
            "Built a web-based control interface + dashboard for autonomous instrument systems (Flask + JS/HTML/CSS).",
            "Maintained multi-site hardware/software environments with a reliability and debugging focus.",
            "Strong CS fundamentals: OOP, debugging workflows, and structured problem-solving."
        ],
        skills: ["Java", "C", "C#", "JavaScript", "Python", "Flask", "Git", "Linux", "HTML/CSS"],
        pdfHref: "../extras/Web SWE Resume - Elizabeth Perez 02282026.pdf",
        pdfName: "ElizabethPerez_SWE.pdf"
    },
    gamedev: {
        title: "Game Programming Focus",
        summary: "Unity-focused developer building modular gameplay systems with state-based logic, physics interactions, and component-style architecture.",
        highlights: [
            "Developed 2D/3D Unity projects using C# and object-oriented design.",
            "Implemented state machines/controllers and event-driven gameplay systems.",
            "Designed modular components to separate game logic, state handling, and input systems."
        ],
        skills: ["Unity", "C#", "Gameplay Systems", "State Machines", "OOP", "Git", "Linux"],
        pdfHref: "../extras/Web GD Resume - Elizabeth Perez 02282026.pdf",
        pdfName: "ElizabethPerez_GameDev.pdf"
    }
};

// DOM References
const sweTab = document.getElementById("swe-tab");
const gamedevTab = document.getElementById("gamedev-tab");
const titleEl = document.getElementById("resumeTitle");
const summaryEl = document.getElementById("resumeSummary");
const highlightsEl = document.getElementById("resumeHighlights");
const skillsEl = document.getElementById("resumeSkills");
const linkEl = document.getElementById("resumeLink");

// Render Function
function renderResume(type) {
  const data = resumeData[type];

  titleEl.textContent = data.title;
  summaryEl.textContent = data.summary;

  // Highlights
  highlightsEl.innerHTML = "";
  data.highlights.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    highlightsEl.appendChild(li);
  });

  // Skills
  skillsEl.innerHTML = "";
  data.skills.forEach(skill => {
    const span = document.createElement("span");
    span.textContent = skill;
    span.className = "resume-skill";
    skillsEl.appendChild(span);
    skillsEl.appendChild(document.createTextNode(" "));
  });

  // PDF Link
  linkEl.href = data.pdfHref;
}

// Tab Switching
sweTab.addEventListener("click", function (e) {
  e.preventDefault();

  sweTab.classList.add("is-active");
  gamedevTab.classList.remove("is-active");

  renderResume("swe");
});
gamedevTab.addEventListener("click", function (e) {
  e.preventDefault();

  gamedevTab.classList.add("is-active");
  sweTab.classList.remove("is-active");

  renderResume("gamedev");
});

// Initial Load
renderResume("swe");