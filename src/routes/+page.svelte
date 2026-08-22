<script lang="ts">
	import Carousel from 'svelte-carousel';
	import Navbar from '$lib/components/navbar.svelte';
	import { enhance } from '$app/forms';
	import InfoBox from '$lib/components/InfoBox.svelte';
    
	let w = 0;

	let carousel: any; // for calling methods of the carousel instance

	const handleNextClick = () => {
		carousel.goToNext();
	};

	let imgNum = [1, 2, 3, 4, 5, 6, 7, 8];

</script>

<div class="bg-[url('/images/pattern.png')] bg-center -mx-8 p-8 text-2xl">
	<h1 class="lg:text-6xl md:text-5xl text-4xl tracking-widest text-center my-3">
		<b>LOYOLA BLAKEFIELD</b> 
		<br/> 
		<span class="text-yellow-100">CYBER COMPETITION</span>
	</h1>

	<div class="flex md:flex-row flex-col items-center text-center md:gap-4">
		<div>
			MARCH 20 2027
		</div>
		<hr class="flex-1">
		<div>
			LOYOLA BLAKEFIELD 
		</div>
		<hr class="flex-1">
		<div>
			KNOTT HALL 
		</div>
	</div>
</div>

<div class="text-2xl md:text-3xl my-4 -mx-8 p-3 px-8 text-blue-700 bg-blue-200">
	> REGISTRATION OPENING SOON!
</div>

<div bind:clientWidth={w}>
	<Carousel
			bind:this={carousel}
			particlesToShow={Math.floor(w/300)}
			autoplayDuration={0}
			duration={7000}
			autoplay
			timingFunction="linear"
			dots={false}
			arrows={false}
			swiping={false}
		>
			{#each imgNum as index}
				<img
					src={`/images/2026/${index}.JPG`}
					alt={`Image ${index}`}
					class="my-8 object-contain ml-3"
				/>
			{/each}
	</Carousel>
</div>

<div>
	<div class="text-2xl my-4 text-blue-50">
		> THANKS TO OUR SPONSORS
	</div>
	(the sponsors go here)
</div>