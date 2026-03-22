document.getElementById('rtfForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Define the titles and get values
  const data = [
    { q: "What do you want to accomplish?", a: document.getElementById('q1').value },
    { q: "What's the biggest difference this will make?", a: document.getElementById('q2').value },
    { q: "What does the completed project look like?", a: document.getElementById('q3').value },
    { q: "What has to be true when this project is finished?", a: document.getElementById('q4').value },
    { q: "What is the best result if you do take action?", a: document.getElementById('q5').value },
    { q: "What is the worst result if you don't take action?", a: document.getElementById('q6').value }
  ];

  // Build RTF content: \b for bold, \line for new lines
  let rtfContent = "{\\rtf1\\ansi\\deff0\n";
  data.forEach(item => {
    rtfContent += `\\b ${item.q}\\b0\\line ${item.a}\\line\\line\n`;
  });
  rtfContent += "}";

  // Create the download
  const blob = new Blob([rtfContent], { type: 'application/rtf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'project_plan.rtf';
  link.click();
  
  // Clean up
  URL.revokeObjectURL(url);
});