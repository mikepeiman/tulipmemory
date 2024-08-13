<script>
  import { onMount } from 'svelte';

  let formData = {
    realname: '',
    businessName: '',
    phone: '',
    email: '',
    message: ''
  };

  function handleSubmit() {
    // Handle form submission
    console.log('Form submitted', formData);
    // You'll need to implement the actual form submission logic here
  }

  onMount(() => {
    // Any necessary JavaScript initialization
  });
</script>

<svelte:head>
  <title>Tulip Electronics Inc. - Contact Us</title>
</svelte:head>

<div class="bg-gray-100 min-h-screen py-12">
  <div class="container mx-auto px-4">
    <div class="bg-white rounded-lg shadow-md p-8">
      <h1 class="text-4xl font-bold mb-6 text-center text-blue-600">Contact Us</h1>
      
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Upgrade Your Productivity</h2>
        <p class="text-lg mb-4">Please take a moment to send us your inquiry, whether it's a request for quote, new product development, or something else. We'll work with you to find the best solution for your needs.</p>
      </section>

      <form on:submit|preventDefault={handleSubmit} class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="realname" class="block text-sm font-medium text-gray-700">Your Name *</label>
            <input type="text" id="realname" bind:value={formData.realname} required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          </div>
          <div>
            <label for="businessName" class="block text-sm font-medium text-gray-700">Business Name *</label>
            <input type="text" id="businessName" bind:value={formData.businessName} required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number *</label>
            <input type="tel" id="phone" bind:value={formData.phone} required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email Address *</label>
            <input type="email" id="email" bind:value={formData.email} required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          </div>
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Your Message *</label>
          <p class="text-sm text-gray-500 mb-2">If your inquiry is a request for quote, please include the make, model and version number of your CNC control, and any other specifics available.</p>
          <textarea id="message" bind:value={formData.message} rows="5" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
        </div>
        <div class="text-center">
          <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Submit Message
          </button>
        </div>
      </form>

      <p class="text-center text-sm text-gray-500 mt-6">Your information is safe and respected with us.</p>
    </div>
  </div>
</div>