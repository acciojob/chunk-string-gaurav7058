function stringChop(str, size) {
  // your code here
	if (str === null) {
        return [];
    }

    // Initialize an empty array to store the chunks
    let chunks = [];

    // Loop through the string and extract chunks of the given length
    for (let i = 0; i < str.length; i += length) {
        chunks.push(str.slice(i, i + length));
    }

    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
