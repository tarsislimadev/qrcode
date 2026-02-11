const app = document.getElementById('app')

const form = document.createElement('div')
form.width = '150px'
form.height = '150px'
form.style.margin = '2rem auto'
form.style.display = 'block'
app.appendChild(form)

const input = document.createElement('input')
input.type = 'text'
input.placeholder = 'Enter text to generate QR code'
form.appendChild(input)

const button = document.createElement('button')
button.textContent = 'Generate QR Code'
form.appendChild(button)

const img = document.createElement('img')
app.appendChild(img)

button.addEventListener('click', () => {
  const text = input.value
  if (text) img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`
})
