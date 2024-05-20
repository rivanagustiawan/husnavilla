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
  <div class="mx-8 md:mx-24 ">
    <Navbar/>
  </div>
    <div class="px-2 md:px-12 mt-6 md:mt-12 pb-12">
        <div class="flex items-center">
            <a href="/"><h2 class="text-sm text-[#643C1A] flex items-center text-center absolute font-montserrat-semibold trasnform "><UIcon name="i-heroicons-chevron-left" /> Kembali</h2></a>
            <h2 class="text-4xl md:text-5xl text-[#643C1A] w-full text-center leading-snug font-montserrat-semibold trasnform">Galery</h2>
        </div>
        <div class="flex flex-col w-full mt-6">
            <div class=" md:w-full grid grid-cols-4 text-[#643C1A] bg-white font-montaga border-[1px] text-center rounded-md border-[#996336] h-auto">
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
            <div class="mt-4">
              <div class="columns-2 gap-2 md:columns-3 lg:columns-3 [&>img:not(:first-child)]:mt-2">
                <img :src="item" v-for="item in data">
              </div>
          </div>
        </div>
    </div>

    <div class="pb-3 border-t-[1px] border-[#996336]">
        <Footer/>
    </div>
</template>