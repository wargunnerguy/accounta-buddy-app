<template>
  <div class="h-swiper-container">
      <swiper
        ref="carousel"
        class="swiper"
        :options="hSwiperOptions"
        @ready="onSwiperRedied"
        @clickSlide="onSwiperClickSlide"
        @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
      >
        <swiper-slide>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Week 2 - 10.01.2022 </ion-card-subtitle>
              <ion-card-title>Reimo</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-item>
                <ion-label>Üks valik</ion-label>
                <ion-checkbox
                  slot="end">
                </ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Kaks valik</ion-label>
                <ion-checkbox
                  slot="end">
                </ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Kolm valik</ion-label>
                <ion-checkbox
                  slot="end">
                </ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Neli valik</ion-label>
                <ion-checkbox
                  slot="end">
                </ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Viis valik</ion-label>
                <ion-checkbox
                  slot="end">
                </ion-checkbox>
              </ion-item>
            </ion-card-content>
          </ion-card>
        </swiper-slide>
        <swiper-slide>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Week 2 - 10.01.2022 </ion-card-subtitle>
              <ion-card-title>Sten</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-item>
                <ion-label>Üks valik</ion-label>
                <ion-checkbox
                  slot="end">
                </ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Kaks valik</ion-label>
                <ion-checkbox
                  slot="end">
                </ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Kolm valik</ion-label>
                <ion-checkbox
                  slot="end">
                </ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Neli valik</ion-label>
                <ion-checkbox
                  slot="end">
                </ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Viis valik</ion-label>
                <ion-checkbox
                  slot="end">
                </ion-checkbox>
              </ion-item>
            </ion-card-content>
          </ion-card>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
export default {
  name: 'HSwiper',
  data() {
    return {
      hSwiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        effect: 'cube',
        direction: 'horizontal',
        cubeEffect: {
          shadow: false,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.94
        },
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      }
    }
  },
  methods: {
    onSwiperRedied(swiper) {
      console.log('Swiper redied!', swiper)
    },
    onSwiperSlideChangeTransitionStart() {
      console.log('SwiperSlideChangeTransitionStart!')
    },
    onSwiperClickSlide(index, reallyIndex) {
      console.log('Swiper click slide!', reallyIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
.h-swiper-container {
  height: 400px;
  width: 400px;

  .swiper {
    height: inherit;
    width: inherit;

    .swiper-slide {
      background-color: #eee;
    }

    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
}
</style>
