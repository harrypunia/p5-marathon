//Main sketch
let init = false, //Initiates the sketch
    col = {
        0: {
            r: 150,
            g: 20,
            b: 50
        },
        1: {
            r: 81,
            g: 43,
            b: 71
        },
        2: {
            r: 3,
            g: 76,
            b: 60
        },
        3: {
            r: 129,
            g: 83,
            b: 85
        },
        4: {
            r: 73,
            g: 71,
            b: 91
        },
        5: {
            r: 189,
            g: 139,
            b: 156
        },
        6: {
            r: 52,
            g: 84,
            b: 209
        },
        7: {
            r: 147,
            g: 75,
            b: 0
        }
    },//Color object for experimentation
    _img1_ = {
        lB1: [],
        lB2: [],
        lB3: [],
        lB4: [],
        rB1: [],
        rB2: [],
        rB3: [],
        rB4: [],
        col: Math.floor(Math.random() * 8)
    },//quadrants of particles of img1 and so on
    _img2_ = {
        lB1: [],
        lB2: [],
        lB3: [],
        lB4: [],
        rB1: [],
        rB2: [],
        rB3: [],
        rB4: [],
        col: Math.floor(Math.random() * 8)
    },
    _img3_ = {
        lB1: [],
        lB2: [],
        lB3: [],
        lB4: [],
        rB1: [],
        rB2: [],
        rB3: [],
        rB4: [],
        col: Math.floor(Math.random() * 8)
    },
    _img4_ = {
        lB1: [],
        lB2: [],
        lB3: [],
        lB4: [],
        rB1: [],
        rB2: [],
        rB3: [],
        rB4: [],
        col: Math.floor(Math.random() * 8)
    },
    img1,
    img2,
    img3,
    img4,
    speed = .5,//Speed of particles
    population = 50, //Population of particles on each quadrant of 1 image
    images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],//Array of image names
    messages = ['Fear', 'Misbelief', 'Gender', 'Offensive', 'Pick-pocket', 'Predator', 'Gross', 'Drugs', 'Unseen', 'Affair'],//mapped names for each image
    img1Num = Math.floor(Math.random() * 10), //Get a random image
    img2Num = Math.floor(Math.random() * 9),
    img3Num = Math.floor(Math.random() * 8),
    img4Num = Math.floor(Math.random() * 7),
    song, //Song
    amp, //Amp of song
    vol, //Volume derived from amp
    cnv; //canvas

function preload() {
    let imgSRC; //image src var to store temporarily

    imgSRC = images[img1Num]; //get rthe image
    r1.innerHTML = messages[img1Num]; //add image name to html
    img1 = loadImage('assets/main' + imgSRC + '.jpg'); //loading image
    images.splice(img1Num, 1); //remove from array to avoid repititon
    messages.splice(img1Num, 1); //same for messages

    //Repeat
    
    imgSRC = images[img2Num];
    r2.innerHTML = messages[img2Num];
    img2 = loadImage('assets/main' + imgSRC + '.jpg');
    images.splice(img2Num, 1);
    messages.splice(img2Num, 1);

    imgSRC = images[img3Num];
    r3.innerHTML = messages[img3Num];
    img3 = loadImage('assets/main' + imgSRC + '.jpg');
    images.splice(img3Num, 1);
    messages.splice(img3Num, 1);

    imgSRC = images[img4Num];
    r4.innerHTML = messages[img4Num];
    img4 = loadImage('assets/main' + imgSRC + '.jpg');

    song = loadSound('assets/song.mp3'); //load song
}

function setup() {
    cnv = createCanvas(window.innerWidth, window.innerHeight);
    cnv.parent('container');
    smooth(); //anti-aliasing

    amp = new p5.Amplitude(); //fetch amplitutde

    img1.resize(width / 3, 0); //resize image
    img2.resize(width / 3, 0);
    img3.resize(width / 3, 0);
    img4.resize(width / 3, 0);
    if (song.isLoaded()) { //if song is loaded get the play button to appear
        let btn = document.getElementById('play');
        btn.classList.add('in');
    }
    pixelDensity(1); //avoid retina screen 4 pixel density for proportions
    img1.loadPixels(); //load pixels
    img2.loadPixels();
    img3.loadPixels();
    img4.loadPixels();

    background(0);
    setParticles(_img1_, img1, _img1_.col); //custom function, set position of the partical quadrant
    setParticles(_img2_, img2, _img2_.col);
    setParticles(_img3_, img3, _img3_.col);
    setParticles(_img4_, img4, _img4_.col);
}

function draw() {
    vol = amp.getLevel(); //get vol from amp
    if (init) {
        applyMatrix(); //change matrix
        scale(1 + vol); //scales the canvas to give splash effect
        translate(0, height / 2 - img1.height / 2); //translate to another image
        drawImage(_img1_, img1, speed); //custom function, draws the color of pixel at specific pos
        resetMatrix(); //reset matrix
        //REPEAT
        translate(width / 4, height / 2 - img2.height / 2);
        scale(1 + vol);
        drawImage(_img2_, img2, speed);
        resetMatrix();
        translate(width / 2, height / 2 - img3.height / 2);
        scale(1 + vol);
        drawImage(_img3_, img3, speed);
        resetMatrix();
        translate(width * .75, height / 2 - img4.height / 2);
        scale(1 + vol);
        drawImage(_img4_, img4, speed);
        resetMatrix();
    }
}

const initSketch = () => {
    init = true;//Init the sketch
    let btn = document.getElementById('play'),
        races = document.getElementsByClassName('races-all')[0];
    song.play(); //play the song
    song.loop = true; //loops the song
    btn.style.display = 'none'; //removes the button
    races.style.display = 'flex'; //race messages appear on screen
}
