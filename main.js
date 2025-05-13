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
                    <div class="Cake-item">
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
                    <div class="Cake-item">
                        <img
                            src="./assets/img/cake1 (2).png"
                            alt=""
                            class="img-cake-item"
                        />
                        <div class="cake-info">
                            <h3 class="titleCI">Bánh kem trắng</h3>
                            <p class="Price">Giá: 150.000đ</p>
                        </div>
                    </div>
                    <div class="Cake-item">
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
                    <div class="Cake-item">
                        <img
                            src="./assets/img/cake1 (4).png"
                            alt=""
                            class="img-cake-item"
                        />
                        <div class="cake-info">
                            <h3 class="titleCI">Bánh kem cà rốt</h3>
                            <p class="Price">Giá: 160.000đ</p>
                        </div>
                    </div>
                    <div class="Cake-item">
                        <img
                            src="./assets/img/cake1 (5).png"
                            alt=""
                            class="img-cake-item"
                        />
                        <div class="cake-info">
                            <h3 class="titleCI">Bánh kem socola</h3>
                            <p class="Price">Giá: 180.000đ</p>
                        </div>
                    </div>
                    <div class="Cake-item">
                        <img
                            src="./assets/img/cake1 (6).png"
                            alt=""
                            class="img-cake-item"
                        />
                        <div class="cake-info">
                            <h3 class="titleCI">Bánh kem trắng phủ socola</h3>
                            <p class="Price">Giá: 200.000đ</p>
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
                    <div class="Cake-item">
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
                    <div class="Cake-item">
                        <img
                            src="./assets/img/cake1 (2).png"
                            alt=""
                            class="img-cake-item"
                        />
                        <div class="cake-info">
                            <h3 class="titleCI">Bánh kem trắng</h3>
                            <p class="Price">Giá: 150.000đ</p>
                        </div>
                    </div>
                    <div class="Cake-item">
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
                    <div class="Cake-item">
                        <img
                            src="./assets/img/cake1 (4).png"
                            alt=""
                            class="img-cake-item"
                        />
                        <div class="cake-info">
                            <h3 class="titleCI">Bánh kem cà rốt</h3>
                            <p class="Price">Giá: 160.000đ</p>
                        </div>
                    </div>
                    <div class="Cake-item">
                        <img
                            src="./assets/img/cake1 (5).png"
                            alt=""
                            class="img-cake-item"
                        />
                        <div class="cake-info">
                            <h3 class="titleCI">Bánh kem socola</h3>
                            <p class="Price">Giá: 180.000đ</p>
                        </div>
                    </div>
                    <div class="Cake-item">
                        <img
                            src="./assets/img/cake1 (6).png"
                            alt=""
                            class="img-cake-item"
                        />
                        <div class="cake-info">
                            <h3 class="titleCI">Bánh kem trắng phủ socola</h3>
                            <p class="Price">Giá: 200.000đ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    `;
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
  <h2>Giới Thiệu</h2>
  <p>
    Chào mừng bạn đến với Tiệm bánh, nơi mang đến cho bạn một trải nghiệm ẩm
    thực phong phú về các loại bánh, cũng như là một không gian giúp bạn lan tỏa
    niềm vui với gia đình, bạn bè hay chỉ đơn giản là một nơi dành riêng cho bản
    thân bạn!
  </p>
</div>
                `;
    document.body.style.overflow = "hidden";
  }
}
