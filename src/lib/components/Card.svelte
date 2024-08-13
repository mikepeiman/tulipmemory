<script>
  export let title;
  export let image;
  $: console.log(`🚀 ~ image:`, image);
  export let data = [];
</script>

<div
  class="card flex-grow flex-shrink-0 basis-72 transition-all duration-200 ease-in-out rounded-md border-5 border-opacity-10 border-blue-300 cursor-pointer m-8 relative hover:border-blue-300 focus:border-blue-300 active:border-blue-300">
  <div
    class="overflow-hidden h-[150px] max-h-[150px] bg-yellow-400 bg-opacity-50">
    <img
      src={image}
      alt={title}
      class="card-image w-full h-full object-cover opacity-100 transition-all duration-200 ease-in-out rounded-t-md hover:opacity-70" />
  </div>
  <div
    class="bg-blue-300 bg-opacity-10 border-b-5 border-blue-300 rounded-t-md font-bold leading-6 p-2 text-green-400">
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
  .card {
    -webkit-flex-basis: 15em;
    -moz-flex-basis: 15em;
    flex-basis: 15em;
    -ms-flex-preferred-size: 15em;
    -webkit-flex-grow: 1;
    -moz-flex-grow: 1;
    flex-grow: 1;
    -ms-flex-positive: 1;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    border-radius: 3px;
    border: 5px solid rgba(119, 194, 255, 0.1);
    cursor: pointer;
    margin: 2em 2em 1.5em 2em;
    position: relative;
  }
  .card .card-image {
    overflow: hidden;
    height: 150px;
    max-height: 150px;
    background-color: rgba(255, 207, 34, 0.5);
  }
  .card .card-image img {
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    width: 100%;
    opacity: 1;
  }
  .card .card-header {
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    background-color: rgba(119, 194, 255, 0.1);
    border-bottom: 5px solid #77c2ff;
    border-radius: 3px 3px 0 0;
    font-weight: bold;
    line-height: 1.5em;
    padding: 0.5em 0.75em;
    color: #77cf22;
  }
  .card .card-copy {
    font-size: 0.9em;
    line-height: 1.5em;
    padding: 0.75em 0.75em;
  }
  .card .card-copy p {
    margin: 0 0 0.75em;
  }
  .card .card-copy table {
    text-align: left;
    text-transform: uppercase;
  }
  .card:focus,
  .card:hover {
    cursor: pointer;
    border: 5px solid #77c2ff;
  }
  .card:focus p,
  .card:hover p {
    color: #ffcf22;
  }
  .card:focus img,
  .card:hover img {
    opacity: 0.7;
  }
  .card:active {
    border: 5px solid #77c2ff;
  }
</style>
