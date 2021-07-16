//select color

let color = ['red','green','yellow','purple','blue','black','orange'];

// change the background of canvas ehrn button is clicked

let button = document.getElementById('button');
button.addEventListener('click', function(){
    //select random number 0-6
    let index = parseInt((Math.random()*color.length)+1);
    console.log('===index==', index);
    let canvas = document.getElementById('canvas');
    canvas.style.background = `${color[index]}`
})