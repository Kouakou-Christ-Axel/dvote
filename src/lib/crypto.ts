import { Wallet } from "ethers";

// Générer une clé privée et une adresse publique
export function generateKeyPair() {
  const wallet = Wallet.createRandom();
  return {
    privateKey: wallet.privateKey,
    address: wallet.address,
  };
}

// Signer un vote avec une clé privée
export async function signVote(privateKey:string, candidate:string) {
  const wallet = new Wallet(privateKey);
  const message = `Vote pour ${candidate}`;
  const signature = await wallet.signMessage(message);
  return { message, signature, address: wallet.address };
}
