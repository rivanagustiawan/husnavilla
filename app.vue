
<script setup lang="ts">
useHead({
  link: [{ rel: '', type: 'image/png', href: '/images/icon.png' }],
})
useSeoMeta({
  title: 'Villa Husna',
  ogTitle: 'Villa Husna',
  description: 'Harmoni Keluarga, Keindahan Alam. Rayakan momen-momen kebersamaan. Bersantailah di Villa kami yang nyaman sambil berbagi cerita dan tawa..',
  ogDescription: 'Harmoni Keluarga, Keindahan Alam. Rayakan momen-momen kebersamaan. Bersantailah di Villa kami yang nyaman sambil berbagi cerita dan tawa..',
  ogImage: 'https://husnavilla.com/_nuxt/hero-rand.wjtjHz8x.png',
})
</script>

<template>
  <Head>
    <Title>Villa Husna</Title>
    <Meta name="description" content="Harmoni Keluarga, Keindahan Alam. Rayakan momen-momen kebersamaan. Bersantailah di Villa kami yang nyaman sambil berbagi cerita dan tawa.." />
    <Meta name="og:image" content="https://husnavilla.com/_nuxt/hero-rand.wjtjHz8x.png" />
    <meta property="og:image" content="https://husnavilla.com/_nuxt/hero-rand.wjtjHz8x.png" />
    <link rel='icon' type='image/png' href='/images/icon.png'>
  </Head>
  <div class="bg-[#FFF4EB] w-full h-auto">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<style>
.font-montserrat {
  font-family: montserrat-alternates;
}
.font-montserrat-semibold {
  font-family: montserrat-semibold;
}
.font-montserrat-bold {
  font-family: montserrat-bold;
}
.font-montserrat-medium {
  font-family: montserrat-medium;
}
.font-montaga {
  font-family: montaga;
}

.iframe-container iframe {
  /* position: absolute; */
  top: 0;
  left: 0;
  border: 0;
  width: 100%;
  height: 100%;
}

.no-scrollbar::-webkit-scrollbar {
          display: none;
      }

      /* Hide scrollbar for IE, Edge and Firefox */
      .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
      }



@font-face {
  font-family: 'montserrat-alternates';
  src: url('/font/Montserrat_Alternates/MontserratAlternates-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'montserrat-semibold';
  src: url('/font/Montserrat_Alternates/MontserratAlternates-SemiBold.ttf') format('truetype');
}
@font-face {
  font-family: 'montserrat-bold';
  src: url('/font/Montserrat_Alternates/MontserratAlternates-Bold.ttf') format('truetype');
}
@font-face {
  font-family: 'montserrat-medium';
  src: url('/font/Montserrat_Alternates/MontserratAlternates-medium.ttf') format('truetype');
}
@font-face {
  font-family: 'montaga';
  src: url('/font/Montaga/Montaga-Regular.ttf') format('truetype');
}

/* @font-face {
  font-family: 'ClashDisplay-Semibold';
  src: url('/fonts/ClashDisplay-Semibold.otf') format('truetype');
       font-weight: 600;
       font-display: swap;
       font-style: normal;
}

@font-face {
  font-family: 'ClashDisplay-Bold';
  src: url('/fonts/ClashDisplay-Bold.otf') format('truetype');
       font-weight: 700;
       font-display: swap;
       font-style: normal;
} */
</style>
