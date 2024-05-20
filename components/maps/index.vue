<script lang="ts" setup>
import type { IContact } from '~/types/IContact';
import type { IRecomend } from '~/types/IRecomend';


const config = useRuntimeConfig()

const { data:contact } = await useAsyncData<IContact>('contact', () => $fetch('/api/contact', {
  headers: {
    Accept: 'application/json',
  },
  baseURL: config.public.apiBaseUrl,
}))

const { data:recomend } = await useAsyncData<IRecomend>('recomend', () => $fetch('/api/recomend', {
  headers: {
    Accept: 'application/json',
  },
  baseURL: config.public.apiBaseUrl,
}))


</script>
<template>
    <div class="md:flex items-center md:space-x-6 mx-8 md:mx-24">
            <div class="md:w-4/12 text-center md:text-end">
                <p class="text-4xl text-[#643C1A] md:mt-6 font-montserrat-semibold">Kontak Kami</p>
                <p class="text-[#504F59] opacity-80 text-base font-montaga mt-4 md:mt-0">{{ contact?.data.address }}</p>
                <div class="flex space-x-2 justify-center md:justify-end mt-4">
                    <p class="text-[#504F59] opacity-80 text-base font-montaga">{{ contact?.data.phone }}</p>
                    <a :href="'https://wa.me/+62'+contact?.data.phone" target="_blank"><img src="/assets/images/wa-icon.png" class="w-6 cursor-pointer"></a>
                </div>
                <a :href="contact?.data.maps" target="_blank"><p class="text-[#643C1A] opacity-80 text-lg font-montaga mt-5 cursor-pointer">Buka Maps ></p></a>
                
            </div>
            <div class='iframe-container w-full md:w-8/12 md:h-[50vh] mt-4 mb-4'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1266.1147103252056!2d107.50301807041191!3d-7.039022662032707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ed8adf698029%3A0xe0b66ba55799c67a!2sVilla%20Husna!5e0!3m2!1sen!2sid!4v1714476167412!5m2!1sen!2sid" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div class="bg-[#FFF4EB] w-full h-56 mt-12 text-center items-center flex flex-col py-6">
            <p class="text-3xl md:text-4xl text-[#643C1A] mt-2 md:mt-6 font-montserrat-semibold">Wisata Terdekat</p>
            <div class="flex flex-wrap text-black text-xs md:text-sm justify-center md:w-3/4 mt-4 space-x-4 leading-8 md:tracking-[2px]">
                <p class="font-montaga cursor-pointer" v-for="item in recomend?.data"><b class="font-montserrat-semibold">{{ item.name }}</b> ({{ item.distance }} km)</p>
            </div>
        </div>
</template>