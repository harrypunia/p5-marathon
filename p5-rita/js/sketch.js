let init = false,
    reset = false,
    col = {
        0: {
            r: 30,
            g: 10,
            b: 22
        },
        1: {
            r: 250,
            g: 73,
            b: 60
        },
        2: {
            r: 82,
            g: 10,
            b: 20
        },
        3: {
            r: 155,
            g: 120,
            b: 120
        },
        4: {
            r: 222,
            g: 23,
            b: 120
        },
    },
    input = document.getElementById('input');

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    input.value = defaultText[Math.floor(random(5))];
    updateRita(input.value);
    if (0 == 0) {
        let btn = document.getElementById('play');
        btn.classList.add('in');
    }
}

function draw() {
    reset ? (background(col[0].r, col[0].g, col[0].b), reset = false) : background(col[0].r, col[0].g, col[0].b, 90);

    if (init) {

    }
}




const initSketch = () => {
    input.style.display = 'block';
    init = true;
    let btn = document.getElementById('play');
    btn.style.display = 'none';
}
