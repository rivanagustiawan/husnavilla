<script lang="ts" setup >
import type { IReview } from '~/types/IReview';


const config = useRuntimeConfig()

const { data } = await useAsyncData<IReview>('review', () => $fetch('/api/review', {
  headers: {
    Accept: 'application/json',
  },
  baseURL: config.public.apiBaseUrl,
}))

</script>

<template>
        <div class="w-full flex justify-between items-center">
            <p class="text-2xl md:text-4xl text-[#643C1A] md:mt-6 font-montserrat-semibold text-center">Ulasan</p>
            <a href="https://www.google.com/maps/place/Villa+Husna/@-7.0390607,107.5007975,17z/data=!4m14!1m5!8m4!1e1!2s114400072294694271786!3m1!1e1!3m7!1s0x2e68ed8adf698029:0xe0b66ba55799c67a!8m2!3d-7.039066!4d107.5033724!9m1!1b1!16s%2Fg%2F11j47wpgw4?entry=ttu"><p class="text-[#643C1A] opacity-80 text-base md:text-lg font-montaga md:mt-10 text-center">Lihat Semua ></p></a>
        </div>
        <div class="w-full grid grid-cols-2 mt-4 gap-4">
            
            <div class="bg-white shadow-md rounded-md w-full p-4" v-for="item in data?.data">
                <div class="grid grid-rows-3 md:grid-rows-none md:grid-cols-6 md:justify-between items-center">
                    <div class="flex items-center justify-center">
                        <img :src="item.images" class="w-8 md:w-16 h-8 md:h-16 ">
                    </div>
                    <div class="text-black flex flex-col justify-center text-center md:text-start md:col-span-4">
                        <p class="font-montserrat-medium text-xs md:text-lg">{{ item.name }}</p>
                    </div>
                    <div class="text-black md:flex flex-col justify-center text-end  w-full">
                        <p class="font-montserrat-medium text-xs md:text-lg flex items-center justify-center">{{ item.star }} <UIcon name="i-heroicons-star-solid" class="ml-2" /></p>
                    </div>
                </div>
                <div class="text-black mt-2  md:mt-6 flex">
                    <p class="font-montaga text-xs md:text-sm">“{{item.message}}”</p>
                </div>
            </div>
        </div>
</template>