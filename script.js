const elts = {
	text1: document.getElementById("text1"),
	text2: document.getElementById("text2")
};


const texts = [
	"Why",
	"is",
	"this",
	"so",
	"satisfying",
	"to",
	"watch?"
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];


console.log("this works");
console.log(texts.length);
console.log(time);

function animate() {
	//requestAnimationFrame(animate);
	
	let newTime = new Date();
	let shouldIncrementIndex = cooldown > 0;
	let   dt = (newTime - time) / 1000;
	time = newTime;


    console.log(dt);
	
	cooldown -= dt;

    console.log(cooldown);
	
}

// Start the animation.
animate();


