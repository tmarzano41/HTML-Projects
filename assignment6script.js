//part 1
const button = document.getElementById('showTable');
const tableContainer = document.getElementById('tableContainer');
const data = [
    { Name: 'John', Age: 28, City: 'New York' },
    { Name: 'Jane', Age: 24, City: 'Chicago' },
    { Name: 'Doe', Age: 32, City: 'Los Angeles' }
];
button.addEventListener('click', () => {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');
    const headers = ['Name', 'Age', 'City'];

    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        th.style.backgroundColor = '#f2f2f2';
        th.style.color = '#333';
        th.style.padding = '8px';
        th.style.fontWeight = 'bold';
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.style.width = '80%';
    table.style.borderCollapse = 'collapse';
    data.forEach(person => {
        const row = document.createElement('tr');
        Object.values(person).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    const allCells = table.querySelectorAll('th, td');
    allCells.forEach(cell => {
        cell.style.border = '1px solid #ddd';
        cell.style.padding = '8px';
        cell.style.textAlign = 'center';
    });
    tableContainer.appendChild(table);
})

//part 2
const inputBox = document.getElementById('inputBox');
const reverseButton = document.getElementById('reverseButton');
const result = document.getElementById('result');

reverseButton.addEventListener('click', () => {
    const inputValue = inputBox.value;
    const reversedValue = reverse(inputValue);
    result.textContent = `Reversed value: ${reversedValue}`;
});
function reverse(value) {
    if (typeof value === 'number') {
        // Convert number to string, reverse, and convert back to number
        return Number(value.toString().split('').reverse().join(''));
    } else {
        // Reverse string directly
        return value.split('').reverse().join('');
    }
}