const input = document.getElementById("command");
const output = document.getElementById("output");

/* ---------- PRINT ---------- */
function print(text = "") {
  const div = document.createElement("div");
  div.textContent = text;
  output.appendChild(div);
  window.scrollTo(0, document.body.scrollHeight);
}

/* ---------- MENU ---------- */
function showMenu() {
  print("");
  print("Select option: 1 2 3 4 5 6");
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
print("");
print("────────────────────────────────────────");
print(" SELVIN RAJ • DEVOPS TERMINAL PORTFOLIO ");
print(" Senior DevOps Engineer | Platform Engineering");
print("────────────────────────────────────────");
print("");
print("Type 'help' or choose a number:");
showMenu();

/* ---------- COMMAND DATA ---------- */
const commands = {

help: `
Available options:

1 - About Me
2 - Skills
3 - Experience
4 - Projects
5 - Contact
6 - Download Resume

clear - Clear terminal
`,

"1": `
Selvin Raj P
Senior DevOps Engineer | Platform Engineering

8+ years in:
- AWS Cloud Infrastructure
- Kubernetes & OpenShift
- CI/CD & GitOps
- Terraform & Automation
`,

"2": `
Cloud: AWS, Azure, GCP
Containers: Kubernetes, EKS, OpenShift, Docker
CI/CD: Jenkins, GitHub Actions, ArgoCD
IaC: Terraform, Helm, Ansible, Python
Monitoring: Prometheus, Grafana, CloudWatch
`,

"3": `
Wipro — Technical Lead / Senior DevOps Engineer
Cotiviti — Senior DevOps Engineer
Capgemini — Consultant DevOps Engineer
Aggregate Intelligence — DevOps Engineer
TNCA Club — System Administrator
`,

"4": `
- Kubernetes Platform Modernization
- Enterprise CI/CD Automation Framework
- OpenShift Platform Engineering
`,

"5": `
Tamil Nadu, India
Email: selvinjethu@gmail.com
Senior DevOps | Platform Engineering | SRE
`,

"6": "Downloading resume..."
};

/* ---------- INPUT HANDLER ---------- */
input.addEventListener("keydown", function(e){

  if(e.key === "Enter"){

    const cmd = input.value.trim().toLowerCase();

    print("selvin@cloud:~$ " + cmd);

    if(cmd === "clear"){
      output.innerHTML = "";
      showMenu();
      input.value = "";
      return;
    }

    if(cmd === "6" || cmd === "resume"){
      print("Downloading resume...");
      downloadResume();
      showMenu();
      input.value = "";
      return;
    }

    if(commands[cmd]){
      print(commands[cmd]);
      showMenu();
    } else {
      print("command not found (type help)");
      showMenu();
    }

    input.value = "";
  }
});

/* ---------- FOCUS ---------- */
window.addEventListener("click", () => input.focus());
