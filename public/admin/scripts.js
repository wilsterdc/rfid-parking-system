// 'Select All' checkbox is clicked
document.getElementById("selectAll").addEventListener("change", function() {
  const checkboxes = document.querySelectorAll(".rowCheckbox");
  checkboxes.forEach(checkbox => {
    checkbox.checked = this.checked;
  });
});

// Changes for individual checkbox
document.querySelectorAll(".rowCheckbox").forEach(checkbox => {
  checkbox.addEventListener("change", function() {
    // No need to toggle delete button visibility here anymore
  });
});

// Toggle for Parking Logs and Delete Logs tables
document.getElementById("parkingLogsBtn").addEventListener("click", function() {
  document.getElementById("parkingLogsTable").classList.remove("hidden");
  document.getElementById("deleteLogsTable").classList.add("hidden");

  this.classList.add('bg-dark'); 
  document.getElementById("deleteLogsBtn").classList.remove('bg-dark');
});

document.getElementById("deleteLogsBtn").addEventListener("click", function() {
  document.getElementById("deleteLogsTable").classList.remove("hidden");
  document.getElementById("parkingLogsTable").classList.add("hidden");
  
  this.classList.add('bg-dark'); 
  document.getElementById("parkingLogsBtn").classList.remove('bg-dark');
});

// Trash icon button (always visible now)
document.getElementById("deleteButton").classList.remove("hidden");

// Show delete confirmation modal when trash button is clicked
document.getElementById("deleteButton").addEventListener("click", function() {
  const selectedCheckboxes = document.querySelectorAll(".rowCheckbox:checked");
  
  if (selectedCheckboxes.length > 0) {
    document.getElementById("deleteModal").classList.remove("hidden");
  }
});

// Close modal when cancel is clicked
document.getElementById("cancelDeleteBtn").addEventListener("click", function() {
  document.getElementById("deleteModal").classList.add("hidden");
});

// Confirm delete action
document.getElementById("confirmDeleteBtn").addEventListener("click", function() {
  const selectedCheckboxes = document.querySelectorAll(".rowCheckbox:checked");
  selectedCheckboxes.forEach(checkbox => {
    checkbox.closest('tr').classList.add('text-red-500');
    checkbox.closest('td').nextElementSibling.innerText = 'Deleted';
    checkbox.closest('tr').remove();
  });
  document.getElementById("deleteModal").classList.add("hidden");
});

// Recheck button visibility whenever switching between logs
document.getElementById("parkingLogsBtn").addEventListener("click", function() {});
document.getElementById("deleteLogsBtn").addEventListener("click", function() {});

// Set the default active tab to Parking Logs
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("parkingLogsBtn").classList.add('bg-dark');
});
