export default function Contact() {
  // Setup card with basic contact form
  return (
    <div>
      <div class="bg-white rounded-lg p-8">
        <div class="max-w-sm mx-auto">
          <div class="text-gray-700 text-2xl font-medium text-center">
            Contact Us
          </div>
          <div class="h-1 bg-indigo-500 rounded w-24 mt-2 mb-6 mx-auto"></div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div class="mt-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div class="mt-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="message"
            >
              Message
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows={3}
              placeholder="Message"
            />
          </div>
          <div class="mt-6">
            <button
              class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
