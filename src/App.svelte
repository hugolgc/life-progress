<script lang="ts">
  import { onMount } from "svelte";
  import Countdown from "./components/Countdown.svelte";
  import Percentage from "./components/Percentage.svelte";

  let totalTime = 0;
  let showPercentage = true;
  let timeSinceBirth = new Date("2000-09-23").getTime();
  let timeSincePageLoad = new Date().getTime();

  onMount(updateTimeSincePageLoad);

  function updateTimeSincePageLoad() {
    totalTime = timeSincePageLoad + performance.now();
    requestAnimationFrame(updateTimeSincePageLoad);
  }
</script>

<main>
  {#if showPercentage === true}
    <Percentage {timeSinceBirth} {totalTime} />
  {:else}
    <Countdown {timeSinceBirth} {totalTime} />
  {/if}
</main>

<aside>
  <button on:click={() => (showPercentage = true)} class:active={showPercentage}>
    Pourcentage
  </button>
  <button on:click={() => (showPercentage = false)} class:active={!showPercentage}>
    Compte à rebourd
  </button>
</aside>
