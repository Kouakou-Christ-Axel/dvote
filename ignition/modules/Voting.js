// deploy/01_deploy_voting.js
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const VotingModule = buildModule("VotingModule", (m) => {
  // Déclare que l'on souhaite déployer le contrat "Voting"
  const voting = m.contract("Voting");

  // On peut retourner des informations supplémentaires si besoin
  return { voting };
});

module.exports = VotingModule;
