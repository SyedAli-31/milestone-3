// TypeScript code
// Capture references to the form and content elements
var form = document.getElementById("resume-form");
var resumeContent = document.getElementById("resume-content");
// Handle form submission to dynamically populate the resume
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Capture user input from the form
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var linkedin = document.getElementById("linkedin").value;
    var education = document.getElementById("education").value;
    var workExperience = document.getElementById("work-experience-input").value;
    var skills = document.getElementById("skills-input").value;
    // Capture the left section data
    var profilePictureUrl = document.getElementById("profile-picture-input").value;
    var careerObjective = document.getElementById("career-objective-input").value;
    var certifications = document.getElementById("certifications-input").value;
    var languages = document.getElementById("languages-input").value;
    // Update the resume content dynamically
    resumeContent.innerHTML = "\n        <div class=\"left-section\">\n            <img id=\"profile-picture\" src=\"".concat(profilePictureUrl, "\" alt=\"Profile picture\" class=\"profile-picture\">\n            <div class=\"objective\">\n                <section>\n                    <h3 style=\"color: white;\">Professional Profile</h3>\n                    <p style=\"text-align: justify; hyphens: auto;\">").concat(careerObjective, "</p>\n                </section>\n                <section>\n                    <h3 style=\"color: white;\">Certifications</h3>\n                    <p><b>Certifications:</b> ").concat(certifications, "</p>\n                </section>\n                <section>\n                    <h3 style=\"color: white;\">Languages</h3>\n                    <ul>\n                        <li style=\"text-align: left;\">").concat(languages, "</li>\n                    </ul>\n                </section>\n            </div>\n        </div>\n\n        <div class=\"right-section\">\n            <h1>Dynamic Resume Builder</h1>\n            <section id=\"personal-info\">\n                <h3>Personal Information</h3>\n                <p><b>Name:</b> ").concat(name, "</p>\n                <p><b>Phone:</b> ").concat(phone, "</p>\n                <p><b>Address:</b> ").concat(address, "</p>\n                <p><b>Email:</b> <a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n                <p><b>LinkedIn:</b> <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></p>\n            </section>\n            <section class=\"education\">\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n            </section>\n            <section id=\"work-experience\">\n                <h3>Work Experience</h3>\n                <p>").concat(workExperience, "</p>\n            </section>\n            <section id=\"skills\">\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n            </section>\n        </div>\n    ");
});
// Function to download the resume as a PDF using html2pdf.js
function downloadPDF() {
    var element = document.getElementById("resume-content");
    // Select the download button and cast it to HTMLElement
    var downloadButton = document.querySelector("button[onclick='downloadPDF()']");
    // Hide the download button temporarily
    downloadButton.style.display = "none";
    // Generate the PDF
    window.html2pdf(element, {
        margin: 1,
        filename: 'Resume_Syed_Ali_Hussaini.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }).then(function () {
        // Show the download button again after PDF generation
        downloadButton.style.display = "block";
    });
}
