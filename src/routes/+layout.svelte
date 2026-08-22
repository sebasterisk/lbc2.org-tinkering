<script>
    import '../app.css';
    
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
	import Navbar from '$lib/components/navbar.svelte';
    import { fade, fly } from 'svelte/transition';
	import { expoIn, expoOut, sineIn, sineInOut, sineOut } from 'svelte/easing';

	inject({ mode: dev ? 'development' : 'production' });

    export let data
</script>

<div class="mx-auto md:h-screen lg:w-5/6 w-full flex md:flex-row flex-col">
    <Navbar />
    <div class="flex-1 bg-blue-800 box-border text-white overflow-hidden">
        {#key data.url}
        <div 
            class="h-full overflow-y-auto p-8 md:pt-[10vh] xl:pt-[15vh]"
            id="main"
            in:fly={{ duration: 300, delay: 200, y: 20}}
            out:fade={{ duration: 200 }}
        >
            <slot />
        </div>
        {/key}
    </div>
</div>
