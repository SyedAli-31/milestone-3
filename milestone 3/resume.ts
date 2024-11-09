// TypeScript code

// Capture references to the form and content elements
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeContent = document.getElementById("resume-content") as HTMLDivElement;

// Handle form submission to dynamically populate the resume
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Capture user input from the form
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById("work-experience-input") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills-input") as HTMLTextAreaElement).value;

    // Capture the left section data
    const profilePictureUrl = (document.getElementById("profile-picture-input") as HTMLInputElement).value;
    const careerObjective = (document.getElementById("career-objective-input") as HTMLTextAreaElement).value;
    const certifications = (document.getElementById("certifications-input") as HTMLTextAreaElement).value;
    const languages = (document.getElementById("languages-input") as HTMLTextAreaElement).value;

    // Update the resume content dynamically
    resumeContent.innerHTML = `
        <div class="left-section">
            <img id="profile-picture" src="${profilePictureUrl}" alt="Profile picture" class="profile-picture">
            <div class="objective">
                <section>
                    <h3 style="color: white;">Professional Profile</h3>
                    <p style="text-align: justify; hyphens: auto;">${careerObjective}</p>
                </section>
                <section>
                    <h3 style="color: white;">Certifications</h3>
                    <p><b>Certifications:</b> ${certifications}</p>
                </section>
                <section>
                    <h3 style="color: white;">Languages</h3>
                    <ul>
                        <li style="text-align: left;">${languages}</li>
                    </ul>
                </section>
            </div>
        </div>

        <div class="right-section">
            <h1>Dynamic Resume Builder</h1>
            <section id="personal-info">
                <h3>Personal Information</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Phone:</b> ${phone}</p>
                <p><b>Address:</b> ${address}</p>
                <p><b>Email:</b> <a href="mailto:${email}">${email}</a></p>
                <p><b>LinkedIn:</b> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
            </section>
            <section class="education">
                <h3>Education</h3>
                <p>${education}</p>
            </section>
            <section id="work-experience">
                <h3>Work Experience</h3>
                <p>${workExperience}</p>
            </section>
            <section id="skills">
                <h3>Skills</h3>
                <p>${skills}</p>
            </section>
        </div>
    `;
});

// Function to download the resume as a PDF using html2pdf.js
function downloadPDF() {
    const element = document.getElementById("resume-content");

    // Select the download button and cast it to HTMLElement
    const downloadButton = document.querySelector("button[onclick='downloadPDF()']") as HTMLElement;

    // Hide the download button temporarily
    downloadButton.style.display = "none";

    // Generate the PDF
    (window as any).html2pdf(element, {
        margin: 1,
        filename: 'Resume_Syed_Ali_Hussaini.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }).then(() => {
        // Show the download button again after PDF generation
        downloadButton.style.display = "block";
    });
}
