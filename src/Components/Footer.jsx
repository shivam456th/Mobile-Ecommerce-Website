import React from 'react'

const Footer = () => {
  return (
    <div>
      <p className="md:text-sm text-[12px] text-slate-700 opacity-30 md:opacity-100 md:font-semibold text-center my-5 ">© Copyright 2020 Lorem Inc. All rights reserved. lorem*10</p>
      <footer class="bg-gray-900 text-gray-300 py-10 px-5 md:px-20">
  {/* <!-- Footer Grid --> */}
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* <!-- About Section --> */}
    <div>
      <h3 class="text-xl font-semibold text-white mb-4">About Us</h3>
      <p class="text-sm">
        We provide the best products for the best prices. Quality and customer satisfaction are our top priorities.
      </p>
    </div>
    
    {/* <!-- Links Section --> */}
    <div>
      <h3 class="text-xl font-semibold text-white mb-4">Quick Links</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-blue-400">Home</a></li>
        <li><a href="#" class="hover:text-blue-400">Shop</a></li>
        <li><a href="#" class="hover:text-blue-400">About</a></li>
        <li><a href="#" class="hover:text-blue-400">Contact</a></li>
      </ul>
    </div>
    
    {/* <!-- Contact Section --> */}
    <div>
      <h3 class="text-xl font-semibold text-white mb-4">Contact Us</h3>
      <ul class="space-y-2">
        <li><span class="font-medium">Email:</span> support@example.com</li>
        <li><span class="font-medium">Phone:</span> +123 456 789</li>
        <li><span class="font-medium">Address:</span> 123 Main St, City, Country</li>
      </ul>
    </div>
    
    {/* <!-- Social Media --> */}
    <div>
      <h3 class="text-xl font-semibold text-white mb-4">Follow Us</h3>
      <div class="flex space-x-4">
        <a href="#" class="text-gray-300 hover:text-blue-400">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 1 0-10 10 10 10 0 0 0 10-10Zm-8-1v-2a1 1 0 1 1 2 0v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 0 1 0-2h2ZM5 12a7 7 0 1 1 7 7 7 7 0 0 1-7-7Z"/>
          </svg>
        </a>
        <a href="#" class="text-gray-300 hover:text-blue-400">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.56a9.93 9.93 0 0 1-2.83.77 4.92 4.92 0 0 0 2.17-2.71 9.9 9.9 0 0 1-3.13 1.19 4.92 4.92 0 0 0-8.38 4.49 13.96 13.96 0 0 1-10.13-5.15 4.92 4.92 0 0 0 1.52 6.57 4.88 4.88 0 0 1-2.23-.62v.06a4.92 4.92 0 0 0 3.94 4.83 4.92 4.92 0 0 1-2.21.08 4.92 4.92 0 0 0 4.59 3.41A9.88 9.88 0 0 1 0 21.54a13.95 13.95 0 0 0 7.56 2.21c9.06 0 14.01-7.5 14.01-14 0-.21 0-.43-.02-.64A10 10 0 0 0 24 4.56Z"/>
          </svg>
        </a>
        <a href="#" class="text-gray-300 hover:text-blue-400">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 6.46 9.42c.47.09.65-.21.65-.46v-1.63a3 3 0 0 1-.73-.28c-1.68-.81-2.45-3.33-2.45-3.33a1.93 1.93 0 0 0-.86-1.13c-.71-.5.05-.5.05-.5.79 0 1.21.84 1.21.84.7 1.21 1.83.86 2.27.66a1.9 1.9 0 0 1 .57-1.21c-1.92-.22-3.93-1-3.93-4.32a3.44 3.44 0 0 1 .92-2.38 3.2 3.2 0 0 1 .09-2.35s.72-.22 2.36.91a8.14 8.14 0 0 1 4.3 0c1.64-1.13 2.36-.91 2.36-.91a3.2 3.2 0 0 1 .09 2.35 3.44 3.44 0 0 1 .92 2.38c0 3.33-2 4.1-3.92 4.32a1.9 1.9 0 0 1 .55 1.48v2.18c0 .25.18.56.66.46A10 10 0 0 0 12 2Z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
  {/* <!-- Footer Bottom --> */}
  <div class="mt-10 text-center border-t border-gray-700 pt-5">
    <p class="text-sm">
      © 2025 Company Name. All rights reserved.
    </p>
  </div>
</footer>
    </div>
  )
}

export default Footer