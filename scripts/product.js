// Data
const products = [
	{
		id: 1,
		name: "ADIDAS X CRAZYFAST MESSI .1 FG INFINITO - SILVER METALLIC/BLISS BLUE/CORE BLACK",
		brand: "ADIDAS",
		price: 4990000,
		img: "img/product4/adidas/1.webp",
		url: "../adidas.html",
	},
	{
		id: 2,
		name: "ADIDAS X CRAZYFAST MESSI .3 TF INFINITO - SILVER METALLIC/BLISS BLUE/CORE BLACK",
		brand: "ADIDAS",
		price: 1900000,
		img: "img/product4/adidas/2.webp",
		url: "../adidas_1.html",
	},
	{
		id: 3,
		name: "ADIDAS X CRAZYFAST .1 FG CRAZYRUSH - FOOTWEAR WHITE/CORE BLACK/LUCID LEMON",
		brand: "ADIDAS",
		price: 4900000,
		img: "img/product4/adidas/4.webp",
		url: "../adidas_2.html",
	},
	{
		id: 4,
		name: "ADIDAS X SPEEDPORTAL .1 FG HEATSPAWN - SOLAR GOLD/CORE BLACK/SOLAR ORANGE",
		brand: "ADIDAS",
		price: 4600000,
		img: "img/product4/adidas/5.webp",
		url: "../adidas_3.html",
	},
	{
		id: 5,
		name: "ADIDAS PREDATOR ACCURACY .3 LOW FG OWN YOUR FOOTBALL - CORE BLACK/FOOTWEAR WHITE/SHOCK PINK",
		brand: "ADIDAS",
		price: 1690000,
		img: "img/product4/adidas/5.webp",
		url: "../adidas_4.html",
	},
	{
		id: 6,
		name: "ADIDAS COPA SENSE .1 FG DIAMOND EDGE - FOOTWEAR WHITE/HI-RES BLUE/LEGEND INK",
		brand: "ADIDAS",
		price: 3590000,
		img: "img/product4/adidas/6.webp",
		url: "../adidas_5.html",
	},
	{
		id: 7,
		name: "ADIDAS X CRAZYFAST .1 FG MARINERUSH - BRIGHT ROYAL/FOOTWEAR WHITE/SOLAR RED",
		brand: "ADIDAS",
		price: 5250000,
		img: "img/product4/adidas/7.webp",
		url: "../adidas_6.html",
	},
	{
		id: 8,
		name: "ADIDAS PREDATOR ACCURACY .3 LOW TF MARINERUSH - BRIGHT ROYAL/FOOTWEAR WHITE/BLISS BLUE",
		brand: "ADIDAS",
		price: 1850000,
		img: "img/product4/adidas/8.webp",
		url: "../adidas_7.html",
	},
	{
		id: 9,
		name: "ADIDAS COPA PURE 2.3 TF MARINERUSH - LUCID BLUE/FOOTWEAR WHITE/SOLAR RED",
		brand: "ADIDAS",
		price: 1850000,
		img: "img/product4/adidas/9.webp",
		url: "../adidas_8.html",
	},
	{
		id: 10,
		name: "ADIDAS PREDATOR ACCURACY .1 LOW FG HEATSPAWN - SOLAR ORANGE/CORE BLACK",
		brand: "ADIDAS",
		price: 4300000,
		img: "img/product4/adidas/10.webp",
		url: "../adidas_9.html",
	},
	{
		id: 11,
		name: "ADIDAS COPA PURE .3 TF HEATSPAWN - OFF WHITE/SOLAR ORANGE",
		brand: "ADIDAS",
		price: 1750000,
		img: "img/product4/adidas/11.webp",
		url: "../adidas_10.html",
	},
	{
		id: 12,
		name: "ADIDAS PREDATOR ACCURACY .4 TF HEATSPAWN - SOLAR ORANGE/CORE BLACK",
		brand: "ADIDAS",
		price: 1490000,
		img: "img/product4/adidas/12.webp",
		url: "../adidas_11.html",
	},
	{
		id: 13,
		name: "MIZUNO MORELIA NEO III SALA BETA MADE IN JAPAN TF RELEASE - WHITE/RED/YELLOW LIMITED EDITION",
		brand: "MIZUNO",
		price: 4100000,
		img: "img/product4/mizuno/1.webp",
		url: "../mizuno.html",
	},
	{
		id: 14,
		name: "MIZUNO MORELIA SALA MADE IN JAPAN TF RELEASE - WHITE/RED/YELLOW LIMITED EDITION",
		brand: "MIZUNO",
		price: 3800000,
		img: "img/product4/mizuno/2.webp",
		url: "../mizuno_1.html",
	},
	{
		id: 15,
		name: "MIZUNO ALPHA ELITE AS TF RELEASE - FIERY CORAL/WHITE",
		brand: "MIZUNO",
		price: 3690000,
		img: "img/product4/mizuno/3.webp",
		url: "../mizuno_2.html",
	},
	{
		id: 16,
		name: "MIZUNO MORELIA NEO IV PRO TF AURUM - BLACK/GOLD/BLACK",
		brand: "MIZUNO",
		price: 2790000,
		img: "img/product4/mizuno/4.webp",
		url: "../mizuno_3.html",
	},
	{
		id: 17,
		name: "MIZUNO MORELIA NEO IV PRO TF RELEASE - RED/WHITE/YELLOW",
		brand: "MIZUNO",
		price: 2790000,
		img: "img/product4/mizuno/5.webp",
		url: "../mizuno_4.html",
	},
	{
		id: 18,
		name: "MIZUNO MORELIA SALA CLUB TF - ORANGE/WHITE/YELLOW",
		brand: "MIZUNO",
		price: 1590000,
		img: "img/product4/mizuno/6.webp",
		url: "../mizuno_5.html",
	},
	{
		id: 19,
		name: "MIZUNO MORELIA NEO IV PRO TF - WHITE/BLACK/CHINESE RED",
		brand: "MIZUNO",
		price: 2790000,
		img: "img/product4/mizuno/7.webp",
		url: "../mizuno_6.html",
	},
	{
		id: 20,
		name: "MIZUNO MONARCIDA NEO SALA PRO AS TF - WHITE/GOLD",
		brand: "MIZUNO",
		price: 2190000,
		img: "img/product4/mizuno/8.webp",
		url: "../mizuno_7.html",
	},
	{
		id: 21,
		name: "MIZUNO MONARCIDA NEO II SELECT AS TF AZURE BLUE - BLUE/SILVER",
		brand: "MIZUNO",
		price: 1450000,
		img: "img/product4/mizuno/9.webp",
		url: "../mizuno_8.html",
	},
	{
		id: 22,
		name: "MORELIA NEO III BETA ELITE FG SERGIO RAMOS 4 VOL. II - BLACK/HIGH RISK RED LIMITED EDITION",
		brand: "MIZUNO",
		price: 4500000,
		img: "img/product4/mizuno/10.webp",
		url: "../mizuno_9.html",
	},
	{
		id: 23,
		name: "MIZUNO MORELIA NEO III ELITE FG AZURE BLUE - BLUE/WHITE/COPPER",
		brand: "MIZUNO",
		price: 3820000,
		img: "img/product4/mizuno/11.webp",
		url: "../mizuno_10.html",
	},
	{
		id: 24,
		name: "MIZUNO MONARCIDA NEO II SELECT AS TF - WHITE/SILVER",
		brand: "MIZUNO",
		price: 1450000,
		img: "img/product4/mizuno/12.webp",
		url: "../mizuno_11.html",
	},
	{
		id: 25,
		name: "NIKE AIR ZOOM MERCURIAL SUPERFLY 9 ACADEMY TF MBAPPÉ PERSONAL EDITION - BALTIC BLUE/WHITE",
		brand: "NIKE",
		price: 2350000,
		img: "img/product4/nike/1.webp",
		url: "../nike.html",
	},
	{
		id: 26,
		name: "NIKE AIR ZOOM MERCURIAL VAPOR 15 ACADEMY MG READY - BRIGHT CRIMSON/WHITE/BLACK",
		brand: "NIKE",
		price: 2150000,
		img: "img/product4/nike/2.webp",
		url: "../nike_1.html",
	},
	{
		id: 27,
		name: "NIKE TIEMPO LEGEND 10 ACADEMY MG SHADOW - BLACK/CHROME/HYPER ROYAL",
		brand: "NIKE",
		price: 2150000,
		img: "img/product4/nike/3.webp",
		url: "../nike_2.html",
	},
	{
		id: 28,
		name: "NIKE TIEMPO LEGEND 10 ACADEMY TF UNITED - GUAVA ICE/BLACK",
		brand: "NIKE",
		price: 2090000,
		img: "img/product4/nike/4.webp",
		url: "../nike_3.html",
	},
	{
		id: 29,
		name: "NIKE TIEMPO LEGEND 10 ELITE FG READY - WHITE/BLACK/BRIGHT CRIMSON",
		brand: "NIKE",
		price: 5350000,
		img: "img/product4/nike/5.webp",
		url: "../nike_4.html",
	},
	{
		id: 30,
		name: "NIKE AIR ZOOM MERCURIAL VAPOR 15 ACADEMY MG LUMINOUS - PINK BLAST/VOLT/GRIDIRON",
		brand: "NIKE",
		price: 2090000,
		img: "img/product4/nike/6.webp",
		url: "../nike_5.html",
	},
	{
		id: 31,
		name: "NIKE TIEMPO LEGEND 9 ACADEMY TF LUMINOUS - BARELY VOLT/VOLT/SUMMIT WHITE",
		brand: "NIKE",
		price: 1750000,
		img: "img/product4/nike/7.webp",
		url: "../nike_6.html",
	},
	{
		id: 32,
		name: "NIKE LUNARGATO II IC SMALL SIDED - BLACK/MIDNIGHT NAVY/BLACK/VIVID SULFUR",
		brand: "NIKE",
		price: 2250000,
		img: "img/product4/nike/8.jpg",
		url: "../nike_7.html",
	},
	{
		id: 33,
		name: "NIKE AIR ZOOM MERCURIAL VAPOR 15 ACADEMY TF SHADOW - BLACK/CHROME/HYPER ROYAL",
		brand: "NIKE",
		price: 2150000,
		img: "img/product4/nike/9.webp",
		url: "../nike_8.html",
	},
	{
		id: 34,
		name: "NIKE TIEMPO LEGEND 10 ELITE AG-PRO PEAK READY - HYPER TURQUOISE/BLACK/FUCHSIA DREAM",
		brand: "NIKE",
		price: 5300000,
		img: "img/product4/nike/10.webp",
		url: "../nike_9.html",
	},
	{
		id: 35,
		name: "NIKE PHANTOM GX ACADEMY MG READY - BRIGHT CRIMSON/BLACK/WHITE",
		brand: "NIKE",
		price: 2150000,
		img: "img/product4/nike/11.webp",
		url: "../nike_10.html",
	},
	{
		id: 36,
		name: "NIKE LUNARGATO II IC SMALL SIDED - UNIVERSITY BLUE/WHITE",
		brand: "NIKE",
		price: 2250000,
		img: "img/product4/nike/12.webp",
		url: "../nike_11.html",
	},
	{
		id: 37,
		name: "PUMA ULTRA ULTIMATE FG/AG GEAR UP - ULTRA BLUE/PUMA WHITE/PRO GREEN",
		brand: "PUMA",
		price: 4800000,
		img: "img/product4/puma/1.webp",
		url: "../puma.html",
	},
	{
		id: 38,
		name: "PUMA ULTRA ULTIMATE FG/AG BREAKTHROUGH - PUMA WHITE/PUMA BLACK/FIRE ORCHID",
		brand: "PUMA",
		price: 4200000,
		img: "img/product4/puma/2.webp",
		url: "../puma_1.html",
	},
	{
		id: 39,
		name: "PUMA FUTURE 1.4 PRO CAGE TT FEARLESS - FIERY CORAL/FIZZY LIGHT/PUMA BLACK/SALMON",
		brand: "PUMA",
		price: 2400000,
		img: "img/product4/puma/3.webp",
		url: "../puma_2.html",
	},
	{
		id: 40,
		name: "PUMA ULTRA 1.4 PRO CAGE TT INSTINCT - DIAMOND SILVER/NEON CITRUS",
		brand: "PUMA",
		price: 2500000,
		img: "img/product4/puma/4.jpeg",
		url: "../puma_3.html",
	},
	{
		id: 41,
		name: "PUMA FUTURE MATCH TT SUPERCHARGE - BLUE GLIMMER/PUMA WHITE/ULTRA ORANGE",
		brand: "PUMA",
		price: 1700000,
		img: "img/product4/puma/5.webp",
		url: "../puma_4.html",
	},
	{
		id: 42,
		name: "PUMA ULTRA ULTIMATE TF ENERGY - LUMINOUS PINK/ULTRA BLUE/YELLOW ALERT",
		brand: "PUMA",
		price: 2790000,
		img: "img/product4/puma/6.jpg",
		url: "../puma_5.html",
	},
	{
		id: 43,
		name: "PUMA FUTURE ULTIMATE FG/AG GEAR UP - PERSIAN BLUE/PUMA WHITE/PRO GREEN",
		brand: "PUMA",
		price: 4800000,
		img: "img/product4/puma/7.webp",
		url: "../puma_6.html",
	},
	{
		id: 44,
		name: "PUMA FUTURE MATCH TT ENERGY - ULTRA BLUE/YELLOW ALERT/LUMINOUS PINK",
		brand: "PUMA",
		price: 1990000,
		img: "img/product4/puma/8.webp",
		url: "../puma_7.html",
	},
	{
		id: 45,
		name: "PUMA FUTURE ULTIMATE FG/AG BREAKTHROUGH - PUMA WHITE/PUMA BLACK/FIRE ORCHID",
		brand: "PUMA",
		price: 4300000,
		img: "img/product4/puma/9.jpg",
		url: "../puma_8.html",
	},
	{
		id: 46,
		name: "PUMA FUTURE 1.4 PRO CAGE TT FASTEST - PARISIAN NIGHT/FIZZY LIGHT/PISTACHIO",
		brand: "PUMA",
		price: 2450000,
		img: "img/product4/puma/10.webp",
		url: "../puma_9.html",
	},
	{
		id: 47,
		name: "PUMA ULTRA ULTIMATE CAGE TF FASTEST - FIZZY LIGHT/PARISIAN NIGHT/BLUE GLIMMER",
		brand: "PUMA",
		price: 2490000,
		img: "img/product4/puma/11.webp",
		url: "../puma_10.html",
	},
	{
		id: 48,
		name: "PUMA ULTRA ULTIMATE CAGE TF FEARLESS - FIERY CORAL/FIZZY LIGHT/PUMA BLACK",
		brand: "PUMA",
		price: 2450000,
		img: "img/product4/puma/12.webp",
		url: "../puma_11.html",
	},
	{
		id: 49,
		name: "QUẢ BÓNG ĐÁ ADIDAS FOOTBALL LEAGUE CHAMPIONS LEAGUE 2023/24 - WHITE/SILVER METALLIC/BLUE",
		brand: "ADIDAS",
		price: 900000,
		img: "img/product4/phukien/phu1.webp",
		url: "../phukien_1.html",
	},
	{
		id: 50,
		name: "QUẢ BÓNG ĐÁ SIZE 5 ZOCKER INSPIRE ZK5-IN2201",
		brand: "ZOCKER",
		price: 590000,
		img: "img/product4/phukien/phu2.webp",
		url: "../phukien_2.html",
	},
	{
		id: 51,
		name: "BÓNG ĐÁ NIKE FOOTBALL ACADEMY PREMIER LEAGUE - WHITE/BRIGHT CRIMSON/BLACK",
		brand: "NIKE",
		price: 899000,
		img: "img/product4/phukien/phu3.webp",
		url: "../phukien_3.html",
	},
	{
		id: 52,
		name: "BÓNG ĐÁ MOLTEN F5A2100",
		brand: "MOLTEN",
		price: 550000,
		img: "img/product4/phukien/phu4.jpg",
		url: "../phukien_4.html",
	},
	{
		id: 53,
		name: "GĂNG TAY THỦ MÔN NIKE GOALKEEPER GLOVES MATCH READY - BRIGHT CRIMSON/BLACK/WHITE",
		brand: "NIKE",
		price: 790000,
		img: "img/product4/phukien/phu5.webp",
		url: "../phukien_5.html",
	},
	{
		id: 54,
		name: "GĂNG TAY THỦ MÔN NIKE GOALKEEPER GLOVES MATCH LUMINOUS - BLACK/BARELY VOLT/WHITE",
		brand: "NIKE",
		price: 800000,
		img: "img/product4/phukien/phu6.webp",
		url: "../phukien_6.html",
	},
	{
		id: 55,
		name: "GĂNG TAY THỦ MÔN ADIDAS GOALKEEPER GLOVES PREDATOR TRAINING CRAZYRUSH",
		brand: "ADIDAS",
		price: 790000,
		img: "img/product4/phukien/phu7.webp",
		url: "../phukien_7.html",
	},
	{
		id: 56,
		name: "GĂNG TAY THỦ MÔN ADIDAS GOALKEEPER GLOVES PREDATOR TRAINING HEATSPAWN - SOLAR ORANGE/BLACK",
		brand: "ADIDAS",
		price: 790000,
		img: "img/product4/phukien/phu8.webp",
		url: "../phukien_8.html",
	},
	{
		id: 57,
		name: "TÚI ĐỰNG GIÀY BÓNG ĐÁ",
		brand: "Shop Soccer",
		price: 75000,
		img: "img/product4/phukien/phu9.jpg",
		url: "../phukien_9.html",
	},
	{
		id: 58,
		name: "BALO FOOTBALL BACKPACK LIMITED",
		brand: "Shop Soccer",
		price: 200000,
		img: "img/product4/phukien/phu10.jpg",
		url: "../phukien_10.html",
	},
	{
		id: 59,
		name: "BỌC ỐNG ĐỒNG PREDATORS 20 SHIN GUARDS - WHITE",
		brand: "ADIDAS",
		price: 300000,
		img: "img/product4/phukien/phu11.jpg",
		url: "../phukien_11.html",
	},
	{
		id: 60,
		name: "PACK 3 ĐÔI VỚ NIKE EVERYDAY PLUS CUSHIONED CREW",
		brand: "ADIDAS",
		price: 400000,
		img: "img/product4/phukien/phu12.jpeg",
		url: "../phukien_12.html",
	},
];

// letiables
let table = document.getElementById("product-list");
let tbody = table.getElementsByTagName("tbody")[0];

// render table
function render(products) {
	tbody.innerHTML = "";
	products.map((product) => {
		let row = document.createElement("tr");
		row.innerHTML = `<tr id="${product.id}">
            <td><input type="checkbox" name="check-item" id="r-${
					product.id
				}"></td>
			<td><img data-id="${product.id}" class="product-image" src="${
			product.img
		}" alt="${product.name}" width="100">
		<div id="myModal-${product.id}" class="modal">
  				<span class="close">&times;</span>
  				<img class="modal-content" id="img01-${product.id}">
			</div></td>
			

            <td><a href=${product.url}>${product.name}</a></td>
            <td>${product.brand}</td>
            <td>${product.price.toLocaleString("vi-en")}</td>
            <td><input type="number" value="0" disabled name="n-${
					product.id
				}" id="n-${product.id}"></td>
            <td name="total-product" id="total-${product.id}"></td>
         </tr>`;
		tbody.appendChild(row);

		// Thêm sự kiện onchange vào trường input quantity
		const inputQuantity = row.querySelector(`#n-${product.id}`);
		inputQuantity.addEventListener("change", (e) => {
			if (e.target.value > 0) {
				handleChangeQuantity(e.target.value, product.price, product.id);
			} else {
				inputQuantity.value = 1;
				handleChangeQuantity(1, product.price, product.id);
			}
		});
	});
}

// Price format (1.000.000 => 1000000)
function priceFormat(price) {
	return parseFloat(price.replace(/\./g, ""));
}

// Handle checkboxes
function hanldeCheckboxesChange(checkbox) {
	const row = checkbox.closest("tr");
	const inputQuantity = row.querySelector("td:nth-child(6) input");
	const totalPrice = row.querySelector("td:nth-child(7)");
	const price = row.querySelector("td:nth-child(5)").textContent;
	if (checkbox.checked) {
		inputQuantity.disabled = false;
		inputQuantity.value = 1;
		totalPrice.innerHTML = priceFormat(price).toLocaleString("vi-en");
		handleTotalPrice();
	} else {
		inputQuantity.disabled = true;
		inputQuantity.value = 0;
		totalPrice.innerHTML = "";
		handleTotalPrice();
	}
}

// Handle checkbox all
function handleCheckboxAllChange(checkboxAll, checkboxesElementItems) {
	let isChecked = checkboxAll.checked;
	checkboxesElementItems.forEach((checkbox) => {
		checkbox.checked = isChecked;
		hanldeCheckboxesChange(checkbox);
	});
}

// Handle input quantity
function handleChangeQuantity(quantity, price, id) {
	let totalElement = document.getElementById(`total-${id}`);
	totalElement.innerText = (quantity * price).toLocaleString("vi-en");
	handleTotalPrice();
}

// Handle total price
function handleTotalPrice() {
	const totalProductElements = document.querySelectorAll(
		'td[name="total-product"]'
	);
	const totalPriceElement = document.getElementById("total-price");
	let totalPrice = 0;
	totalProductElements.forEach((totalProductElement) => {
		const value = totalProductElement.textContent;
		if (value !== "") {
			totalPrice += priceFormat(value);
		}
	});
	totalPriceElement.innerHTML = totalPrice.toLocaleString("vi-en");
}

// Handle select
function handleChangeSelect(selectElement) {
	const selectedValue = selectElement.value;
	if (selectedValue === "0") {
		table.style.display = "none";
	} else {
		document.getElementById("check-all").checked = false;
		document.getElementById("total-price").innerText = "";
		table.style.display = "block";
	}
	let newProducts = [];
    if (selectedValue === "1") {
        newProducts = products;
    } else if (selectedValue === "2") {
		newProducts = products.filter(
			(p) => p.price > 0 && p.price < 1000000
		);
	} else if (selectedValue === "3") {
		newProducts = products.filter(
			(p) => p.price >= 1000000 && p.price < 1500000
		);
	} else if (selectedValue === "4") {
		newProducts = products.filter(
			(p) => p.price >= 1500000 && p.price < 2000000
		);
	} else if (selectedValue === "5") {
		newProducts = products.filter(
			(p) => p.price >= 2000000 && p.price < 2500000
		);
	} else if (selectedValue === "6") {
		newProducts = products.filter(
			(p) => p.price >= 2500000 && p.price < 3000000
		);
	} else if (selectedValue === "7") {
		newProducts = products.filter(
			(p) => p.price >= 3000000 && p.price < 4000000
		);
	} else if (selectedValue === "8") {
		newProducts = products.filter((p) => p.price > 4000000);
	} else if (selectedValue === "9") {
		newProducts = products.sort((p1, p2) => p1.price - p2.price);
	} else if (selectedValue === "10") {
		newProducts = products.sort((p1, p2) => p2.price - p1.price);
	} 
    
	// In sản phẩm ra table
	render(newProducts);

	// Logic checkbox item
	let checkboxesElementItems = document.querySelectorAll(
		'input[name="check-item"]'
	);
	checkboxesElementItems.forEach((checkbox) => {
		checkbox.addEventListener("change", () => {
			hanldeCheckboxesChange(checkbox);
		});
	});

	// Logic checkbox all
	let checkboxAll = document.getElementById("check-all");
	checkboxAll.addEventListener("change", () => {
		handleCheckboxAllChange(checkboxAll, checkboxesElementItems);
	});

	// Lấy danh sách tất cả các hình ảnh sản phẩm
	const productImages = document.querySelectorAll(".product-image");

	productImages.forEach((img) => {
		img.addEventListener("click", function (e) {
			const productId = this.getAttribute("data-id");
			const modal = document.getElementById(`myModal-${productId}`);
			const modalImg = document.getElementById(`img01-${productId}`);
			modal.style.display = "block";
			modalImg.src = this.src;

			modal.addEventListener("click", () => {
				modal.style.display = "none";
			});
		});
	});

	// Xử lý đóng modal khi click vào nút đóng (x)
	const closeButtons = document.querySelectorAll(".close");
	closeButtons.forEach((button) => {
		button.addEventListener("click", function () {
			const modal = this.parentElement;
			modal.style.display = "none";
		});
	});
}
