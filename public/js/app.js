const weatherForm = document.querySelector('form')

const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
// messageOne.textContent = 'From JavaScript'
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch('/weather?address='+ location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error
        }else{   
        messageTwo.textContent = data[0].location + ' ' + data[0].address + ' ' + data[0].forecast.weather_descriptions + ' ' + data[0].forecast.temperature + ' ' + data[0].forecast.feelslike + ' Humidity ' + data[0].forecast.humidity
        
        }
    })
})
})