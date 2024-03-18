class ClothesDeterminer {

    clothes = [
        {name: 'glove', imageUrl: 'assets/img/glove.png', tempFrom: null, tempTo: 13, ageFrom: 1, ageTo: null},
        {name: 'shirt', imageUrl: 'assets/img/shirt.png', tempFrom: 15, tempTo: null, ageFrom: null, ageTo: null},
        {name: 'shorts', imageUrl: 'assets/img/shorts.png', tempFrom: 20, tempTo: null, ageFrom: 1, ageTo: null},
        {name: 'skirt', imageUrl: 'assets/img/skirt.png', tempFrom: 20, tempTo: null, ageFrom: 1, ageTo: null},

        {name: 'snow boots', imageUrl: 'assets/img/boots.png', tempFrom: null, tempTo: 10, ageFrom: 1, ageTo: null},
        {name: 'long shirt', imageUrl: 'assets/img/longShirt.png', tempFrom: null, tempTo: 16, ageFrom: null, ageTo: null},
        {name: 'singlet', imageUrl: 'assets/img/singlet.png', tempFrom: null, tempTo: 16, ageFrom: null, ageTo: null},
        {name: 'snowsuit', imageUrl: 'assets/img/snowsuit.png', tempFrom: null, tempTo: 15, ageFrom: null, ageTo: null},
        {name: 'tights', imageUrl: 'assets/img/tights.png', tempFrom: null, tempTo: 15, ageFrom: null, ageTo: null},
        {name: 'winter hat', imageUrl: 'assets/img/winterHat.png', tempFrom: null, tempTo: 10, ageFrom: null, ageTo: null},
    ];

    getSuitableClothes(temperature, age) {
        return this.clothes.filter(function (clothesItem) {
            return (clothesItem.tempFrom <= temperature || clothesItem.tempFrom === null) &&
                (clothesItem.tempTo >= temperature || clothesItem.tempTo === null) &&
                (clothesItem.ageFrom <= age || clothesItem.ageFrom === null) &&
                (clothesItem.ageTo >= age ||  clothesItem.ageTo === null)

        })
    }

}

export const determinator = new ClothesDeterminer();