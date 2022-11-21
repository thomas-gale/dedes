async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying DesineToken contract with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const Token = await ethers.getContractFactory("DesineToken");
  const token = await Token.deploy();
  console.log("DesineToken address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
