<script>
  import { onMount } from 'svelte';

  let products = [
    { model: "FANUC 6-ALL", upgrades: ["32 KB", "", "128 KB", "", "512 KB", "", "", ""] },
    { model: "FANUC 9-ALL", upgrades: ["", "", "", "", "512 KB", "1 MB", "1.5 MB", ""] },
    { model: "FANUC 11-ALL", upgrades: ["32 KB", "", "128 KB", "", "512 KB", "1 MB", "", "2 MB"] },
    { model: "FANUC 12-ALL", upgrades: ["32 KB", "", "128 KB", "", "512 KB", "1 MB", "", "2 MB"] },
    { model: "FANUC 15A", upgrades: ["", "", "", "", "", "1 MB", "", "2 MB"] },
    { model: "FANUC 15B", upgrades: ["", "", "", "", "", "1 MB", "", "2 MB"] },
    { model: "FANUC 15iB", upgrades: ["", "", "", "", "512 KB", "1 MB", "", "2 MB"] },
    { model: "FANUC 16iA", upgrades: ["", "", "", "", "512 KB", "1 MB", "", "2 MB"] },
    { model: "FANUC 16A", upgrades: ["", "", "", "", "512 KB", "", "", ""] },
    { model: "FANUC 16B", upgrades: ["", "", "", "", "512 KB", "", "", "2 MB"] },
    { model: "FANUC 16C", upgrades: ["", "", "", "", "512 KB", "", "", "2 MB"] },
    { model: "FANUC 18iA", upgrades: ["", "", "", "", "512 KB", "1 MB", "", "2 MB"] },
    { model: "FANUC 18A", upgrades: ["", "", "", "", "512 KB", "", "", ""] },
    { model: "FANUC 18B", upgrades: ["", "", "", "", "512 KB", "", "", ""] },
    { model: "FANUC 18C", upgrades: ["", "", "", "", "512 KB", "", "", "2 MB"] },
    { model: "FANUC 0-ANALOG", upgrades: ["", "48 KB", "", "", "", "", "", ""] },
    { model: "FANUC 0-DIGITAL", upgrades: ["", "", "128 KB", "", "", "", "", ""] },
    { model: "FANUC 10-ANALOG", upgrades: ["32 KB", "", "", "", "", "", "", ""] },
    { model: "FANUC 10-DIGITAL", upgrades: ["", "", "", "256 KB", "", "", "", ""] },
    { model: "YASNAC LX1", upgrades: ["", "", "128 KB", "", "", "", "", ""] },
    { model: "YASNAC LX2", upgrades: ["", "", "128 KB", "", "", "", "", ""] },
    { model: "YASNAC LX3", upgrades: ["", "", "", "", "512 KB", "1 MB", "", ""] },
    { model: "YASNAC MX1", upgrades: ["", "", "128 KB", "", "", "", "", ""] },
    { model: "YASNAC MX2", upgrades: ["", "", "128 KB", "", "", "", "", ""] },
    { model: "YASNAC MX3", upgrades: ["", "", "", "", "512 KB", "1 MB", "", ""] },
    { model: "YASNAC I-80", upgrades: ["", "", "128 KB", "256 KB", "512 KB", "1 MB", "", "2 MB"] },
    { model: "MITSUBISHI MITS 500 / MAZAK PLUS", upgrades: ["", "", "", "", "", "", "1.5 MB", "2 MB"] },
  ];

  onMount(() => {
    // Any necessary JavaScript initialization
  });
</script>

<svelte:head>
  <title>Tulip Electronics Inc. product list of CNC memory upgrades</title>
</svelte:head>

<div class="bg-gray-100 min-h-screen py-12">
  <div class="container mx-auto px-4">
    <div class="bg-white rounded-lg shadow-md p-8">
      <h1 class="text-4xl font-bold mb-6 text-center text-blue-600">Products</h1>
      
      <div class="space-y-4 mb-8">
        <p>All our products are backed by a 3-year warranty. <a href="/terms" class="text-blue-600 hover:underline">Terms and conditions here.</a></p>
        <p>Installation is easy, and support is available should you require it, by phone, Skype or email.</p>
        <p>If your model is not listed, we may still be able to help you find a solution.</p>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="py-2 px-4 text-left">MODEL</th>
              <th class="py-2 px-4 text-center" colspan="8">UPGRADES AVAILABLE</th>
            </tr>
          </thead>
          <tbody>
            {#each products as product, i}
              <tr class="{i % 2 === 0 ? 'bg-gray-100' : 'bg-white'}">
                <td class="py-2 px-4 font-semibold">{product.model}</td>
                {#each product.upgrades as upgrade}
                  <td class="py-2 px-4 text-center">{upgrade}</td>
                {/each}
              </tr>
            {/each}
          </tbody>
        </table>
      </div>

      <div class="mt-12 text-center">
        <h2 class="text-2xl font-bold mb-4">Upgrade your part-program storage with the industry's most trusted 3rd-party solutions.</h2>
        <a href="/contact" class="inline-block bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
          Contact Us
        </a>
      </div>
    </div>
  </div>
</div>