<script lang="ts" setup>
import type { IContact } from '~/types/IContact';

const config = useRuntimeConfig()

const { data:contact } = await useAsyncData<IContact>('contact', () => $fetch('/api/contact', {
  headers: {
    Accept: 'application/json',
  },
  baseURL: config.public.apiBaseUrl,
}))

</script>

<template>
    <div class="w-full py-6 flex flex-col md:flex-row px-8 md:px-24 space-y-3 md:space-x-6 items-center">
            <div class="flex flex-col md:flex-row w-full items-center">
                <img src="/assets/images/logo-main.png" class="w-auto h-8">
                <p class="text-[#504F59] opacity-80 text-center text-sm font-montaga md:w-1/2 ml-4">"Ruang Damai, Kegembiraan Keluarga: Temukan Keajaiban Alam di Villa Kami!"</p>
            </div>
            <div class="flex flex-col space-y-1 items-center text-center w-full">
                <p class="text-[#504F59] opacity-80 text-base font-montaga">Hubungi Kami</p>
                <p class="text-[#504F59] opacity-80 text-sm font-montaga">{{ contact?.data.email }}</p>
                <p class="text-[#504F59] opacity-80 text-sm font-montaga">{{ contact?.data.phone }}</p>
                <p class="text-[#504F59] opacity-80 text-sm font-montaga">{{ contact?.data.address }}</p>
            </div>
            <div class="flex flex-col items-center justify-center  w-full">
                <p class="text-[#504F59] opacity-80 text-base font-montaga">Social Media</p>

                <div class="flex space-x-2">
                    <img src="/assets/images/wa-icon.png" class="w-auto h-6 cursor-pointer">
                    <img src="/assets/images/ig-icon.png" class="w-auto h-6 cursor-pointer">
                    <img src="/assets/images/tiktok-icon.png" class="w-auto h-6 cursor-pointer">
                </div>
            </div>
        </div>
        <p class="text-[#504F59] opacity-80 text-xs md:text-sm font-montaga text-center">Copyright 2024 • All Rights Reserved Villa Husna</p>
</template>