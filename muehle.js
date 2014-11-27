// Muehle Game Logic for Javascript
// Oldschool "Crank-That" Dirty-Shit Edition
// by R. Barisic

function addToElementById(id, additive) {
	var mem = document.getElementById(id).innerHTML;
	document.getElementById(id).innerHTML = mem + additive;
	return true;
}

function clearElementById(id) {
	document.getElementById(id).innerHTML = ' ';
	return true;
}

function Feld(x, y, oben, rechts, unten, links, number) {
	this.x = x;
	this.y = y;
	this.id = number;
	this.number = number;
	this.besetzt = false;

	this.oben = oben;
	this.rechts = rechts;
	this.unten = unten;
	this.links = links;
}

var Spielbrett = {};

// Spielbrett erstellen. Es gibt 7 x 7 Felder und jeweils immer nur
// 3 Steine auf einer Ebene.
// Zähler fängt an bei: 1.

//Von links nach rechts, von oben nach unten
Spielbrett[1] = new Feld(1,1,false,true,true,false,1);
Spielbrett[2] = new Feld(4,1,false,true,false,true,2);
Spielbrett[3] = new Feld(7,1,false,false,true,true,3);

Spielbrett[4] = new Feld(2,2,false,true,true,false,4);
Spielbrett[5] = new Feld(4,2,true,true,true,true,5);
Spielbrett[6] = new Feld(6,2,false,false,true,true,6);

Spielbrett[7] = new Feld(3,3,false,true,true,false,7);
Spielbrett[8] = new Feld(4,3,true,true,false,true,8);
Spielbrett[9] = new Feld(5,3,false,false,true,true,9);

Spielbrett[10] = new Feld(1,4,true,true,true,false,10);
Spielbrett[11] = new Feld(2,4,true,true,true,true,11);
Spielbrett[12] = new Feld(3,4,true,false,true,true,12);
Spielbrett[13] = new Feld(5,4,true,true,true,false,13);
Spielbrett[14] = new Feld(6,4,true,true,true,true,14);
Spielbrett[15] = new Feld(7,4,true,false,true,true,15);

Spielbrett[16] = new Feld(3,5,true,true,false,false,16);
Spielbrett[17] = new Feld(4,5,false,true,false,true,17);
Spielbrett[18] = new Feld(5,5,true,false,false,true,18);

Spielbrett[19] = new Feld(2,6,true,true,false,false,19);
Spielbrett[20] = new Feld(4,6,true,true,true,true,20);
Spielbrett[21] = new Feld(6,6,true,false,false,true,21);

Spielbrett[22] = new Feld(1,7,true,true,false,false,22);
Spielbrett[23] = new Feld(4,7,true,true,false,true,23);
Spielbrett[24] = new Feld(7,7,true,false,false,true,24);