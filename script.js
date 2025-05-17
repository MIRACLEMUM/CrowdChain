connectWalletBtn.addEventListener('click', async () => {
  if (typeof window.ethereum === 'undefined') {
    alert('MetaMask is not installed. Please install it to connect your wallet.');
    return;
  }

  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const userAddress = await signer.getAddress();

    alert(`Wallet connected: ${userAddress}`);

    connectWalletBtn.textContent = 'Wallet Connected';
    connectWalletBtn.disabled = true;
  } catch (error) {
    console.error('Error connecting wallet:', error);  // Log full error details
    alert(`Error connecting to wallet:\n${error.message || error}`);
  }
});
