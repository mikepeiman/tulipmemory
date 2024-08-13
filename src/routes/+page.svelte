<script>
  import Card from "$components/Card.svelte";
  import fanucImg from "$images/DSC03208-forweb.jpg";
  import yasnacImg from "$images/DSC03218-forweb.jpg";
  import mitsubishiImg from "$images/DSC03193-forweb.jpg";
  import logo from "$lib/assets/images/TulipLogo.png";
  $: console.log(`🚀 ~ TulipLogo:`, logo);

  const cardData = [
    {
      title: "FANUC",
      image: fanucImg,
      data: [
        { model: "0, 10", version: "Analog, Digital" },
        { model: "6, 9, 11, 12", version: "All versions" },
        { model: "15, 16, 18", version: "iA, A, B" },
        { model: "16, 18", version: "B-FROM, C" },
      ],
    },
    {
      title: "YASNAC",
      image: yasnacImg,
      data: [
        { model: "LX", version: "1, 2, 3" },
        { model: "MX", version: "1, 2, 3" },
        { model: "i-80", version: "" },
      ],
    },
    {
      title: "MITSUBISHI",
      image: mitsubishiImg,
      data: [{ model: "MITS 500", version: "Mazak Plus" }],
    },
  ];
</script>

<div class="hero bg-transparent pb-4">
  <div class="max-w-5xl mx-auto text-center p-6">
    <a href="/" class="inline-block mb-4">
      <img src={logo} alt="Logo Image" class="h-40 mb-4 mt-4" />
      <div>
        <h1
          class="text-yellow-400 text-4xl md:text-5xl mb-2 font-normal font-['Neuton',serif]">
          TULIP ELECTRONICS INC.
        </h1>
        <h2 class="text-white text-xl md:text-2xl font-normal">
          Delivering reliable CNC memory upgrades since 1988
        </h2>
      </div>
    </a>
  </div>
</div>

<div
  class="bg-blue-900 bg-opacity-50 border-t-5 border-b-5 border-blue-300 w-full mb-5 text-white text-center px-6 py-8">
  <h1 class="text-2xl md:text-3xl font-normal mb-8">
    We currently offer memory upgrades for the following machine models:
  </h1>
  <div class="cards flex flex-wrap justify-center">
    {#each cardData as card}
      <Card title={card.title} image={card.image} data={card.data} />
    {/each}
  </div>
  <p class="mt-8">
    <a
      href="/products"
      class="bg-blue-900 bg-opacity-25 border-2 border-blue-300 rounded-md text-white py-3 px-6 inline-block hover:bg-blue-800 transition-colors duration-200">
      See full list of upgrades by model
    </a>
  </p>
</div>

<section class="max-w-5xl mx-auto text-center px-4 mb-20">
  <h2 class="text-white text-3xl mb-4">Upgrade Your Productivity</h2>
  <p class="text-gray-200 text-xl mb-8 max-w-2xl mx-auto">
    Please take a moment to send us your inquiry, whether it's a request for
    quote, new product development, or to become a dealer. We'll work with you
    to find the best solution for your needs.
  </p>
  <a
    href="/contact"
    class="bg-blue-900 bg-opacity-25 border-2 border-blue-300 rounded-md text-white py-3 px-6 inline-block hover:bg-blue-800 transition-colors duration-200">
    Contact Us
  </a>
</section>
