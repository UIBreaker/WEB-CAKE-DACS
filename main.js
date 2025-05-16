function changeContent(section) {
  const mainContent = document.getElementById("main-content");
  if (section === "home") {
    mainContent.innerHTML = `
      <img src="./assets/img/BanBanhMain.png" alt="" class="img-main" />
      <div class="Selling-cakes">
        <div class="titleSC">
          <div class="Rectangle"></div>
          <h1 class="Title-main">Bánh Kem</h1>
          <div class="Rectangle"></div>
        </div>
        <div class="Cake-row">
          <div class="Cake-list">
            <div
              class="Cake-item"
              data-title="Bánh kem A"
              data-price="150.000đ"
              data-img="./assets/img/cake1 (1).png"
            >
              <img
                src="./assets/img/cake1 (1).png"
                alt=""
                class="img-cake-item"
              />
              <div class="cake-info">
                <h3 class="titleCI">Bánh kem A</h3>
                <p class="Price">Giá: 150.000đ</p>
              </div>
            </div>
            <div
              class="Cake-item"
              data-title="Bánh kem trắng"
              data-price="150.000đ"
              data-img="./assets/img/cake1 (2).png"
            >
              <img
                src="./assets/img/cake1 (2).png"
                alt=""
                class="img-cake-item"
              />
              <div class="cake-info">
                <h3 class="titleCI">Bánh kem Trắng</h3>
                <p class="Price">Giá: 150.000đ</p>
              </div>
            </div>
            <div
              class="Cake-item"
              data-title="Bánh kem dâu"
              data-price="200.000đ"
              data-img="./assets/img/cake1 (3).png"
            >
              <img
                src="./assets/img/cake1 (3).png"
                alt=""
                class="img-cake-item"
              />
              <div class="cake-info">
                <h3 class="titleCI">Bánh kem dâu</h3>
                <p class="Price">Giá: 200.000đ</p>
              </div>
            </div>
          </div>
          <div class="Cake-list">
            <div
              class="Cake-item"
              data-title="Bánh kem Cà rốt"
              data-price="150.000đ"
              data-img="./assets/img/cake1 (6).png"
            >
              <img
                src="./assets/img/cake1 (6).png"
                alt=""
                class="img-cake-item"
              />
              <div class="cake-info">
                <h3 class="titleCI">Bánh kem Cà rốt</h3>
                <p class="Price">Giá: 150.000đ</p>
              </div>
            </div>
            <div
              class="Cake-item"
              data-title="Bánh kem Socola"
              data-price="150.000đ"
              data-img="./assets/img/cake1 (5).png"
            >
              <img
                src="./assets/img/cake1 (5).png"
                alt=""
                class="img-cake-item"
              />
              <div class="cake-info">
                <h3 class="titleCI">Bánh kem Socola</h3>
                <p class="Price">Giá: 150.000đ</p>
              </div>
            </div>
            <div
              class="Cake-item"
              data-title="Bánh kem Trắng phủ Socola"
              data-price="150.000đ"
              data-img="./assets/img/cake1 (4).png"
            >
              <img
                src="./assets/img/cake1 (4).png"
                alt=""
                class="img-cake-item"
              />
              <div class="cake-info">
                <h3 class="titleCI">Bánh kem Trắng phủ Socola</h3>
                <p class="Price">Giá: 150.000đ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Selling-cakes">
        <div class="titleSC">
          <div class="Rectangle"></div>
          <h1 class="Title-main">Bánh ngọt</h1>
          <div class="Rectangle"></div>
        </div>
        <div class="Cake-row">
          <div class="Cake-list">
            <div
              class="Cake-item"
              data-title="Bánh kem A"
              data-price="150.000đ"
              data-img="./assets/img/cake1 (7).png"
            >
              <img
                src="./assets/img/cake1 (7).png"
                alt=""
                class="img-cake-item"
              />
              <div class="cake-info">
                <h3 class="titleCI">Bánh kem A</h3>
                <p class="Price">Giá: 150.000đ</p>
              </div>
            </div>
            <div
              class="Cake-item"
              data-title="Bánh kem A"
              data-price="150.000đ"
              data-img="./assets/img/cake1 (8).png"
            >
              <img
                src="./assets/img/cake1 (8).png"
                alt=""
                class="img-cake-item"
              />
              <div class="cake-info">
                <h3 class="titleCI">Bánh kem A</h3>
                <p class="Price">Giá: 150.000đ</p>
              </div>
            </div>
            <div
              class="Cake-item"
              data-title="Bánh kem A"
              data-price="150.000đ"
              data-img="./assets/img/cake1 (9).png"
            >
              <img
                src="./assets/img/cake1 (9).png"
                alt=""
                class="img-cake-item"
              />
              <div class="cake-info">
                <h3 class="titleCI">Bánh kem A</h3>
                <p class="Price">Giá: 150.000đ</p>
              </div>
            </div>
          </div>
          <div class="Cake-list">
            <div
              class="Cake-item"
              data-title="Bánh kem A"
              data-price="150.000đ"
              data-img="./assets/img/cake1 (10).png"
            >
              <img
                src="./assets/img/cake1 (10).png"
                alt=""
                class="img-cake-item"
              />
              <div class="cake-info">
                <h3 class="titleCI">Bánh kem A</h3>
                <p class="Price">Giá: 150.000đ</p>
              </div>
            </div>
            <div
              class="Cake-item"
              data-title="Bánh kem A"
              data-price="150.000đ"
              data-img="./assets/img/cake1 (11).png"
            >
              <img
                src="./assets/img/cake1 (11).png"
                alt=""
                class="img-cake-item"
              />
              <div class="cake-info">
                <h3 class="titleCI">Bánh kem A</h3>
                <p class="Price">Giá: 150.000đ</p>
              </div>
            </div>
            <div
              class="Cake-item"
              data-title="Bánh kem A"
              data-price="150.000đ"
              data-img="./assets/img/cake1 (11).png"
            >
              <img
                src="./assets/img/cake1 (11).png"
                alt=""
                class="img-cake-item"
              />
              <div class="cake-info">
                <h3 class="titleCI">Bánh kem A</h3>
                <p class="Price">Giá: 150.000đ</p>
              </div>
            </div>
          </div>
        </div>
      </div>      `;
    document.body.style.overflow = "auto";
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
    document.getElementById("increase-qty").onclick = () => {
      quantityInput.value = Number(quantityInput.value) + 1;
    };
    document.getElementById("decrease-qty").onclick = () => {
      if (Number(quantityInput.value) > 1) {
        quantityInput.value = Number(quantityInput.value) - 1;
      }
    };

    document.body.style.overflow = "auto";
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  }
});
