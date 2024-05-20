<script lang="ts" setup>

const config = useRuntimeConfig()

const m = new Date();
const d = new Date();
let month = m.getMonth();
let day = d.getDate();

const selectedMonth = ref(month+1)

const { data, refresh, pending } = await useLazyAsyncData('calendar', () => $fetch('/api/calendar', {
    query: {
        month: selectedMonth.value
    },
  headers: {
    Accept: 'application/json',
  },
  baseURL: config.public.apiBaseUrl,
}))

function nextMonth() {
    if(selectedMonth.value <= month+2) {
        selectedMonth.value = selectedMonth.value+1
        refresh()
    }
}
function prevMonth() {
    if(selectedMonth.value > month+1) {
        selectedMonth.value = selectedMonth.value-1
        refresh()
    }
}

function getNameMonth(month : any) {
    switch (month) {
        case 1:
            return 'Januari'
            break;
        case 2:
            return 'Februari'
            break;
        case 3:
            return 'Maret'
            break;
        case 4:
            return 'April'
            break;
        case 5:
            return 'Mei'
            break;
        case 6:
            return 'Juni'
            break;
        case 7:
            return 'Juli'
            break;
        case 8:
            return 'Agustus'
            break;
        case 9:
            return 'September'
            break;
        case 10:
            return 'Oktober'
            break;
        case 11:
            return 'November'
            break;
        case 12:
            return 'Desember'
            break;
    
    }
}

</script>

<template>
    <div class=" text-black text-4xl absolute right-0 top-0 bottom-0 flex items-center px-2 md:px-8 hover:bg-[#efb27c]" @click="nextMonth()">
            <UIcon name="i-heroicons-chevron-right" class="text-2xl" />
        </div>
        <div class=" text-black text-4xl absolute left-0 top-0 bottom-0 flex items-center px-2 md:px-8 hover:bg-[#efb27c]" @click="prevMonth()">
                <UIcon name="i-heroicons-chevron-left" class="text-2xl" />
        </div>
        <div class="w-full h-full bg-white rounded-md md:pb-12">
            <p class="text-xl md:text-3xl text-[#643C1A] md:mt-6 font-montserrat-semibold px-8 py-8 w-full shadow-lg">{{ getNameMonth(selectedMonth) }} 2024</p>
            <div class="grid grid-cols-7 w-full">
                <div class="flex items-center justify-center">
                    <p  class="text-black rounded-full text-center  p-6 font-semibold font-serif text-sm md:text-xl hidden md:block">Senin</p>
                    <p  class="text-black rounded-full text-center  p-6 font-semibold font-serif text-sm md:text-xl md:hidden block">Sen</p>
                </div>
                <div class="flex items-center justify-center">
                    <p  class="text-black rounded-full text-center  p-6 font-semibold font-serif text-sm md:text-xl hidden md:block">Selasa</p>
                    <p  class="text-black rounded-full text-center  p-6 font-semibold font-serif text-sm md:text-xl md:hidden block">Sel</p>
                </div>
                <div class="flex items-center justify-center">
                    <p  class="text-black rounded-full text-center  p-6 font-semibold font-serif text-sm md:text-xl hidden md:block">Rabu</p>
                    <p  class="text-black rounded-full text-center  p-6 font-semibold font-serif text-sm md:text-xl md:hidden block">Rab</p>
                </div>
                <div class="flex items-center justify-center">
                    <p  class="text-black rounded-full text-center  p-6 font-semibold font-serif text-sm md:text-xl hidden md:block">Kamis</p>
                    <p  class="text-black rounded-full text-center  p-6 font-semibold font-serif text-sm md:text-xl md:hidden block">Kam</p>
                </div>
                <div class="flex items-center justify-center">
                    <p  class="text-black rounded-full text-center  p-6 font-semibold font-serif text-sm md:text-xl hidden md:block">Jumat</p>
                    <p  class="text-black rounded-full text-center  p-6 font-semibold font-serif text-sm md:text-xl md:hidden block">Jum</p>
                </div>
                <div class="flex items-center justify-center">
                    <p  class="text-black rounded-full text-center  p-6 font-semibold font-serif text-sm md:text-xl hidden md:block">Sabtu</p>
                    <p  class="text-black rounded-full text-center  p-6 font-semibold font-serif text-sm md:text-xl md:hidden block">Sab</p>
                </div>
                <div class="flex items-center justify-center">
                    <p  class="text-black rounded-full text-center  p-6 font-semibold font-serif text-sm md:text-xl hidden md:block">Minggu</p>
                    <p  class="text-black rounded-full text-center  p-6 font-semibold font-serif text-sm md:text-xl md:hidden block">Min</p>
                </div>
            </div>
            <div class="grid grid-cols-7 h-[80%] w-full" v-if="!pending">
                <div class="flex flex-col items-center justify-center p-4" v-for="item in data?.calendar">
                    <p  class="text-black rounded-full text-center pb-2 text-sm md:text-xl" :class="item.holiday ? 'text-red-400' : '', item.isMonth ? 'font-medium' : 'text-gray-400', !item.isAvailable ? 'text-gray-400' : '', item.isMissed ? 'text-gray-400' : '' ">{{ item.day }}</p>
                    <span class="w-2.5 h-2.5 bg-green-400" :class="!item.isAvailable ? 'bg-red-500' : ''" v-if="item.isMonth && !item.isMissed"></span>
                </div>
            </div>
            <div class="w-full p-4 flex justify-between mt-6 md:px-8"  v-if="!pending">
                 <div class="">
                     <p class="text-sm md:text-base font-montaga text-gray-500" v-for="item in data?.holiday">• <b>{{ item.day }}</b> : {{ item.holiday_name }}</p>
                 </div>
                 <div class=" text-gray-400">
                     <div class="text-sm md:text-base font-montaga text-gray-500 flex items-center"><div class="w-2.5 h-2.5 bg-green-400 mr-2"></div> Kosong</div>
                     <div class="text-sm md:text-base font-montaga text-gray-500 flex items-center"><div class="w-2.5 h-2.5 bg-red-400 mr-2"></div> Terisi</div>
                 </div>
            </div>
        </div>
</template>