<script>
	import InfoBox from "$lib/components/InfoBox.svelte";
  import { onMount } from "svelte";

  onMount(() => {
  // Check if Tally is loaded and load embeds
  if (window.Tally) {
    window.Tally.loadEmbeds();
  }
  });
</script>

<svelte:head>
    <script src="https://tally.so/widgets/embed.js"></script>
</svelte:head>

<p class="border-l-blue-300 text-sm">Can't see it? <a href="https://tally.so/r/WOa2bR">Click here.</a></p>
<iframe data-tally-src="https://tally.so/embed/WOa2bR?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="2050" frameborder="0" marginheight="0" marginwidth="0" title="LBC2X Sign Up"></iframe>
<p class="text-blue-300 text-sm">Can't see the form? <a class="underline" href="https://tally.so/r/WOa2bR">Click here.</a></p>
