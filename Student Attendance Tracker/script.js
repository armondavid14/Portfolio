const studentInput = document.getElementById('studentName');
const addStudentBtn = document.getElementById('addStudentBtn');
const attendanceList = document.getElementById('attendanceList');

// Add student to the table
addStudentBtn.addEventListener('click', () => {
  const name = studentInput.value.trim();
  if (!name) {
    alert('Please enter a student name.');
    return;
  }

  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = name;

  const statusCell = document.createElement('td');
  const presentBtn = document.createElement('button');
  presentBtn.textContent = 'Present';
  presentBtn.className = 'status-btn present';
  const absentBtn = document.createElement('button');
  absentBtn.textContent = 'Absent';
  absentBtn.className = 'status-btn absent';

  presentBtn.onclick = () => {
    statusCell.textContent = 'Present';
    statusCell.style.color = 'green';
  };

  absentBtn.onclick = () => {
    statusCell.textContent = 'Absent';
    statusCell.style.color = 'red';
  };

  statusCell.appendChild(presentBtn);
  statusCell.appendChild(absentBtn);

  const actionCell = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => row.remove();
  actionCell.appendChild(deleteBtn);

  row.appendChild(nameCell);
  row.appendChild(statusCell);
  row.appendChild(actionCell);

  attendanceList.appendChild(row);

  studentInput.value = '';
});
// Export to CSV
document.getElementById('exportBtn').addEventListener('click', () => {
  let csvContent = 'Name,Status\n'; // CSV header

  const rows = attendanceList.querySelectorAll('tr');

  rows.forEach(row => {
    const name = row.children[0]?.textContent;
    const status = row.children[1]?.textContent;
    if (name && status && (status === 'Present' || status === 'Absent')) {
      csvContent += `"${name}","${status}"\n`;
    }
  });

  // Download logic
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'attendance_report.csv');
  link.click();
});

// Add local storage
// let store = localStorage.getItem('name');
localStorage.setItem("Student", );



