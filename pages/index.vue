<template>
  <div class="float-left w-full md:pb-16 pb-6 bg-BodyBg pt-8">
    <!-- Best Platform For Car Rental -->
    <div class="w-full float-start pb-5">
      <div class="container px-6 mx-auto md:px-14">
        <div class="grid grid-cols-1 gap-3 lg:grid-cols-2">
          <div
            class="md:px-10 md:py-6 p-4 text-left bg-carRental bg-cover bg-no-repeat bg-center w-full bg-skyBlue rounded-xl"
          >
            <h3
              class="text-base not-italic font-semibold text-left text-white lg:text-4xl md:text-2xl capitalize"
            >
              The Best Platform
              <span
                class="inline not-italic font-semibold text-left text-white capitalize lg:text-4xl lg:block"
                >for Car Rental</span
              >
            </h3>
            <p
              class="md:py-3 py-2 md:text-base text-xs not-italic font-medium text-left text-white lg:py-5"
            >
              Ease of doing a car rental safely and
              <span
                class="inline text-base not-italic font-medium text-left text-white lg:block"
              >
                reliably. Of course at a low price.</span
              >
            </p>
            <div class="mt-5 mb-6 lg:mb-0">
              <a href="#" class="px-5 py-3 btn btn-blue">Rental Car</a>
            </div>
            <div>
              <img
                src="../assets/images/best_platform.png"
                alt="best_platform"
                class="mx-auto lg:max-w-sm"
              />
            </div>
          </div>
          <div
            class="md:px-10 md:py-6 p-4 text-left bg-lowPrice bg-cover bg-no-repeat bg-center w-full rounded-xl bg-primary"
          >
            <h2
              class="text-base not-italic font-semibold text-left text-white lg:text-4xl md:text-2xl capitalize"
            >
              Easy way to rent a
              <span class="inline font-semibold text-left text-white lg:block"
                >car at a low price</span
              >
            </h2>
            <p
              class="md:py-3 py-2 text-xs md:text-sm not-italic font-medium text-left text-white lg:py-5 lg:text-base"
            >
              Providing cheap car rental services
              <span
                class="block text-sm not-italic font-medium text-left text-white lg:text-base"
              >
                and safe and comfortable facilities.</span
              >
            </p>
            <div class="mt-5 mb-6 lg:mb-0">
              <a href="#" class="px-5 py-3 btn bnt-skyBlue">Rental Car</a>
            </div>
            <div>
              <img
                src="../assets/images/car_rental_best.png"
                alt="car_rental_best"
                class="mx-auto md:max-w-48 lg:max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Popular Car Section -->
    <div class="w-full float-start">
      <div class="container px-6 mx-auto md:px-14">
        <!-- Popular Car Section -->
        <div class="flex justify-between w-full pb-6 md:px-4">
          <p class="text-base font-semibold text-DarkGray">Popular Car</p>
          <a
            href="#"
            class="block text-base font-semibold capitalize text-primary"
            >view all</a
          >
        </div>
        <swiper
          class="md:mb-9 mb-6 popular_car_swiper"
          :slides-per-view="4"
          :space-between="36"
          :modules="modules"
          :autoplay="true"
          :breakpoints="{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1300: { slidesPerView: 4 },
          }"
        >
          <swiper-slide v-for="(car,index ) in popularCars" :key="car.id">
            <!-- Box Start -->
            <CarSlide :car="car" :key="index" />
            <!-- Box End -->
          </swiper-slide>
        </swiper>
        <!-- Recomendation Car Section -->
        <div class="flex justify-between w-full pb-6 md:px-4">
          <p class="text-base font-semibold text-DarkGray">Recomendation Car</p>
        </div>
        <div
          class="grid grid-cols-1 mb-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-9 gap-6 md:mb-9"
        >
          <!-- Box Start -->
          <Car v-for="car in cars" :key="car.id" 
            :car="car"
          />
          <!-- Box End -->
        </div>
        <div class="inline-flex justify-center w-full">
          <button class="flex justify-center px-5 py-3 btn btn-blue" @click="loadMore" :disabled="isLoadMoreDisabled">Show more car</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useCarStore } from '@/store/CarStore';
import "swiper/css";
import Car from '~/components/Car.vue';
import CarSlide from '~/components/CarSlide.vue';

const carStore = useCarStore();

const popularCars = ref([]);

const cars = ref([]);

onMounted(() => {
  cars.value = carStore.cars
  popularCars.value = carStore.popularCars
});

// Update the cars ref when the store's cars change
watch(() => carStore.cars, (newCars) => {
  cars.value = newCars;
});

watch(() => carStore.popularCars, (newCars) => {
  popularCars.value = newCars;
});


const isLoadMoreDisabled = computed(() => carStore.currentPage >= carStore.totalPages);

const loadMore = () => {
  carStore.fetchCars({ page: +carStore.currentPage + 1 });
};

useHead({
  title: 'Home - car rental app',
  meta: [
    { name: 'description', content: 'This is car rental website.' }
  ],
})
</script>