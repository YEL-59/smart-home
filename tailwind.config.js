/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {  backgroundImage: {
      "hero-pattern":
        "url('/public/images/Service_Page_Images/service_page_images.png')",
      "contact-us-img":
        "url('/public/images/Home_Page_Images/ContactUs_Page_Images/contactus.png')",
      "blog-popular-post-img-1":
        "url('/public/images/blog_Page_Images/Popular_Post_Images/popularpost_img-1.png')",
      "blog-popular-post-img-2":
        "url('/public/images/blog_Page_Images/Popular_Post_Images/popularpost_img-2.png')",
      "card-img1": "url('./src/assets/images/homepage/Maskgroup2.png')",
      "carve-img":
        "url('./src/assets/images/homepage/photo-handsome-male-student-his-female-groupmate-demonstrates-okay-gesture-agree-with-something_1-removebg-preview 1.png')",
      "card-img2": "url('./src/assets/images/homepage/Rectangle1355.png')",
    },},
  },
  plugins: [],
}

