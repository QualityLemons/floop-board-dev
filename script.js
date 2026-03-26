// 1. Character Counter Logic
document.querySelectorAll('textarea').forEach(textarea => {
    const counter = textarea.parentElement.querySelector('.counter');
    
    textarea.addEventListener('input', () => {
        const length = textarea.value.length;
        counter.textContent = `${length} / 210`;
        
        // Visual feedback if they hit the limit
        if (length >= 210) {
            counter.classList.add('text-red-500', 'font-bold');
        } else {
            counter.classList.remove('text-red-500', 'font-bold');
        }
    });
});

// 2. Form Submission & RTF Generation
document.getElementById('rtfForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Grab all values
    const projectData = {
        id: Date.now(),
        date: new Date().toLocaleDateString('en-US', { 
            month: 'short', day: 'numeric', year: 'numeric' 
        }),
        q1: document.getElementById('q1').value,
        q2: document.getElementById('q2').value,
        q3: document.getElementById('q3').value,
        q4: document.getElementById('q4').value,
        q5: document.getElementById('q5').value,
        q6: document.getElementById('q6').value
    };

    // Validation: Ensure at least the first question is answered
    if (!projectData.q1) {
        alert("Please at least describe what you want to accomplish!");
        return;
    }

    // --- PART A: Save to LocalStorage for "Projectourist" Gallery ---
    const existingProjects = JSON.parse(localStorage.getItem('projectourist_data') || '[]');
    existingProjects.unshift(projectData); // Put newest at the top
    localStorage.setItem('projectourist_data', JSON.stringify(existingProjects));

    // --- PART B: Generate and Download RTF ---
    // RTF requires double backslashes for control codes in JS strings
    const rtfHeader = "{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0 Arial;}}\\f0\\fs28 ";
    const rtfContent = `
\\b PROJECTOR VISION REPORT \\b0 \\line
Created: ${projectData.date} \\line \\line

\\b 1. Goal: \\b0 \\line ${projectData.q1} \\line \\line
\\b 2. The Difference: \\b0 \\line ${projectData.q2} \\line \\line
\\b 3. The End-State: \\b0 \\line ${projectData.q3} \\line \\line
\\b 4. Requirements: \\b0 \\line ${projectData.q4} \\line \\line
\\b 5. Best Result: \\b0 \\line ${projectData.q5} \\line \\line
\\b 6. Cost of Inaction: \\b0 \\line ${projectData.q6}
    `.replace(/\n/g, ' '); // Clean up JS template literal newlines

    const fullRTF = rtfHeader + rtfContent + "}";

    // Create the blob and download link
    const blob = new Blob([fullRTF], { type: 'application/rtf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.href = url;
    link.download = `Project-${projectData.q1.substring(0, 15).replace(/\s+/g, '_')}.rtf`;
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Redirect to the gallery page after a short delay
    setTimeout(() => {
        if(confirm("Project saved! View your Projectourist gallery?")) {
            window.location.href = 'projectourist.html';
        }
    }, 500);
});