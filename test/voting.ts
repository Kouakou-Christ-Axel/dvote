import { expect } from "chai";
import { BaseContract, Contract, ContractTransactionResponse } from "ethers";
import hre from "hardhat";
import { Voting, Voting__factory } from "../typechain-types";

describe("Voting", function () {
    let Voting: Voting__factory;
    let voting: Voting;
    let owner: { address: any; };
    let addr1: any;
    let addr2;

    beforeEach(async function () {
        Voting = await hre.ethers.getContractFactory("Voting");
        [owner, addr1, addr2] = await hre.ethers.getSigners();
        voting = await Voting.deploy();
    });

    it("Should set the right owner", async function () {
        expect(await voting.owner()).to.equal(owner.address);
    });

    it("Should add a candidate", async function () {
        await voting.addCandidate("Alice");
        const candidate = await voting.getCandidate(1);
        expect(candidate[1]).to.equal("Alice");
    });

    it("Should allow voting and increment vote count", async function () {
        await voting.addCandidate("Alice");
        await voting.connect(addr1).vote(1);
        const candidate = await voting.getCandidate(1);
        expect(candidate[2]).to.equal(1);
    });

    it("Should not allow double voting", async function () {
        await voting.addCandidate("Alice");
        await voting.connect(addr1).vote(1);
        await expect(voting.connect(addr1).vote(1)).to.be.revertedWith("You have already voted");
    });

    it("Should not allow voting for non-existent candidate", async function () {
        await expect(voting.connect(addr1).vote(1)).to.be.revertedWith("Invalid candidate ID");
    });
});