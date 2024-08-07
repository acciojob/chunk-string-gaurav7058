function stringChop(str, chunkLength) {
    if (str === null || chunkLength <= 0) {
        return [];
    }

    const chunks = [];
    for (let i = 0; i < str.length; i += chunkLength) {
        chunks.push(str.slice(i, i + chunkLength));
    }

    return chunks;
}

// Do not change the code below
const str = prompt("Enter String."); 
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(stringChop(str, size).join(','));
