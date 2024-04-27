async function sendTransaction() {
    try {
        // Replace with your actual private key and contract addresses
        const PRIVATE_KEY = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
        //const FROM_ADDRESS = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'; // Account 1
        const TO_ADDRESS = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'; // Account 2

        // Initialize ethers.js
        const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545'); // Replace with your RPC URL
        const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

        // Create a transaction
        const tx = {
            to: TO_ADDRESS,
            value: ethers.utils.parseEther('1'), // Amount in Ether (adjust as needed)
        };

        // Sign and send the transaction
        const response = await wallet.sendTransaction(tx);
        console.log('Transaction hash:', response.hash);
    } catch (error) {
        console.error('Error sending transaction:', error.message);
    }
}
