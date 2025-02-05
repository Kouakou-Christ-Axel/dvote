// scripts/deploy_voting.js

// On importe Hardhat Runtime Environment (HRE) qui nous donne accès à ethers, aux signers, etc.
async function main() {
  // Récupère la liste des comptes disponibles dans Hardhat (ici, le premier sera le deployer)
  const [deployer] = await ethers.getSigners();
  console.log("Déploiement du contrat avec le compte :", deployer.address);
  
  // Optionnel : Afficher le solde du deployer pour s'assurer qu'il y a assez de fonds
  // const balance = await deployer.getBalance();
  // console.log("Solde du compte :", balance.toString());

  // Récupère le factory du contrat Voting (le compilateur a généré les données correspondantes)
  const Voting = await ethers.getContractFactory("Voting");

  // Déploie le contrat ; ici, notre contrat n'a pas d'argument dans le constructeur
  const voting = await Voting.deploy();

  // Attend que le contrat soit effectivement déployé sur la blockchain
  // await voting.deployed();

  // Affiche l'adresse à laquelle le contrat est déployé
  console.log("Contrat Voting déployé à l'adresse :", voting.target);
}

// La gestion d'erreur classique pour un script asynchrone
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
