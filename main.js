function changeContent(section) {
  const mainContent = document.getElementById("main-content");
  if (section === "home") {
    // Reload the page to reset everything when clicking Home
    window.location.reload();
    return;
  } else if (section === "products") {
    mainContent.innerHTML = `
                    <h2>Sản Phẩm</h2>
                    <p>Khám phá các sản phẩm tuyệt vời của chúng tôi.</p>
                `;
  } else if (section === "promotions") {
    mainContent.innerHTML = `
                    <h2>Khuyến Mãi</h2>
                    <p>Đừng bỏ lỡ các chương trình khuyến mãi hấp dẫn!</p>
                `;
  } else if (section === "GioHang") {
    // Render cart items from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    let cartItemsHtml = "";
    if (cart.length === 0) {
      cartItemsHtml = `<div class="cart-item">Giỏ hàng trống</div>`;
    } else {
      cartItemsHtml = cart
        .map((item, idx) => {
          // Parse unit price from item.price (e.g., "150.000đ" => 150000)
          const unitPrice = Number(item.price.replace(/[^\d]/g, ""));
          const totalPrice = unitPrice * item.quantity;
          // Format total price with thousands separator and "đ"
          const formattedTotalPrice = totalPrice.toLocaleString("vi-VN") + "đ";
          return `
      <div class="cart-item" data-idx="${idx}">
        <img src="${item.imgSrc}" alt="${item.title}" style="width:60px;height:60px;object-fit:cover;margin-right:10px;">
        <div>
        <div><strong>${item.title}</strong></div>
        <div>Giá: ${formattedTotalPrice} (${item.quantity} x ${item.price})</div>
        </div>
        <button class="delete-cart-item-btn" style="margin-left:20px; margin-top:16px">Xóa</button>
      </div>
      `;
        })
        .join("");
    }

    mainContent.innerHTML = `
      <div class="cart-container">
      <h1>GIỎ HÀNG CỦA BẠN</h1>
      <div class="cart-items">
        ${cartItemsHtml}
      </div>
      <div class="cart-actions">
        <button id="edit-btn">Sửa</button>
        <button id="buy-btn">Mua hàng</button>
      </div>
      </div>
    `;

    // Add event listeners for delete buttons
    document.querySelectorAll(".delete-cart-item-btn").forEach((btn) => {
      btn.onclick = function () {
        const idx = this.closest(".cart-item").dataset.idx;
        cart.splice(idx, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        // Re-render the cart section
        changeContent("GioHang");
      };
    });

    const cartItemsContainer = document.querySelector(".cart-items");
    if (cartItemsContainer && cart.length > 4) {
      cartItemsContainer.style.maxHeight = "300px";
      cartItemsContainer.style.overflowY = "auto";
    }

    document.body.style.overflow = "auto";
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  } else if (section === "about") {
    mainContent.innerHTML = `
<div class="main-about">
  <h2 class="GioiThiu-title">Giới Thiệu</h2>
  <p class="GioiThiu-sub-title">
    Chào mừng bạn đến với Tiệm bánh, nơi mang đến cho bạn một trải nghiệm ẩm
    thực phong phú về các loại bánh, cũng như là một không gian giúp bạn lan tỏa
    niềm vui với gia đình, bạn bè hay chỉ đơn giản là một nơi dành riêng cho bản
    thân bạn!
  </p>
</div>
                `;
    document.body.style.overflow = "auto";
    window.scrollTo(0, 0); // Scroll to the top of the page
    document.body.style.overflow = "hidden";
  }
  //   else if (section === "add_cart") {
  //     mainContent.innerHTML = `
  //         <div class="add-cart-container">
  //             <div class="product-image">
  //                 <img src="./assets/img/cake1 (1).png" alt="Product Image" class="img-product">
  //             </div>
  //             <div class="product-details">
  //                 <h3 class="product-title">Bánh kem A</h3>
  //                 <p class="product-price">Giá: 150.000đ</p>
  //                 <div class="quantity-container">
  //                     <label for="quantity">Số lượng:</label>
  //                     <input type="number" id="quantity" name="quantity" min="1" value="1">
  //                 </div>
  //                 <button class="add-to-cart-btn">Thêm vào giỏ hàng</button>
  //             </div>
  //         </div>
  //     `;
  //     document.body.style.overflow = "auto";
  //     window.scrollTo(0, 0); // Scroll to the top of the page
  //     document.body.style.overflow = "hidden";
  //   }
}

document.addEventListener("DOMContentLoaded", () => {
  const cakeItems = document.querySelectorAll(".Cake-item");

  cakeItems.forEach((item) => {
    item.addEventListener("click", () => {
      const title = item.dataset.title;
      const price = item.dataset.price;
      const imgSrc = item.dataset.img;

      renderAddCart(title, price, imgSrc);
    });
  });

  function renderAddCart(title, price, imgSrc) {
    const mainContent = document.getElementById("main-content");

    mainContent.innerHTML = `
      <div class="add-cart-container">
        <div class="product-image">
          <img src="${imgSrc}" alt="${title}" class="img-product" />
        </div>
        <div class="product-details">
          <h3 style="margin-bottom: 10px" class="product-title">Tên: ${title}</h3>
          <p style="margin-bottom: 10px" class="product-price">Giá: ${price}</p>
          <div class="quantity-container">
            <label for="quantity">Số lượng:</label>
            <button type="button" id="decrease-qty" style="margin: 0 5px;">-</button>
            <input type="number" id="quantity" name="quantity" min="1" value="1" style="width: 50px; text-align: center;">
            <button type="button" id="increase-qty" style="margin: 0 5px;">+</button>
          </div>
          <button class="add-to-cart-btn">Thêm vào giỏ hàng</button>
        </div>
      </div>
    `;

    // Add event listeners for increase/decrease buttons
    const quantityInput = document.getElementById("quantity");
    const priceElement = document.querySelector(".product-price");

    // Helper to parse price string (e.g., "150.000đ" => 150000)
    function parsePrice(priceStr) {
      return Number(priceStr.replace(/[^\d]/g, ""));
    }

    // Helper to format price number to string with thousands separator and "đ"
    function formatPrice(num) {
      return num.toLocaleString("vi-VN") + "đ";
    }

    // Update price display based on quantity
    function updateTotalPrice() {
      const unitPrice = parsePrice(price);
      const qty = Number(quantityInput.value);
      const total = unitPrice * qty;
      priceElement.textContent = "Giá: " + formatPrice(total);
    }

    document.getElementById("increase-qty").onclick = () => {
      quantityInput.value = Number(quantityInput.value) + 1;
      updateTotalPrice();
    };
    document.getElementById("decrease-qty").onclick = () => {
      if (Number(quantityInput.value) > 1) {
        quantityInput.value = Number(quantityInput.value) - 1;
        updateTotalPrice();
      }
    };

    // Update price on input change
    quantityInput.oninput = updateTotalPrice;

    // Initialize price on load
    updateTotalPrice();

    // Add to cart logic
    document.querySelector(".add-to-cart-btn").onclick = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const qty = Number(quantityInput.value);

      // Check if item already exists in cart
      const existing = cart.find(
        (item) =>
          item.title === title && item.price === price && item.imgSrc === imgSrc
      );
      if (existing) {
        existing.quantity += qty;
      } else {
        cart.push({ title, price, imgSrc, quantity: qty });
      }
      localStorage.setItem("cart", JSON.stringify(cart));

      // Render cart page
      renderCart();
    };

    document.body.style.overflow = "auto";
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  }

  // Render cart items in cart page
  function renderCart() {
    const mainContent = document.getElementById("main-content");
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    let cartItemsHtml = "";
    if (cart.length === 0) {
      cartItemsHtml = `<div class="cart-item">Giỏ hàng trống</div>`;
    } else {
      cartItemsHtml = cart
        .map(
          (item) => `
        <div class="cart-item">
          <img src="${item.imgSrc}" alt="${item.title}" style="width:60px;height:60px;object-fit:cover;margin-right:10px;">
          <div>
            <div><strong>${item.title}</strong></div>
            <div>Giá: ${item.price}</div>
            <div>Số lượng: ${item.quantity}</div>
          </div>
        </div>
      `
        )
        .join("");
    }

    mainContent.innerHTML = `
      <div class="cart-container">
        <h1>GIỎ HÀNG CỦA BẠN</h1>
        <div class="cart-items">
          ${cartItemsHtml}
        </div>
        <div class="cart-actions">
          <button id="edit-btn">Sửa</button>
          <button id="buy-btn">Mua hàng</button>
        </div>
      </div>
    `;
    document.body.style.overflow = "auto";
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  }
});
