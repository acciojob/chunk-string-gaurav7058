function stringChop(str, chunkLength) {
    if (str === null || chunkLength <= 0) {
        return [];
    }

    // Initialize an empty array to hold the chunks
    const chunks = [];

    // Loop through the string and create chunks
    for (let i = 0; i < str.length; i += chunkLength) {
        // Slice the string from the current index to the current index + chunk length
        chunks.push(str.slice(i, i + chunkLength));
    }

    return chunks;
}

// Do not change the code below
const str = prompt("Enter String."); 
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(JSON.stringify(stringChop(str, size)));
