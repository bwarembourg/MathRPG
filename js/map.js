var maxRight = 20;
var maxDown = 14;

var levelDesignConf = {
	'0' : {
		'begin' : 42,
		'items' : { // pointer : [img, add x, add y]
			'161' : ["donjon_dalle_1", 0, 0],
			'237' : ["donjon_dalle_2", 0, 0],
			'250' : ["donjon_dalle_8", 0, 0],
			'70' : ["armory", 0, -25],
			'101' : ["tableau", 7, 3]
		},
		'doors' : { // pointer : [open/close, img, sequence, img]
			'22' : [1, "donjon_door", -1, false],
			'36' : [0, "donjon_doorToCastle", 1, "door_close42"]
		},
		'floor' : { // pointer : [type, id]
			'56' : ["doors", 36],
			'71' : ["items", 70],
			'90' : ["items", 70],
			'121' : ["items", 101]
		},
		'png' : false
	},
	'1' : {
		'begin' : 56,
		'items' : false,
		'doors' : {
			'36' : [1, "donjon_doorToCastle", 0, false],
			'186' : [0, "donjon_doorToCastle", 2, false]
		},
		'floor' : {
			'56' : ["doors", 36],
			'206' : ["doors", 186]
		},
		'png' :  { // pointer : [id, img]
			'157' : ["newton_face"]
		}
	},
	'2' : {
		'begin' : 206,
		'items' : { // pointer : [img, add x, add y]
			'53' : ["colone", 0, -44],
			'55' : ["colone", 0, -44],
			'73' : ["colone", 0, -44],
			'75' : ["colone", 0, -44]
		},
		'doors' : {
			'34' : [0, "castle_door", 3, false],
			'186' : [1, "castle_doorToDonjon", 1, false]
		},
		'floor' : {
			'206' : ["doors", 186]
		},
		'png' :  { // pointer : [id, img]
			'74' : ["adam_face"]
		}
	}
};
var levelDesignInteract = {
	'0': {
	// floor, items | id : [type, txt description, txt win, txt error, on/off]
	// png | id : [type, id png]
		'56' : ["floor",
			"Vous remarquez une grande porte",
			"La porte est ouverte",
			"La porte est vérouillée",
			false],
		'161' : ["items",
			"Vous remarquez une dalle au sol",
			"Vous actionnez la dalle et entendez un cliqueti",
			false],
		'237' : ["items",
			"Vous remarquez une dalle au sol",
			"Vous actionnez la dalle et entendez un cliqueti",
			56],
		'250' : ["items",
			"Vous remarquez une dalle au sol",
			"Vous actionnez la dalle et entendez un cliqueti",
			false],
		'71' : ["items",
			"C'est une armure poussièreuse",
			false,
			false],
		'90' : ["items",
			"C'est une armure poussièreuse",
			false,
			false],
		'121' : ["items",
			"C'est un tableau représentant une pomme",
			false,
			false]
	},
	'1': {
		'56' : ["floor",
			"Vous remarquez une grande porte",
			"La porte est ouverte",
			false,
			false],
		'206' : ["floor",
			"Vous remarquez une grande porte",
			"La porte est ouverte",
			"La porte est vérouillée",
			false],
		'156' : ["png",
			"newton"],
		'177' : ["png",
			"newton"]
	},
	'2': {
		'206' : ["floor",
			"Vous remarquez une grande porte",
			"La porte est ouverte",
			"La porte est vérouillée",
			false],
		'94' : ["png",
			"adam"]
	},
};
var levelDesign = [
	// Sequence Donjon
	[19,8,8,8,8,8,8,20,0,0,0,0,0,19,8,8,8,20,0,0, // 0-19
	9,3,0,3,3,3,3,10,0,19,8,8,8,12,3,3,0,10,0,0, // 20-39
	9,1,1,1,1,1,1,13,8,12,3,3,3,7,1,1,1,10,0,0, // 40-59
	9,1,1,1,1,1,1,5,3,7,27,1,1,1,1,1,18,26,0,0, // 60-79
	25,16,17,1,1,1,1,1,1,1,1,1,1,1,1,1,5,10,0,0, // 80-99
	9,3,7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10,0,0, // 100-119
	9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,18,26,0,0, // 120-139
	9,1,1,1,1,1,15,11,14,1,1,1,1,1,1,1,5,13,8,20, // 140-159
	9,1,1,1,1,15,22,0,21,14,1,1,1,1,1,1,1,5,3,10, // 160-179
	21,14,1,1,1,13,20,0,19,12,1,1,1,1,1,1,1,1,1,10, // 180-199
	0,9,1,1,1,4,13,8,12,6,1,1,15,11,11,14,1,1,1,10, // 200-219
	0,21,11,14,1,1,4,2,6,1,1,1,10,0,0,9,1,1,15,22, // 220-239
	0,0,0,21,14,1,1,1,1,1,1,15,22,0,0,21,11,11,22,0, // 240-259
	0,0,0,0,21,11,11,11,11,11,11,22,0,0,0,0,0,0,0,0], // 260-279
	// Sequence Newton
	[0,0,0,0,0,0,0,0,0,0,0,19,8,8,8,8,8,20,0,0, // 0-19
	0,0,0,0,0,0,0,0,0,0,0,9,3,3,3,3,0,10,0,0, // 20-39
	0,0,0,0,0,0,0,0,0,0,0,9,1,1,1,1,1,10,0,0, // 40-59
	0,0,0,0,0,0,0,0,0,0,0,9,1,1,1,1,15,22,0,0, // 60-79
	0,0,0,0,0,0,0,0,19,8,8,12,1,1,1,1,10,0,0,0, // 80-99
	0,0,0,0,0,0,0,0,9,3,3,7,1,1,1,1,13,8,20,0, // 100-119
	0,0,0,0,0,0,0,0,9,1,1,1,1,1,1,1,5,3,10,0, // 120-139
	0,0,0,0,0,0,0,0,9,1,1,1,1,1,1,1,1,27,10,0, // 140-159
	0,0,0,0,0,19,8,8,12,1,1,1,1,1,1,1,1,1,10,0, // 160-179
	0,0,0,0,0,9,0,2,6,1,1,1,1,1,1,1,1,1,10,0, // 180-199
	0,0,0,0,0,9,1,1,1,1,1,1,1,1,1,1,1,1,10,0, // 200-219
	0,0,0,0,0,9,1,1,1,1,1,1,1,1,1,1,1,1,10,0, // 220-239
	0,0,0,0,0,21,11,11,11,11,11,11,11,11,11,11,11,11,22,0, // 240-259
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // 260-279
	// Sequence Adam
	[28,28,28,28,28,28,28,28,28,28,28,28,40,33,33,33,41,28,28,28,
	28,28,28,28,28,28,28,28,28,28,28,28,34,53,28,53,35,28,28,28,
	28,28,28,28,28,28,28,28,28,28,28,40,37,30,29,30,38,41,28,28,
	28,28,28,28,28,28,28,28,28,28,28,34,53,30,30,30,53,35,28,28,
	28,28,28,28,28,28,28,28,28,28,28,34,29,29,29,29,29,35,28,28,
	28,28,28,28,28,28,28,28,28,28,28,34,51,50,50,50,52,35,28,28,
	28,28,28,28,28,28,28,28,40,33,33,37,48,47,47,47,49,38,41,28,
	28,28,28,28,28,28,28,28,34,53,53,53,45,44,44,44,46,53,35,28,
	28,28,28,28,28,40,33,33,37,29,29,29,29,29,29,29,29,29,35,28,
	28,28,28,28,28,34,28,53,53,29,29,29,29,29,29,29,29,29,35,28,
	28,28,28,28,28,34,29,29,29,29,29,29,29,29,29,29,29,29,35,28,
	28,28,28,28,28,34,29,29,29,29,29,29,29,29,29,29,29,29,35,28,
	28,28,28,28,28,42,36,36,36,36,36,36,36,36,36,36,36,36,43,28,
	28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28]
];
var levelDesignPng = {
	'newton': {
		'dial' : [
			["Au secours bel ami !", 1],
			["Un monstre répugnant me tourmente !", 2],
			["Je vous en conjure...", 3],
			["Faîtes de cette abomination un pur jus !", 4],
			["Pressez-vous donc !", 5],
			["ou vous me verrez tomber dans les pommes !", false]
		],
		'action' : [
			["doors", 186],
			["dial", "dial2"]
		],
		'dial2' : [
			["Merci de m'avoir libéré !", 1],
			["Voici la clef de la porte et un parchemin.", 2],
			["Ils vous seront très utiles !", false]
		],
	},
	'adam': {
		'dial' : [
			["Vous avez liberez Newton !", 1],
			["À cause de sa découverte, j'ai passé...", 2],
			["des CENTAINES d'années dans un musée  !", 3],
			["à peler derrière une vitrine !", 4],
			["Tout ça pour quoi ?", 5],
			["Pour démontrer que les pommes tombent par terre ?", 6],
			["Tu nous as déjà vu tomber dans le ciel auparavant ?!", 7],
			["Le destin d'une pomme est d'être délicatement mangé !", 8],
			["Avec amour ! Et il m'en a privé.", 9],
			["Tu vas payer à sa place, Margoulin !", false],
		],
		'action' : [
			["battle", false]
		]
	}
};

var levelDesignTiles = [ // [description, img, bool move]
	["donjon_void", "donjon_void", 0], // 0
	["donjon_floor", "donjon_floor", 1], // 1
	["donjon_wall", "donjon_wall", 0], // 2
	["donjon_wallClean", "donjon_wallClean", 0], // 3
	["donjon_wallLeft", "donjon_wallLeft", 0], // 4
	["donjon_wallLeftClean", "donjon_wallLeftClean", 0], // 5
	["donjon_wallRight", "donjon_wallRight", 0], // 6
	["donjon_wallRightClean", "donjon_wallRightClean", 0], // 7
	["donjon_Wall_Top", "donjon_Wall_Top", 0], // 8
	["donjon_Wall_Left", "donjon_Wall_Left", 0], // 9
	["donjon_Wall_Right", "donjon_Wall_Right", 0], // 10
	["donjon_Wall_Bottom", "donjon_Wall_Bottom", 0], // 11
	["donjon_Wall_TopLeft", "donjon_Wall_TopLeft", 0], // 12
	["donjon_Wall_TopRight", "donjon_Wall_TopRight", 0], // 13
	["donjon_Wall_BottomLeft", "donjon_Wall_BottomLeft", 0], // 14
	["donjon_Wall_BottomRight", "donjon_Wall_BottomRight", 0], // 15
	["donjon_Wall_TopBottom", "donjon_Wall_TopBottom", 0], // 16
	["donjon_Wall_TopBottomLeft", "donjon_Wall_TopBottomLeft", 0], // 17
	["donjon_Wall_TopBottomRight", "donjon_Wall_TopBottomRight", 0], // 18
	["donjon_WallCorner_TopLeft", "donjon_WallCorner_TopLeft", 0], // 19
	["donjon_WallCorner_TopRight", "donjon_WallCorner_TopRight", 0], // 20
	["donjon_WallCorner_BottomLeft", "donjon_WallCorner_BottomLeft", 0], // 21
	["donjon_WallCorner_BottomRight", "donjon_WallCorner_BottomRight", 0], // 22
	["donjon_WallCorner_TopRightLeft", "donjon_WallCorner_TopRightLeft", 0], // 23
	["donjon_WallCorner_BottomRightLeft", "donjon_WallCorner_BottomRightLeft", 0], // 24
	["donjon_WallCorner_TopBottomLeft", "donjon_WallCorner_TopBottomLeft", 0], // 25
	["donjon_WallCorner_TopBottomRight", "donjon_WallCorner_TopBottomRight", 0], // 26
	["donjon_floor_nomove", "donjon_floor", 0], // 27
	["castle_void", "castle_void", 0], // 28
	["castle_floor", "castle_floor", 1], // 29
	["castle_floor_nomove", "castle_floor", 0], // 30
	["castle_void", "castle_void", 0], // 31
	["castle_Wall_BottomRight", "castle_Wall_BottomRight", 0], // 32
	["castle_Wall_Top", "castle_Wall_Top", 0], // 33
	["castle_Wall_Left", "castle_Wall_Left", 0], // 34
	["castle_Wall_Right", "castle_Wall_Right", 0], // 35
	["castle_Wall_Bottom", "castle_Wall_Bottom", 0], // 36
	["castle_Wall_TopLeft", "castle_Wall_TopLeft", 0], // 37
	["castle_Wall_TopRight", "castle_Wall_TopRight", 0], // 38
	["castle_Wall_BottomLeft", "castle_Wall_BottomLeft", 0], // 39
	["castle_WallCorner_TopLeft", "castle_WallCorner_TopLeft", 0], // 40
	["castle_WallCorner_TopRight", "castle_WallCorner_TopRight", 0], // 41
	["castle_WallCorner_BottomLeft", "castle_WallCorner_BottomLeft", 0], // 42
	["castle_WallCorner_BottomRight", "castle_WallCorner_BottomRight", 0], // 43
	["castle_stair_down", "castle_stair_down", 1], // 44
	["castle_stair_downLeft", "castle_stair_downLeft", 1], // 45
	["castle_stair_downRight", "castle_stair_downRight", 1], // 46
	["castle_stair_up", "castle_stair_up", 1], // 47
	["castle_stair_upLeft", "castle_stair_upLeft", 1], // 48
	["castle_stair_upRight", "castle_stair_upRight", 1], // 49
	["castle_staired", "castle_staired", 1], // 50
	["castle_staired_Left", "castle_staired_Left", 1], // 51
	["castle_staired_Right", "castle_staired_Right", 1], // 52
	["castle_wall", "castle_wall", 0] // 53
];
var img = {
	// Tiles donjon
	'donjon_void' : new Image(),
	'donjon_floor' : new Image(),
	'donjon_dalle_1' : new Image(),
	'donjon_dalle_2' : new Image(),
	'donjon_dalle_8' : new Image(),
	'donjon_wall' : new Image(),
	'donjon_wallClean' : new Image(),
	'donjon_wallLeft' : new Image(),
	'donjon_wallLeftClean' : new Image(),
	'donjon_wallRight' : new Image(),
	'donjon_wallRightClean' : new Image(),
	'donjon_door' : new Image(),
	'donjon_doorToCastle' : new Image(),
	'donjon_Wall_Top' : new Image(),
	'donjon_Wall_Left' : new Image(),
	'donjon_Wall_Right' : new Image(),
	'donjon_Wall_Bottom' : new Image(),
	'donjon_Wall_TopLeft' : new Image(),
	'donjon_Wall_TopRight' : new Image(),
	'donjon_Wall_BottomLeft' : new Image(),
	'donjon_Wall_BottomRight' : new Image(),
	'donjon_Wall_TopBottom' : new Image(),
	'donjon_Wall_TopBottomLeft' : new Image(),
	'donjon_Wall_TopBottomRight' : new Image(),
	'donjon_WallCorner_TopLeft' : new Image(),
	'donjon_WallCorner_TopRight' : new Image(),
	'donjon_WallCorner_BottomLeft' : new Image(),
	'donjon_WallCorner_BottomRight' : new Image(),
	'donjon_WallCorner_TopRightLeft' : new Image(),
	'donjon_WallCorner_BottomRightLeft' : new Image(),
	'donjon_WallCorner_TopBottomLeft' : new Image(),
	'donjon_WallCorner_TopBottomRight' : new Image(),
	// Tiles castle
	'castle_void' : new Image(),
	'castle_floor' : new Image(),
	'castle_wall' : new Image(),
	'castle_door' : new Image(),
	'castle_doorToDonjon' : new Image(),
	'castle_Wall_Top' : new Image(),
	'castle_Wall_Left' : new Image(),
	'castle_Wall_Right' : new Image(),
	'castle_Wall_Bottom' : new Image(),
	'castle_Wall_TopLeft' : new Image(),
	'castle_Wall_TopRight' : new Image(),
	'castle_Wall_BottomLeft' : new Image(),
	'castle_Wall_BottomRight' : new Image(),
	'castle_WallCorner_TopLeft' : new Image(),
	'castle_WallCorner_TopRight' : new Image(),
	'castle_WallCorner_BottomLeft' : new Image(),
	'castle_WallCorner_BottomRight' : new Image(),
	'castle_stair_down' : new Image(),
	'castle_stair_downLeft' : new Image(),
	'castle_stair_downRight' : new Image(),
	'castle_stair_up' : new Image(),
	'castle_stair_upLeft' : new Image(),
	'castle_stair_upRight' : new Image(),
	'castle_staired' : new Image(),
	'castle_staired_Left' : new Image(),
	'castle_staired_Right' : new Image(),
	// Items
	'armory' : new Image(),
	'tableau' : new Image(),
	'castle_window' : new Image(),
	'colone' : new Image(),
	// Others
	'dial_box_small' : new Image(),
	'dial_box_big' : new Image(),
	'key_enter' : new Image(),
	'key_ctrl' : new Image(),
	'warning' : new Image(),
	// ArtWork
	'door_close42' : new Image(),
	// Characters
	'heros_face' : new Image(),
	'heros_back' : new Image(),
	'heros_right' : new Image(),
	'heros_left' : new Image(),
	'newton_face' : new Image(),
	'adam_face' : new Image()
}
//donjon
img.donjon_void.src = "img/donjon_void.png";
img.donjon_floor.src = "img/donjon_floor.png";
img.donjon_dalle_1.src = "img/donjon_dalle_1.png";
img.donjon_dalle_2.src = "img/donjon_dalle_2.png";
img.donjon_dalle_8.src = "img/donjon_dalle_8.png";
img.donjon_wall.src = "img/donjon_wall.png";
img.donjon_wallClean.src = "img/donjon_wallClean.png";
img.donjon_wallLeft.src = "img/donjon_wallLeft.png";
img.donjon_wallLeftClean.src = "img/donjon_wallLeftClean.png";
img.donjon_wallRight.src = "img/donjon_wallRight.png";
img.donjon_wallRightClean.src = "img/donjon_wallRightClean.png";
img.donjon_door.src = "img/donjon_door.png";
img.donjon_doorToCastle.src = "img/donjon_doorToCastle.png";
img.donjon_Wall_Top.src = "img/donjon_Wall_Top.png";
img.donjon_Wall_Left.src = "img/donjon_Wall_Left.png";
img.donjon_Wall_Right.src = "img/donjon_Wall_Right.png";
img.donjon_Wall_Bottom.src = "img/donjon_Wall_Bottom.png";
img.donjon_Wall_TopLeft.src = "img/donjon_Wall_TopLeft.png";
img.donjon_Wall_TopRight.src = "img/donjon_Wall_TopRight.png";
img.donjon_Wall_BottomLeft.src = "img/donjon_Wall_BottomLeft.png";
img.donjon_Wall_BottomRight.src = "img/donjon_Wall_BottomRight.png";
img.donjon_Wall_TopBottom.src = "img/donjon_Wall_TopBottom.png";
img.donjon_Wall_TopBottomLeft.src = "img/donjon_Wall_TopBottomLeft.png";
img.donjon_Wall_TopBottomRight.src = "img/donjon_Wall_TopBottomRight.png";
img.donjon_WallCorner_TopLeft.src = "img/donjon_WallCorner_TopLeft.png";
img.donjon_WallCorner_TopRight.src = "img/donjon_WallCorner_TopRight.png";
img.donjon_WallCorner_BottomLeft.src = "img/donjon_WallCorner_BottomLeft.png";
img.donjon_WallCorner_BottomRight.src = "img/donjon_WallCorner_BottomRight.png";
img.donjon_WallCorner_TopRightLeft.src = "img/donjon_WallCorner_TopRightLeft.png";
img.donjon_WallCorner_BottomRightLeft.src = "img/donjon_WallCorner_BottomRightLeft.png";
img.donjon_WallCorner_TopBottomLeft.src = "img/donjon_WallCorner_TopBottomLeft.png";
img.donjon_WallCorner_TopBottomRight.src = "img/donjon_WallCorner_TopBottomRight.png";
//castle
img.castle_void.src = "img/castle_void.png";
img.castle_floor.src = "img/castle_floor.png";
img.castle_wall.src = "img/castle_wall.png";
img.castle_door.src = "img/castle_door.png";
img.castle_doorToDonjon.src = "img/castle_doorToDonjon.png";
img.castle_Wall_Top.src = "img/castle_Wall_Top.png";
img.castle_Wall_Left.src = "img/castle_Wall_Left.png";
img.castle_Wall_Right.src = "img/castle_Wall_Right.png";
img.castle_Wall_Bottom.src = "img/castle_Wall_Bottom.png";
img.castle_Wall_TopLeft.src = "img/castle_Wall_TopLeft.png";
img.castle_Wall_TopRight.src = "img/castle_Wall_TopRight.png";
img.castle_Wall_BottomLeft.src = "img/castle_Wall_BottomLeft.png";
img.castle_Wall_BottomRight.src = "img/castle_Wall_BottomRight.png";
img.castle_WallCorner_TopLeft.src = "img/castle_WallCorner_TopLeft.png";
img.castle_WallCorner_TopRight.src = "img/castle_WallCorner_TopRight.png";
img.castle_WallCorner_BottomLeft.src = "img/castle_WallCorner_BottomLeft.png";
img.castle_WallCorner_BottomRight.src = "img/castle_WallCorner_BottomRight.png";
img.castle_stair_down.src = "img/castle_stair_down.png";
img.castle_stair_downLeft.src = "img/castle_stair_downLeft.png";
img.castle_stair_downRight.src = "img/castle_stair_downRight.png";
img.castle_stair_up.src = "img/castle_stair_up.png";
img.castle_stair_upLeft.src = "img/castle_stair_upLeft.png";
img.castle_stair_upRight.src = "img/castle_stair_upRight.png";
img.castle_staired.src = "img/castle_staired.png";
img.castle_staired_Left.src = "img/castle_staired_Left.png";
img.castle_staired_Right.src = "img/castle_staired_Right.png";
// Items
img.armory.src = "img/armory.png";
img.tableau.src = "img/tableau.png";
img.castle_window.src = "img/castle_window.png";
img.colone.src = "img/colone.png";
// Others
img.dial_box_small.src = "img/dial_box_small.png";
img.dial_box_big.src = "img/dial_box_big.png";
img.key_enter.src = "img/key_enter.png";
img.key_ctrl.src = "img/key_ctrl.png";
img.warning.src = "img/warning.png";
// ArtWork
img.door_close42.src = "img/door_close42.png";
// Characters
img.heros_face.src = "img/heros_face.png";
img.heros_back.src = "img/heros_back.png";
img.heros_right.src = "img/heros_right.png";
img.heros_left.src = "img/heros_left.png";
img.newton_face.src = "img/newton_face.png";
img.adam_face.src = "img/adam_face.png";

var pointer = 0;
var sequence = 0;
 // [id Interact, img content, img box, x, y, txt x, txt y, max txt widht, txt, interact]
var saveBox = [false, false, false, 0, 0, 0, 0, 0, "null", 0];
var action = 0;
var sequencement = 0;
var dialogue = "dial";
var dial_pointer = 0;
var new_dial = 0;

function mapping() {
	while (pointer < (maxRight * maxDown)) {
		x = pointer % maxRight;
		y = (pointer - x) / maxRight;
		x = x * 25;
		y = y * 25;
		
		ctx.drawImage(img[levelDesignTiles[levelDesign[sequence][pointer]][1]], x, y);

		if (levelDesignConf[sequence].items[pointer]) {
			img_id = levelDesignConf[sequence].items[pointer][0];
			img_x = levelDesignConf[sequence].items[pointer][1];
			img_y = levelDesignConf[sequence].items[pointer][2];
			ctx.drawImage(img[img_id], x + img_x, y + img_y);
		}

		if (levelDesignConf[sequence].doors[pointer]) {
			ctx.drawImage(img[levelDesignConf[sequence].doors[pointer][1]], x, y);
		}

		if (levelDesignConf[sequence].png[pointer]) {
			ctx.drawImage(img[levelDesignConf[sequence].png[pointer][0]], x, y);
		}
		pointer++;
	}
	pointer = 0;
}

var input = 0;
function getInput(e) {
	input = window.event ? e.keyCode : e.which;
}

var KEY_DOWN = 40, KEY_UP = 38, KEY_LEFT = 37, KEY_RIGHT = 39, KEY_ENTER = 13, KEY_CTRL = 17;
function characters() {
	window.document.onkeydown = getInput;
	
	begin = levelDesignConf[sequence].begin;
	x = levelDesignConf[sequence].begin % maxRight;
	y = (levelDesignConf[sequence].begin - x) / maxRight;
	switch(input) {
		case KEY_RIGHT:
			xNew = (begin + 1) % maxRight;
			yNew = (begin + 1 - xNew) / maxRight;
			if (xNew < maxRight && yNew == y) {
				if (levelDesignTiles[levelDesign[sequence][(begin + 1)]][2] > 0) {
					levelDesignConf[sequence].begin++;
					cancel();
				}
			}
		break;
		case KEY_LEFT:
			xNew = (begin - 1) % maxRight;
			yNew = (begin - 1 - xNew) / maxRight;
			if (xNew >= 0 && yNew == y) {
				if (levelDesignTiles[levelDesign[sequence][(begin - 1)]][2] > 0) {
					levelDesignConf[sequence].begin--;
					cancel();
				}
			}
		break;
		case KEY_DOWN:
			if (begin + maxRight < (maxDown * maxRight)) {
				if (levelDesignTiles[levelDesign[sequence][(begin + maxRight)]][2] > 0) {
					levelDesignConf[sequence].begin+=maxRight;
					cancel();
				}
			}
		break;
		case KEY_UP:
			if (begin - maxRight >= 0) {
				if (levelDesignTiles[levelDesign[sequence][(begin - maxRight)]][2] > 0) {
					levelDesignConf[sequence].begin-=maxRight;
					cancel();
				}
			}
		break;
		case KEY_ENTER:
			if (levelDesignInteract[sequence][levelDesignConf[sequence].begin]) {
				interact();
			}
		break;
		case KEY_CTRL:
			cancel();
			action = 0;
		break;
	}
	input = 0;

	x = x * 25;
	y = y * 25;

	ctx.drawImage(img.heros_face, x, y);
	warning();
	loadBox();
}

function cancel() {
	saveBox = [false, false, false, 0, 0, 0, 0, 0, "null", 0];
	action = 0;
	new_dial = 0;
	dial_pointer = 0;
	dialogue = "dial";
}

function warning() {
	if (levelDesignInteract[sequence][levelDesignConf[sequence].begin]) {
		begin = levelDesignConf[sequence].begin;
		x = levelDesignConf[sequence].begin % maxRight;
		y = (levelDesignConf[sequence].begin - x) / maxRight;
		x = x * 25;
		y = y * 25;

		ctx.drawImage(img.warning, x + 24, y - 16);
	}
}

function interact() {
	begin = levelDesignConf[sequence].begin;
	type = levelDesignInteract[sequence][begin][0];
	switch(type) {
		case "floor":
			floorType = levelDesignConf[sequence].floor[begin][0];
			floorId = levelDesignConf[sequence].floor[begin][1];
			switch(floorType) {
				case "doors":
					if (sequencement == 1) {
						gosequence = levelDesignConf[sequence].doors[floorId][2];
						sequencement = 0;
						cancel();
						levelDesignConf[gosequence].begin = begin;
						sequence = gosequence;
					} else {
						if (levelDesignConf[sequence].doors[floorId][0] == 0) // porte fermee
						{
							if (action == 0) {
								txt = levelDesignInteract[sequence][begin][1];
								action = 1;
								interaction = 1;
							} else {
								txt = levelDesignInteract[sequence][begin][3];
								interaction = 0;
							}
							saveBox = [begin, levelDesignConf[sequence].doors[floorId][3], img.dial_box_big, 56, 80, 56 + 20, 350 - 70, 185, txt, interaction];
						} else {  // porte ouverte
							dial_box = img.dial_box_small;
							if (action == 0) {
								txt = levelDesignInteract[sequence][begin][1];
								action = 1;
								interaction = 1;
							} else {
								txt = levelDesignInteract[sequence][begin][2];
								interaction = 1;
								sequencement = 1;
							}
							saveBox = [begin, false, img.dial_box_small, 49, 225, 49 + 20, 225 + 30, 185, txt, interaction];
						}
					}
				break;
			}
		break;
		case "items":
			itemsDependancy = levelDesignInteract[sequence][begin][3];
			txt =  levelDesignInteract[sequence][begin][1];
			if (levelDesignInteract[sequence][begin][2] != false)
			{
				if (action == 0) {
					txt = levelDesignInteract[sequence][begin][1];
					action = 1;
					interaction = 1;
				} else {
					txt = levelDesignInteract[sequence][begin][2];
					if (itemsDependancy) {
						floorType = levelDesignConf[sequence].floor[itemsDependancy][0];
						floorId = levelDesignConf[sequence].floor[itemsDependancy][1];
						switch(floorType) {
							case "doors":
								if (levelDesignConf[sequence].doors[floorId][0] == 0) { // porte fermee
									levelDesignConf[sequence].doors[floorId][0] = 1;
								}
							break;
						}
					}
					interaction = 0;
				}
			} else {
				interaction = 0;
			}
			saveBox = [begin, false, img.dial_box_small, 49, 225, 49 + 20, 225 + 30, 185, txt, interaction];
		break;
		case "png":
			png = levelDesignInteract[sequence][begin][1];
			if (action == 0 || new_dial == 1) {
				if (levelDesignPng[png][dialogue][dial_pointer][1] != false) {
					txt = levelDesignPng[png][dialogue][dial_pointer][0];
					dial_pointer = levelDesignPng[png][dialogue][dial_pointer][1];
					saveBox = [begin, false, img.dial_box_small, 49, 225, 49 + 20, 225 + 30, false, txt, 1];
				} else {
					txt = levelDesignPng[png][dialogue][dial_pointer][0];
					saveBox = [begin, false, img.dial_box_small, 49, 225, 49 + 20, 225 + 30, false, txt, 1];
					dial_pointer = 0;
					if (new_dial == 0) {
						action = 1;
					} else {
						new_dial = 0;
						dialogue = "dial";
						cancel();
					}
				}
			}
			if (action == 1) {
				i = 0;
				while (levelDesignPng[png].action[i]) {
					png_type = levelDesignPng[png].action[i][0];
					png_value = levelDesignPng[png].action[i][1];
					switch(png_type) {
						case "doors":
							levelDesignConf[sequence].doors[png_value][0] = 1;
						break;
						case "dial":
							dialogue = png_value;
							new_dial = 1;
						break;
						case "battle":
							location.replace("battle.html");
						break;
					}
					i++;
				}
			}
		break;
	}
}

function loadBox()
{
	begin = levelDesignConf[sequence].begin;
	if (saveBox[0] && saveBox[0] != false) {
		ctx.drawImage(saveBox[2], saveBox[3], saveBox[4]);
		ctx.fillStyle = "white";
		ctx.font = "14px Arial";
		ctx.fillText(saveBox[8], saveBox[5], saveBox[6]);
		if (saveBox[9] == 1) {
			ctx.fillText("Annulé",500 - 130 - 53*2 - 83, 350 - 20 - 9);
			ctx.fillText("Intérargir", 500 - 100 - 53*2, 350 - 20 - 9);
			ctx.drawImage(img.key_ctrl, 500 - 70 - 53*2 - 83, 350 - 20 - 25);
			ctx.drawImage(img.key_enter, 500 - 80 - 53, 350 - 20 - 25);
		} else {
			ctx.fillText("Annulé",500 - 100 - 83, 350 - 20 - 9);
			ctx.drawImage(img.key_ctrl, 500 - 40 - 83, 350 - 20 - 25);
		}
		if (saveBox[1] != false) {
			ctx.drawImage(img[saveBox[1]], 134, 80 + 20);
		}
	}	
}