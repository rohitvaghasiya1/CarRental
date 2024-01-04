<template>
  <div class="float-left w-full md:pt-6 md:pb-14 py-6 bg-BodyBg" v-if="car">
    <div class="container px-6 mx-auto md:px-14">
      <div class="lg:flex thumb-slider lg:gap-8">
        <div class="lg:w-2/5 w-full">
          <swiper
            :modules="[Thumbs]"
            :thumbs="{ swiper: thumbsSwiper }"
            :slidesPerView="1"
            class="overflow-hidden flex"
          >
            <swiper-slide>
              <div
                class="md:px-10 md:py-6 p-4 text-left bg-lowPrice bg-cover bg-no-repeat bg-center w-full bg-primary rounded-xl"
              >
                <h3
                  class="text-base not-italic font-semibold text-left text-white lg:text-3xl md:text-2xl"
                >
                  Sports car with the best
                  <span
                    class="inline not-italic font-semibold text-left text-white lg:block"
                    >design and acceleration</span
                  >
                </h3>
                <p
                  class="md:py-3 py-2 md:text-base text-xs not-italic font-medium text-left text-white lg:py-5"
                >
                  Safety and comfort while driving a
                  <span
                    class="inline text-base not-italic font-medium text-left text-white lg:block"
                  >
                    futuristic and elegant sports car</span
                  >
                </p>
                <div class="md:mt-8 mt-6">
                  <img
                    :src="car.img"
                    alt="best_platform"
                    class="mx-auto lg:max-w-sm"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide v-for="(image, index) in car.images" :key="index">
              <div
                class="md:px-10 md:py-6 p-4 text-left bg-lowPrice bg-cover bg-no-repeat bg-center w-full bg-skyBlue rounded-xl"
              >
                <h3
                  class="text-base not-italic font-semibold text-left text-white lg:text-3xl md:text-2xl"
                >
                  Sports car with the best
                  <span
                    class="inline not-italic font-semibold text-left text-white lg:block"
                    >design and acceleration</span
                  >
                </h3>
                <p
                  class="md:py-3 py-2 md:text-base text-xs not-italic font-medium text-left text-white lg:py-5"
                >
                  Safety and comfort while driving a
                  <span
                    class="inline text-base not-italic font-medium text-left text-white lg:block"
                  >
                    futuristic and elegant sports car</span
                  >
                </p>
                <div class="md:mt-8 mt-6">
                  <img
                    :src="image.url"
                    alt="best_platform"
                    class="mx-auto lg:max-w-sm"
                  />
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <swiper
            class="swiper-thumb-img mt-5"
            :slidesPerView="3"
            :modules="[Thumbs]"
            watch-slides-progress
            @swiper="setThumbsSwiper"
          >
            <swiper-slide
              ><img
                :src="car.img"
                alt="Thumb"
                class="max-w-full block w-full"
              />
            </swiper-slide>
            <swiper-slide
            v-for="(image, index) in car.images" :key="index"
              ><img
                :src="image.url"
                alt="Thumb"
                class="max-w-full block w-full"
              />
            </swiper-slide>
          </swiper>
        </div>
        <div
          class="lg:w-3/5 w-full bg-white rounded-10 md:p-6 p-4 lg:mt-0 mt-8"
        >
          <div class="flex md:items-start items-center gap-3 pb-9">
            <div>
              <h3
                class="md:text-32 text-Black font-bold md:leading-10 text-xl leading-7"
              >
                {{ car.name }}
              </h3>
              <!-- Review -->
              <ul class="flex items-center gap-1 mt-2">
                <li>
                  <a href="#" class="block">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.50008 1.59488C5.53462 1.48536 5.60317 1.3897 5.69579 1.3218C5.7884 1.2539 5.90024 1.21729 6.01508 1.21729C6.12992 1.21729 6.24177 1.2539 6.33438 1.3218C6.42699 1.3897 6.49555 1.48536 6.53008 1.59488L7.46008 4.45488H10.4601C10.579 4.45038 10.6962 4.48495 10.7936 4.5533C10.8911 4.62165 10.9635 4.72002 10.9997 4.83339C11.036 4.94676 11.0342 5.06888 10.9945 5.18111C10.9549 5.29333 10.8795 5.38949 10.7801 5.45488L8.34508 7.21988L9.27508 10.0849C9.31186 10.194 9.31279 10.312 9.27773 10.4217C9.24267 10.5314 9.17345 10.6271 9.0802 10.6946C8.98694 10.7622 8.87452 10.7982 8.75936 10.7973C8.6442 10.7965 8.53233 10.7588 8.44008 10.6899L6.00008 8.90488L3.56508 10.6749C3.47284 10.7438 3.36097 10.7815 3.2458 10.7823C3.13064 10.7832 3.01823 10.7472 2.92497 10.6796C2.83171 10.6121 2.7625 10.5164 2.72744 10.4067C2.69238 10.297 2.6933 10.179 2.73008 10.0699L3.66008 7.20488L1.22508 5.43988C1.12562 5.37449 1.05031 5.27833 1.01064 5.16611C0.970978 5.05388 0.969144 4.93176 1.00542 4.81839C1.0417 4.70502 1.11409 4.60665 1.21154 4.5383C1.30899 4.46995 1.42614 4.43538 1.54508 4.43988H4.54508L5.50008 1.59488Z"
                        fill="#FBAD39"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="block">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.50008 1.59488C5.53462 1.48536 5.60317 1.3897 5.69579 1.3218C5.7884 1.2539 5.90024 1.21729 6.01508 1.21729C6.12992 1.21729 6.24177 1.2539 6.33438 1.3218C6.42699 1.3897 6.49555 1.48536 6.53008 1.59488L7.46008 4.45488H10.4601C10.579 4.45038 10.6962 4.48495 10.7936 4.5533C10.8911 4.62165 10.9635 4.72002 10.9997 4.83339C11.036 4.94676 11.0342 5.06888 10.9945 5.18111C10.9549 5.29333 10.8795 5.38949 10.7801 5.45488L8.34508 7.21988L9.27508 10.0849C9.31186 10.194 9.31279 10.312 9.27773 10.4217C9.24267 10.5314 9.17345 10.6271 9.0802 10.6946C8.98694 10.7622 8.87452 10.7982 8.75936 10.7973C8.6442 10.7965 8.53233 10.7588 8.44008 10.6899L6.00008 8.90488L3.56508 10.6749C3.47284 10.7438 3.36097 10.7815 3.2458 10.7823C3.13064 10.7832 3.01823 10.7472 2.92497 10.6796C2.83171 10.6121 2.7625 10.5164 2.72744 10.4067C2.69238 10.297 2.6933 10.179 2.73008 10.0699L3.66008 7.20488L1.22508 5.43988C1.12562 5.37449 1.05031 5.27833 1.01064 5.16611C0.970978 5.05388 0.969144 4.93176 1.00542 4.81839C1.0417 4.70502 1.11409 4.60665 1.21154 4.5383C1.30899 4.46995 1.42614 4.43538 1.54508 4.43988H4.54508L5.50008 1.59488Z"
                        fill="#FBAD39"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="block">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.50008 1.59488C5.53462 1.48536 5.60317 1.3897 5.69579 1.3218C5.7884 1.2539 5.90024 1.21729 6.01508 1.21729C6.12992 1.21729 6.24177 1.2539 6.33438 1.3218C6.42699 1.3897 6.49555 1.48536 6.53008 1.59488L7.46008 4.45488H10.4601C10.579 4.45038 10.6962 4.48495 10.7936 4.5533C10.8911 4.62165 10.9635 4.72002 10.9997 4.83339C11.036 4.94676 11.0342 5.06888 10.9945 5.18111C10.9549 5.29333 10.8795 5.38949 10.7801 5.45488L8.34508 7.21988L9.27508 10.0849C9.31186 10.194 9.31279 10.312 9.27773 10.4217C9.24267 10.5314 9.17345 10.6271 9.0802 10.6946C8.98694 10.7622 8.87452 10.7982 8.75936 10.7973C8.6442 10.7965 8.53233 10.7588 8.44008 10.6899L6.00008 8.90488L3.56508 10.6749C3.47284 10.7438 3.36097 10.7815 3.2458 10.7823C3.13064 10.7832 3.01823 10.7472 2.92497 10.6796C2.83171 10.6121 2.7625 10.5164 2.72744 10.4067C2.69238 10.297 2.6933 10.179 2.73008 10.0699L3.66008 7.20488L1.22508 5.43988C1.12562 5.37449 1.05031 5.27833 1.01064 5.16611C0.970978 5.05388 0.969144 4.93176 1.00542 4.81839C1.0417 4.70502 1.11409 4.60665 1.21154 4.5383C1.30899 4.46995 1.42614 4.43538 1.54508 4.43988H4.54508L5.50008 1.59488Z"
                        fill="#FBAD39"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="block">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.50008 1.59488C5.53462 1.48536 5.60317 1.3897 5.69579 1.3218C5.7884 1.2539 5.90024 1.21729 6.01508 1.21729C6.12992 1.21729 6.24177 1.2539 6.33438 1.3218C6.42699 1.3897 6.49555 1.48536 6.53008 1.59488L7.46008 4.45488H10.4601C10.579 4.45038 10.6962 4.48495 10.7936 4.5533C10.8911 4.62165 10.9635 4.72002 10.9997 4.83339C11.036 4.94676 11.0342 5.06888 10.9945 5.18111C10.9549 5.29333 10.8795 5.38949 10.7801 5.45488L8.34508 7.21988L9.27508 10.0849C9.31186 10.194 9.31279 10.312 9.27773 10.4217C9.24267 10.5314 9.17345 10.6271 9.0802 10.6946C8.98694 10.7622 8.87452 10.7982 8.75936 10.7973C8.6442 10.7965 8.53233 10.7588 8.44008 10.6899L6.00008 8.90488L3.56508 10.6749C3.47284 10.7438 3.36097 10.7815 3.2458 10.7823C3.13064 10.7832 3.01823 10.7472 2.92497 10.6796C2.83171 10.6121 2.7625 10.5164 2.72744 10.4067C2.69238 10.297 2.6933 10.179 2.73008 10.0699L3.66008 7.20488L1.22508 5.43988C1.12562 5.37449 1.05031 5.27833 1.01064 5.16611C0.970978 5.05388 0.969144 4.93176 1.00542 4.81839C1.0417 4.70502 1.11409 4.60665 1.21154 4.5383C1.30899 4.46995 1.42614 4.43538 1.54508 4.43988H4.54508L5.50008 1.59488Z"
                        fill="#FBAD39"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="block">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.16676 2.65838C9.22433 2.47584 9.33858 2.31641 9.49294 2.20324C9.64729 2.09007 9.8337 2.02905 10.0251 2.02905C10.2165 2.02905 10.4029 2.09007 10.5573 2.20324C10.7116 2.31641 10.8259 2.47584 10.8834 2.65838L12.4334 7.42505H17.4334C17.6317 7.41755 17.8269 7.47516 17.9893 7.58908C18.1517 7.70299 18.2724 7.86695 18.3329 8.05589C18.3933 8.24484 18.3903 8.44838 18.3242 8.63542C18.2581 8.82247 18.1325 8.98273 17.9668 9.09171L13.9084 12.0334L15.4584 16.8084C15.5197 16.9903 15.5213 17.187 15.4628 17.3698C15.4044 17.5526 15.2891 17.712 15.1336 17.8246C14.9782 17.9372 14.7908 17.9972 14.5989 17.9958C14.407 17.9944 14.2205 17.9316 14.0668 17.8167L10.0001 14.8417L5.94176 17.7917C5.78802 17.9066 5.60157 17.9694 5.40963 17.9708C5.2177 17.9722 5.03034 17.9122 4.87491 17.7996C4.71948 17.687 4.60412 17.5276 4.54569 17.3448C4.48725 17.162 4.4888 16.9653 4.5501 16.7834L6.1001 12.0084L2.04176 9.06671C1.876 8.95773 1.75047 8.79747 1.68437 8.61042C1.61826 8.42338 1.6152 8.21984 1.67566 8.03089C1.73612 7.84195 1.85678 7.67799 2.0192 7.56408C2.18161 7.45016 2.37686 7.39255 2.5751 7.40005H7.5751L9.16676 2.65838Z"
                        stroke="#90A3BF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <p class="text-sm font-medium text-DarkGray">
                    <span>440+</span> Reviewer
                  </p>
                </li>
              </ul>
            </div>
            <!-- Icon -->
            <div>
              <a class="block" @click="toggleFavorite(car)">
                <svg
                  v-if="isCarFavorite(car)"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.44 3.1001C14.63 3.1001 13.01 3.9801 12 5.3301C10.99 3.9801 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.6001 2 8.6901C2 9.8801 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.8801 22 8.6901C22 5.6001 19.51 3.1001 16.44 3.1001Z"
                    fill="#ED3F3F"
                  />
                </svg>
                <svg
                  v-else
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
                    stroke="#90A3BF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <p
            class="md:text-xl md:leading-10 leading-6 text-xs text-DarkGray font-normal md:pb-8 pb-4"
          >
            {{ car.description }}
          </p>
          <div
            class="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 grid-cols-2 md:gap-x-11 gap-x-6 gap-y-4"
          >
            <ul class="flex gap-4">
              <li class="md:w-24 w-14 text-left">
                <p
                  class="fonr-normal md:text-xl text-xs md:leading-7 leading-normal text-Secondary"
                >
                  Type Car
                </p>
              </li>
              <li class="md:w-24 w-12 text-right">
                <p
                  class="font-semibold md:text-xl text-xs md:leading-7 leading-normal text-Secondary"
                >
                  {{ car.type }}
                </p>
              </li>
            </ul>
            <ul class="flex gap-4">
              <li class="md:w-24 w-14 text-left">
                <p
                  class="font-normal md:text-xl text-xs md:leading-7 leading-normal text-Secondary"
                >
                  Capacity
                </p>
              </li>
              <li class="md:w-24 w-14 text-right">
                <p
                  class="font-semibold md:text-xl text-xs md:leading-7 leading-normal text-Secondary"
                >
                  {{ car.people }} Person
                </p>
              </li>
            </ul>
            <ul class="flex gap-4">
              <li class="md:w-24 w-14 text-left">
                <p
                  class="font-normal md:text-xl text-xs md:leading-7 leading-normal text-Secondary"
                >
                  Gasoline
                </p>
              </li>
              <li class="md:w-24 w-12 text-right">
                <p
                  class="font-semibold md:text-xl text-xs md:leading-7 leading-normal text-Secondary"
                >
                {{ car.gasolineLiter }} L
                </p>
              </li>
            </ul>
            <ul class="flex gap-4">
              <li class="md:w-24 w-14 text-left">
                <p
                  class="font-normal md:text-xl text-xs md:leading-7 leading-normal text-Secondary"
                >
                  Steering
                </p>
              </li>
              <li class="md:w-24 w-12 text-right">
                <p
                  class="font-semibold md:text-xl text-xs md:leading-7 leading-normal text-Secondary"
                >
                {{ car.kindOfTransition }}
                </p>
              </li>
            </ul>
          </div>
          <div class="grid items-center grid-cols-2 gap-6 md:pt-24 pt-7">
            <div>
              <a href="#" class="md:text-3xl text-xl font-bold text-Black"
                >${{ car.pricePerDay }}<span class="text-sm font-bold text-DarkGray"
                  >/ day</span
                ></a
              >
              <p class="md:tex-sm text-xs text-DarkGray font-bold mt-2">
                $100.00
              </p>
            </div>
            <div class="text-right">
              <a href="#" class="px-5 py-3 btn btn-blue text-lg">Rent Now</a>
            </div>
          </div>
        </div>
      </div>
      <!-- Recomendation Car Section -->
      <div class="flex justify-between w-full pb-6 md:px-4 mt-16">
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
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCarStore } from '@/store/CarStore';
import { Thumbs } from "swiper/modules"; 

import Car from '~/components/Car.vue';

import "swiper/css";

const carStore = useCarStore();
const route = useRoute();
const car = ref(null);
const cars = ref([]);

// Update the cars ref when the store's cars change
watch(() => carStore.cars, (newCars) => {
  cars.value = newCars;
});

onMounted(() => {
  cars.value = carStore.cars
});

onMounted(async () => {
  const { id } = route.params;
  const response = await fetch(`https://dm-assignment-commonshare.koyeb.app/api/cars/${id}`);
  const data = await response.json();
  car.value = data;
});

const isCarFavorite = (car) => {
  if (carStore.getFavoriteCars.some((favoriteCar) => favoriteCar.id === car.id)) {
    return true
  } else {
    return false
  }
};

const toggleFavorite = (car) => {
  if (carStore.getFavoriteCars.some((favoriteCar) => favoriteCar.id === car.id)) {
    carStore.removeFromFavorites(car.id);
  } else {
    carStore.addToFavorites(car);
  }
};

useHead({
  title: 'Detail - car rental app',
  meta: [
    { name: 'description', content: 'This is car rental website.' }
  ],
})

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>
