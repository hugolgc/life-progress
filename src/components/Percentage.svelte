<script lang="ts">
  import { MAX_AGE_IN_MILLISECONDS } from "../main";

  export let totalTime: number;
  export let timeSinceBirth: number;

  $: lifePercentage = ((totalTime - timeSinceBirth) / MAX_AGE_IN_MILLISECONDS) * 100;
</script>

<h1>{lifePercentage.toFixed(8)} %</h1>
