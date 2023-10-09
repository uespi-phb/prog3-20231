
function showMessage() {
  const btn = document.getElementById('btn-toggle')
  const msg = document.querySelector('.message')

  if (msg.style.visibility === 'visible') {
    msg.style.visibility = 'hidden'
    btn.textContent = 'Exibir Mensagem'
  } else {
    msg.style.visibility = 'visible'
    btn.textContent = 'Ocultar Mensagem'
  }

}
