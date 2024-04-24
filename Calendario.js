function createCalendar() {
    // Get the current date
    var currentDate = new Date();

    // Get the current month (0-11) and year
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    // Array of month names
    var monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    // Array of day names
    var dayNames = ["Do", "Sg", "Te", "Qa", "Qi", "Sx", "Sa"];

    // Get the first day of the month
    var firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    var startingDay = firstDayOfMonth.getDay(); // 0-6 (Sun-Sat)

    // Get the number of days in the month
    var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Create a table element
    var table = document.createElement("table");

    // Create the header row with day names
    var headerRow = table.insertRow();
    for (var i = 0; i < 7; i++) {
        var cell = document.createElement("th"); //headerRow.insertCell();
        cell.textContent = dayNames[i];
        //cell.style.backgroundColor = "lightgray";
        //cell.style.color = "blue";
		headerRow.appendChild(cell);
    }

    // Create the calendar days
    var row = table.insertRow();
    var dayCount = 1;
    for (var i = 0; i < 7; i++) 
	{
        var cell = row.insertCell();
        if (i < startingDay) {
            // Empty cells before the first day of the month
            cell.textContent = "";
        } else {
            // Fill in days of the month
            cell.textContent = dayCount;
            dayCount++;
        }
    }
	
    // Create additional rows as needed
    for (var i = dayCount; i <= daysInMonth; i++) {
        if (row.cells.length >= 7) {
            row = table.insertRow();
        }
        var cell = row.insertCell();
        cell.textContent = i;
        if (currentDate.getDate() === i) 
		{
            // Highlight the current day
            cell.style.backgroundColor = "lightgreen";
        } else {
            //cell.style.backgroundColor = "white";
            //cell.style.color = "black";
        }
    }

    // Get the calendar div
    var calendarDiv = document.getElementById("Calendario");

    // Append the table to the calendar div
	calendarDiv.innerHTML = monthNames[currentMonth]+"<br>";
    calendarDiv.appendChild(table);
}

// Call the function to create the calendar
createCalendar();
