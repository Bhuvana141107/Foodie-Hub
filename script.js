const defaultFoods = [
  { name: "Pav Bhaji", price: 230, img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop", desc: "Spicy mashed veggie curry with buttered pav" },
  { name: "Chole Kulche", price: 350, img: "cholekulche.jpg", desc: "Spicy chickpeas with soft kulcha bread" },
  { name: "Dahi Puri", price: 140, img: "dahipuri.jpg", desc: "Crispy puris with yogurt and chutney" },
  { name: "Kachori", price: 180, img: "kachori.jpg", desc: "Flaky deep fried spiced lentil pastry" },
  { name: "Jalebi", price: 200, img: "jalebi.jpg", desc: "Crispy syrup soaked sweet spiral" }
];
const foodData = {
  italian: [
    { name: "Bruschetta", price: 180, img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop", desc: "Toasted bread with tomatoes and basil" },
    { name: "Focaccia", price: 160, img: "focaccia.jpg", desc: "Soft Italian flatbread with olive oil" },
    { name: "Minestrone Soup", price: 200, img: "soup.jpg", desc: "Hearty Italian vegetable soup" },
    { name: "Penne Arrabbiata", price: 260, img: "penne.jpg", desc: "Spicy tomato penne pasta" },
    { name: "Ravioli", price: 320, img: "ravioli.jpg", desc: "Stuffed pasta pockets in creamy sauce" },
    { name: "Gnocchi", price: 300, img: "gnocchi.jpg", desc: "Soft potato dumplings with pesto" },
    { name: "Tiramisu", price: 220, img: "tiramisu.jpg", desc: "Classic Italian coffee cream dessert" },
    { name: "Panna Cotta", price: 200, img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop", desc: "Silky Italian cream dessert with berries" },
    { name: "Cannoli", price: 180, img: "cannoli.jpg", desc: "Crispy pastry tubes with sweet ricotta" },
    { name: "Osso Buco", price: 480, img: "ossbuco.jpg", desc: "Braised veal shanks with gremolata" }
  ],
  chinese: [
    { name: "Dim Sum", price: 220, img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop", desc: "Steamed bite sized Chinese dumplings" },
    { name: "Peking Duck", price: 550, img: "duck.jpg", desc: "Crispy roasted duck with pancakes" },
    { name: "Mapo Tofu", price: 200, img: "tofu.jpg", desc: "Spicy Sichuan silken tofu dish" },
    { name: "Wonton Soup", price: 180, img: "wonton.jpg", desc: "Delicate dumplings in clear broth" },
    { name: "Char Siu Pork", price: 320, img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop", desc: "Sweet BBQ glazed Chinese roast pork" },
    { name: "Egg Fried Rice", price: 160, img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop", desc: "Wok tossed rice with scrambled eggs" },
    { name: "Kung Pao Chicken", price: 280, img: "kung.jpg", desc: "Spicy chicken with peanuts and chilies" },
    { name: "Sweet Corn Soup", price: 140, img: "corn.jpg", desc: "Creamy sweet corn egg drop soup" },
    { name: "Chow Mein Noodles", price: 380, img: "chow.jpg", desc: "Stir-fried soy-sauce noodles" },
    { name: "Tanghulu", price: 80, img: "tanghulu.jpg", desc: "Crunchy, sweet, fruity Chinese street-snack" }
  ],
  indian: [
    { name: "Shahi Paneer", price: 240, img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop", desc: "Rich royal creamy paneer curry" },
    { name: "Mutton Rogan Josh", price: 380, img: "mutton.JPG", desc: "Kashmiri slow cooked aromatic mutton" },
    { name: "Hyderabadi Biryani", price: 320, img: "Dum Biryani.jpg", desc: "Dum cooked layered Hyderabadi biryani" },
    { name: "Peshwari Naan", price: 80, img: "naan.jpg", desc: "Sweet stuffed naan with almonds coconut" },
    { name: "Lassi", price: 90, img: "lassi.jpg", desc: "Thick sweet chilled yogurt drink" },
    { name: "Aloo Gobi", price: 160, img: "aloo.jpg", desc: "Spiced potato and cauliflower dry curry" },
    { name: "Malai Kofta", price: 220, img: "malai.jpg", desc: "Soft paneer balls in creamy gravy" },
    { name: "Ras Malai", price: 120, img: "ras.jpg", desc: "Soft cheese dumplings in sweet milk" },
    { name: "Tandoori Roti", price: 40, img: "tandoori.jpg", desc: "Whole wheat bread from clay oven" },
    { name: "Mango Kulfi", price: 100, img: "mango.jpg", desc: "Creamy frozen mango Indian ice cream" }
  ],
  french: [
    { name: "French Onion Soup", price: 220, img: "frenchonion.jpg", desc: "Rich caramelized onion soup with cheese" },
    { name: "Beef Bourguignon", price: 520, img: "beef.jpg", desc: "Slow braised beef in red wine sauce" },
    { name: "Crepes Suzette", price: 200, img: "crepes.jpg", desc: "Thin crepes with orange butter sauce" },
    { name: "Quiche Lorraine", price: 240, img: "quiche.jpg", desc: "Savory egg and bacon pastry tart" },
    { name: "Ratatouille", price: 200, img: "rata.jpg", desc: "Provencal slow cooked vegetable stew" },
    { name: "Chocolate Souffle", price: 280, img: "souffle.jpg", desc: "Light airy warm chocolate dessert" },
    { name: "Macarons", price: 250, img: "macarons.jpg", desc: "Colorful French almond meringue cookies" },
    { name: "Boeuf Stroganoff", price: 450, img: "stronganoff.jpg", desc: "Tender beef strips in creamy mushroom sauce" },
    { name: "Tarte Tatin", price: 220, img: "tarte.jpg", desc: "Upside down caramelized apple tart" },
    { name: "Eclairs", price: 160, img: "eclairs.jpg", desc: "Choux pastry filled with cream chocolate" }
  ]
};const cuisineInfo = {
  italian: "Italian cuisine is known for pasta, pizza and rich flavors. It uses cheese, olive oil and herbs.",
  chinese: "Chinese cuisine is famous for noodles, rice and spicy sauces. It balances flavors perfectly.",
  indian: "Indian cuisine is rich in spices, flavors and variety. From biryani to curries, it is diverse.",
  french: "French cuisine is elegant and known for pastries, sauces and fine dining techniques."
};

const allMoodFoods = [
  // HUNGRY - heavy filling foods (9 items)
  { name: "Hyderabadi Biryani", price: 320, img: "Dum Biryani.jpg", desc: "Dum cooked layered Hyderabadi biryani", moods: ["hungry"] },
  { name: "Mutton Rogan Josh", price: 380, img: "mutton.JPG", desc: "Kashmiri slow cooked aromatic mutton", moods: ["hungry"] },
  { name: "Osso Buco", price: 480, img: "ossbuco.jpg", desc: "Braised veal shanks with gremolata", moods: ["hungry"] },
  { name: "Peking Duck", price: 550, img: "duck.jpg", desc: "Crispy roasted duck with pancakes", moods: ["hungry"] },
  { name: "Beef Bourguignon", price: 520, img: "beef.jpg", desc: "Slow braised beef in red wine sauce", moods: ["hungry"] },
  { name: "Indian Thali", price: 280, img: "thali.jpg", desc: "Complete Indian meal with all sides", moods: ["hungry"] },
  { name: "Steak", price: 450, img: "steak.jpg", desc: "Tender perfectly grilled beef steak", moods: ["hungry"] },
  { name: "Prawn Masala", price: 400, img: "prawn.jpg", desc: "Juicy prawns in spicy coastal masala", moods: ["hungry"] },
  { name: "Lasagna", price: 320, img: "lasagna.jpg", desc: "Layered baked pasta with rich cheese sauce", moods: ["hungry"] },

  // HEALTHY - light nutritious foods (9 items)
  { name: "Ratatouille", price: 200, img: "rata.jpg", desc: "Provencal slow cooked vegetable stew", moods: ["healthy"] },
  { name: "Aloo Gobi", price: 160, img: "aloo.jpg", desc: "Spiced potato and cauliflower dry curry", moods: ["healthy"] },
  { name: "Wonton Soup", price: 180, img: "wonton.jpg", desc: "Delicate dumplings in clear broth", moods: ["healthy"] },
  { name: "Sweet Corn Soup", price: 140, img: "corn.jpg", desc: "Creamy sweet corn egg drop soup", moods: ["healthy"] },
  { name: "Idli Sambar", price: 80, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop", desc: "Soft steamed rice cakes with sambar", moods: ["healthy"] },
  { name: "Smoothie Bowl", price: 180, img: "smoothie.jpg", desc: "Fresh fruit smoothie with healthy toppings", moods: ["healthy"] },
  { name: "Palak Paneer", price: 200, img: "palak.jpg", desc: "Cottage cheese in fresh spinach gravy", moods: ["healthy"] },
  { name: "Masala Corn", price: 90, img: "masalcorn.jpg", desc: "Spicy boiled corn with butter and masala", moods: ["healthy"] },
  { name: "Dhokla", price: 90, img: "dokla.jpg", desc: "Soft steamed gram flour Gujarati snack", moods: ["healthy"] },

  // LAZY - quick easy comfort foods (9 items)
  { name: "Egg Fried Rice", price: 160, img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop", desc: "Wok tossed rice with scrambled eggs", moods: ["lazy"] },
  { name: "Maggi", price: 80, img: "maggi.jpg", desc: "Quick masala instant noodles", moods: ["lazy"] },
  { name: "Bread Omelette", price: 90, img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop", desc: "Toasted bread with fluffy egg omelette", moods: ["lazy"] },
  { name: "Poha", price: 70, img: "poha.jpg", desc: "Flattened rice with veggies and spices", moods: ["lazy"] },
  { name: "Upma", price: 75, img: "upma.jpg", desc: "Savory semolina porridge with mustard", moods: ["lazy"] },
  { name: "Vada Pav", price: 60, img: "vadapav.jpg", desc: "Mumbai style spicy potato burger", moods: ["lazy"] },
  { name: "Hakka Noodles", price: 160, img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop", desc: "Stir fried noodles in spicy sauce", moods: ["lazy"] },
  { name: "Sambar Rice", price: 120, img: "sambar.jpg", desc: "Rice mixed with tangy tamarind sambar", moods: ["lazy"] },
  { name: "Pongal", price: 85, img: "pongal.jpg", desc: "Rice and lentil porridge with ghee", moods: ["lazy"] },

  // CRAVING - sweet indulgent treats (9 items)
  { name: "Tiramisu", price: 220, img: "tiramisu.jpg", desc: "Classic Italian coffee cream dessert", moods: ["craving"] },
  { name: "Panna Cotta", price: 200, img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop", desc: "Silky Italian cream dessert with berries", moods: ["craving"] },
  { name: "Cannoli", price: 180, img: "cannoli.jpg", desc: "Crispy pastry tubes with sweet ricotta", moods: ["craving"] },
  { name: "Macarons", price: 250, img: "macarons.jpg", desc: "Colorful French almond meringue cookies", moods: ["craving"] },
  { name: "Chocolate Souffle", price: 280, img: "souffle.jpg", desc: "Light airy warm chocolate dessert", moods: ["craving"] },
  { name: "Ras Malai", price: 120, img: "ras.jpg", desc: "Soft cheese dumplings in sweet milk", moods: ["craving"] },
  { name: "Tarte Tatin", price: 220, img: "tarte.jpg", desc: "Upside down caramelized apple tart", moods: ["craving"] },
  { name: "Eclairs", price: 160, img: "eclairs.jpg", desc: "Choux pastry filled with cream chocolate", moods: ["craving"] },
  { name: "Mango Kulfi", price: 100, img: "mango.jpg", desc: "Creamy frozen mango Indian ice cream", moods: ["craving"] },

  // HAPPY - celebratory party foods (9 items)
  { name: "Char Siu Pork", price: 320, img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop", desc: "Sweet BBQ glazed Chinese roast pork", moods: ["happy"] },
  { name: "Dim Sum", price: 220, img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop", desc: "Steamed bite sized Chinese dumplings", moods: ["happy"] },
  { name: "Shahi Paneer", price: 240, img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop", desc: "Rich royal creamy paneer curry", moods: ["happy"] },
  { name: "Kung Pao Chicken", price: 280, img: "kung.jpg", desc: "Spicy chicken with peanuts and chilies", moods: ["happy"] },
  { name: "Bruschetta", price: 180, img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop", desc: "Toasted bread with tomatoes and basil", moods: ["happy"] },
  { name: "Chicken Nuggets", price: 180, img: "nuggets.jpg", desc: "Crispy golden fried chicken bites", moods: ["happy"] },
  { name: "Spring Rolls", price: 120, img: "springrolls.jpg", desc: "Crispy rolls with seasoned veggie filling", moods: ["happy"] },
  { name: "Nachos", price: 150, img: "nachos.jpg", desc: "Tortilla chips with salsa and cheese dip", moods: ["happy"] },
  { name: "Paneer Tikka", price: 240, img: "paneertikka.jpg", desc: "Smoky tandoor grilled cottage cheese", moods: ["happy"] },

  // SAD - comfort soul foods (9 items)
  { name: "French Onion Soup", price: 220, img: "frenchonion.jpg", desc: "Rich caramelized onion soup with cheese", moods: ["sad"] },
  { name: "Wonton Soup", price: 180, img: "wonton.jpg", desc: "Delicate dumplings in clear broth", moods: ["sad"] },
  { name: "Rajma Chawal", price: 160, img: "rajmachawal.jpg", desc: "Red kidney beans curry with steamed rice", moods: ["sad"] },
  { name: "Dal Makhani", price: 180, img: "daal.jpg", desc: "Creamy slow cooked black lentil curry", moods: ["sad"] },
  { name: "Kadhi Chawal", price: 170, img: "kadhi.jpg", desc: "Tangy yogurt curry with steamed rice", moods: ["sad"] },
  { name: "Dal Tadka", price: 160, img: "daltadka.jpg", desc: "Tempered yellow lentil comfort curry", moods: ["sad"] },
  { name: "Butter Chicken", price: 300, img: "butterchicken.jpg", desc: "Creamy tomato-based chicken curry", moods: ["sad"] },
  { name: "Malai Kofta", price: 220, img: "malai.jpg", desc: "Soft paneer balls in creamy gravy", moods: ["sad"] },
  { name: "Pav Bhaji", price: 230, img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop", desc: "Spicy mashed veggie curry with buttered pav", moods: ["sad"] }
];
/* ================= VARIABLES ================= */




let users = JSON.parse(localStorage.getItem("users")) || [];


/* ================= LOGIN ================= */

function loginUser() {
  let email = document.getElementById("email").value.trim();
  let pass = document.getElementById("password").value;
  let error = document.getElementById("error");

  if (email === "" && pass === "") {
    error.innerText = "Please enter email and password";
    return;
  }

  if (email === "") {
    error.innerText = "Please enter your email";
    return;
  }

  if (!isValidEmail(email)) {
    error.innerText = "Invalid email format (example: name@gmail.com)";
    return;
  }

  if (pass === "") {
    error.innerText = "Please enter your password";
    return;
  }

  if (pass.length < 8) {
    error.innerText = "Password must be at least 8 characters";
    return;
  }

  if (!isValidPassword(pass)) {
    error.innerText = "Password must have uppercase, lowercase, number & special character (@$!%*?&)";
    return;
  }

  let user = users.find(u => u.email === email && u.password === pass);

  if (!user) {
    error.innerText = "Email or password is incorrect. Please try again!";
    return;
  }

  // ✅ login success
  document.getElementById("login").classList.add("hidden");
  let main = document.getElementById("main");
  setTimeout(() => {
    main.classList.remove("hidden");
    main.style.display = "block";
    main.style.overflow = "visible";
  }, 200);

localStorage.setItem("user", email);
loadProfile();

  }
function loadProfile() {
  let user = localStorage.getItem("user");
  let icon = document.getElementById("profileIcon");

  if (user && icon) {
    icon.innerText = user.charAt(0).toUpperCase();
  }
}
function toggleProfile() {
  document.getElementById("profileMenu").classList.toggle("hidden");
}
function logout() {
  localStorage.removeItem("user");

  document.getElementById("main").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}

function showLoginFromSignup() {
  document.getElementById("loginCard").innerHTML = `
    <h1 class="logo">Foodie<span>Hub</span></h1>
    <p class="subtitle">Login to start ordering</p>
    <div class="tabs">
      <button class="active">Login</button>
      <button onclick="showSignup()">Sign Up</button>
    </div>
    <div class="input-group">
      <label>📧E-mail</label>
      <input type="email" id="email" placeholder="college@example.com">
    </div>
    <div class="input-group">
      <label>🔒Password</label>
      <div class="password-wrapper">
        <input type="password" id="password" placeholder="Enter password">
        <span class="eye" onclick="togglePassword()">👁️</span>
      </div>
    </div>
    <div class="options">
      <label><input type="checkbox"> Remember Me</label>
      <p class="forgot" onclick="forgotPassword()">Forgot Password?</p>
    </div>
    <button class="login-btn" onclick="loginUser()">Login →</button>
    <p id="error"></p>
    <p class="switch">Don't have an account? <span onclick="showSignup()">Sign up here</span></p>
  `;
}
/* ================= SIGNUP UI ================= */

function showSignup() {
  document.querySelector(".login-card").innerHTML = `
    <h2 style="color:black";>Sign Up</h2>
    <div class="input-group">

    <label>Full Name</label>
    <input type="text" id="name" placeholder="Enter your full Name">
    </div>
     <div class="input-group">

    <label>E-mail</label>
    <input type="email" id="email" placeholder="college@example.com">
    </div>
    <div class="input-group">
      <label> 🔒Password</label>
      <div class="password-wrapper">

      <input type="password" id="password" placeholder="Min 8 characters">
      <span class="toggle-password" onclick="togglePassword()">👁️</span>
    </div>
    </div>

    <button class="login-btn" onclick="signupUser()">Sign Up</button>

    <p id="error"></p>

    <p class="switch">
      Already a user?
      <span onclick="showLoginFromSignup()">Login</span>
    </p>
  `;
}

/* ================= VALIDATION ================= */

function isValidEmail(email) {
  return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
}

function isValidPassword(password) {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}

/* ================= SIGNUP ================= */

function signupUser() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");

  // ALL FIELDS EMPTY
  if (!name && !email && !password) {
    error.innerText = "Please fill in all fields";
    return;
  }

  // NAME CHECKS
  if (name === "") {
    error.innerText = "Please enter your full name";
    return;
  }

  if (name.length < 3) {
    error.innerText = "Name must be at least 3 characters";
    return;
  }

  if (!/^[a-zA-Z ]+$/.test(name)) {
    error.innerText = "Name should contain only letters and spaces";
    return;
  }

  // EMAIL CHECKS
  if (email === "") {
    error.innerText = "Please enter your email";
    return;
  }

  if (!isValidEmail(email)) {
    error.innerText = "Invalid email format (example: name@gmail.com)";
    return;
  }

  // PASSWORD CHECKS
  if (password === "") {
    error.innerText = "Please enter a password";
    return;
  }

  if (password.length < 8) {
    error.innerText = "Password must be at least 8 characters";
    return;
  }

  if (!/[A-Z]/.test(password)) {
    error.innerText = "Password must contain at least one uppercase letter";
    return;
  }

  if (!/[a-z]/.test(password)) {
    error.innerText = "Password must contain at least one lowercase letter";
    return;
  }

  if (!/[0-9]/.test(password)) {
    error.innerText = "Password must contain at least one number";
    return;
  }

  if (!/[@$!%*?&]/.test(password)) {
    error.innerText = "Password must contain at least one special character (@$!%*?&)";
    return;
  }

  // USER ALREADY EXISTS
  let userExists = users.find(u => u.email === email);
  if (userExists) {
    error.innerText = "This email is already registered. Please login!";
    return;
  }

  // SUCCESS
  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  error.style.color = "green";
  error.innerText = "Signup successful! Redirecting to login...";

  setTimeout(() => {
    showLoginFromSignup();
  }, 1500);
}
/* ================= PASSWORD TOGGLE ================= */

function togglePassword() {
  let passwordField = document.getElementById("password");
  let icon = document.querySelector(".eye, .toggle-password");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    icon.innerText = "🙈";
  } else {
    passwordField.type = "password";
    icon.innerText = "👁️";
  }
}
function forgotPassword() {
  let email = prompt("Enter your registered email:");

  if (!email) return;

  let user = users.find(u => u.email === email);

  if (!user) {
    alert("Email not found!");
    return;
  }

  let newPass = prompt("Enter new password:");

  if (!newPass) return;

  if (!isValidPassword(newPass)) {
    alert("Password must have 8 chars, uppercase, lowercase, number & special character (@$!%*?&)");
    return;
  }

  // update password
  user.password = newPass;

  localStorage.setItem("users", JSON.stringify(users));

  alert("Password updated successfully!");
}



/* ================= IMAGE SLIDER ================= */

let images = [
    "food1.jpg",
    "food2.jpg",
    "food3.jpg",
    "food5.png",
    "food6.png"
];

let index = 0;

let autoSlide;

function startSlider() {
  clearInterval(autoSlide); // 🔥 prevents multiple intervals
  autoSlide = setInterval(() => {
    nextImage(true);
  }, 3000);
}
function stopSlider() {
  clearInterval(autoSlide);
}
function nextImage(auto = false) {
  let img = document.getElementById("heroImage");

  img.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % images.length;
    img.src = images[index];
    img.style.opacity = 1;
  }, 200);

  // 🔥 restart only if user clicked
  if (!auto) startSlider();
}

function prevImage() {
  let img = document.getElementById("heroImage");

  img.style.opacity = 0;

  setTimeout(() => {
    index = (index - 1 + images.length) % images.length;
    img.src = images[index];
    img.style.opacity = 1;
  }, 200);

  startSlider(); // restart after manual click
}
function showLogin() {
  const landing = document.getElementById("landing");
  const login = document.getElementById("login");
  const main = document.getElementById("main");

  // hide others
  if (landing) landing.classList.add("hidden");
  if (main) main.classList.add("hidden");

  // show login
  if (login) {
    login.classList.remove("hidden");
    login.style.display = "flex"; // 🔥 important
  }
}

/* SHOW FOOD ITEMS */
function showCuisine(type) {
        console.log("SHOWING CUISINE", type);
    // 2. We are on cuisine.html, find the containers
    const container = document.getElementById("foodContainer");
    const title = document.getElementById("cuisineTitle");
    const desc = document.getElementById("cuisineDescription");

    if (!container) {
  console.log("NO CONTAINER FOUND");
  return;
}

if (!foodData[type]) {
  console.log("INVALID TYPE:", type);
  return;
}

    // 3. Clear the "stuck" state
    container.innerHTML = "";

    // 4. Update Header
    title.innerText = type.toUpperCase() + " CUISINE";
    if (desc) desc.innerText = cuisineInfo[type];

    // 5. Generate Premium Cards
    foodData[type].forEach(item => {
    container.innerHTML += `
        <div class="food-card">
            <img src="${item.img}" onerror="this.src='https://via.placeholder.com/300x200?text=${item.name}'">
            
            <div class="card-content">
                <h4>${item.name}</h4>
                
                <p class="food-desc">${item.desc}</p>
                
                <div class="price-row">
                    <div class="price">₹${item.price}</div>
                    <button class="add-btn" onclick="addToCartUI(this,'${item.name}', ${item.price}, '${item.img}')">Add</button>
                </div>
            </div>
        </div>
    `;
});
}
function addToCartUI(btn, name, price, img) {
  addToCart(name, price, img);

 btn.outerHTML = `
  <div class="qty-box">
    <button onclick="updateQty(this, '${name}', ${price}, '${img}', -1)">−</button>
    <span>1</span>
    <button onclick="updateQty(this, '${name}', ${price}, '${img}', 1)">+</button>
  </div>
`;
}

function updateQty(el, name, price, img, change) {
  let qtySpan = el.parentElement.querySelector("span");
  let qty = parseInt(qtySpan.innerText);

  qty += change;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let item = cart.find(i => i.name === name);

  // 🔥 If qty becomes 0 → REMOVE from cart
  if (qty <= 0) {
    cart = cart.filter(i => i.name !== name);

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    updateMiniCart();

    // change UI back to Add button
    el.parentElement.outerHTML = `
      <button class="add-btn" onclick="addToCartUI(this, '${name}', ${price}, '${img}')">Add</button>
    `;
    return;
  }

  // ✅ update qty normally
  qtySpan.innerText = qty;

  if (item) item.qty = qty;

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}
function showToast(message) {
  let toast = document.getElementById("toast");
  toast.innerText = message;
  
  // Force reset first
  toast.style.top = "-100px";
  
  setTimeout(() => {
    toast.style.top = "80px";
    
    setTimeout(() => {
      toast.style.top = "-100px";
    }, 2000);
  }, 50);
}

/* ADD TO CART */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, img) {
  let item = cart.find(i => i.name === name);

  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, img, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  updateMiniCart();
  showToast(name + " added to cart 🛒");
}
function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cartItems");
  let total = 0;

  container.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" class="cart-img">

        <div class="cart-details">
          <h4>${item.name}</h4>
           <p class="price">₹${item.price}</p>

          <div class="qty-box">
            <button onclick="changeQty(${index}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${index}, 1)">+</button>
          </div>
        </div>

        <span class="delete" onclick="removeItem(${index})">🗑</span>
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
}
  
function changeQty(index, change) {
  let cart = JSON.parse(localStorage.getItem("cart"));

  cart[index].qty += change;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}
function viewCart() {
  document.getElementById("login").classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");

  let cartList = document.getElementById("cartItems");
  cartList.innerHTML = "";

  cartItemsList.forEach(c => {
    let li = document.createElement("li");
    li.innerText = `${c.item} - $${c.price}`;
    cartList.appendChild(li);
  });

  document.getElementById("total").innerText = total;
}
if (document.getElementById("heroImage")) {
    startSlider();
  }

 function goHome() {
  window.location.href = "index.html?home=true";
}

const params = new URLSearchParams(window.location.search);
if (params.get("home") === "true") {
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("login").classList.add("hidden");
  let main = document.getElementById("main");
  main.classList.remove("hidden");
  main.style.overflow = "visible";

}
function removeItem(index) {
  if (!confirm("Remove this item?")) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  loadCart();
  updateCartCount();
  updateMiniCart();
}function showPayment() {
  document.getElementById("paymentSection").classList.remove("hidden");
}

function cashOnDelivery() {
  localStorage.removeItem("cart");
  window.location.href = "success.html";
}
function showUPI() {
  document.getElementById("upiBox").classList.remove("hidden");
}

function payNow() {
  let upi = document.getElementById("upi").value.trim();
  let loader = document.getElementById("paymentLoader");

  let upiPattern = /^[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{2,}$/;

  if (upi === "") {
    alert("Enter UPI ID");
    return;
  }

  if (!upiPattern.test(upi)) {
    alert("Enter valid UPI ID (example: name@bank or 9876543210@ybl)");
    return;
  }

  // ✅ show animation
  loader.classList.remove("hidden");

  setTimeout(() => {
    loader.classList.add("hidden");

    alert("Payment Successful 🎉");

    localStorage.removeItem("cart");
    updateCartCount();

    window.location.href = "success.html";
  }, 2000);
}if (window.location.pathname.includes("cart.html")) {
  loadCart();
}
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let count = cart.reduce((sum, item) => sum + item.qty, 0);

  let el = document.getElementById("cartCount");
  if (el) el.innerText = count;
}
updateCartCount();
function selectMood(mood) {
  localStorage.setItem("selectedMood", mood);

  // redirect to cuisine page
  window.location.href = "cuisine.html?mood=" + mood;
}
function showMoodFood(mood) {
  const container = document.getElementById("foodContainer");
  const title = document.getElementById("cuisineTitle");
  const desc = document.getElementById("cuisineDescription");

  if (!container) return;
  container.innerHTML = "";

  const moodTitles = {
    happy:   "😊 Feeling Happy! Here's what we suggest",
    sad:     "😔 Feeling Low? Let food comfort you",
    hungry:  "😋 Super Hungry! Try these filling meals",
    lazy:    "😴 Too Lazy? Quick and easy picks",
    healthy: "💪 Healthy Choice! Light and nutritious",
    craving: "😍 Craving Something? Indulge yourself"
  };

  title.innerText = moodTitles[mood] || mood.toUpperCase();

  // Filter by mood
  let moodItems = allMoodFoods.filter(f => f.moods.includes(mood));

  // Shuffle randomly every time
  moodItems = moodItems.sort(() => Math.random() - 0.5);

  // Pick 9 items
  let selected = moodItems.slice(0, 9);

  selected.forEach(item => {
    container.innerHTML += `
      <div class="food-card highlight">
        <img src="${item.img}"
          onerror="this.src='https://via.placeholder.com/300x200?text=${item.name}'">
        <div class="card-content">
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
          <div class="price-row">
            <div class="price">₹${item.price}</div>
            <button class="add-btn"
              onclick="addToCartUI(this,'${item.name}',${item.price},'${item.img}')">
              Add
            </button>
          </div>
        </div>
      </div>`;
  });

  desc.innerText = "Recommended just for your mood today 💫 — refreshes every visit!";
}function startConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let confetti = [];

  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 150,
      color: ["#FFD700", "#FF4E50", "#FC913A", "#F9D423", "#EDE574"][Math.floor(Math.random()*5)]
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach((c, i) => {
      ctx.beginPath();
      ctx.fillStyle = c.color;
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fill();

      c.y += 2;
      c.x += Math.sin(c.d);

      if (c.y > canvas.height) {
        confetti[i].y = -10;
        confetti[i].x = Math.random() * canvas.width;
      }
    });
  }

  setInterval(draw, 20);
}
function updateMiniCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let mini = document.getElementById("miniCart");
  let text = document.getElementById("miniText");

  if (!mini || !text) return;

  if (cart.length === 0) {
    mini.classList.add("hidden");
    return;
  }

  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach(item => {
    totalItems += item.qty;
    totalPrice += item.price * item.qty;
  });

  text.innerText = `${totalItems} items | ₹${totalPrice}`;
  mini.classList.remove("hidden");
}

  function renderSeasonFoods(season = "default") {
  const container = document.getElementById("seasonFoods");
  if (!container) return;

  const foods = {
  summer: [
    { name: "Aam Panna 🥭", price: 100, img: "aampanna.jpg", desc: "Tangy raw mango cooling drink" },
    { name: "Kulfi 🍦", price: 200, img: "kulfi.jpg", desc: "Traditional Indian frozen milk dessert" },
    { name: "Summer Salad", price: 150, img: "salad.jpg", desc: "Fresh, crisp, light, seasonal. " },
    { name: "Coconut Water 🥥", price: 170, img: "coconutwater.jpg", desc: "Fresh tender coconut water" },
    { name: "Rose Sharbat 🌹", price: 275, img: "rose.jpg", desc: "Chilled rose flavored sweet drink" }
  ],
  monsoon: [
    { name: "Bhutte ka Kees 🌽", price: 130, img: "bhutte.jpg", desc: "Grated corn cooked with spices and milk" },
    { name: "Onion Bajji 🧅", price: 190, img: "onionbhaji.jpg", desc: "Crispy fried onion fritters with chutney" },
    { name: "Mirchi Bajji 🌶️", price: 160, img: "mirchibhaji.jpg", desc: "Stuffed chilli fritters deep fried crispy" },
    { name: "Masala Peanuts 🥜", price: 150, img: "peanuts1.jpg", desc: "Roasted spicy masala coated peanuts" },
    { name: "Adrak Chai 🍵", price: 100, img: "chai.jpg", desc: "Strong ginger tea for rainy evenings" }
  ],
  winter: [
    { name: "Makki di Roti 🌽", price: 320, img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop", desc: "Cornmeal flatbread with sarson da saag" },
    { name: "Badam Milk🫘", price: 260, img: "badam.jpg", desc: "Creamy, nutty, sweet, aromatic" },
    { name: "Moong Dal Halwa 🍮", price: 180, img: "halwa.jpg", desc: "Rich slow cooked lentil sweet dessert" },
    { name: "Bajra Khichdi 🥣", price: 130, img: "bajra.png", desc: "Warm pearl millet and lentil porridge" },
    { name: "Gond Ladoo 🟤", price: 210, img: "gond.jpg", desc: "Edible gum energy balls with dry fruits" }
  ]
};
  // 👇 choose correct data
  let selectedFoods = season === "default" ? defaultFoods : foods[season];

  container.innerHTML = "";

  selectedFoods.forEach((item, index) => {
  container.innerHTML += `
    <div class="food-card" style="animation-delay:${index * 0.1}s">      
       <img src="${item.img}"onerror="this.src='https://via.placeholder.com/300x200?text=${item.name}'">
        <div class="card-content">
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
          <div class="price-row">
            <div class="price">₹${item.price}</div>
            <button class="add-btn"
              onclick="addToCartUI(this,'${item.name}', ${item.price}, '${item.img}')">
              Add
            </button>
          </div>
        </div>
      </div>
    `;
  });
}
let topBtn = document.getElementById("topBtn");
if (topBtn) {
  // Only show on main page
  window.addEventListener("scroll", () => {
    if (document.getElementById("main") && 
        !document.getElementById("main").classList.contains("hidden")) {
      if (window.scrollY > 300) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    } else {
      // Hide on landing and login pages
      topBtn.style.display = "none";
    }
  });

  topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}function changeSeason(type = "default") {
  const container = document.getElementById("seasonFoods");
  if (!container) return;

  container.classList.remove("summer-anim", "monsoon-anim", "winter-anim");
  renderSeasonFoods(type);
  void container.offsetWidth;

  if (type === "default" || type === "summer") {
    container.classList.add("summer-anim");
    document.body.style.background = "#fff7ed";
  } else if (type === "monsoon") {
    container.classList.add("monsoon-anim");
    document.body.style.background = "#e0f2fe";
  } else if (type === "winter") {
    container.classList.add("winter-anim");
    document.body.style.background = "#f1f5f9";
  }
}document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  updateMiniCart();

  const params = new URLSearchParams(window.location.search);
  const isHome = params.get("home");

  if (isHome === "true") {
    document.getElementById("landing")?.classList.add("hidden");
    document.getElementById("login")?.classList.add("hidden");
    const main = document.getElementById("main");
    if (main) {
      main.classList.remove("hidden");
      main.style.display = "block";
    }
  }

  if (document.getElementById("seasonFoods")) {
    renderSeasonFoods("default");
  }

  if (document.getElementById("heroImage")) {
    startSlider();
  }
});
document.addEventListener("DOMContentLoaded", () => {
  loadProfile();
});

function subscribeUser() {
  let email = document.getElementById("subscribeEmail").value.trim();
  let msg = document.getElementById("subscribeMsg");

  if (email === "") {
    msg.style.color = "red";
    msg.innerText = "Please enter your email!";
    return;
  }

  if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
    msg.style.color = "red";
    msg.innerText = "Please enter a valid email!";
    return;
  }

  let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];

  if (subscribers.includes(email)) {
    msg.style.color = "orange";
    msg.innerText = "You are already subscribed!";
    return;
  }

  subscribers.push(email);
  localStorage.setItem("subscribers", JSON.stringify(subscribers));

  document.getElementById("subscribeEmail").value = "";
  msg.style.color = "#ff7e5f";
  msg.innerText = "✅ Subscribed successfully! Thank you!";

  setTimeout(() => {
    msg.innerText = "";
  }, 3000);
}
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("open");
}

// Show hamburger only on mobile
window.addEventListener("resize", () => {
  let ham = document.querySelector(".hamburger");
  if (ham) ham.style.display = window.innerWidth <= 768 ? "flex" : "none";
});
window.dispatchEvent(new Event("resize")); // run on load
