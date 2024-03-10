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