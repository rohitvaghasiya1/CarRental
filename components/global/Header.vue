<template>
  <!-- Header Start -->
  <header class="float-left w-full py-6 bg-white md:py-10">
    <div class="container px-6 mx-auto md:px-14">
      <div class="flex items-center justify-between pb-3 md:pb-0">
        <!-- Logo -->
        <div class="mr-0 text-center md:mr-16 md:w-36">
          <nuxt-link to="/" class="text-3xl font-bold text-primary">DM</nuxt-link>
        </div>
        <!-- Desktop Search -->
        <div class="hidden w-full md:mr-8 md:block">
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-5"
              @click="searchCars"
            >
              <!-- Heroicon name: solid/search -->
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="#596780"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 22L20 20"
                  stroke="#596780"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <input
              id="search"
              name="search"
              class="block w-full py-3 pr-3 text-sm bg-white border rounded-full border-Bordergray placeholder-Secondary pl-14 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Search something here"
              type="search"
              v-model="searchQuery"
              @keyup.enter="searchCars"
              
            />
          </div>
        </div>
        <!-- wishlist -->
        <a
          href="#"
          class="flex items-center justify-center border rounded-full h-11 w-11 border-Bordergray min-w-11 min-h-11"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.44 3.1001C14.63 3.1001 13.01 3.9801 12 5.3301C10.99 3.9801 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.6001 2 8.6901C2 9.8801 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.8801 22 8.6901C22 5.6001 19.51 3.1001 16.44 3.1001Z"
              fill="#596780"
            />
          </svg>
        </a>
      </div>
      <!-- Mobile Search -->
      <div class="block w-full md:hidden">
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-5"
            @click="searchCars"
          >
            <!-- Heroicon name: solid/search -->
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="#596780"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 22L20 20"
                stroke="#596780"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <input
            id="search"
            name="search"
            class="block w-full py-3 pr-3 text-sm bg-white border rounded-lg border-Bordergray placeholder-Secondary pl-14 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Search something here"
            type="search"
            v-model="searchQuery"
            @keyup.enter="searchCars"
          />
        </div>
      </div>
    </div>
  </header>
  <!-- Header End -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCarStore } from '@/store/CarStore';

const carStore = useCarStore();

carStore.fetchCars();
carStore.fetchPopularCars();

const searchQuery = ref('');

onMounted(() => {
  // Fetch cars when the component is mounted
  // carStore.fetchCars();
});

const searchCars = () => {
  carStore.fetchCars({ page: 1, q: searchQuery.value });
};
</script>