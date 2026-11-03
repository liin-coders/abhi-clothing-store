/* =====================================================================
   products.js  -  WEBSITE KE SAARE PRODUCTS YAHAN HAIN
   =====================================================================
   Catalog page, home page ka catalog aur "Just Landed" slider, sab ke
   products isi file se aate hain. Kuch aur badalne ki zaroorat nahi.

   Har product ek block hota hai, aise:
       {
         category: "T-Shirts",
         name: "Classic T-Shirt",
         price: 429,
         mrp: 549,
         sizes: "S M L XL",
         front: "images/classic-front.jpg",
         back: "images/classic-back.jpg"
       },

   >> PRODUCT BADALNA
      Bas us product ka naam / price / photo ka text badlo.
      File SAVE karo aur website refresh karo.

   >> NAYA PRODUCT JODNA
      Kisi bhi product ka poora block { ... }, copy karo, usi category ke
      neeche paste karo aur values badal do.

   >> PRODUCT HATANA
      Us product ka poora block { ... }, (comma samet) delete kar do.

   >> PHOTO KAISE LAGAYEN
      1) Photo ko "images" folder me rakho (naam chhota, bina space ke,
         jaise  tshirt-black-front.jpg ).
      2) Yahan likho:  front: "images/tshirt-black-front.jpg"
      Photo seedhi (aage se) 4:5 shape ki, jaise 800 x 1000 pixel, aur
      200 KB se halki ho to website tez chalti hai.

   >> DHYAN RAKHNE WALI BAATEIN
      - Quotes " " aur comma , mat hatao. Har block ke baad comma zaroor ho
        (sabse aakhri block ke baad bhi chalta hai).
      - price aur mrp me sirf number likho (429, 1299). Rs ya comma nahi.
      - category ka naam bilkul aisa hi ho: T-Shirts, Polo Shirts, Jackets,
        Overcoats, Denim, Trousers, Chinos, Joggers, Suits, Blazers,
        Formal Shirts, Tuxedos.
      - HOME PAGE par har category ka PEHLA product dikhta hai, isliye jo
        product home par dikhana ho use category me sabse upar rakho.
   ===================================================================== */

window.PRODUCTS = [

  /* ================= T-SHIRTS (12 products) ================= */

  // 1) Classic T-Shirt
  {
    category: "T-Shirts",   // category ka naam (mega menu wala hi naam likhna, spelling same rakho)
    name: "Classic T-Shirt",   // product ka naam
    price: 419,   // bikri ka daam (Rs). Sirf number likho, Rs ya comma nahi
    mrp: 539,   // original daam (Rs). Discount % apne aap ban jaata hai. Discount nahi dikhana to price wala hi number likho
    sizes: "S M L XL",   // sizes, beech me space dekar likho
    front: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2",   // AAGE ki photo (images/naam.jpg ya poora link)
    back: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3"   // PEECHE ki photo (nahi hai to khali "" chhod do)
  },

  // 2) Essential T-Shirt
  {
    category: "T-Shirts",
    name: "Essential T-Shirt",
    price: 499,
    mrp: 709,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1"
  },

  // 3) Signature T-Shirt
  {
    category: "T-Shirts",
    name: "Signature T-Shirt",
    price: 549,
    mrp: 839,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5"
  },

  // 4) Heritage T-Shirt
  {
    category: "T-Shirts",
    name: "Heritage T-Shirt",
    price: 469,
    mrp: 629,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4"
  },

  // 5) Urban T-Shirt
  {
    category: "T-Shirts",
    name: "Urban T-Shirt",
    price: 599,
    mrp: 999,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6",
    back: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5"
  },

  // 6) Premium T-Shirt
  {
    category: "T-Shirts",
    name: "Premium T-Shirt",
    price: 449,
    mrp: 619,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3"
  },

  // 7) Everyday T-Shirt
  {
    category: "T-Shirts",
    name: "Everyday T-Shirt",
    price: 519,
    mrp: 769,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1",
    back: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2"
  },

  // 8) Modern T-Shirt
  {
    category: "T-Shirts",
    name: "Modern T-Shirt",
    price: 569,
    mrp: 1029,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2"
  },

  // 9) Relaxed T-Shirt
  {
    category: "T-Shirts",
    name: "Relaxed T-Shirt",
    price: 399,
    mrp: 499,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4"
  },

  // 10) Tailored T-Shirt
  {
    category: "T-Shirts",
    name: "Tailored T-Shirt",
    price: 619,
    mrp: 999,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3"
  },

  // 11) Slim Fit T-Shirt
  {
    category: "T-Shirts",
    name: "Slim Fit T-Shirt",
    price: 499,
    mrp: 669,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5"
  },

  // 12) Studio T-Shirt
  {
    category: "T-Shirts",
    name: "Studio T-Shirt",
    price: 549,
    mrp: 809,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6"
  },

  /* ================= POLO SHIRTS (12 products) ================= */

  // 1) Classic Polo Shirt
  {
    category: "Polo Shirts",
    name: "Classic Polo Shirt",
    price: 679,
    mrp: 869,
    sizes: "S M L XL XXL",
    front: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3"
  },

  // 2) Essential Polo Shirt
  {
    category: "Polo Shirts",
    name: "Essential Polo Shirt",
    price: 799,
    mrp: 1139,
    sizes: "S M L XL XXL",
    front: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1"
  },

  // 3) Signature Polo Shirt
  {
    category: "Polo Shirts",
    name: "Signature Polo Shirt",
    price: 879,
    mrp: 1349,
    sizes: "S M L XL XXL",
    front: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5"
  },

  // 4) Heritage Polo Shirt
  {
    category: "Polo Shirts",
    name: "Heritage Polo Shirt",
    price: 759,
    mrp: 1009,
    sizes: "S M L XL XXL",
    front: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4"
  },

  // 5) Urban Polo Shirt
  {
    category: "Polo Shirts",
    name: "Urban Polo Shirt",
    price: 959,
    mrp: 1599,
    sizes: "S M L XL XXL",
    front: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6",
    back: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5"
  },

  // 6) Premium Polo Shirt
  {
    category: "Polo Shirts",
    name: "Premium Polo Shirt",
    price: 719,
    mrp: 999,
    sizes: "S M L XL XXL",
    front: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3"
  },

  // 7) Everyday Polo Shirt
  {
    category: "Polo Shirts",
    name: "Everyday Polo Shirt",
    price: 839,
    mrp: 1249,
    sizes: "S M L XL XXL",
    front: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1",
    back: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2"
  },

  // 8) Modern Polo Shirt
  {
    category: "Polo Shirts",
    name: "Modern Polo Shirt",
    price: 919,
    mrp: 1669,
    sizes: "S M L XL XXL",
    front: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2"
  },

  // 9) Relaxed Polo Shirt
  {
    category: "Polo Shirts",
    name: "Relaxed Polo Shirt",
    price: 639,
    mrp: 799,
    sizes: "S M L XL XXL",
    front: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4"
  },

  // 10) Tailored Polo Shirt
  {
    category: "Polo Shirts",
    name: "Tailored Polo Shirt",
    price: 999,
    mrp: 1609,
    sizes: "S M L XL XXL",
    front: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3"
  },

  // 11) Slim Fit Polo Shirt
  {
    category: "Polo Shirts",
    name: "Slim Fit Polo Shirt",
    price: 799,
    mrp: 1079,
    sizes: "S M L XL XXL",
    front: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5"
  },

  // 12) Studio Polo Shirt
  {
    category: "Polo Shirts",
    name: "Studio Polo Shirt",
    price: 879,
    mrp: 1289,
    sizes: "S M L XL XXL",
    front: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6"
  },

  /* ================= JACKETS (12 products) ================= */

  // 1) Classic Jacket
  {
    category: "Jackets",
    name: "Classic Jacket",
    price: 1869,
    mrp: 2399,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3"
  },

  // 2) Essential Jacket
  {
    category: "Jackets",
    name: "Essential Jacket",
    price: 2199,
    mrp: 3139,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1"
  },

  // 3) Signature Jacket
  {
    category: "Jackets",
    name: "Signature Jacket",
    price: 2419,
    mrp: 3719,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5"
  },

  // 4) Heritage Jacket
  {
    category: "Jackets",
    name: "Heritage Jacket",
    price: 2089,
    mrp: 2789,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4"
  },

  // 5) Urban Jacket
  {
    category: "Jackets",
    name: "Urban Jacket",
    price: 2639,
    mrp: 4399,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6",
    back: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5"
  },

  // 6) Premium Jacket
  {
    category: "Jackets",
    name: "Premium Jacket",
    price: 1979,
    mrp: 2749,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3"
  },

  // 7) Everyday Jacket
  {
    category: "Jackets",
    name: "Everyday Jacket",
    price: 2309,
    mrp: 3449,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1",
    back: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2"
  },

  // 8) Modern Jacket
  {
    category: "Jackets",
    name: "Modern Jacket",
    price: 2529,
    mrp: 4599,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2"
  },

  // 9) Relaxed Jacket
  {
    category: "Jackets",
    name: "Relaxed Jacket",
    price: 1759,
    mrp: 2199,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4"
  },

  // 10) Tailored Jacket
  {
    category: "Jackets",
    name: "Tailored Jacket",
    price: 2749,
    mrp: 4429,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3"
  },

  // 11) Slim Fit Jacket
  {
    category: "Jackets",
    name: "Slim Fit Jacket",
    price: 2199,
    mrp: 2969,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5"
  },

  // 12) Studio Jacket
  {
    category: "Jackets",
    name: "Studio Jacket",
    price: 2419,
    mrp: 3559,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6"
  },

  /* ================= OVERCOATS (12 products) ================= */

  // 1) Classic Overcoat
  {
    category: "Overcoats",
    name: "Classic Overcoat",
    price: 3819,
    mrp: 4899,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3"
  },

  // 2) Essential Overcoat
  {
    category: "Overcoats",
    name: "Essential Overcoat",
    price: 4499,
    mrp: 6429,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1"
  },

  // 3) Signature Overcoat
  {
    category: "Overcoats",
    name: "Signature Overcoat",
    price: 4949,
    mrp: 7609,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5"
  },

  // 4) Heritage Overcoat
  {
    category: "Overcoats",
    name: "Heritage Overcoat",
    price: 4269,
    mrp: 5689,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4"
  },

  // 5) Urban Overcoat
  {
    category: "Overcoats",
    name: "Urban Overcoat",
    price: 5399,
    mrp: 8999,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6",
    back: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5"
  },

  // 6) Premium Overcoat
  {
    category: "Overcoats",
    name: "Premium Overcoat",
    price: 4049,
    mrp: 5619,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3"
  },

  // 7) Everyday Overcoat
  {
    category: "Overcoats",
    name: "Everyday Overcoat",
    price: 4719,
    mrp: 7039,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1",
    back: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2"
  },

  // 8) Modern Overcoat
  {
    category: "Overcoats",
    name: "Modern Overcoat",
    price: 5169,
    mrp: 9399,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2"
  },

  // 9) Relaxed Overcoat
  {
    category: "Overcoats",
    name: "Relaxed Overcoat",
    price: 3599,
    mrp: 4499,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4"
  },

  // 10) Tailored Overcoat
  {
    category: "Overcoats",
    name: "Tailored Overcoat",
    price: 5619,
    mrp: 9059,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3"
  },

  // 11) Slim Fit Overcoat
  {
    category: "Overcoats",
    name: "Slim Fit Overcoat",
    price: 4499,
    mrp: 6079,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5"
  },

  // 12) Studio Overcoat
  {
    category: "Overcoats",
    name: "Studio Overcoat",
    price: 4949,
    mrp: 7279,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6"
  },

  /* ================= DENIM (12 products) ================= */

  // 1) Classic Denim Jeans
  {
    category: "Denim",
    name: "Classic Denim Jeans",
    price: 1099,
    mrp: 1409,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3"
  },

  // 2) Essential Denim Jeans
  {
    category: "Denim",
    name: "Essential Denim Jeans",
    price: 1299,
    mrp: 1859,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1"
  },

  // 3) Signature Denim Jeans
  {
    category: "Denim",
    name: "Signature Denim Jeans",
    price: 1429,
    mrp: 2199,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5"
  },

  // 4) Heritage Denim Jeans
  {
    category: "Denim",
    name: "Heritage Denim Jeans",
    price: 1229,
    mrp: 1639,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4"
  },

  // 5) Urban Denim Jeans
  {
    category: "Denim",
    name: "Urban Denim Jeans",
    price: 1559,
    mrp: 2599,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6",
    back: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5"
  },

  // 6) Premium Denim Jeans
  {
    category: "Denim",
    name: "Premium Denim Jeans",
    price: 1169,
    mrp: 1619,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3"
  },

  // 7) Everyday Denim Jeans
  {
    category: "Denim",
    name: "Everyday Denim Jeans",
    price: 1359,
    mrp: 2029,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1",
    back: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2"
  },

  // 8) Modern Denim Jeans
  {
    category: "Denim",
    name: "Modern Denim Jeans",
    price: 1489,
    mrp: 2709,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2"
  },

  // 9) Relaxed Denim Jeans
  {
    category: "Denim",
    name: "Relaxed Denim Jeans",
    price: 1039,
    mrp: 1299,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4"
  },

  // 10) Tailored Denim Jeans
  {
    category: "Denim",
    name: "Tailored Denim Jeans",
    price: 1619,
    mrp: 2609,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3"
  },

  // 11) Slim Fit Denim Jeans
  {
    category: "Denim",
    name: "Slim Fit Denim Jeans",
    price: 1299,
    mrp: 1759,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5"
  },

  // 12) Studio Denim Jeans
  {
    category: "Denim",
    name: "Studio Denim Jeans",
    price: 1429,
    mrp: 2099,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6"
  },

  /* ================= TROUSERS (12 products) ================= */

  // 1) Classic Trouser
  {
    category: "Trousers",
    name: "Classic Trouser",
    price: 1019,
    mrp: 1309,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3"
  },

  // 2) Essential Trouser
  {
    category: "Trousers",
    name: "Essential Trouser",
    price: 1199,
    mrp: 1709,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1"
  },

  // 3) Signature Trouser
  {
    category: "Trousers",
    name: "Signature Trouser",
    price: 1319,
    mrp: 2029,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5"
  },

  // 4) Heritage Trouser
  {
    category: "Trousers",
    name: "Heritage Trouser",
    price: 1139,
    mrp: 1519,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4"
  },

  // 5) Urban Trouser
  {
    category: "Trousers",
    name: "Urban Trouser",
    price: 1439,
    mrp: 2399,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6",
    back: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5"
  },

  // 6) Premium Trouser
  {
    category: "Trousers",
    name: "Premium Trouser",
    price: 1079,
    mrp: 1499,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3"
  },

  // 7) Everyday Trouser
  {
    category: "Trousers",
    name: "Everyday Trouser",
    price: 1259,
    mrp: 1879,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1",
    back: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2"
  },

  // 8) Modern Trouser
  {
    category: "Trousers",
    name: "Modern Trouser",
    price: 1379,
    mrp: 2509,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2"
  },

  // 9) Relaxed Trouser
  {
    category: "Trousers",
    name: "Relaxed Trouser",
    price: 959,
    mrp: 1199,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4"
  },

  // 10) Tailored Trouser
  {
    category: "Trousers",
    name: "Tailored Trouser",
    price: 1499,
    mrp: 2419,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3"
  },

  // 11) Slim Fit Trouser
  {
    category: "Trousers",
    name: "Slim Fit Trouser",
    price: 1199,
    mrp: 1619,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5"
  },

  // 12) Studio Trouser
  {
    category: "Trousers",
    name: "Studio Trouser",
    price: 1319,
    mrp: 1939,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6"
  },

  /* ================= CHINOS (12 products) ================= */

  // 1) Classic Chino
  {
    category: "Chinos",
    name: "Classic Chino",
    price: 849,
    mrp: 1089,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3"
  },

  // 2) Essential Chino
  {
    category: "Chinos",
    name: "Essential Chino",
    price: 999,
    mrp: 1429,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1"
  },

  // 3) Signature Chino
  {
    category: "Chinos",
    name: "Signature Chino",
    price: 1099,
    mrp: 1689,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5"
  },

  // 4) Heritage Chino
  {
    category: "Chinos",
    name: "Heritage Chino",
    price: 949,
    mrp: 1269,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4"
  },

  // 5) Urban Chino
  {
    category: "Chinos",
    name: "Urban Chino",
    price: 1199,
    mrp: 1999,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6",
    back: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5"
  },

  // 6) Premium Chino
  {
    category: "Chinos",
    name: "Premium Chino",
    price: 899,
    mrp: 1249,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3"
  },

  // 7) Everyday Chino
  {
    category: "Chinos",
    name: "Everyday Chino",
    price: 1049,
    mrp: 1569,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1",
    back: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2"
  },

  // 8) Modern Chino
  {
    category: "Chinos",
    name: "Modern Chino",
    price: 1149,
    mrp: 2089,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2"
  },

  // 9) Relaxed Chino
  {
    category: "Chinos",
    name: "Relaxed Chino",
    price: 799,
    mrp: 999,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4"
  },

  // 10) Tailored Chino
  {
    category: "Chinos",
    name: "Tailored Chino",
    price: 1249,
    mrp: 2009,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3"
  },

  // 11) Slim Fit Chino
  {
    category: "Chinos",
    name: "Slim Fit Chino",
    price: 999,
    mrp: 1349,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5"
  },

  // 12) Studio Chino
  {
    category: "Chinos",
    name: "Studio Chino",
    price: 1099,
    mrp: 1619,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6"
  },

  /* ================= JOGGERS (12 products) ================= */

  // 1) Classic Jogger
  {
    category: "Joggers",
    name: "Classic Jogger",
    price: 679,
    mrp: 869,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3"
  },

  // 2) Essential Jogger
  {
    category: "Joggers",
    name: "Essential Jogger",
    price: 799,
    mrp: 1139,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1"
  },

  // 3) Signature Jogger
  {
    category: "Joggers",
    name: "Signature Jogger",
    price: 879,
    mrp: 1349,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5"
  },

  // 4) Heritage Jogger
  {
    category: "Joggers",
    name: "Heritage Jogger",
    price: 759,
    mrp: 1009,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4"
  },

  // 5) Urban Jogger
  {
    category: "Joggers",
    name: "Urban Jogger",
    price: 959,
    mrp: 1599,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6",
    back: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5"
  },

  // 6) Premium Jogger
  {
    category: "Joggers",
    name: "Premium Jogger",
    price: 719,
    mrp: 999,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3"
  },

  // 7) Everyday Jogger
  {
    category: "Joggers",
    name: "Everyday Jogger",
    price: 839,
    mrp: 1249,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1",
    back: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2"
  },

  // 8) Modern Jogger
  {
    category: "Joggers",
    name: "Modern Jogger",
    price: 919,
    mrp: 1669,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2"
  },

  // 9) Relaxed Jogger
  {
    category: "Joggers",
    name: "Relaxed Jogger",
    price: 639,
    mrp: 799,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4"
  },

  // 10) Tailored Jogger
  {
    category: "Joggers",
    name: "Tailored Jogger",
    price: 999,
    mrp: 1609,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3"
  },

  // 11) Slim Fit Jogger
  {
    category: "Joggers",
    name: "Slim Fit Jogger",
    price: 799,
    mrp: 1079,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5"
  },

  // 12) Studio Jogger
  {
    category: "Joggers",
    name: "Studio Jogger",
    price: 879,
    mrp: 1289,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6"
  },

  /* ================= SUITS (12 products) ================= */

  // 1) Classic Suit
  {
    category: "Suits",
    name: "Classic Suit",
    price: 5099,
    mrp: 6539,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3"
  },

  // 2) Essential Suit
  {
    category: "Suits",
    name: "Essential Suit",
    price: 5999,
    mrp: 8569,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1"
  },

  // 3) Signature Suit
  {
    category: "Suits",
    name: "Signature Suit",
    price: 6599,
    mrp: 10149,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5"
  },

  // 4) Heritage Suit
  {
    category: "Suits",
    name: "Heritage Suit",
    price: 5699,
    mrp: 7599,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4"
  },

  // 5) Urban Suit
  {
    category: "Suits",
    name: "Urban Suit",
    price: 7199,
    mrp: 11999,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6",
    back: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5"
  },

  // 6) Premium Suit
  {
    category: "Suits",
    name: "Premium Suit",
    price: 5399,
    mrp: 7499,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3"
  },

  // 7) Everyday Suit
  {
    category: "Suits",
    name: "Everyday Suit",
    price: 6299,
    mrp: 9399,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1",
    back: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2"
  },

  // 8) Modern Suit
  {
    category: "Suits",
    name: "Modern Suit",
    price: 6899,
    mrp: 12539,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2"
  },

  // 9) Relaxed Suit
  {
    category: "Suits",
    name: "Relaxed Suit",
    price: 4799,
    mrp: 5999,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4"
  },

  // 10) Tailored Suit
  {
    category: "Suits",
    name: "Tailored Suit",
    price: 7499,
    mrp: 12099,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3"
  },

  // 11) Slim Fit Suit
  {
    category: "Suits",
    name: "Slim Fit Suit",
    price: 5999,
    mrp: 8109,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5"
  },

  // 12) Studio Suit
  {
    category: "Suits",
    name: "Studio Suit",
    price: 6599,
    mrp: 9699,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6"
  },

  /* ================= BLAZERS (12 products) ================= */

  // 1) Classic Blazer
  {
    category: "Blazers",
    name: "Classic Blazer",
    price: 2969,
    mrp: 3809,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3"
  },

  // 2) Essential Blazer
  {
    category: "Blazers",
    name: "Essential Blazer",
    price: 3499,
    mrp: 4999,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1"
  },

  // 3) Signature Blazer
  {
    category: "Blazers",
    name: "Signature Blazer",
    price: 3849,
    mrp: 5919,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5"
  },

  // 4) Heritage Blazer
  {
    category: "Blazers",
    name: "Heritage Blazer",
    price: 3319,
    mrp: 4429,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4"
  },

  // 5) Urban Blazer
  {
    category: "Blazers",
    name: "Urban Blazer",
    price: 4199,
    mrp: 6999,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6",
    back: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5"
  },

  // 6) Premium Blazer
  {
    category: "Blazers",
    name: "Premium Blazer",
    price: 3149,
    mrp: 4369,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3"
  },

  // 7) Everyday Blazer
  {
    category: "Blazers",
    name: "Everyday Blazer",
    price: 3669,
    mrp: 5479,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1",
    back: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2"
  },

  // 8) Modern Blazer
  {
    category: "Blazers",
    name: "Modern Blazer",
    price: 4019,
    mrp: 7309,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2"
  },

  // 9) Relaxed Blazer
  {
    category: "Blazers",
    name: "Relaxed Blazer",
    price: 2799,
    mrp: 3499,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4"
  },

  // 10) Tailored Blazer
  {
    category: "Blazers",
    name: "Tailored Blazer",
    price: 4369,
    mrp: 7049,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3"
  },

  // 11) Slim Fit Blazer
  {
    category: "Blazers",
    name: "Slim Fit Blazer",
    price: 3499,
    mrp: 4729,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5"
  },

  // 12) Studio Blazer
  {
    category: "Blazers",
    name: "Studio Blazer",
    price: 3849,
    mrp: 5659,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6"
  },

  /* ================= FORMAL SHIRTS (12 products) ================= */

  // 1) Classic Formal Shirt
  {
    category: "Formal Shirts",
    name: "Classic Formal Shirt",
    price: 849,
    mrp: 1089,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3"
  },

  // 2) Essential Formal Shirt
  {
    category: "Formal Shirts",
    name: "Essential Formal Shirt",
    price: 999,
    mrp: 1429,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1"
  },

  // 3) Signature Formal Shirt
  {
    category: "Formal Shirts",
    name: "Signature Formal Shirt",
    price: 1099,
    mrp: 1689,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5"
  },

  // 4) Heritage Formal Shirt
  {
    category: "Formal Shirts",
    name: "Heritage Formal Shirt",
    price: 949,
    mrp: 1269,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4"
  },

  // 5) Urban Formal Shirt
  {
    category: "Formal Shirts",
    name: "Urban Formal Shirt",
    price: 1199,
    mrp: 1999,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6",
    back: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5"
  },

  // 6) Premium Formal Shirt
  {
    category: "Formal Shirts",
    name: "Premium Formal Shirt",
    price: 899,
    mrp: 1249,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3"
  },

  // 7) Everyday Formal Shirt
  {
    category: "Formal Shirts",
    name: "Everyday Formal Shirt",
    price: 1049,
    mrp: 1569,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1",
    back: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2"
  },

  // 8) Modern Formal Shirt
  {
    category: "Formal Shirts",
    name: "Modern Formal Shirt",
    price: 1149,
    mrp: 2089,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2"
  },

  // 9) Relaxed Formal Shirt
  {
    category: "Formal Shirts",
    name: "Relaxed Formal Shirt",
    price: 799,
    mrp: 999,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4"
  },

  // 10) Tailored Formal Shirt
  {
    category: "Formal Shirts",
    name: "Tailored Formal Shirt",
    price: 1249,
    mrp: 2009,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3"
  },

  // 11) Slim Fit Formal Shirt
  {
    category: "Formal Shirts",
    name: "Slim Fit Formal Shirt",
    price: 999,
    mrp: 1349,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5"
  },

  // 12) Studio Formal Shirt
  {
    category: "Formal Shirts",
    name: "Studio Formal Shirt",
    price: 1099,
    mrp: 1619,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6"
  },

  /* ================= TUXEDOS (12 products) ================= */

  // 1) Classic Tuxedo
  {
    category: "Tuxedos",
    name: "Classic Tuxedo",
    price: 5949,
    mrp: 7629,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3"
  },

  // 2) Essential Tuxedo
  {
    category: "Tuxedos",
    name: "Essential Tuxedo",
    price: 6999,
    mrp: 9999,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1"
  },

  // 3) Signature Tuxedo
  {
    category: "Tuxedos",
    name: "Signature Tuxedo",
    price: 7699,
    mrp: 11839,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5"
  },

  // 4) Heritage Tuxedo
  {
    category: "Tuxedos",
    name: "Heritage Tuxedo",
    price: 6649,
    mrp: 8869,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4"
  },

  // 5) Urban Tuxedo
  {
    category: "Tuxedos",
    name: "Urban Tuxedo",
    price: 8399,
    mrp: 13999,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6",
    back: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5"
  },

  // 6) Premium Tuxedo
  {
    category: "Tuxedos",
    name: "Premium Tuxedo",
    price: 6299,
    mrp: 8749,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.6&fp-y=0.6&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3"
  },

  // 7) Everyday Tuxedo
  {
    category: "Tuxedos",
    name: "Everyday Tuxedo",
    price: 7349,
    mrp: 10969,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.1",
    back: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2"
  },

  // 8) Modern Tuxedo
  {
    category: "Tuxedos",
    name: "Modern Tuxedo",
    price: 8049,
    mrp: 14629,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.7&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.2"
  },

  // 9) Relaxed Tuxedo
  {
    category: "Tuxedos",
    name: "Relaxed Tuxedo",
    price: 5599,
    mrp: 6999,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.7&fp-z=1.4",
    back: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.3&fp-y=0.5&fp-z=1.4"
  },

  // 10) Tailored Tuxedo
  {
    category: "Tuxedos",
    name: "Tailored Tuxedo",
    price: 8749,
    mrp: 14109,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.5",
    back: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.7&fp-y=0.4&fp-z=1.3"
  },

  // 11) Slim Fit Tuxedo
  {
    category: "Tuxedos",
    name: "Slim Fit Tuxedo",
    price: 6999,
    mrp: 9459,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.2&fp-y=0.4&fp-z=1.3",
    back: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.7&fp-z=1.5"
  },

  // 12) Studio Tuxedo
  {
    category: "Tuxedos",
    name: "Studio Tuxedo",
    price: 7699,
    mrp: 11319,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.8&fp-y=0.5&fp-z=1.2",
    back: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.3&fp-z=1.6"
  },

];


/* =====================================================================
   NAYE PRODUCTS  -  home page ke "Just Landed" slider me ye dikhte hain
   =====================================================================
   Yahan 8 (ya kam / zyada) naye products rakh sakte ho. Block banane ka
   tareeka upar jaisa hi hai, bas "category" likhna zaroori nahi.
   ===================================================================== */

window.LATEST = [
  // 1) Classic Round Neck Tee
  {
    name: "Classic Round Neck Tee",
    price: 499,
    mrp: 799,
    sizes: "S M L XL",
    front: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=70",
    back: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=70"
  },
  // 2) Pique Polo Shirt
  {
    name: "Pique Polo Shirt",
    price: 799,
    mrp: 1299,
    sizes: "S M L XL XXL",
    front: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=70",
    back: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=70"
  },
  // 3) Urban Bomber Jacket
  {
    name: "Urban Bomber Jacket",
    price: 2199,
    mrp: 3499,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=70",
    back: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=70"
  },
  // 4) Wool Blend Overcoat
  {
    name: "Wool Blend Overcoat",
    price: 4499,
    mrp: 6999,
    sizes: "M L XL",
    front: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70",
    back: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.8&fp-z=2"
  },
  // 5) Slim Fit Denim
  {
    name: "Slim Fit Denim",
    price: 1299,
    mrp: 1999,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=70",
    back: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=70"
  },
  // 6) Stretch Chinos
  {
    name: "Stretch Chinos",
    price: 999,
    mrp: 1599,
    sizes: "30 32 34 36",
    front: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70",
    back: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=700&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.8&fp-z=2"
  },
  // 7) Two Piece Suit
  {
    name: "Two Piece Suit",
    price: 5999,
    mrp: 8999,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=70",
    back: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=70"
  },
  // 8) Navy Blazer
  {
    name: "Navy Blazer",
    price: 3499,
    mrp: 5499,
    sizes: "38 40 42 44",
    front: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=70",
    back: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=70"
  },
];
