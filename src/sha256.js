import crypto from 'crypto'

const sha256 = (/** @type {string} */ message) =>
  crypto.createHash('sha256').update(message).digest('hex')

export default sha256
