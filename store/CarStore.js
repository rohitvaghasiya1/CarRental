// CarStore.js
import { defineStore } from 'pinia';

export const useCarStore = defineStore('car',{
  state: () => ({
    cars: [],
    favorites: [],
    popularCars: [],
    currentPage: 1,
    totalPages: 1,
  }),
  
  mutations: {
    setCars(state, cars) {
      state.cars = cars;
    },
    setPopularCars(state, popularCars) {
      state.popularCars = popularCars;
    },
    addFavorite(state, car) {
      state.favorites.push(car);
    },
    removeFavorite(state, carId) {
      state.favorites = state.favorites.filter((car) => car.id !== carId);
    },    
  },

  actions: {
    async fetchCars({ page = 1, q = '' } = {}) {
      try {
        const response = await fetch(`https://dm-assignment-commonshare.koyeb.app/api/cars?page=${page}&q=${q}`);
        const data = await response.json();
        if (!q) {
          this.cars = [...this.cars, ...data.data];           
        } else { 
          this.cars = data.data;           
        }
        
        this.currentPage = page;
        this.totalPages = data.meta.last_page;
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    },
    async fetchPopularCars() {
      try {
        const response = await fetch('https://dm-assignment-commonshare.koyeb.app/api/cars/popular');        
        const data = await response.json();
        this.popularCars = data;
      } catch (error) {
        console.error('Error fetching popular cars:', error);
      }
    },
    addToFavorites( car) {
      this.favorites.push(car)
    },
    removeFromFavorites( carId) {
      this.favorites = this.favorites.filter((car) => car.id !== carId);
    },
  },
  getters: {
    getFavoriteCars: (state) => state.favorites,
    isCarFavorite: (state) => (carId) => state.favorites.includes(carId),
  },
  
});
