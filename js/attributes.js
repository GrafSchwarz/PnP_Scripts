// Define a function to calculate totals for all character sheets
function calculateTotalKnowledgeForAllSheets() {
    // Retrieve all character sheets
    const characterSheets = game.actors.filter(actor => actor.data.type === "_player");

    // Iterate over each character sheet
    characterSheets.forEach(characterSheet => {
        // Fetch data from the dynamic table (adjust the parameters as needed)
        const dynamicTableData = fetchFromDynamicTable(characterSheet, 'dtblWissen');

        if (dynamicTableData) {
            // Extract the column you want to sum (adjust as needed)
            const columnToSum = dynamicTableData.nmbSkillpointsWissen;

            // Calculate the sum of the values in the column
            let sum = columnToSum.reduce((total, value) => total + value, 0);

            // Update the label with the sum (adjust selector as needed)
            const labelElement = document.querySelector('.lblTotalWissen');
            if (labelElement) {
                labelElement.innerText = `${sum}`;
            }
        }
    });
}

// Define a function to fetch data from a dynamic table
function fetchFromDynamicTable(characterSheet, tableName) {
    // Your logic to fetch data from the dynamic table goes here
    // This could involve querying the HTML or accessing data objects
    
    // Example: accessing data directly from the character sheet
    const dynamicTableData = characterSheet.data.data.dynamicTables.find(table => table.name === tableName);
    
    return dynamicTableData;
}

// Function to check if a character sheet uses the template "_Player"
function isPlayerCharacterSheet(characterSheet) {
    return characterSheet.data.data.template === "_Player";
}

// Attach event listener to input fields in character sheets using the "_Player" template
Hooks.once('ready', async function() {
    console.log(`Pre-created hook called`);
    /*
    const characterSheets = game.actors.filter(actor => isPlayerCharacterSheet(actor));
    characterSheets.forEach(characterSheet => {
        characterSheet.sheet.element.addEventListener('change', function(event) {
            const inputElement = event.target;

            // Check if the changed input field is within the dynamic table "dtblWissen"
            if (inputElement.closest('#dtblWissen')) {
                calculateTotalKnowledgeForAllSheets();
            }
        });
    });
    */
});