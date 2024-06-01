/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFTs
let nftCollection = [];

// Function to mint an NFT
function mintNFT(name, description, creator) {
    // Create an NFT object
    const nft = {
        name: name,
        description: description,
        creator: creator,
        // Additional metadata can be added here
    };

    // Store the NFT object in the collection
    nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`  Name: ${nft.name}`);
        console.log(`  Description: ${nft.description}`);
        console.log(`  Creator: ${nft.creator}`);
        console.log(''); // For better readability
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// Mint some Indian Songs and albums NFTs with detailed metadata
mintNFT("Album: 'Shershaah'", "The soundtrack album of the Bollywood movie Shershaah", "Various Artists");
mintNFT("Track: 'Jai Ho'", "The famous song from the movie Slumdog Millionaire", "A. R. Rahman");
mintNFT("Album: 'Kabir Singh'", "The soundtrack album of the Bollywood movie Kabir Singh", "Various Artists");
mintNFT("Track: 'Tum Hi Ho'", "The popular song from the movie Aashiqui 2", "Arijit Singh");
mintNFT("Album: 'Dil Se'", "The soundtrack album of the Bollywood movie Dil Se", "A. R. Rahman");
mintNFT("Track: 'Chaiyya Chaiyya'", "The famous song from the movie Dil Se", "Sukhwinder Singh and Sapna Awasthi");
mintNFT("Album: 'Lagaan'", "The soundtrack album of the Bollywood movie Lagaan", "A. R. Rahman");

// List all NFTs
listNFTs();

// Print the total supply of NFTs
console.log(`Total supply of NFTs: ${getTotalSupply()}`);
