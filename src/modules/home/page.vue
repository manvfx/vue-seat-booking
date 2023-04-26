<script setup>
import MovieSeatBooking from "../../components/MovieSeatBooking.vue";
</script>

<template>
  <v-main>
    <v-container
      class="d-flex flex-column align-center justify-center"
      style="height: 100vh; width: 100vw"
    >
      <h1 class="text-h5 font-weight-bold">Vue Seat Booking</h1>
      <div class="text-body1">By Amin Najafi</div>
      <div class="my-8">
        <MovieSeatBooking />
      </div>
    </v-container>
  </v-main>
</template>
