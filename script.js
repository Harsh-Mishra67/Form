const formElements = [];

function addElement() {
  const name = document.getElementById('input-name').value;
  const type = document.getElementById('input-type').value;
  const required = document.getElementById('required').value;
  const label = document.getElementById('input-label').value;

  if (name && label) {
    formElements.push({ name, type, required, label });

    const table = document.getElementById('dynamic-table').getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = type;
    row.insertCell(2).textContent = required;
    row.insertCell(3).textContent = label;

    document.getElementById('input-name').value = '';
    document.getElementById('input-label').value = '';
  } else {
    alert('Please provide both name and label.');
  }
}

function generateFinalHTML() {
  let html = `<form>\n`;

  
  formElements.forEach(element => {
    let inputElement;
    if (element.type === 'text' || element.type === 'email' || element.type === 'number') {
      inputElement = `<input type="${element.type}" name="${element.name}" id="${element.name}" ${element.required === 'true' ? 'required' : ''}>`;
    } else if (element.type === 'radio') {
      inputElement = `<input type="radio" name="${element.name}" id="${element.name}" ${element.required === 'true' ? 'required' : ''}>`;
    } else if (element.type === 'checkbox') {
      inputElement = `<input type="checkbox" name="${element.name}" id="${element.name}" ${element.required === 'true' ? 'required' : ''}>`;
    } else if (element.type === 'dropdown') {
      inputElement = `<select name="${element.name}" id="${element.name}" ${element.required === 'true' ? 'required' : ''}><option value="">Select</option></select>`;
    } else if (element.type === 'file') {
      inputElement = `<input type="file" name="${element.name}" id="${element.name}" ${element.required === 'true' ? 'required' : ''}>`;
    }

    html += `  <label for="${element.name}">${element.label}</label>\n`;
    html += `  ${inputElement}\n`;
  });

  html += `</form>`;

  document.getElementById('generated-html').textContent = html;

  document.getElementById('download-btn').style.display = 'inline';
}

function downloadHTML() {
  const htmlContent = document.getElementById('generated-html').textContent;
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'generated_form.html';
  link.click();
}