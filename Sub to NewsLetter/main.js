const container = document.querySelector('.container')
const input = document.querySelector('input')
const btn = document.querySelector('button')


btn.addEventListener('click', () =>
{
    let regex =  /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let text = document.querySelector('.label span')
    
    if (input.value.match(regex)) {
        input.classList.add('valied')
        text.style.display = 'none'

        let success = `
        <img class='successImg' src=${'./images/icon-success.svg'} >
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to<br> ${input.value} . Please open it and<br>click the button inside to confirm your subscription.</p>
        <button class='dismis'>Dismiss message</button>
        `
        
        container.innerHTML = ''

        container.innerHTML = success
        container.querySelector('p').style.marginBlock = '1rem'
        container.style.paddingBlock = '2rem'
        container.style.display = 'flex'
        container.style.flexDirection = 'column'
        container.style.alignItems = 'center'

        document.querySelector('.successImg').style.width = '20%'
        document.querySelector('.successImg').style.height = '20%'
        document.querySelector('.dismis').addEventListener('click', () =>
        {
            location.reload()
        })
    } else {
        input.classList.remove('valied')
        text.style.display = 'block'
    }
})