let levelSelectionElement;


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to pick a random item from an array
function pickRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

// Array of success audio files
const successAudios = ['goodonya.mp3', 'ulegend.mp3', 'urockstar.mp3', 'welldone.mp3', 'crushingit.mp3'];


const levels = {
    level1: [ // Add CVC words items here
        { text: 'cat', options: ['CVC/cat.png', 'CVC/mat.png', 'CVC/rat.png', 'CVC/hat.png'], correct: 'CVC/cat' },
        { text: 'bat', options: ['CVC/bat.png', 'CVC/mat.png', 'CVC/rat.png', 'CVC/hat.png'], correct: 'CVC/bat' },
        { text: 'bed', options: ['CVC/bed.png', 'CVC/red.png', 'CVC/leg.png', 'CVC/peg.png'], correct: 'CVC/bed' },
        { text: 'bin', options: ['CVC/bin.png', 'CVC/fin.png', 'CVC/tin.png', 'CVC/pan.png'], correct: 'CVC/bin' },
        { text: 'box', options: ['CVC/box.png', 'CVC/hut.png', 'CVC/pen.png', 'CVC/bat.png'], correct: 'CVC/box' },
        { text: 'bug', options: ['CVC/bug.png', 'CVC/dog.png', 'CVC/mug.png', 'CVC/jug.png'], correct: 'CVC/bug' },
        { text: 'cot', options: ['CVC/cot.png', 'CVC/bug.png', 'CVC/cat.png', 'CVC/bed.png'], correct: 'CVC/cot' },
        { text: 'cub', options: ['CVC/cub.png', 'CVC/van.png', 'CVC/tin.png', 'CVC/sun.png'], correct: 'CVC/cub' },
        { text: 'dog', options: ['CVC/dog.png', 'CVC/log.png', 'CVC/hop.png', 'CVC/mop.png'], correct: 'CVC/dog' },
        { text: 'fin', options: ['CVC/fin.png', 'CVC/bin.png', 'CVC/tin.png', 'CVC/cat.png'], correct: 'CVC/fin' },
        { text: 'hat', options: ['CVC/hat.png', 'CVC/bat.png', 'CVC/rat.png', 'CVC/cat.png'], correct: 'CVC/hat' },
        { text: 'hen', options: ['CVC/hen.png', 'CVC/bat.png', 'CVC/hut.png', 'CVC/pen.png'], correct: 'CVC/hen' },
        { text: 'hop', options: ['CVC/hop.png', 'CVC/red.png', 'CVC/hen.png', 'CVC/mop.png'], correct: 'CVC/hop' },
        { text: 'hut', options: ['CVC/hut.png', 'CVC/jam.png', 'CVC/cot.png', 'CVC/box.png'], correct: 'CVC/hut' },
        { text: 'jam', options: ['CVC/jam.png', 'CVC/jet.png', 'CVC/hat.png', 'CVC/bug.png'], correct: 'CVC/jam' },
        { text: 'jet', options: ['CVC/jet.png', 'CVC/kit.png', 'CVC/pet.png', 'CVC/pug.png'], correct: 'CVC/jet' },
        { text: 'jug', options: ['CVC/jug.png', 'CVC/bug.png', 'CVC/mug.png', 'CVC/mat.png'], correct: 'CVC/jug' },
        { text: 'kit', options: ['CVC/kit.png', 'CVC/sit.png', 'CVC/leg.png', 'CVC/bin.png'], correct: 'CVC/kit' },
        { text: 'leg', options: ['CVC/leg.png', 'CVC/peg.png', 'CVC/mug.png', 'CVC/sun.png'], correct: 'CVC/leg' },
        { text: 'log', options: ['CVC/log.png', 'CVC/dog.png', 'CVC/rat.png', 'CVC/mud.png'], correct: 'CVC/log' },
        { text: 'mat', options: ['CVC/mat.png', 'CVC/hat.png', 'CVC/rat.png', 'CVC/cat.png'], correct: 'CVC/mat' },
        { text: 'mop', options: ['CVC/mop.png', 'CVC/bug.png', 'CVC/pet.png', 'CVC/peg.png'], correct: 'CVC/mop' },
        { text: 'mud', options: ['CVC/mud.png', 'CVC/mug.png', 'CVC/pot.png', 'CVC/cub.png'], correct: 'CVC/mud' },
        { text: 'mug', options: ['CVC/mug.png', 'CVC/jug.png', 'CVC/bug.png', 'CVC/peg.png'], correct: 'CVC/mug' },
        { text: 'peg', options: ['CVC/peg.png', 'CVC/leg.png', 'CVC/pan.png', 'CVC/pet.png'], correct: 'CVC/peg' },
        { text: 'pan', options: ['CVC/pan.png', 'CVC/red.png', 'CVC/sun.png', 'CVC/van.png'], correct: 'CVC/pan' },
        { text: 'pen', options: ['CVC/pen.png', 'CVC/hen.png', 'CVC/van.png', 'CVC/tin.png'], correct: 'CVC/pen' },
        { text: 'pet', options: ['CVC/pet.png', 'CVC/peg.png', 'CVC/jet.png', 'CVC/leg.png'], correct: 'CVC/pet' },
        { text: 'pot', options: ['CVC/pot.png', 'CVC/dog.png', 'CVC/pug.png', 'CVC/hat.png'], correct: 'CVC/pot' },
        { text: 'pug', options: ['CVC/pug.png', 'CVC/mug.png', 'CVC/bug.png', 'CVC/jug.png'], correct: 'CVC/pug' },
        { text: 'rat', options: ['CVC/rat.png', 'CVC/bat.png', 'CVC/cat.png', 'CVC/hat.png'], correct: 'CVC/rat' },
        { text: 'red', options: ['CVC/red.png', 'CVC/bed.png', 'CVC/sit.png', 'CVC/tin.png'], correct: 'CVC/red' },
        { text: 'sit', options: ['CVC/sit.png', 'CVC/tin.png', 'CVC/fin.png', 'CVC/kit.png'], correct: 'CVC/sit' },
        { text: 'sun', options: ['CVC/sun.png', 'CVC/fin.png', 'CVC/van.png', 'CVC/pet.png'], correct: 'CVC/sun' },
        { text: 'tin', options: ['CVC/tin.png', 'CVC/fin.png', 'CVC/bin.png', 'CVC/jet.png'], correct: 'CVC/tin' },
        { text: 'sun', options: ['CVC/sun.png', 'CVC/fin.png', 'CVC/pan.png', 'CVC/hen.png'], correct: 'CVC/sun' },
        { text: 'tin', options: ['CVC/tin.png', 'CVC/fin.png', 'CVC/bin.png', 'CVC/pan.png'], correct: 'CVC/tin' },
        { text: 'van', options: ['CVC/van.png', 'CVC/pan.png', 'CVC/cat.png', 'CVC/hat.png'], correct: 'CVC/van' },

    ],
    level2: [
        { text: 'band', options: ['blends/band.png', 'blends/drum.png', 'blends/hand.png', 'blends/camp.png'], correct: 'blends/band' },
        { text: 'bend', options: ['blends/bend.png', 'blends/tent.png', 'blends/band.png', 'blends/desk.png'], correct: 'blends/bend' },
        { text: 'blob', options: ['blends/blob.png', 'blends/drop.png', 'blends/plum.png', 'blends/duck.png'], correct: 'blends/blob' },
        { text: 'brick', options: ['blends/brick.png', 'blends/twig.png', 'blends/clap.png', 'blends/truck.png'], correct: 'blends/brick' },
        { text: 'camp', options: ['blends/camp.png', 'blends/clam.png', 'blends/pond.png', 'blends/golf.png'], correct: 'blends/camp' },
        { text: 'clam', options: ['blends/clam.png', 'blends/crab.png', 'blends/duck.png', 'blends/drip.png'], correct: 'blends/clam' },
        { text: 'clap', options: ['blends/clap.png', 'blends/clam.png', 'blends/crab.png', 'blends/camp.png'], correct: 'blends/clap' },
        { text: 'crab', options: ['blends/crab.png', 'blends/clam.png', 'blends/camp.png', 'blends/clap.png'], correct: 'blends/crab' },
        { text: 'desk', options: ['blends/desk.png', 'blends/drum.png', 'blends/duck.png', 'blends/drip.png'], correct: 'blends/desk' },
        { text: 'drip', options: ['blends/drip.png', 'blends/drop.png', 'blends/duck.png', 'blends/drum.png'], correct: 'blends/drip' },
        { text: 'drop', options: ['blends/drop.png', 'blends/drip.png', 'blends/duck.png', 'blends/drum.png'], correct: 'blends/drop' },
        { text: 'drum', options: ['blends/drum.png', 'blends/duck.png', 'blends/drop.png', 'blends/drip.png'], correct: 'blends/drum' },
        { text: 'duck', options: ['blends/duck.png', 'blends/drum.png', 'blends/drop.png', 'blends/drip.png'], correct: 'blends/duck' },
        { text: 'flag', options: ['blends/flag.png', 'blends/frog.png', 'blends/flip.png', 'blends/golf.png'], correct: 'blends/flag' },
        { text: 'flip', options: ['blends/flip.png', 'blends/frog.png', 'blends/flag.png', 'blends/golf.png'], correct: 'blends/flip' },
        { text: 'frog', options: ['blends/frog.png', 'blends/flip.png', 'blends/flag.png', 'blends/golf.png'], correct: 'blends/frog' },
        { text: 'gift', options: ['blends/gift.png', 'blends/golf.png', 'blends/frog.png', 'blends/flip.png'], correct: 'blends/gift' },
        { text: 'golf', options: ['blends/golf.png', 'blends/gift.png', 'blends/frog.png', 'blends/flip.png'], correct: 'blends/golf' },
        { text: 'hand', options: ['blends/hand.png', 'blends/band.png', 'blends/camp.png', 'blends/lamp.png'], correct: 'blends/hand' },
        { text: 'lamp', options: ['blends/lamp.png', 'blends/hand.png', 'blends/camp.png', 'blends/band.png'], correct: 'blends/lamp' },
        { text: 'mask', options: ['blends/mask.png', 'blends/milk.png', 'blends/pink.png', 'blends/plug.png'], correct: 'blends/mask' },
        { text: 'milk', options: ['blends/milk.png', 'blends/mask.png', 'blends/pink.png', 'blends/plug.png'], correct: 'blends/milk' },
        { text: 'pink', options: ['blends/pink.png', 'blends/plug.png', 'blends/plum.png', 'blends/pond.png'], correct: 'blends/pink' },
        { text: 'plug', options: ['blends/plug.png', 'blends/pink.png', 'blends/plum.png', 'blends/pond.png'], correct: 'blends/plug' },
        { text: 'plum', options: ['blends/plum.png', 'blends/pond.png', 'blends/plug.png', 'blends/pink.png'], correct: 'blends/plum' },
        { text: 'pond', options: ['blends/pond.png', 'blends/plum.png', 'blends/plug.png', 'blends/pink.png'], correct: 'blends/pond' },
        { text: 'sled', options: ['blends/sled.png', 'blends/slip.png', 'blends/sock.png', 'blends/spin.png'], correct: 'blends/sled' },
        { text: 'slip', options: ['blends/slip.png', 'blends/sled.png', 'blends/sock.png', 'blends/spin.png'], correct: 'blends/slip' },
        { text: 'sock', options: ['blends/sock.png', 'blends/slip.png', 'blends/sled.png', 'blends/spin.png'], correct: 'blends/sock' },
        { text: 'spin', options: ['blends/spin.png', 'blends/swim.png', 'blends/sled.png', 'blends/slip.png'], correct: 'blends/spin' },
        { text: 'swim', options: ['blends/swim.png', 'blends/spin.png', 'blends/sled.png', 'blends/slip.png'], correct: 'blends/swim' },
        { text: 'tent', options: ['blends/tent.png', 'blends/trap.png', 'blends/truck.png', 'blends/twig.png'], correct: 'blends/tent' },
        { text: 'trap', options: ['blends/trap.png', 'blends/tent.png', 'blends/truck.png', 'blends/twig.png'], correct: 'blends/trap' },
        { text: 'truck', options: ['blends/truck.png', 'blends/trap.png', 'blends/tent.png', 'blends/twig.png'], correct: 'blends/truck' },
        { text: 'belt', options: ['blends/belt.png', 'blends/bend.png', 'blends/.png', 'blends/brick.png'], correct: 'blends/belt' },
        { text: 'slug', options: ['blends/slug.png', 'blends/swim.png', 'blends/sock.png', 'blends/sled.png'], correct: 'blends/slug' },
        { text: 'hunt', options: ['blends/hunt.png', 'blends/golf.png', 'blends/duck.png', 'blends/flag.png'], correct: 'blends/hunt' },
        { text: 'nest', options: ['blends/nest.png', 'blends/desk.png', 'blends/tent.png', 'blends/bend.png'], correct: 'blends/nest' },
        { text: 'twig', options: ['blends/twig.png', 'blends/truck.png', 'blends/trap.png', 'blends/tent.png'], correct: 'blends/twig' }

    ],
    level3: [ { text: 'The cat is hot.', options: ['cat_hot.png.jpeg', 'cat_bike.jpeg', 'dog_hot.png.jpeg', 'sadcrab.jpeg'], correct: 'cat_hot' },
    { text: 'The dog is hot.', options: ['cat_hot.png.jpeg', 'cat_bike.jpeg', 'dog_hot.png.jpeg', 'sadcrab.jpeg'], correct: 'dog_hot' },
    { text: 'The bug can hop.', options: ['bughop.jpeg', 'foxhop.jpeg', 'foxbox.jpeg', 'dog_hot.png.jpeg'], correct: 'bughop' },
    { text: 'The fox can hop.', options: ['bughop.jpeg', 'foxhop.jpeg', 'foxbox.jpeg', 'dog_hot.png.jpeg'], correct: 'foxhop' },
    { text: 'I can run.', options: ['ising.jpeg', 'ieat.jpeg', 'irun.jpeg','foxbox.jpeg'], correct: 'irun' },
    { text: 'The hen has a red cap.', options: ['hencap.jpeg', 'henshirt.jpeg', 'henshoe.jpeg', 'irun.jpeg'], correct: 'hencap' },
    { text: 'The web is wet.', options: ['webwet.jpeg', 'webfire.jpeg', 'netwet.jpeg', 'henshoe.jpeg'], correct: 'webwet' },
    { text: 'I am sad.', options: ['ihappy.jpeg', 'imad.jpeg', 'isad.jpeg', 'netwet.jpeg'], correct: 'isad' },
    { text: 'I am mad.', options: ['ihappy.jpeg', 'imad.jpeg', 'isad.jpeg', 'netwet.jpeg'], correct: 'imad' },
    { text: 'A lamp in a pond', options: ['lamp.jpeg', 'clam.jpeg', 'lamb.jpeg', 'isad.jpeg'], correct: 'lamp' },
    { text: 'A frog on a log.', options: ['froglog.jpeg', 'logfrog.jpeg', 'frogleaf.jpeg', 'lamb.jpeg'], correct: 'froglog' },
    { text: 'A log on a frog.', options: ['froglog.jpeg', 'logfrog.jpeg', 'frogleaf.jpeg', 'lamb.jpeg'], correct: 'logfrog' },
    { text: 'The crab is fast.', options: ['fastcrab.jpeg', 'sadcrab.jpeg', 'fastrat.jpeg', 'frogleaf.jpeg'], correct: 'fastcrab' },
    { text: 'The crab is sad.', options: ['fastcrab.jpeg', 'sadcrab.jpeg', 'fastrat.jpeg', 'frogleaf.jpeg'], correct: 'sadcrab' },
    { text: 'The tent is big.', options: ['bigtent.jpeg', 'bigten.jpeg', 'bigclown.jpeg', 'fastrat.jpeg'], correct: 'bigtent' },
    { text: 'The ten is big.', options: ['bigtent.jpeg', 'bigten.jpeg', 'bigclown.jpeg', 'fastrat.jpeg'], correct: 'bigten' },
    { text: 'The brick drops in the net.', options: ['brick.jfif', 'trucknet.jfif', 'truckwings.jfif', 'bigclown.jpeg'], correct: 'brick' },
    { text: 'The truck drops in the net.', options: ['brick.jfif', 'trucknet.jfif', 'truckwings.jfif', 'bigclown.jpeg'], correct: 'bricknet' },
    { text: 'The truck stops at red.', options: ['truckstops.jfif', 'trucknet.jfif', 'racecar.jfif', 'truckwings.jfif'], correct: 'truckstops' },
    { text: 'A rat traps a cat.', options: ['rattrap.png', 'cattrap2.jfif', 'rateat.jfif', 'racecar.jfif'], correct: 'cattrap2' },
    { text: 'A cat traps a rat.', options: ['rattrap.png', 'cattrap2.jfif', 'rateat.jfif', 'racecar.jfif'], correct: 'rattrap' },
    { text: 'The cat is from France.', options: ['frenchcat.jfif', 'aussiecat.jfif', 'ukcat.jfif', 'singcat.jfif'], correct: 'frenchcat' },
    { text: 'The cat is from Singapore.', options: ['frenchcat.jfif', 'aussiecat.jfif', 'ukcat.jfif', 'singcat.jfif'], correct: 'singcat' },
    { text: 'The cat has a glass of milk', options: ['catmilk.jfif', 'ratmilk.jfif', 'lionmilk.jfif', 'catwine.jfif'], correct: 'catmilk' },
    { text: 'The rat has a glass of milk', options: ['catmilk.jfif', 'ratmilk.jfif', 'lionmilk.jfif', 'catwine.jfif'], correct: 'ratmilk' },
    { text: 'Syl has a gift', options: ['sylgift.jfif', 'syldog.jfif', 'sylroo.jfif', 'catwine.jfif'], correct: 'sylgift' },
    { text: 'Syl has a dog', options: ['sylgift.jfif', 'syldog.jfif', 'sylroo.jfif', 'catwine.jfif'], correct: 'syldog' },
    { text: 'Tom grabs a crab', options: ['tomcrab.jfif', 'tomshark.jfif', 'tomlion.jfif', 'cattrap.jfif'], correct: 'tomcrab' },
    { text: 'Tam dug a pit.', options: ['ifshole.jfif', 'ifsdragon.jfif', 'ifsgum.jfif', 'cattrap.jfif'], correct: 'ifshole' },
    { text: 'Tam has a dragon.', options: ['ifshole.jfif', 'ifsdragon.jfif', 'ifsgum.jfif', 'cattrap.jfif'], correct: 'ifsdragon' },
    { text: 'A big pig in a wig.', options: ['pigwig.jpeg', 'pigjig.jpeg', 'pigfig.jpeg', 'pigwing.jpeg'], correct: 'pigwig' },
    { text: 'A cat in a hat.', options: ['cathat.jpeg', 'catinhat.jpeg', 'catmat.jpeg', 'catrat.jpeg'], correct: 'catinhat' },
    { text: 'A hat on a cat.', options: ['cathat.jpeg', 'catinhat.jpeg', 'catmat.jpeg', 'catrat.jpeg'], correct: 'cathat' },
    ],
    level4: [ { text: 'The king is on the swing.', options: ['long/kingswing.png', 'long/kingsing.png', 'long/kingstring.png', 'long/kingsling.png'], correct: 'long/kingswing' },
    { text: 'The king is on a string.', options: ['long/kingswing.png', 'long/kingsing.png', 'long/kingstring.png', 'long/kingsling.png'], correct: 'long/kingstring' },
    { text: 'The king has a sling.', options: ['long/kingswing.png', 'long/kingsing.png', 'long/kingstring.png', 'long/kingsling.png'], correct: 'long/kingsling' },
    { text: 'The king is singing.', options: ['long/kingswing.png', 'long/kingsing.png', 'long/kingstring.png', 'long/kingsling.png'], correct: 'long/kingsing' },
    { text: 'He is winning', options: ['long/hewinning.png', 'long/shewinning.png', 'long/shesing.png', 'long/quokka.png'], correct: 'long/hewinning' },
    { text: 'She is winning', options: ['long/hewinning.png', 'long/shewinning.png', 'long/shesing.png', 'long/quokka.png'], correct: 'long/shewinning' },
    { text: 'We are singing', options: ['long/wesing.png', 'long/nosing.png', 'long/shesing.png', 'long/chimp.png'], correct: 'long/wesing' },
    { text: 'He is singing', options: ['long/wesing.png', 'long/nosing.png', 'long/shesing.png', 'long/hesing.png'], correct: 'long/hesing' },
    { text: 'He is running', options: ['long/herun.png', 'long/sherun.png', 'long/hesit.png', 'long/hesing.png'], correct: 'long/herun' }, 
    { text: 'She is running', options: ['long/herun.png', 'long/sherun.png', 'long/hesit.png', 'long/hesing.png'], correct: 'long/sherun' },
    { text: 'He is not running', options: ['long/herun.png', 'long/sherun.png', 'long/hesit.png', 'long/hesing.png'], correct: 'long/hesit' }, 
    { text: 'The chick is singing', options: ['long/chicksings.png', 'long/kittysing.png', 'long/ellie.png', 'long/chimp.png'], correct: 'long/chicksings' },
    { text: 'The chimp is on the drums', options: ['long/chimp.png', 'long/chickdrums.png', 'long/random.png', 'long/random2.png'], correct: 'long/chimp' },
    { text: 'She has a bag of chips', options: ['long/shechips.png', 'long/hechips.png', 'long/random3.png', 'long/burger.png'], correct: 'long/shechips' }, 
    { text: 'She chops a log', options: ['long/shechops.png', 'long/hechops.png', 'long/helog.png', 'long/shelog.png'], correct: 'long/shechops' },
    { text: 'He has a big chin', options: ['long/hechin.png', 'long/shechin.png', 'long/quokka.png', 'long/ellie.png'], correct: 'long/hechin' },
    { text: 'We are chatting', options: ['long/wechat.png', 'long/wesleep.png', 'long/kittysing.png', 'long/random2.png'], correct: 'long/wechat' },
    { text: 'The brush is in my dish', options: ['long/brushdish.png', 'long/shrimpdish.png', 'long/sheep.png', 'long/shopship.png'], correct: 'long/brushdish' },
    { text: 'She has a fish', options: ['long/hefish.png', 'long/shopship.png', 'long/shefish.png', 'long/shopshell.png'], correct: 'long/shefish' },
    { text: 'The shop sells shells', options: ['long/shopshell.png', 'long/shopship.png', 'long/shrimpshell.png', 'long/sheep.png'], correct: 'long/shopshell' },
    { text: 'She is on the ship', options: ['long/shipdish.png', 'long/fishdish.png', 'long/sheship.png', 'long/shopshell.png'], correct: 'long/sheship' }, 
    { text: 'The sloth is in the bath', options: ['long/slothbath.png', 'long/roobath.png', 'long/slothsurf.png', 'long/koalasurf.png'], correct: 'long/slothbath' },
    { text: 'the moth is on the chimp', options: ['long/mothchimp.png', 'long/mothbench.png', 'long/slothship.png', 'long/slothbench.png'], correct: 'long/mothchimp' },
    { text: 'The moth is on the bench', options: ['long/mothbench.png', 'long/mothchimp.png', 'long/slothbench.png', 'long/koalasurf.png'], correct: 'long/mothbench' },
    { text: 'The sloth is on a path', options: ['long/slothpath.png', 'long/slothbench.png', 'long/slothbath.png', 'long/mothbench.png'], correct: 'long/slothpath' }, 
    { text: 'He was thick but he is thin.', options: ['long/thickthin.png', 'long/thickthick.png', 'long/thinthin.png', 'long/twindogs.png'], correct: 'long/slothpath' }, 
    { text: 'She sits on a seat', options: ['long/shesits.png', 'long/hesits.png', 'long/hestands.png', 'long/shestands.png'], correct: 'long/shesits' },
    { text: 'He reads on the street', options: ['long/hereads.png', 'long/shereads.png', 'long/hesleeps.png', 'long/shesleeps.png'], correct: 'long/hereads' },
    { text: 'She sleeps on the street', options: ['long/hereads.png', 'long/shereads.png', 'long/hesleeps.png', 'long/shesleeps.png'], correct: 'long/shesleeps' },
    { text: 'She dreams of cheese', options: ['long/shedreamscheese.png', 'long/hedreamscheese.png', 'long/shedreamssheep.png', 'long/hedreamssheep.png'], correct: 'long/shedreamscheese' },
    { text: 'He dreams of sheep', options: ['long/shedreamscheese.png', 'long/hedreamscheese.png', 'long/shedreamssheep.png', 'long/hedreamssheep.png'], correct: 'long/hedreamssheep' },
    { text: 'A cup of tea with cream', options: ['long/teacream.png', 'long/teabean.png', 'long/teapeach.png', 'long/teapea.png'], correct: 'long/teacream' }, 
    { text: 'A peach on a beach', options: ['long/peachbeach.png', 'long/sealbeach.png', 'long/teapotbeach.png', 'long/treepeach.png'], correct: 'long/peachbeach' },
    { text: 'A seal on a beach', options: ['long/peachbeach.png', 'long/sealbeach.png', 'long/teapotbeach.png', 'long/treepeach.png'], correct: 'long/sealbeach' },
    { text: 'I hate snails', options: ['long/hatesnail.png', 'long/hatecake.png', 'long/hateplane.png', 'long/hatetrains.png'], correct: 'long/hatesnail' },
    { text: 'I hate cake', options: ['long/hatesnail.png', 'long/hatecake.png', 'long/hateplane.png', 'long/hatetrains.png'], correct: 'long/hatecake' },
    { text: 'He paints a flame', options: ['long/paintflame.png', 'long/paintwhale.png', 'long/paintgrape.png', 'long/paintplane.png'], correct: 'long/paintflame' },
    { text: 'He paints a grape', options: ['long/paintflame.png', 'long/paintwhale.png', 'long/paintgrape.png', 'long/paintplane.png'], correct: 'long/paintgrape' },
    { text: 'He ate mail', options: ['long/atemail.png', 'long/heate.png', 'long/sheate.png', 'long/weate.png'], correct: 'long/atemail' },
    { text: 'We ate cake', options: ['long/atemail.png', 'long/heate.png', 'long/sheate.png', 'long/weate.png'], correct: 'long/weate' },
    { text: 'A tray with a cake', options: ['long/traycake.png', 'long/traybrain.png', 'long/trayplane.png', 'long/traytape.png'], correct: 'long/traycake' }, 
    { text: 'A tray with a brain', options: ['long/traycake.png', 'long/traybrain.png', 'long/trayplane.png', 'long/traytape.png'], correct: 'long/traybrain' }, 
    { text: 'A gate is in the way', options: ['long/gateway.png', 'long/planeway.png', 'long/grapeway.png', 'long/flameway.png'], correct: 'long/gateway' },
    { text: 'A plane is on the way', options: ['long/gateway.png', 'long/planeway.png', 'long/grapeway.png', 'long/flameway.png'], correct: 'long/planeway' },
    { text: 'A snail in jail', options: ['long/snailjail.png', 'long/snailrain.png', 'long/snailtrain.png', 'long/snailmail.png'], correct: 'long/snailjail' }, 
    { text: 'A snail getting his mail', options: ['long/snailjail.png', 'long/snailrain.png', 'long/snailtrain.png', 'long/snailmail.png'], correct: 'long/snailmail' }, 
    { text: 'I can speak Spanish', options: ['long/speakspanish.png', 'long/speakfrench.png', 'long/speakenglish.png', 'long/speakitalian.png'], correct: 'long/speakspanish' }, 
    { text: 'I can speak French', options: ['long/speakspanish.png', 'long/speakfrench.png', 'long/speakenglish.png', 'long/speakitalian.png'], correct: 'long/speakfrench' },
    { text: 'I like to ride a bike', options: ['long/likebike.png', 'long/likepie.png', 'long/likekite.png', 'long/likehide.png'], correct: 'long/likebike' }, 
    { text: 'I like to fly a kite', options: ['long/likebike.png', 'long/likepie.png', 'long/likekite.png', 'long/likehide.png'], correct: 'long/likekite' }, 
    { text: 'I like to eat pie', options: ['long/likebike.png', 'long/likepie.png', 'long/likekite.png', 'long/likehide.png'], correct: 'long/likepie' },
    { text: 'I like to play hide and seek', options: ['long/likebike.png', 'long/likepie.png', 'long/likekite.png', 'long/likehide.png'], correct: 'long/likehide' },  
    { text: 'The sheep likes to ride a bike', options: ['long/sheepbike.png', 'long/chimpbike.png', 'long/snailbike.png', 'long/catbike.png'], correct: 'long/sheepbike' },
    { text: 'The snail likes to ride a bike', options: ['long/sheepbike.png', 'long/chimpbike.png', 'long/snailbike.png', 'long/catbike.png'], correct: 'long/snailbike' },
    { text: 'The chimp likes to ride a bike', options: ['long/sheepbike.png', 'long/chimpbike.png', 'long/snailbike.png', 'long/catbike.png'], correct: 'long/chimpbike' },  
    { text: 'The fly is in the sky', options: ['long/flysky.png', 'long/sheepsky.png', 'long/snailsky.png', 'long/chimpsky.png'], correct: 'long/flysky' },  
    { text: 'The chimp is high in the sky', options: ['long/flysky.png', 'long/sheepsky.png', 'long/snailsky.png', 'long/chimpsky.png'], correct: 'long/chimpsky' },  
    { text: 'The sheep is high in the sky', options: ['long/flysky.png', 'long/sheepsky.png', 'long/snailsky.png', 'long/chimpsky.png'], correct: 'long/sheepsky' }, 
    { text: 'The seal wants to try and fly', options: ['long/sealfly.png', 'long/sealspy.png', 'long/sealcry.png', 'long/sealshy.png'], correct: 'long/sealfly' },  
    { text: 'The seal is shy', options: ['long/sealfly.png', 'long/sealshy.png', 'long/sealcry.png', 'long/sealshy.png'], correct: 'long/sealshy' },
    { text: 'The seal is sad and wants to cry', options: ['long/sealfly.png', 'long/sealshy.png', 'long/sealcry.png', 'long/sealshy.png'], correct: 'long/sealcry' },
    { text: 'The seal is a spy', options: ['long/sealfly.png', 'long/sealshy.png', 'long/sealcry.png', 'long/sealshy.png'], correct: 'long/sealspy' }, 
    { text: 'I see the day and the night.', options: ['long/daynight.png', 'long/brightlight.png', 'long/sealcry.png', 'long/flysky.png'], correct: 'long/daynight' },
    { text: 'The light is bright', options: ['long/brightlight.png', 'long/daynight.png', 'long/sealcry.png', 'long/sealfly.png'], correct: 'long/sheepbike' },         
     ]
};


// Shuffle the items in each level
Object.values(levels).forEach(level => {
    shuffleArray(level);
    level.forEach(item => shuffleArray(item.options));
});

let currentLevel = 'level1';
let currentSentence = 0;

function loadSentence() {
    const sentenceElement = document.getElementById('sentence');
    sentenceElement.textContent = levels[currentLevel][currentSentence].text;

    const choicesElement = document.getElementById('choices');
    choicesElement.innerHTML = '';
    levels[currentLevel][currentSentence].options.forEach((option) => {
        const img = document.createElement('img');
        img.src = option;
        img.alt = option;
        img.onclick = () => checkAnswer(option.split('.')[0]);
        choicesElement.appendChild(img);
    });
}

function checkAnswer(answer) {
    const audio = new Audio();
    if (answer === levels[currentLevel][currentSentence].correct) {
        audio.src = pickRandomItem(successAudios); // Pick a random success audio
        audio.play();
    } else {
        audio.src = 'nahsorry.mp3';
        audio.play();
    }

    currentSentence++;
    if (currentSentence < levels[currentLevel].length) {
        loadSentence();
    } else if (currentLevel === 'level1') {
        currentLevel = 'level2';
        currentSentence = 0;
        loadSentence();
    } else if (currentLevel === 'level2') {
        currentLevel = 'level3';
        currentSentence = 0;
        loadSentence();
    } else if (currentLevel === 'level3') {
        currentLevel = 'level4';
        currentSentence = 0;
        loadSentence();
    } else {
        gameOver();
    }
}

function gameOver() {
    const choicesElement = document.getElementById('choices');
    choicesElement.innerHTML = '';

    const img = document.createElement('img');
    img.src = 'over.png';
    img.alt = 'Game Over';
    img.onclick = () => resetGame(); // Changed this line
    choicesElement.appendChild(img);
}


window.onload = function() {
    levelSelectionElement = document.getElementById('levelSelection');

    const gameContainer = document.querySelector('.game-container');
    const sentence = document.querySelector('.sentence');
    const choices = document.querySelector('.choices');

    const containerWidth = gameContainer.offsetWidth;
    const containerHeight = gameContainer.offsetHeight;

    sentence.style.top = `${(containerHeight * 0.25)}px`;
    sentence.style.left = `${(containerWidth * 0.18)}px`;

    choices.style.top = `${(containerHeight * 0.6)}px`;
    if (window.location.pathname.endsWith('index.html')) {
        var audioElement = document.getElementById("homepageJingle");
        audioElement.play();
    }
};

function startLevel(level) {
    currentLevel = level;
    currentSentence = 0;
    levelSelectionElement.style.display = 'none'; // Hide the level selection
    loadSentence(); // Start the game for the chosen level
    document.getElementById("levelContainer").style.backgroundImage = "url('srbg.png')";
    const returnButton = document.getElementById('returnButton');
    returnButton.style.display = 'inline-block';  
    var audioElement = document.getElementById("homepageJingle");
    audioElement.pause();  // Pause the jingle audio
    audioElement.currentTime = 0;
    
    // Hide the circular images when the level starts
    hideCircularImages();
}

    
    



function resetGame() {
    // Reset the game state
    currentLevel = 'level1';
    currentSentence = 0;
    showCircularImages();

    // Show the level selection
    levelSelectionElement.style.display = 'block';
    document.getElementById("levelContainer").style.backgroundImage = "url('bg.png')"; // Replace with your initial background

    const returnButton = document.getElementById('returnButton');
    returnButton.style.display = 'none';  // Hide the button
}

function returnToHomepage() {
    window.location.href = "index.html"; 
}

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.endsWith('index.html')) {
        var audioElement = document.getElementById("homepageJingle");
        audioElement.play();
    }
});

// Hide the circular PNGs
function hideCircularImages() {
    var circularImages = document.querySelector('.circular-images');
    circularImages.style.display = 'none';
}

// Show the circular PNGs
function showCircularImages() {
    var circularImages = document.querySelector('.circular-images');
    circularImages.style.display = 'block';
}

