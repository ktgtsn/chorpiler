import {expect, use} from 'chai';
import {Contract, ethers} from 'ethers';
import {deployContract, MockProvider, solidity} from 'ethereum-waffle';
import ProcessChannel from './gen/artifcats/IM_ProcessChannel.json';
import { IM_ProcessChannel } from './gen/artifcats/types/IM_ProcessChannel';

use(solidity);

class Proof { 
  index = 0;
  from = 0;
  caseID = 0;
  taskID = 0;
  newTokenState = 0;
  condState = 0;
  signatures = new Array<string>(5);

  getSignable() {
    const payload: any[] = [this.index, this.caseID, this.from, this.taskID, this.newTokenState, this.condState];
    const types = ['uint', 'uint', 'uint', 'uint', 'uint', 'uint'];
    return {
      types: types,
      value: payload
    }
  }

  async sign(wallets: ethers.Wallet[]) {
    for (let index = 0; index < wallets.length; index++) {
      const signablePart = this.getSignable();
      const encoder = new ethers.utils.AbiCoder();
      this.signatures[index] = await wallets[index].signMessage(
        ethers.utils.arrayify(
          ethers.utils.keccak256(
            encoder.encode(signablePart.types, signablePart.value)
          )
        )
      );
    }
  }
}

describe('Test Contract: Incident Management ProcessChannel', () => {
  const provider = new MockProvider();
  const [par0, par1, par2, par3, par4] = provider.getWallets();
  const participants = [par0, par1, par2, par3, par4];
  let channels: Contract[];
  let contract: Contract;

  beforeEach(async () => {
    contract = (await deployContract(
      par0, 
      ProcessChannel, 
      [[par0.address, par1.address, par2.address, par3.address, par4.address], 0])
      ) as IM_ProcessChannel;
    
    channels = new Array<Contract>();
    participants.forEach((wallet) => {
      channels.push(new Contract(contract.address, contract.interface, wallet));
    });
  });

  it('Trigger dispute at start and continue on-chain', async () => {

    let total = 0;
    let tx = await contract.deployTransaction.wait(1);
    let cost = tx.gasUsed.toNumber();
    console.log('Gas', 'Deployment:', cost);
    total += cost;
    
    const trace = [
      [0, 0, 0],
      [1, 1, 0],
      [1, 3, 0],
      [2, 5, 0],
      [3, 6, 0],
      [4, 7, 0],
      [3, 8, 0],
      [2, 4, 0],
      [1, 2, 0]
    ]

    const proof = {
      index: 0,
      from: 0,
      caseID: 0,
      taskID: 0,
      newTokenState: 0,
      condState: 0,
      signatures: ["0x","0x", "0x", "0x", "0x"]
    }

    tx = await (await channels[0].submit(proof)).wait(1);
    cost = tx.gasUsed.toNumber();
    total += cost;
    console.log('Gas', 'Dispute:', cost);

    await provider.send("evm_increaseTime", [1]);
    await provider.send("evm_mine", []);

    for (let i = 0; i < trace.length; i++) {
      tx = await (await channels[trace[i][0]].continueAfterDispute(trace[i][1], trace[i][2])).wait(1);
      cost = tx.gasUsed.toNumber();
      total += cost;
      console.log('Gas', 'Enact Task', trace[i][1], ":", cost);
    }

    expect(await (channels[0].tokenState()), "End of process not reached!").to.equal(0);

    console.log('Gas', 'Total:', total);
  });

  it('Submit final state', async () => {

    expect(await (channels[0].disputeMadeAtUNIX()), "Dispute after deployment").to.equal(0);

    const state = new Proof();
    state.index = 1;
    state.newTokenState = 0;
    await state.sign(participants);

    let tx = await (await channels[0].submit(state)).wait(1);
    const cost = tx.gasUsed.toNumber();
    console.log('Gas', 'Dispute:', cost);

    expect(await (channels[0].disputeMadeAtUNIX()), "Dispute not succeesful").to.not.equal(0);
    expect(await (channels[0].index()), "Index not increased!").to.equal(1);
    expect(await (channels[0].tokenState()), "End of process not reached!").to.equal(0);
  });

});