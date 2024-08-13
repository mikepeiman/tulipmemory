<script>
  import { enhancedImg } from '@sveltejs/enhanced-img';

  export let title;
  export let image;
  export let data = [];
</script>

<div class="flex-grow flex-shrink-0 basis-72 transition-all duration-200 ease-in-out rounded-md border-5 border-opacity-10 border-blue-300 cursor-pointer m-8 relative hover:border-blue-300 focus:border-blue-300 active:border-blue-300">
  <div class="overflow-hidden h-[150px] max-h-[150px] bg-yellow-400 bg-opacity-50">
    <img
      use:enhancedImg
      src={image}
      alt={title}
      class="w-full h-full object-cover opacity-100 transition-all duration-200 ease-in-out rounded-t-md hover:opacity-70"
    />
  </div>
  <div class="bg-blue-300 bg-opacity-10 border-b-5 border-blue-300 rounded-t-md font-bold leading-6 p-2 text-green-400">
    {title}
  </div>
  <div class="text-sm leading-6 p-3">
    <table class="w-full text-left uppercase">
      <thead>
        <tr>
          <th class="font-bold text-white">MODEL</th>
          <th class="font-bold text-white">VERSION</th>
        </tr>
      </thead>
      <tbody>
        {#each data as row}
          <tr>
            <td class="text-green-400">{row.model}</td>
            <td class="text-green-400">{row.version}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style lang="postcss">
  :global(body) {
    @apply bg-[url('tulip-bg-1-1000x600.jpg')] bg-no-repeat bg-center bg-fixed bg-cover p-0 m-0 font-['Exo_2',sans-serif];
  }

  div :global(p) {
    @apply m-0 mb-3;
  }

  div:hover :global(p) {
    @apply text-yellow-400;
  }
</style>
