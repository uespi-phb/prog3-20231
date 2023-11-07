
function onNameChange(event) {

  const xhr = new XMLHttpRequest()

  xhr.open('POST', '/candidates', true)
  xhr.onload = (event) => {
    onNameResponse(xhr, event)
  }
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  const body = {
    name: event.target.value
  }
  const json = JSON.stringify(body)
  xhr.send(json)
}

function onNameResponse(xhr, event) {
  if (xhr.status != 200) {
    return;
  }

  const data = JSON.parse(xhr.response)

  const tbody = document.getElementById('result-body')
  tbody.innerHTML = ''

  data.forEach((cand) => {
    const trElem = document.createElement('tr')
    const votes = Intl.NumberFormat('pt-br').format(cand.votes)
    trElem.innerHTML = `<td>${cand.name}</td><td>${cand.office}</td><td>${votes}</td>`
    tbody.appendChild(trElem)
  })
}

function registerHook(config) {
  const input = document.getElementById(config.inputName)
  if (!input) {
    return false
  }

  input.addEventListener('input', config.eventHook)
}

registerHook({
  inputName: 'name',
  eventHook: onNameChange
})
