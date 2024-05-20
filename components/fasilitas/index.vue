<script lang="ts" setup >
import type { IFacility } from '~/types/IFacility';


const config = useRuntimeConfig()

const { data } = await useAsyncData<IFacility>('facility', () => $fetch('/api/facility', {
  headers: {
    Accept: 'application/json',
  },
  baseURL: config.public.apiBaseUrl,
}))

</script>

<template>
        <div class="hidden md:block relative w-1/3 h-4/5">
            <div class="w-16 h-16 bg-[#996336] hidden md:block absolute right-20 top-24"></div>
            <img src="/assets/images/hero-fas-1.png" class="w-80 absolute  md:top-0 md:left-0">
            <img src="/assets/images/hero-fas-2.png" class="w-72 absolute md:-bottom-12 md:-right-6">
            <div class="absolute bottom-12 left-10 hidden md:block">
                <div class="relative">
                    <div class="w-16 h-16 bg-[#F2E3D7] absolute z-0 left-16"></div>
                    <p class="text-3xl text-[#643C1A] mt-12 font-montserrat-medium z-50 absolute -top-6 left-0">Total <br> 364m2</p>
                </div>
            </div>

        </div>
        <div class="md:w-2/3 flex flex-col space-y-4 px-8 md:px-16">
            <p class="text-4xl md:text-5xl text-[#643C1A] md:mt-6 font-montserrat-semibold">Fasilitas Populer</p>
            <p class="text-[#504F59] opacity-80 text-sm md:text-base font-montaga"> Di sini, kami berkomitmen untuk menciptakan dan menyediakan fasilitas <br>yang dirancang untuk kenyamanan dan kebahagiaan anda.</p>
            <div class="grid grid-cols-2 gap-6">
                <div v-for="item in data?.data">
                    <p class="text-xl text-[#643C1A] font-montserrat-semibold">{{ item.name }}</p>
                    <p class="text-[#504F59] opacity-80 text-sm md:text-base font-montaga">{{ item.description }}</p>
                </div>
            </div>
            <div class="w-full flex justify-end">
                <!-- <p class="text-[#643C1A] opacity-80 text-lg font-montaga">Lihat Semua ></p> -->

            </div>
            
        </div>
</template>