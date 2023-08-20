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

/*
function doMorph() {
	morph -= cooldown;
	cooldown = 0;
	
	let fraction = morph / morphTime;
	
	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}

*/



function setMorph() {

	console.log("setMorph called")
	fraction = 0.5;
	textIndex += 1;
	elts.text1.textContent = texts[textIndex % texts.length];
	elts.text2.textContent = texts[(textIndex + 1) % texts.length];

	
	// elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	// elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	fraction = 1 - fraction;
	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	


}

function doCooldown() {
	
	elts.text2.style.filter = "";
	elts.text2.style.opacity = "100%";
	
	elts.text1.style.filter = "";
	elts.text1.style.opacity = "0%";
}

const timerID=setInterval(setMorph,1000);
const timerID2=setInterval(doCooldown,1300);

clearInterval(timerID);
clearInterval(timerID2);


/*

function animate() {
	//requestAnimationFrame(animate);
	
	let newTime = new Date();
	let shouldIncrementIndex = cooldown > 0;
	let   dt = (newTime - time) / 1000;
	time = newTime;
	
	cooldown -= dt;

	if (cooldown <= 0) {
		if (shouldIncrementIndex) {
			textIndex++;
		}
		
		doMorph();
	} else {
		doCooldown();
	}

}
*/


// Start the animation.
//animate();




