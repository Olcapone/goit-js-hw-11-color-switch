const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const workPlace = document.querySelector('.working-place');
workPlace.addEventListener('click', someAction);

let intervalColor = null;
    let isActive = false;

function someAction(e) {
        
    if (isActive === true&& e.target.dataset.action !== 'stop') return;
    
    else if (e.target.dataset.action === 'stop')
    {
        clearInterval(intervalColor);
        isActive = false;
        return;
    }

        isActive = true;
        intervalColor = setInterval(() => {switchColor();}, 1000);          

};

 function switchColor() {
     document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
};

