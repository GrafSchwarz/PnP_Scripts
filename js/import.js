Hooks.once('ready', async function() {
    // Load the custom JavaScript file
    await $.getScript('characterSheets/attributes.js');
    
});