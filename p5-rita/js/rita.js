let text,
    defaultText = ['What a beautiful fuck', 'Pencils are underrated', 'Why breathe-in from nose, when you have a butthole', 'Have a bad ass day', 'Please take some time to shut up'],
    rita,
    pronouns = 0,
    adberbs = 0,
    verbs = 0,
    others = 0,
    determiners = 0,
    nouns = 0;

const updateRita = str => {
    let r = new RiString(str);
    if (str.length != 0) {
        rita = r.pos();
        resetCounters();

        for (let i = 0; i < rita.length; i++) {
            if (rita[i].match(/nn*/g)) {
                nouns++
            } else if (rita[i].match(/rb*/g)) {
                adberbs++
            } else if (rita[i].match(/prp*/g)) {
                pronouns++
            } else if (rita[i].match(/vb*/g)) {
                verbs++;
            } else if (rita[i].match(/dt*/g)) {
                determiners++
            } else {
                others++
            }
        }
        changeParameters();
    }
}

function windowResized() {
    reset = true;
    resizeCanvas(window.innerWidth, window.innerHeight);
}

const amplify = (num, mult) => {
    return num * mult > 255 ? 255 : num * mult
}

const resetCounters = () => {
    pronouns = 0;
    nouns = 0;
    verbs = 0;
    adberbs = 0;
    determiners = 0;
    others = 0;
}

const changeParameters = () => {
    col[0].r = amplify(nouns, 20);
    col[0].g = amplify(pronouns, 20);
    col[0].b = amplify(verbs, 20);
}
