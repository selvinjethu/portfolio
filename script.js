const input = document.getElementById("command");
const output = document.getElementById("output");

/* ---------- PRINT FUNCTION ---------- */
function print(text = "") {
  const div = document.createElement("div");
  div.textContent = text;
  output.appendChild(div);
  window.scrollTo(0, document.body.scrollHeight);
}

/* ---------- DOWNLOAD FUNCTION ---------- */
function downloadResume() {
  const link = document.createElement("a");
  link.href = "Selvin_Raj_Resume.pdf";
  link.download = "Selvin_Raj_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* ---------- WELCOME ---------- */
print("Architect DevOps Terminal");
print("Welcome Selvin Raj P Portfolio");
print("Type 'help' or select number:");
print("1 About | 2 Skills | 3 Experience | 4 Projects | 5 Contact | 6 Resume");
print("");

/* ---------- COMMANDS ---------- */
const commands = {

  help: `
Available options:

1 - About Me
2 - Skills
3 - Experience
4 - Projects
5 - Contact
6 - Download Resume

Other commands:
help  - Show menu
clear - Clear terminal
`,

  "1": "Selvin Raj P | Senior DevOps Engineer | Platform Engineering",

  "2": "AWS | EKS | OpenShift | Terraform | Helm | Jenkins | GitHub Actions | ArgoCD | Python",

  "3": "Wipro | Cotiviti | Capgemini | Aggregate Intelligence | TNCA",

  "4": `
- Kubernetes Platform Modernization
- Enterprise CI/CD Automation Framework
- OpenShift Platform Engineering
`,

  "5": "Email: selvinjethu@gmail.com | Tamil Nadu, India",

  "6": "Downloading resume...",

  /* text commands */
  about: "Selvin Raj P | Senior DevOps Engineer | Platform Engineering",
  skills: "AWS | EKS | OpenShift | Terraform | Helm | Jenkins | GitHub Actions | ArgoCD | Python",
  experience: "Wipro | Cotiviti | Capgemini | Aggregate Intelligence | TNCA",
  projects: `
- Kubernetes Platform Modernization
- Enterprise CI/CD Automation Framework
- OpenShift Platform Engineering
`,
  contact: "Email: selvinjethu@gmail.com | Tamil Nadu, India",
  resume: "Downloading resume..."
};

/* ---------- INPUT HANDLER ---------- */
input.addEventListener("keydown", function (e) {

  if (e.key === "Enter") {

    const cmd = input.value.trim().toLowerCase();

    print("selvin@architect:/home/devops$ " + cmd);

    if (cmd === "clear") {
      output.innerHTML = "";
      input.value = "";
      return;
    }

    if (cmd === "6" || cmd === "resume") {
      print("Downloading resume...");
      downloadResume();
      input.value = "";
      return;
    }

    if (commands[cmd]) {
      print(commands[cmd]);
    } else {
      print("command not found (type 'help')");
    }

    input.value = "";
  }
});

/* keep focus */
window.addEventListener("click", () => input.focus());
