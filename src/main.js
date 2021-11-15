import Block from './block.js'
import Blockchain from './blockchain.js'

const blockchain = new Blockchain()

blockchain.addBlock(
  new Block(Date.now().toString(), {
    from: 'John Appleseed',
    to: 'J.Haemin',
    amount: 100,
  })
)

console.log(blockchain.chain)
