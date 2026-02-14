const input = document.getElementById("command");
const output = document.getElementById("output");

function print(text="") {
  const div = document.createElement("div");
  div.textContent = text;
  output.appendChild(div);
  window.scrollTo(0, document.body.scrollHeight);
}

print("Architect DevOps Terminal");
print("Type 'help' to start.");
print("");

const commands = {

help: `
Select an option:

1 - About Me
2 - Skills
3 - Experience
4 - Projects
5 - Contact
clear - Clear terminal
`,

1: "Selvin Raj P | Senior DevOps Engineer | Platform Engineering",

2: "AWS | EKS | OpenShift | Terraform | Helm | Jenkins | GitHub Actions | ArgoCD | Python",

3: "Wipro | Cotiviti | Capgemini | Aggregate Intelligence | TNCA",

4: `
- Kubernetes Platform Modernization
- Enterprise CI/CD Framework
- OpenShift Platform Engineering
`,

5: "Email: selvinjethu@gmail.com | Tamil Nadu, India",

about: "Selvin Raj P | Senior DevOps Engineer | Platform Engineering",
skills: "AWS | EKS | OpenShift | Terraform | Helm | Jenkins | GitHub Actions | ArgoCD | Python",
experience: "Wipro | Cotiviti | Capgemini | Aggregate Intelligence | TNCA",
projects: `
- Kubernetes Platform Modernization
- Enterprise CI/CD Framework
- OpenShift Platform Engineering
`,
contact: "Email: selvinjethu@gmail.com | Tamil Nadu, India"
};


input.addEventListener("keydown", function(e){
  if (e.key !== "Enter") return;
  const cmd = input.value.trim();
  print("selvin@architect:/home/devops$ " + cmd);

  if (cmd === "clear") {
    output.innerHTML = "";
    input.value = "";
    return;
  }

  print(commands[cmd] || "command not found");
  input.value = "";
});

window.addEventListener("click", () => input.focus());
