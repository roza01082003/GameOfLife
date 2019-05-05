class StandardCritter extends LivingCreature {
	constructor(x, y, index) {
        super(x, y, index);
		this.energy = 8;
		this.power = 0;
		this.direction;
	}
	chooseNewCoordinates() {
		return super.chooseNewCoordinates();
	}

	chooseCell(character) {
		this.chooseNewCoordinates();
		return super.chooseCell(character);
	}

	move() {
		var x = this.chooseCell(0);
		var new_x = random(x);
		if (new_x) {
			this.energy--;
			var x = new_x[0];
			var y = new_x[1];
			matrix[y][x] = 2;
			matrix[this.y][this.x] = 0

			this.x = x;
			this.y = y;

			if (this.energy == 0) {
				this.die();
			}
		}
	}
	eat() {

		var x = this.chooseCell(1);
		var new_x = random(x);
		if (new_x) {
			var x = new_x[0];
			var y = new_x[1];

			matrix[y][x] = 2;
			matrix[this.y][this.x] = 0;

			this.x = x;
			this.y = y;
			for (var i in xotArr) {
				if (xotArr[i].x == x && xotArr[i].y == y) {
					xotArr.splice(i, 1);
				}
			}
		}
		if (this.energy >= 25) {
				this.mul();
				this.energy = 20;
			}
		else {
			this.move();
		}
	}
	die() {
		matrix[this.y][this.x] = 0;
		for (var i in xotakerArr) {
			if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
				xotakerArr.splice(i, 1);
				break;
			}
		}
	}
	mul() {
		this.energy++;
		var datarkVandakner = this.chooseCell(0);
		var norVandak = random(datarkVandakner);
		if (norVandak) {
			var norX = norVandak[0];
			var norY = norVandak[1];
			matrix[norY][norX] = 2;

			var norXot = new StandardCritter(norX, norY, this.index);
			xotakerArr.push(norXot);
			this.energy = 6;
		}
	}
}