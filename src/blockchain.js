import Block from './block.js'

export default class Blockchain {
  difficulty = 4
  blockTime = 3_000
  chain = []

  constructor() {
    const genesisBlock = new Block(Date.now().toString())
    this.chain.push(genesisBlock)
  }

  /**
   *
   * @returns {Block}
   */
  getLastBlock() {
    return this.chain[this.chain.length - 1]
  }

  /**
   * @param block {Block}
   */
  addBlock(block) {
    block.prevHash = this.getLastBlock().hash
    block.hash = block.getHash()
    block.mine(this.difficulty)

    this.chain.push(Object.freeze(block))

    this.difficulty +=
      Date.now() - parseInt(this.getLastBlock().timestamp) < this.blockTime
        ? +1
        : -1
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i += 1) {
      const currentBlock = this.chain[i]
      const prevBlock = this.chain[i - 1]

      if (
        currentBlock.hash !== currentBlock.getHash() ||
        prevBlock.hash !== currentBlock.prevHash
      ) {
        return false
      }
    }

    return true
  }
}
