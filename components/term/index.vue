<script lang="ts" setup >


const config = useRuntimeConfig()
const show = ref(8)

interface IData {
    id:number
    term:string
    created_at:string
    updated_at:string
}

interface ITerm {
  data?: IData[]
}

const { data, refresh, pending } = await useAsyncData<ITerm>('term', () => $fetch('/api/term', {
    query:{
        all_data: show.value
    },
  headers: {
    Accept: 'application/json',
  },
  baseURL: config.public.apiBaseUrl,
}))

</script>

<template>
    <div class="flex flex-col md:flex-row w-full md:space-x-12 md:h-screen items-center relative py-6">
        <div class="w-16 h-16 bg-[#996336] absolute md:left-20 md:top-24 hidden md:block"></div>
        <div class="w-16 h-16 bg-[#FFF4EB] absolute md:left-4 md:top-8 hidden md:block"></div>

        <div class="w-full flex justify-center">
            <img src="/assets/images/logo-main.png" class="w-32 md:w-full">
        </div>
        <div class="w-full">
            <p class="text-3xl md:text-5xl text-[#643C1A] mt-6 font-montserrat-semibold text-center">Syarat & Ketentuan</p>
            <ul class="text-[#504F59] opacity-80 text-sm md:text-lg font-montaga list-disc mt-8" v-if="!pending">
                <li v-for="item in data?.data">{{ item.term }}</li>
            </ul>
            <p v-if="show !== 100" @click="show = 100; refresh()" class="text-[#643C1A] opacity-80 text-base  md:text-lg font-montaga mt-10 text-center cursor-pointer flex items-center">Lihat Semua.. <UIcon name="i-heroicons-chevron-right" /></p>
            <p v-if="show === 100" @click="show = 8; refresh()" class="text-[#643C1A] opacity-80 text-base  md:text-lg font-montaga mt-10 text-center cursor-pointer flex items-center">Lihat Sedikit.. <UIcon name="i-heroicons-chevron-left" /></p>

        </div>
    </div>
</template>