<script lang="ts">
    const handleMenu = () => {
        const menu = document.querySelector('#menu');
        if (menu && menu.classList.contains('hidden')) {
            console.log(menu);
            menu.classList.remove('hidden');
        } else if (menu) {
            menu.classList.add('hidden');
        }
    }
</script>

<div id='nav' class='p-4 md:p-0 bg-blue-100 border-blue-300 md:border-x-2 md:border-b-0 border-b-2 drop-shadow-glow flex md:flex-col flex-row items-center -mx-1 z-10'>
    <div class="flex-1 flex items-center md:m-8">
        <img src='/images/logo.png' class='w-auto md:h-40 h-20' alt='LBC2 Logo'>
    </div>
    <ul class='flex flex-col w-full *:w-full *:p-2 text-yellow-200 justify-center text-xl max-md:hidden *:transition-all'>
        <li class="hover:bg-yellow-200 hover:text-blue-800 hover:pl-4"><a href="/">> Home</a></li>
        <li class="hover:bg-yellow-200 hover:text-blue-800 hover:pl-4"><a href="/about">> About</a></li>
        <li class="hover:bg-yellow-200 hover:text-blue-800 hover:pl-4"><a href="/details">> Details</a></li>
        <!-- <li class="hover:bg-yellow-200 hover:text-blue-800 hover:pl-4"><a href="/">> Archive</a></li> -->
        <li class="hover:bg-yellow-200 hover:text-blue-800 hover:pl-4"><a href="/contact">> Contact</a></li>
        <li class="hover:bg-yellow-200 hover:text-blue-800 hover:pl-4"><a href="/register">> Register</a></li>
    </ul>
    <button on:click={handleMenu}><img src='/images/menu.svg' class='w-8 h-8 mr-4 md:hidden' alt='Menu'></button>
</div>
<div>
    <ul id="menu" class='hidden flex flex-col w-full *:w-full *:p-2 text-yellow-200 justify-center text-xl *:transition-all'>
        <li class="hover:bg-yellow-200 hover:text-blue-800 hover:pl-4"><a href="/">> Home</a></li>
        <li class="hover:bg-yellow-200 hover:text-blue-800 hover:pl-4"><a href="/about">> About</a></li>
        <li class="hover:bg-yellow-200 hover:text-blue-800 hover:pl-4"><a href="/details">> Details</a></li>
        <!-- <li class="hover:bg-yellow-200 hover:text-blue-800 hover:pl-4"><a href="/">> Archive</a></li> -->
        <li class="hover:bg-yellow-200 hover:text-blue-800 hover:pl-4"><a href="/contact">> Contact</a></li>
        <li class="hover:bg-yellow-200 hover:text-blue-800 hover:pl-4"><a href="/register">> Register</a></li>
    </ul>
</div>