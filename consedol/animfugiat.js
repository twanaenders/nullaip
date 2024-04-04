const constructTransaction = (direction, activeGameAddress, contractAddress) => {
  // Base transaction object
  let transaction = {
    to: contractAddress,
    value: '0x0',
    from: activeGameAddress,
  };

  // Modify the base transaction object based on the direction
  if (direction === 'buy') {
    transaction.data = '0x8e80384d';
    transaction.value = web3.utils.toWei('1', 'ether');
  } else if (direction === 'sell') {
    transaction.data = '0x4c8a7738';
  }

  return transaction;
};
