document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("tripForm");
    const gearSelectionDiv = document.getElementById("gearSelection");
    const gearOptionsDiv = document.getElementById("gearOptions");
    const resultDiv = document.getElementById("result");
    const output = document.getElementById("output");

    const destinations = {
        T: { name: "National Parks in Wyoming", baseCost: 1054, gear: [
                { name: "Hiking shoes", cost: 75 },
                { name: "Backpack", cost: 40 }
            ] },
        S: { name: "Skiing in Colorado", baseCost: 1105, gear: [
                { name: "Ski jacket", cost: 325 },
                { name: "Pants", cost: 150 }
            ] }
    };

    form.addEventListener("change", (e) => {
        const destination = form.elements["destination"].value;
        if (destination && destinations[destination]) {
            gearSelectionDiv.style.display = "block";
            gearOptionsDiv.innerHTML = ""; // Clear previous gear options

            destinations[destination].gear.forEach(item => {
                // Create label and checkbox dynamically
                const label = document.createElement("label");
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = "gear";
                checkbox.value = item.cost;

                // Add text to the label
                label.appendChild(checkbox);
                label.appendChild(document.createTextNode(` ${item.name} ($${item.cost.toFixed(2)})`));

                // Append label to the gear options div
                gearOptionsDiv.appendChild(label);
                gearOptionsDiv.appendChild(document.createElement("br"));
            });
        }
    });
    gearOptionsDiv.addEventListener("change", (e) => {
        if (e.target.type === "checkbox") {
            const isChecked = e.target.checked;
            const itemName = e.target.nextSibling.textContent.trim();
            const itemCost = e.target.value;

            console.log(`Selected: ${itemName}`);
            console.log(`Cost: $${itemCost}`);
            console.log(`Checked: ${isChecked}`);
        }
    });
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const destination = form.elements["destination"].value;
    const budget = parseFloat(form.elements["budget"].value);
    const selectedGear = Array.from(form.elements["gear"])
        .filter(input => input.checked)
        .map(input => parseFloat(input.value));

    const totalGearCost = selectedGear.reduce((sum, cost) => sum + cost, 0);
    const { baseCost, name } = destinations[destination];
    const totalCost = baseCost + totalGearCost;

    resultDiv.style.display = "block";
    if (totalCost <= budget) {
        output.innerHTML = `
            <p>Your trip to <strong>${name}</strong> is within budget!</p>
            <p><strong>Breakdown:</strong></p>
            <ul>
                <li>Airfare and Hotel (4 nights): $${baseCost.toFixed(2)}</li>
                <li>Gear: $${totalGearCost.toFixed(2)}</li>
                <li><strong>Total Cost:</strong> $${totalCost.toFixed(2)}</li>
            </ul>
            <p>Budget: $${budget.toFixed(2)}</p>
        `;
    } else {
        output.innerHTML = `
            <p>Your trip to <strong>${name}</strong> is over budget!</p>
            <p><strong>Breakdown:</strong></p>
            <ul>
                <li>Airfare and Hotel: $${baseCost.toFixed(2)}</li>
                <li>Gear: $${totalGearCost.toFixed(2)}</li>
                <li><strong>Total Cost:</strong> $${totalCost.toFixed(2)}</li>
            </ul>
            <p>Budget: $${budget.toFixed(2)}</p>
        `;
    }
});})