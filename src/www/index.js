import { QRCodeScanner } from './QRCodeScanner.js'

const __ = {
  getWidth: () => window.innerWidth - 200,
  getHeight: () => window.innerHeight - 200,
}

const element = document.createElement('div')
document.body.append(element)

const message = document.createElement('div')
document.body.append(message)

const QRCode = (
  res = () => { },
  rej = () => { },
) => QRCodeScanner({
  element,
  width: __.getWidth(),
  height: __.getHeight(),
  onScanSuccess: (result) => res(result),
  onScanError: (error) => rej(error),
})

window.addEventListener('load', () => QRCode(
  res => console.log({ res }),
  // err => console.info(err, Date.now())
))
