const delay = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds);
  });
}

class Api {

  constructor() {
    this.houses = [
      {
        id: 1,
        cover: require('../assets/house1.jpg'),
        name: 'Casa Praia Grande',
        description: 'Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.',
        price: 'R$ 1400,00',
        new: true,
        offer: 25,
        nextToUser: false,
        isFavorite: false,
      },
      {
        id: 2,
        cover: require('../assets/house2.jpg'),
        name: 'Casa Ubatuba',
        description: 'Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.',
        price: 'R$ 1100,00',
        new: false,
        offer: 10,
        nextToUser: false,
        isFavorite: false,
      },
      {
        id: 3,
        cover: require('../assets/house3.jpg'),
        name: 'Casa Paraty',
        description: 'Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.',
        price: 'R$ 1330,00',
        new: false,
        offer: 15,
        nextToUser: false,
        isFavorite: false,
      },
      {
        id: 4,
        cover: require('../assets/house4.jpg'),
        name: 'Casa Floripa',
        description: 'Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.',
        price: 'R$ 1200,00',
        new: false,
        offer: 0,
        nextToUser: false,
        isFavorite: false,
      },
      {
        id: 5,
        cover: require('../assets/house5.jpg'),
        name: 'Casa Floripa',
        description: 'Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.',
        price: 'R$ 1200,00',
        new: true,
        offer: 0,
        nextToUser: true,
        isFavorite: false,
      },
      {
        id: 6,
        cover: require('../assets/house6.jpg'),
        name: 'Casa Floripa',
        description: 'Casa muito bonita na praia, com vista para o mar, aberta 24 horas.',
        price: 'R$ 1099,00',
        new: true,
        offer: 20,
        nextToUser: true,
        isFavorite: false,
      },
    ]
  }

  async getNew() {
    await delay(2000);
    const newHouses = this.houses.filter(house => house.new);
    return newHouses;
  }

  async getNextToUser() {
    await delay(2000);
    return this.houses.filter(house => house.nextToUser);
  }

  async getWithOffer() {
    await delay(2000);
    return this.houses.filter(house => house.offer > 0);
  }

  async getFavorites() {
    await delay(2000);
    return this.houses.filter(house => house.isFavorite);
  }

  async toggleFavorite(id) {
    await delay(2000);
    const house = this.houses.find(house => house.id === id);
    house.isFavorite = !house.isFavorite;
  }

  async getHouse(id) {
    await delay(3000);

    const house = this.houses.find(house => house.id === id);
    return house;
  }
  
  async filter(str) {
    await delay(300);
    return this.houses.filter(house => house.name.includes(str));
  }
}

const api = new Api();
api.getNew();

export { api };