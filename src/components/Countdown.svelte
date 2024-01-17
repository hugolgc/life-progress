<script lang="ts">
  import { MAX_AGE_IN_MILLISECONDS } from "../main";

  export let totalTime: number;
  export let timeSinceBirth: number;

  const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

  $: remainingTime = () => {
    const timeBetweenBirthAndDeath = timeSinceBirth - totalTime + MAX_AGE_IN_MILLISECONDS;
    const years = Math.floor(timeBetweenBirthAndDeath / (365.25 * DAY_IN_MILLISECONDS));
    const months = Math.floor(
      (timeBetweenBirthAndDeath % (365.25 * DAY_IN_MILLISECONDS)) / (30.44 * DAY_IN_MILLISECONDS)
    );
    const days = Math.floor(
      (timeBetweenBirthAndDeath % (30.44 * DAY_IN_MILLISECONDS)) / DAY_IN_MILLISECONDS
    );
    const hours = Math.floor((timeBetweenBirthAndDeath % DAY_IN_MILLISECONDS) / (60 * 60 * 1000));
    const minutes = Math.floor((timeBetweenBirthAndDeath % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeBetweenBirthAndDeath % (60 * 1000)) / 1000);

    return { years, months, days, hours, minutes, seconds };
  };
</script>

<h1>
  <span>{remainingTime().years}y</span>
  <span>{remainingTime().months}m</span>
  <span>{remainingTime().days}d</span>
  <span>{remainingTime().hours}h</span>
  <span>{remainingTime().minutes}m</span>
  <span>{remainingTime().seconds}s</span>
</h1>
