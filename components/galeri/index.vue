<script lang="ts" setup>
import { onMounted, ref } from 'vue';


// const items = ref()
const category = ref('')

const config = useRuntimeConfig()

const { data, refresh, pending } = await useLazyAsyncData('galery', () => $fetch('/api/galery', {
  headers: {
    Accept: 'application/json',
  },
  baseURL: config.public.apiBaseUrl,
  query: {
    show: category.value
  },
  immediate: false,
}), {
  watch: [category],
})


const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})

function selectCategory(cat:any) {
    category.value = cat
    refresh()
}
</script>


<template>
        <div class="flex items-center">
            <h2 class="text-4xl md:text-5xl text-[#643C1A] w-full text-center leading-snug font-montserrat-semibold trasnform md:-rotate-90">Galery</h2>
        </div>
        <div class="flex flex-col w-full">
            <div class=" md:w-full grid grid-cols-4 mx-6 md:mx-0 text-[#643C1A] bg-white font-montaga border-[1px] text-center rounded-md border-[#996336] h-auto">
                <div class="cursor-pointer rounded-md hover:bg-[#996336] hover:border-[1px] hover:text-white" @click="selectCategory('')" :class="category === '' ? 'border-[1px] bg-[#996336] text-white' : ''">
                    Semua
                </div>
                <div class="cursor-pointer rounded-md hover:bg-[#996336] hover:border-[1px] hover:text-white" @click="selectCategory('kamar')" :class="category === 'kamar' ? 'border-[1px] bg-[#996336] text-white' : ''">
                    Kamar
                </div>
                <div class="cursor-pointer rounded-md hover:bg-[#996336] hover:border-[1px] hover:text-white" @click="selectCategory('dapur')" :class="category === 'dapur' ? 'border-[1px] bg-[#996336] text-white' : ''">
                    Dapur
                </div>
                <div class="cursor-pointer rounded-md hover:bg-[#996336] hover:border-[1px] hover:text-white" @click="selectCategory('other')" :class="category === 'other' ? 'border-[1px] bg-[#996336] text-white' : ''">
                    Lainnya
                </div>
            </div>
            <div class="w-full mt-6 md:flex items-center space-y-4 md:space-y-0 md:space-x-4 md:h-[650px] overflow-hidden">
                <UCarousel
                    ref="carouselRef"
                    v-slot="{ item }"
                    :items="data"
                    :ui="{ item: 'basis-full' }"
                    class="overflow-hidden h-auto md:min-h-[650px] w-full"
                    indicators
                >
                    <img :src="item" class="w-full object-contain" draggable="false">
                </UCarousel>
            </div>
            <a href="/galery"><p class="text-[#643C1A] opacity-80 text-lg font-montaga text-end mt-4 cursor-pointer mr-4">Lihat Semua ></p></a> 
        </div>
</template>