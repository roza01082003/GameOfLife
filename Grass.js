class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0;
    }
    chooseNewCoordinates() {
        return super.chooseNewCoordinates();
    }
    chooseCell(character) {
        this.chooseNewCoordinates();
        return super.chooseCell(character);
    }

    mul() {
        this.multiply++;
        var datarkVandakner = this.chooseCell(0);
        var norVandak = random(datarkVandakner);

        if (norVandak && this.multiply >= 8) {
            var norX = norVandak[0];
            var norY = norVandak[1];
            matrix[norY][norX] = 1;

            var norXot = new Grass(norX, norY, this.index);
            xotArr.push(norXot);
            this.multiply = 0;

        }
    }
}