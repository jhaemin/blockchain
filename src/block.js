import sha256 from './sha256.js'

export default class Block {
  /**
   * @param timestamp {string}
   * @param data {any[]}
   */
  constructor(timestamp = '', data = []) {
    this.timestamp = timestamp
    this.data = data
    this.hash = this.getHash()
    this.prevHash = ''
    this.nonce = 0
  }

  getHash() {
    return sha256(
      this.prevHash + this.timestamp + JSON.stringify(this.data) + this.nonce
    )
  }

  mine(difficulty) {
    while (!this.hash.startsWith(Array(difficulty + 1).join('0'))) {
      this.nonce += 1
      this.hash = this.getHash()
    }
  }
}
