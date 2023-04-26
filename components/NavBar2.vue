<script setup lang="ts">
	const navLinks = [
		{ name: 'Home', link: '/', icon: 'fa-solid fa-house fa-fw' },
		// {name: 'Anime', link: '/anime', icon: 'fa-solid fa-paw-simple fa-fw'},
		// {name: 'Settings', link: '/settings', icon: 'fa-solid fa-cog fa-fw'},
		// {name: 'Test', link: '/test', icon: 'fa-solid fa-check fa-fw'},
		// {name: 'Todo', link: '/todo', icon: 'fa-solid fa-rectangle-list fa-fw'},
		{ name: 'Blog', link: '/blog', icon: 'fa-solid fa-rss fa-fw' },
		// {name: 'About', link: '/about', icon: 'fa-solid fa-info fa-fw'},
		{ name: 'Login', link: '/login', icon: 'fa-solid fa-right-to-bracket fa-fw' },
		{ name: 'Register', link: '/register', icon: 'fa-solid fa-user-plus fa-fw' }
	];

    const navBarCollapse = ref<boolean>(false)

    const collapse = () => navBarCollapse.value = !navBarCollapse.value
</script>

<template>
    <!-- Site Banner -->
    <div class="sticky top-0 bg-black min-h-screen" id="navbar">
    	<nav class="flex flex-col transition-all duration-300 delay-50" :class="{ 'w-12': navBarCollapse }">
    		<!-- LOGO -->
    		<!--    <div class="p-2 mt-3 mb-2">-->
    		<!--        <img alt="Logo Icon" class="w-full" src="https://avatars.githubusercontent.com/u/77170164?s=200&v=4">-->
    		<!--    </div>-->

    		<div class="flex items-center justify-end w-full px-4 py-2 text-white my-4 cursor-pointer hover:bg-gray-800 hover:border-l-4 hover:border-white" @click="collapse">
    			<i class="fa-solid fa-bars fa-fw" />
    		</div>
    			<a v-for="x in navLinks" :href="x.link" class="group flex items-center gap-4 text-white text-base font-bold w-full py-1.5 pl-3 hover:bg-gray-800 hover: hover:border-l-4 hover:border-white transition-all duration-150 delay-50">
    				<span class="group-hover:origin-center group-hover:rotate-0 duration-300"><i :class="x.icon" /></span>
    				<span class="whitespace-pre overflow-hidden">{{ x.name }}</span>
    			</a>
    			<button	class="flex items-center gap-4 text-red-500 text-base font-bold w-full py-1.5 pl-3 hover:bg-gray-800 hover:border-l-4 hover:border-red-500 transition-all duration-150 delay-50">
    				<span><i class="fa-solid fa-right-from-bracket fa-fw" /></span>
    				<span class="whitespace-pre overflow-hidden">Sign Out</span>
    			</button>

    			<div class="my-6 grow justify-end">
    				<div class="w-full flex justify-center">
    					<a href="/"><img :class="{'w-8 h-8' : navBarCollapse}" class="rounded-full ring ring-offset-green-300 ring-offset-base-100 ring-offset-2" src="https://0.gravatar.com/avatar/17a6a39df686ba274047edf0c1e9c002" alt="Your Profile Icon"/></a>
    				</div>
    			</div>
    	</nav>
    </div>

</template>
