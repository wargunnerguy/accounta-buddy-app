<template>
  <div class="v-swiper-container swiper-container">
    <!-- component: only render Swiper on browser env -->
    <client-only>
      <swiper
        ref="swiper"
        class="swiper"
        :options="vSwiperOptions"
      >
        <swiper-slide v-for="(week) in data" :key="new Date().toISOString()">
          <div class="h-swiper-container swiper-container">
            <swiper
              ref="swiper"
              class="swiper"
              :options="hSwiperOptions"
            >
              <swiper-slide v-for="(personData) in week.weeklyData" :key="week + '_' + personData.userId">
                <ion-card>
                  <ion-card-header>
                    <ion-card-subtitle>{{ week.startDate }}</ion-card-subtitle>
                    <ion-card-title>{{ personData.name === 'buddy_0' ? 'Sten' : 'Reimo' }}</ion-card-title>
                    <!--TODO get real name -->
                  </ion-card-header>
                  <ion-card-content>
                    <ion-item v-for="(task) in personData.tasks"
                              :key="week + '_' + personData.userId + '_' + task.taskId">
                      <ion-label>{{ task.description }}</ion-label>
                      <ion-checkbox :checked="task.isDone"
                                    slot="end">
                      </ion-checkbox>
                    </ion-item>
                  </ion-card-content>
                </ion-card>
              </swiper-slide>
              <div class="swiper-pagination-h" slot="pagination"></div>
            </swiper>
          </div>
        </swiper-slide>
        <div class="swiper-pagination-v" slot="pagination"></div>
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'VSwiper',
  props: ['data'],
  data() {
    return {
      vSwiperOptions: {
        loop: true,
        effect: 'cube',
        cubeEffect: {
          shadow: false,
          slideShadows: false,
        },
        direction: 'vertical',

      },
      hSwiperOptions: {
        loop: true,
        effect: 'cube',
        direction: 'horizontal',
        cubeEffect: {
          shadow: true,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.94
        },
      }

    }
  },
}
</script>

<style lang="scss" scoped>
.v-swiper-container {
  .swiper {
    height: 400px;
    width: 400px;

    .swiper-slide {
      background-color: #eee;
    }
  }
}

.h-swiper-container {
  .swiper {
    height: 400px;
    width: 400px;

    .swiper-slide {
      background-color: #eee;
    }
  }
}
</style>
