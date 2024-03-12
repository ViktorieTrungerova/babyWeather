class ClothesDeterminer {

    clothes = [
        {name: 'snowCoat', imageUrl: 'assets/img/snowCoat.png', tempFrom: null, tempTo: null, ageFrom: null, ageTo: null},
        {name: 'glove', imageUrl: 'assets/img/glove.png', tempFrom: 0, tempTo: 16, ageFrom: 1, ageTo: 5},
        {name: 'shirt', imageUrl: 'assets/img/shirt.png', tempFrom: 5, tempTo: 10, ageFrom: 1, ageTo: null},
        {name: 'shorts', imageUrl: 'assets/img/shorts.png', tempFrom: 5, tempTo: 10, ageFrom: 1, ageTo: null},
        {name: 'skirt', imageUrl: 'assets/img/skirt.png', tempFrom: 0, tempTo: 19, ageFrom: null, ageTo: null},
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