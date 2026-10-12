<script lang="ts">
	import Marquee from 'svelte-fast-marquee';
    
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
			8 AM - 3 PM
		</div>
	</div>

	<div class="flex md:flex-row md:gap-0 flex-col gap-2 justify-center items-center mt-10 text-center">
		<span>PRESENTED BY</span> 
		<img src="/images/sponsors/darkwolf.png" alt="Dark Wolf Solutions" class="w-96 p-0 m-0">
	</div>
</div>

<div class="flex text-2xl md:text-3xl my-4 -mx-8 p-3 px-8 text-blue-700 bg-blue-200">
	<div class="flex-1">
		> REGISTRATION OPEN <b>NOW!</b>
	</div>
	<div>
		<a href="register" class="p-3 bg-yellow-100 border-4 border-yellow-200"> REGISTER </a>
	</div>
</div>

<div class="my-6 -mx-8">
	<Marquee direction="left" speed='60' gradientColor="#000010" gradientWidth="40px">
		{#each imgNum as num}
			<img src={`/images/2026/${num}.JPG`} alt="Event" class="h-32 md:h-48 ml-4" />
		{/each}
	</Marquee>
</div>

<div>
	
</div>