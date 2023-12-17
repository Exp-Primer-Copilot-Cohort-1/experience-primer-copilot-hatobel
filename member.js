function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberContent = document.getElementById("member-content");
    var skillsContent = document.getElementById("skills-content");
    var projectsContent = document.getElementById("projects-content");
    var contactContent = document.getElementById("contact-content");
    var aboutContent = document.getElementById("about-content");
    member.style.color = "#fff";
    skills.style.color = "#000";
    projects.style.color = "#000";
    contact.style.color = "#000";
    about.style.color = "#000";
    memberContent.style.display = "block";
    skillsContent.style.display = "none";
    projectsContent.style.display = "none";
    contactContent.style.display = "none";
    aboutContent.style.display = "none";
}