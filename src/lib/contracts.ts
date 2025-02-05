import { ContractRunner, ethers } from "ethers";
import VotingJson from "../../artifacts/contracts/Voting.sol/Voting.json"
import deployedAdress from "../../ignition/deployments/chain-31337/deployed_addresses.json"

const votingAddress = deployedAdress["VotingModule#Voting"];

export function getVotingContract(signerOrProvider:ContractRunner) {
    if (!votingAddress) {
      throw new Error("L'adresse du contrat n'est pas définie dans NEXT_PUBLIC_VOTING_CONTRACT_ADDRESS");
    }
    return new ethers.Contract(votingAddress, VotingJson.abi, signerOrProvider);
  }