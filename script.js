document.getElementById('dynamicForm').addEventListener('submit', function(event) {
  event.preventDefault();  


  const name = document.getElementById('name').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;
  const highestQualification = document.getElementById('highestQualification').value;
  const resume = document.getElementById('resume').files[0].name;
  const shareForm = document.getElementById('shareForm').checked ? 'Yes' : 'No';

  
  const newRow = document.createElement('tr');

  
  newRow.innerHTML = `
      <td>${name}</td>
      <td>${gender}</td>
      <td>${email}</td>
      <td>${age}</td>
      <td>${highestQualification}</td>
      <td>${resume}</td>
  `;

  
  document.querySelector('#dynamicTable tbody').appendChild(newRow);

  
  document.getElementById('dynamicForm').reset();
});
