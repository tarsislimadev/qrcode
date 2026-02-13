const img = document.getElementById('img')

document.getElementById('button').addEventListener('click', () => {
  const text = document.getElementById('input').value
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(text)}`
  img.style.display = 'block'
})
