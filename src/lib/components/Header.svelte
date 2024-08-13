<script>
  import { IconMenu2 } from "@tabler/icons-svelte";
  let mobileMenuOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<header class="bg-gray-800 text-white" role="banner">
  <div class="container mx-auto px-4 py-2 flex justify-between items-center">
    <a href="/" class="text-2xl font-bold">
      <span>Tulip CNC Memory</span>
    </a>
    <button
      class="md:hidden px-3 py-2 bg-gray-700 rounded flex items-center"
      on:click={toggleMobileMenu}
      aria-label="Toggle mobile menu">
      <IconMenu2 size={24} />
    </button>
    <nav class="hidden md:block">
      <ul class="flex space-x-4">
        <li><a href="/" class="hover:text-gray-300">Home</a></li>
        <li><a href="/about" class="hover:text-gray-300">About Us</a></li>
        <li><a href="/products" class="hover:text-gray-300">Products</a></li>
        <li>
          <a href="/new-products" class="hover:text-gray-300 text-yellow-400"
            >New Products!</a>
        </li>
        <li><a href="/resources" class="hover:text-gray-300">Resources</a></li>
        <li><a href="/contact" class="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  </div>
  {#if mobileMenuOpen}
    <nav class="md:hidden">
      <ul class="bg-gray-700 px-2 py-3 space-y-2">
        <li>
          <a href="/" class="block hover:bg-gray-600 px-3 py-2 rounded">Home</a>
        </li>
        <li>
          <a href="/about" class="block hover:bg-gray-600 px-3 py-2 rounded"
            >About Us</a>
        </li>
        <li>
          <a href="/products" class="block hover:bg-gray-600 px-3 py-2 rounded"
            >Products</a>
        </li>
        <li>
          <a
            href="/new-products"
            class="block hover:bg-gray-600 px-3 py-2 rounded text-yellow-400"
            >New Products!</a>
        </li>
        <li>
          <a href="/resources" class="block hover:bg-gray-600 px-3 py-2 rounded"
            >Resources</a>
        </li>
        <li>
          <a href="/contact" class="block hover:bg-gray-600 px-3 py-2 rounded"
            >Contact</a>
        </li>
      </ul>
    </nav>
  {/if}
</header>
