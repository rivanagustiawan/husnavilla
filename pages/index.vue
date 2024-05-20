<script setup lang="ts">


</script>

<template>
    <!-- nav  -->
    <div class="mx-8 md:mx-24 ">
        <Navbar/>
    </div>
    <!-- end nav  -->
    
    <!-- ------ -->
    <div class="w-full">
        <Home/>
    </div>
    <!-- ------ -->

    <!-- ------ -->
    <div class="w-full bg-white md:flex pb-6 md:pb-0 md:h-[85vh] pt-8 md:pt-24">
        <Fasilitas/>
    </div>
    <!-- ----- -->

    <!-- ------ -->
    <div class="w-full md:pr-12 pt-6 md:pt-16 md:flex md:pb-6">
        <Galeri/>
    </div>
    <!-- ----- -->

    <!-- ------ -->
    <div class="w-full px-10 py-6 md:min-h-screen md:px-24 md:py-12 relative">
        <Calendar/>
    </div>
    <!-- ----- -->

    <!-- ------ -->
    <div class="bg-white px-8 md:px-24">
       <Term/>
    </div>

    <!-- ----- -->

    <!-- ------ -->
    <div class="w-full bg-white md:h-screen overflow-hidden">
        <img src="/assets/images/hero-rand.png" class="w-full h-auto md:-translate-y-[35%] ">
    </div>
    <!-- ----- -->
    
    <!-- ------ -->

    <div class="w-full pb-12 px-8 md:px-24 pt-6">
        <Review/>
    </div>

    <!-- ----- -->

    <!-- ------ -->

    <div class="w-full bg-white pt-6 md:pt-12"> 
        <Maps/>
    </div>

    <!-- ----- -->

    <!-- ------ -->

    <div>
        <Promo/>
    </div>

    <!-- ----- -->

    <!-- ------ -->
    
    <div class="pb-3">
        <Footer/>
    </div>
</template>
