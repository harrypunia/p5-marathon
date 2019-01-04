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
    input = document.getElementById('input'),
    spirals1 = [],
    spirals2 = [],
    spirals3 = [],
    spirals4 = [],
    spirals5 = [],
    spirals6 = [],
    spirals7 = [],
    spirals8 = [];
//Parameters: nouns, verbs, adverbs, pronouns, determiners, others.

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    input.value = defaultText[Math.floor(random(5))];
    updateRita(input.value);
    if (0 == 0) {
        let btn = document.getElementById('play');
        btn.classList.add('in');
    }
    for (let i = 0; i < 6; i++) {
        spirals1[i] = new Spiral(i, width / 6, height / 4);
        spirals2[i] = new Spiral(i, width / 3, height / 4);
        spirals3[i] = new Spiral(i, width / 1.75, height / 4);
        spirals4[i] = new Spiral(i, width / 1.25, height / 4);
        spirals5[i] = new Spiral(i, width / 6, height / 1.5);
        spirals6[i] = new Spiral(i, width / 3, height / 1.5);
        spirals7[i] = new Spiral(i, width / 1.75, height / 1.5);
        spirals8[i] = new Spiral(i, width / 1.25, height / 1.5);
    }
}

function draw() {
    reset ? (background(col[0].r, col[0].g, col[0].b), reset = false) : background(col[0].r, col[0].g, col[0].b, 90);
    if (init) {
        for (let i = 0; i < 6; i++) {
            spirals1[i].show(amplify(nouns, 4));
            spirals1[i].update(amplify(nouns, 50), amplify(others, 20), amplify(pronouns, 50));
            spirals2[i].show(amplify(adverbs, 4));
            spirals2[i].update(amplify(adverbs, 50), amplify(nouns, 20), amplify(others, 50));
            spirals3[i].show(amplify(pronouns, 4));
            spirals3[i].update(amplify(pronouns, 50), amplify(adverbs, 20), amplify(nouns, 50));
            spirals4[i].show(amplify(others, 4));
            spirals4[i].update(amplify(others, 50), amplify(pronouns, 20), amplify(adverbs, 50));


            spirals5[i].show(amplify(adverbs, 4));
            spirals5[i].update(amplify(adverbs, 50), amplify(others, 20), amplify(determiners, 50));
            spirals6[i].show(amplify(determiners, 4));
            spirals6[i].update(amplify(determiners, 50), amplify(verbs, 20), amplify(adverbs, 50));
            spirals7[i].show(amplify(others, 4));
            spirals7[i].update(amplify(others, 50), amplify(determiners, 20), amplify(verbs, 50));
            spirals8[i].show(amplify(verbs, 4));
            spirals8[i].update(amplify(verbs, 50), amplify(adverbs, 20), amplify(others, 50));
        }
    }
}




const initSketch = () => {
    input.style.display = 'block';
    init = true;
    let btn = document.getElementById('play');
    btn.style.display = 'none';
}
