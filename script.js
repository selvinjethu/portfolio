const input = document.getElementById("command");
const output = document.getElementById("output");

/* ---------- PRINT FUNCTION ---------- */
function print(text = "") {
  const div = document.createElement("div");
  div.textContent = text;
  output.appendChild(div);
  window.scrollTo(0, document.body.scrollHeight);
}

/* ---------- MENU ---------- */
function showMenu() {
  print("");
  print("Select next option:");
  print("1 About | 2 Skills | 3 Experience | 4 Projects | 5 Contact | 6 Resume");
  print("");
}

/* ---------- RESUME DOWNLOAD ---------- */
function downloadResume() {
  const link = document.createElement("a");
  link.href = "Selvin_Raj_Resume.pdf";
  link.download = "Selvin_Raj_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* ---------- WELCOME ---------- */
print("╔══════════════════════════════════════╗");
print("   SELVIN RAJ — DEVOPS TERMINAL v2");
print("   Senior DevOps Engineer | Platform Engineering");
print("╚══════════════════════════════════════╝");
print("Type 'help' or choose a number.");
showMenu();

/* ---------- COMMAND DATA ---------- */
const commands = {

help: `
Available options:

1 - About Me
2 - Technical Skills
3 - Experience
4 - Key Projects
5 - Contact
6 - Download Resume

Other commands:
help  - Show menu
clear - Clear terminal
`,

"1": `
Selvin Raj P
Senior DevOps Engineer | Platform Engineering | Cloud Infrastructure

8+ years experience in:
- AWS cloud infrastructure
- Kubernetes / OpenShift platforms
- CI/CD automation
- GitOps & Infrastructure as Code
`,

"2": `
Cloud: AWS, Azure, GCP
Containers: Kubernetes, EKS, OpenShift, Docker
CI/CD: Jenkins, GitHub Actions, ArgoCD, Harness
IaC: Terraform, Helm, Ansible, Python
Observability: Prometheus, Grafana, CloudWatch, Splunk
Security: SonarQube, Veracode, IAM
`,

"3": `
Wipro (Technical Lead / Senior DevOps Engineer) — 2025-Present
Cotiviti — Senior DevOps Engineer
Capgemini — Consultant DevOps Engineer
Aggregate Intelligence — DevOps & Cloud Engineer
TNCA Club — System Administrator
`,

"4": `
- Kubernetes Platform Modernization (EKS migration)
- Enterprise CI/CD Automation Framework
- OpenShift Platform Engineering & Upgrades
`,

"5": `
Tamil Nadu, India
Email: selvinjethu@gmail.com
Role Focus: Platform Engineering | SRE | Cloud Infra
`,

"6": "Downloading resume...",

about: "Use option 1",
skills: "Use option 2",
experience: "Use option 3",
projects: "Use option 4",
contact: "Use option 5",
resume: "Downloading resume..."
};

/* ---------- INPUT HANDLER ---------- */
input.addEventListener("keydown", function (e) {

  if (e.key === "Enter") {

    const cmd = input.value.trim().toLowerCase();

    print("selvin@cloud-space:~$ " + cmd);

    if (cmd === "clear") {
      output.innerHTML = "";
      showMenu();
      input.value = "";
      return;
    }

    if (cmd === "6" || cmd === "resume") {
      print("Downloading resume...");
      downloadResume();
      showMenu();
      input.value = "";
      return;
    }

    if (commands[cmd]) {
      print(commands[cmd]);
      showMenu();
    } else {
      print("command not found (type help)");
      showMenu();
    }

    input.value = "";
  }
});

/* ---------- FOCUS INPUT ---------- */
window.addEventListener("click", () => input.focus());
