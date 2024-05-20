<script setup lang="ts">
import type { IContact } from '~/types/IContact';
import type { IHome } from '~/types/IHome';
import type { IPrice } from '~/types/IPrice';


const config = useRuntimeConfig()

const { data:home } = await useAsyncData<IHome>('home', () => $fetch('/api/home', {
  headers: {
    Accept: 'application/json',
  },
  baseURL: config.public.apiBaseUrl,
}))

const { data:price } = await useAsyncData<IPrice>('price', () => $fetch('/api/price', {
  headers: {
    Accept: 'application/json',
  },
  baseURL: config.public.apiBaseUrl,
}))

const { data:contact } = await useAsyncData<IContact>('contact', () => $fetch('/api/contact', {
  headers: {
    Accept: 'application/json',
  },
  baseURL: config.public.apiBaseUrl,
}))

</script>

<template>
    <div class="w-full flex flex-row justify-end py-4 px-8">
            <div class="w-10 md:w-16 h-10 md:h-16 bg-[#F2E3D7]"></div>
        </div>
        <div class="flex w-full">
            <div class="w-full flex flex-col justify-between pt-6 md:pt-16 ">
                <div class="px-8 md:px-24 z-50">
                    <p class="text-[32px] md:text-5xl text-[#643C1A] leading-snug font-montserrat-semibold" >{{ home!.data.title }}</p>
                    <p class="text-[#504F59] opacity-80 text-sm md:text-base font-montaga"> {{ home!.data.sub_title }}</p>
                    <div>
                        <p class="text-sm md:text-xl text-[#643C1A] mt-12 font-montserrat-semibold">Start From</p>
                        <div class="flex space-x-2 md:space-x-4 items-center">
                            <div class="flex flex-col font-montaga">
                                <p class="text-[#643C1A] text-xl md:text-xl tracking-[3px] md:tracking-[8px] line-through">Rp {{ price!.data.normal }} </p>
                                <p class="text-[#643C1A] text-2xl md:text-4xl">Rp {{ price!.data.price }} </p>
                            </div>
                            <div class="flex flex-col font-montaga">
                                <p class="text-[#643C1A] text-4xl md:text-6xl">/ Hari</p>
                            </div>
                        </div>
                    </div>
                </div>      
                <div class="bg-white w-full h-28 mb-0 flex justify-center items-center mt-12 px-4 md:px-0">
                    <a :href="'https://wa.me/+62'+contact?.data.phone" target="_blank"><button class="bg-[#996336] px-24 md:px-32 py-3 rounded-md text-white font-light text-2xl hover:scale-105">Book Now</button></a>
                </div>
            </div>
            <div class="w-full pr-24 relative hidden md:block">
                <div class="absolute bottom-0 left-0">
                    <div class="w-28 h-28 bg-[#996336] "></div>
                    <div class="w-28 h-28 bg-white "></div>
                </div>
                <img src="/assets/images/hero.png" class="h-full">
            </div>
        </div>
</template>