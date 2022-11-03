// Problem 01

// CHNAGE THE COLOR OF THE  FIRST ELEMENT OF NAVBAR

const id1 = document.getElementById('first')
id1.style.color = "red"



document.getElementsByTagName("nav")[0].firstElementChild.color = "red"

// USINF FOR EACH

Array.from(document.getElementsByTagName('li')).forEach((element) => {
    element.style.color = 'white'
    element.style.background = 'red'

});