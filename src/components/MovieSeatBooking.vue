<script>
export default {
  name: "MovieSeatBooking",
  data() {
    return {
      seats: [
        { id: 1, selected: false, disabled: false },
        { id: 2, selected: false, disabled: false },
        { id: 3, selected: false, disabled: true },
        { id: 4, selected: false, disabled: false },
        { id: 5, selected: false, disabled: false },
        { id: 6, selected: false, disabled: false },
        { id: 7, selected: false, disabled: true },
        { id: 8, selected: false, disabled: false },
        // more seats here
      ],
    };
  },
  computed: {
    selectedSeats() {
      return this.seats.filter((seat) => seat.selected).length;
    },
    totalPrice() {
      const ticketPrice = 10;
      return this.selectedSeats * ticketPrice;
    },
  },
  methods: {
    selectSeat(seat) {
      if (!seat.disabled) {
        seat.selected = !seat.selected;
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="seat-container">
      <div
        v-for="(seat, index) in seats"
        :key="index"
        :class="{
          seat: true,
          selected: seat.selected,
          disabled: seat.disabled,
        }"
        @click="selectSeat(seat)"
      >
        {{ index + 1 }}
      </div>
    </div>
    <div class="info">
      <p>Selected seats: {{ selectedSeats }}</p>
      <p>Total price: ${{ totalPrice }}</p>
    </div>
  </div>
</template>

<style>
.seat-container {
  display: flex;
  flex-direction: row;
}
.seat {
  width: 32px;
  height: 32px;
  background-color: #ccc;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: small;
}

.selected {
  background-color: green;
  color: white;
}

.disabled {
  background-color: red;
  color: white;
  cursor: not-allowed;
}

.info {
  margin-top: 20px;
  text-align: center;
}
</style>
