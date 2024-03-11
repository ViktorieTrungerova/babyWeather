class ClothesDeterminer {

    clothes = [
        {name: 'snowCoat', imageUrl: '', tempFrom: null, tempTo: null, ageFrom: null, ageTo: null},
        {name: 'glove', imageUrl: '', tempFrom: 5, tempTo: 10, ageFrom: 1, ageTo: null},
        {name: 'shirt', imageUrl: ''},
        {name: 'shorts', imageUrl: ''},
        {name: 'skirt', imageUrl: ''},
    ];

    getSuitableClothes(temperature, age)
    {
        return [];
    }

}

export const determinator = new ClothesDeterminer();