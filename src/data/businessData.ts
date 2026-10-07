// ============================================================
// FAIZAN AUTO SPARE PARTS & OIL STORE — Business Configuration
// ============================================================
// Edit this file to update business info, products, and services.
// All website sections pull data from here.
// ============================================================

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  brand?: string;
  price?: string;
  available?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const businessInfo = {
  name: "Faizan Auto Spare Parts and Oil Store",
  shortName: "Faizan Auto",
  tagline: "Quality Auto Parts & Engine Oils — Right Here in Shahdara",
  description:
    "Find reliable automotive parts, engine oils and essential vehicle products at Faizan Auto Spare Parts and Oil Store.",
  phone: "03271141325",
  whatsapp: "923271141325",
  address:
    "Lahore, Kala Khatai Village / Kala Khatai Road, Main Kala Khatai Road, Sheikhupura, near Jameel Park, Shahdara, 39051, Pakistan",
  shortAddress: "Kala Khatai Road, Shahdara, Pakistan",
  locationCode: "J7WV+52 Shahdara, Pakistan",
  googleMapsUrl:
    "https://maps.app.goo.gl/i2bEN9FsyLJQS7up6",
  year: 2026,
};

export const whatsappMessages = {
  general: `Assalam o Alaikum, I want to know more about the products available at ${businessInfo.name}.`,
  product: (productName: string) =>
    `Assalam o Alaikum, I want to ask about ${productName} available at ${businessInfo.name}.`,
  inquiry: (name: string, phone: string, product: string, message: string) =>
    `*New Inquiry from Website*\n\nName: ${name}\nPhone: ${phone}\nProduct/Inquiry: ${product}\nMessage: ${message}`,
};

export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`;

export const getPhoneUrl = () => `tel:${businessInfo.phone}`;

export const categories = [
  "All",
  "Engine Oils",
  "Filters",
  "Coolants",
  "Lubricants",
  "Accessories",
  "Car Care",
] as const;

// ============================================================
// PRODUCTS — Add/edit products here
// ============================================================
// To add a new product:
// 1. Place the product image in /public/images/products/
// 2. Add a new entry below with the correct image path
// ============================================================

export const products: Product[] = [
  {
    id: "guard-oil-filter",
    name: "Guard Oil Filter GDO-158",
    category: "Filters",
    description:
      "Guard GDO-158 oil filter — replaces 16510-82703. High quality filtration for cleaner engine oil, longer engine life. Fits Suzuki Mehran, Alto, Bolan and compatible vehicles.",
    image: "/images/products/guard_oil_filter_1790919099041.jpg",
    brand: "Guard",
  },
  {
    id: "honda-engine-oil",
    name: "Honda Genuine Engine Oil SN 10W30",
    category: "Engine Oils",
    description:
      "Honda Genuine Engine Oil SN 10W30 — 3.7 Liters. Manufactured by Idemitsu Lube Pakistan. Ideal for Honda City, Civic, and other Honda vehicles. Premium quality for smooth engine performance.",
    image: "/images/products/honda_engine_oil_1790919109832.jpg",
    brand: "Honda",
  },
  {
    id: "zic-x7-engine-oil",
    name: "ZIC X7 10W-40 Fully Synthetic Engine Oil",
    category: "Engine Oils",
    description:
      "ZIC X7 10W-40 Fully Synthetic Engine Oil — 4 Liters. By SK enmove with VHVI TECH. API SQ certified. Superior engine protection, fuel efficiency and extended drain intervals.",
    image: "/images/products/zic_x7_engine_oil_1790919120434.jpg",
    brand: "ZIC",
  },
  {
    id: "shell-rimula-r1",
    name: "Shell Rimula R1 SAE-50 Diesel Engine Oil",
    category: "Engine Oils",
    description:
      "Shell Rimula R1 Heavy Duty Diesel Engine Oil — SAE-50, 4 Liters. Reliable lubrication with Dynamic Protection technology. Designed for trucks, buses, and heavy-duty diesel engines.",
    image: "/images/products/shell_rimula_oil_1790919157077.jpg",
    brand: "Shell",
  },
  {
    id: "caltex-havoline",
    name: "Caltex Havoline Motor Oil 20W-50",
    category: "Engine Oils",
    description:
      "Caltex Havoline Motor Oil SAE 20W-50 API SG — 3 Liters. Deposit Shield Technology for better wear protection, especially for older engines. Trusted quality for reliable performance.",
    image: "/images/products/caltex_havoline_oil_1790919169093.jpg",
    brand: "Caltex",
  },
  {
    id: "guard-oil-filter-top",
    name: "Guard Oil Filter (Top View)",
    category: "Filters",
    description:
      "Guard oil filter with box — showing the precision-engineered base plate with anti-drain back valve holes. Quality construction ensures reliable oil filtration and engine protection.",
    image: "/images/products/guard_oil_filter_2_1790920026764.jpg",
    brand: "Guard",
  },
  {
    id: "nasa-radiator-coolant",
    name: "NASA Radiator Coolant",
    category: "Coolants",
    description:
      "NASA Radiator Coolant — Regular Quality, 1 Liter. Anti Heat, Anti Rust formula with Ethylene Glycol and Rust Inhibitors. Amine free organic acid technology. For all types of metal radiators.",
    image: "/images/products/nasa_radiator_coolant_1790920087007.jpg",
    brand: "NASA",
  },
  {
    id: "caltex-delo-gold",
    name: "Caltex Delo Gold Ultra 15W-40",
    category: "Engine Oils",
    description:
      "Caltex Delo Gold Ultra SAE 15W-40 Multigrade — 4 Liters. Heavy Duty Diesel Engine Oil with ISOSYN Technology. API CI-4/SL certified. Extended service protection for trucks and heavy machinery.",
    image: "/images/products/caltex_delo_gold_1790920099226.jpg",
    brand: "Caltex",
  },
  {
    id: "total-quartz-3000",
    name: "Total Quartz 3000 SG 20W-50",
    category: "Engine Oils",
    description:
      "Total Quartz 3000 SG 20W-50 API SG Engine Oil — 3 Liters. High performance technology with Clear Shield Technology. Suitable for gasoline engines, enhanced cleanliness and engine protection.",
    image: "/images/products/total_quartz_3000_1790920153256.jpg",
    brand: "Total",
  },
  {
    id: "guard-grease",
    name: "Guard Multipurpose Grease",
    category: "Lubricants",
    description:
      "Guard Synthetic Base Non-Drop Multipurpose Grease. Grade 2 for diverse automotive and industrial use. Excellent water resistance, high temperature stability, and long-lasting lubrication.",
    image: "/images/products/guard_grease_1790920165046.jpg",
    brand: "Guard",
  },
  {
    id: "sameili-air-freshener",
    name: "Sameili X Encounter Gel Air Freshener",
    category: "Accessories",
    description:
      "Sameili X S-03 Encounter Gel Air Freshener — premium quality perfume gel in a sleek black jar. Long-lasting fragrance for your car interior. Elegant design, powerful scent.",
    image: "/images/products/sameili_air_freshener_1790940573422.jpg",
    brand: "Sameili",
  },
  {
    id: "pso-carient-plus",
    name: "PSO Carient Plus 20W-50",
    category: "Engine Oils",
    description:
      "PSO Carient Plus 20W-50 SL/CF Engine Oil — 3 Liters. AI Formula technology protects even in extreme conditions. Pakistan's trusted PSO quality for reliable engine performance.",
    image: "/images/products/pso_carient_oil_1790940593821.jpg",
    brand: "PSO",
  },
  {
    id: "castrol-gtx",
    name: "Castrol GTX High Mileage 20W-50",
    category: "Engine Oils",
    description:
      "Castrol GTX High Mileage 20W-50 Mineral Engine Oil — 4 Liters. 3X Protect formula helps extend engine life. For petrol and diesel engines. Trusted worldwide performance.",
    image: "/images/products/castrol_gtx_oil_1790940615535.jpg",
    brand: "Castrol",
  },
  {
    id: "havoline-formula-10w30",
    name: "Caltex Havoline Formula 10W-30",
    category: "Engine Oils",
    description:
      "Caltex Havoline Formula SAE 10W-30 API SP ILSAC GF-6A — 3 Liters. Upgraded Deposit Shield Technology. Saves maintenance cost with superior engine protection for modern vehicles.",
    image: "/images/products/havoline_formula_oil_1790940733506.jpg",
    brand: "Caltex",
  },
  {
    id: "shell-helix-hx3",
    name: "Shell Helix HX3 20W-50",
    category: "Engine Oils",
    description:
      "Shell Helix HX3 20W-50 Multi-Grade Motor Oil — 3 Liters. For gasoline and CNG engines. Active Cleansing Technology for high mileage performance. API SL/CF certified.",
    image: "/images/products/shell_helix_hx3_1790940755915.jpg",
    brand: "Shell",
  },
  {
    id: "guard-coolant",
    name: "Guard Extended Life Coolant Anti Freeze",
    category: "Coolants",
    description:
      "Guard Extended Life Coolant Anti Freeze — 1.0 Liter. Prevents engine overheating, anti freezing, coolant corrosion inhibitor. Manufactured according to OEM standards. For all vehicle types.",
    image: "/images/products/guard_coolant_1790941359860.jpg",
    brand: "Guard",
  },
  {
    id: "zic-x7-fe",
    name: "ZIC X7 FE 5W-20 Fuel Economy Synthetic Oil",
    category: "Engine Oils",
    description:
      "ZIC X7 FE 5W-20 Fuel Economy Fully Synthetic Engine Oil — 3 Liters. By SK enmove with VHVI TECH. SQ GF-7 certified. Maximum fuel savings with superior engine protection.",
    image: "/images/products/zic_x7_fe_1790941379546.jpg",
    brand: "ZIC",
  },
  {
    id: "sameili-jello-coolice",
    name: "Sameili Jello Cool Ice Air Freshener",
    category: "Accessories",
    description:
      "Sameili Jello Cool Ice Air Freshener — Natural Fresh with Natural Essential Oils. Refreshing cool ice scent in a premium silver tin jar. Long-lasting fragrance for car and home.",
    image: "/images/products/sameili_jello_coolice_1790941402856.jpg",
    brand: "Sameili",
  },
  {
    id: "choke-carb-cleaner",
    name: "Quick Formula Choke & Carb Cleaner",
    category: "Car Care",
    description:
      "Quick Formula Jet Spray Choke & Carb Cleaner — 300ml by HISCO. Cleans quickly and easily, removes dirt and dust from carburetors, choke valves, and throttle bodies. Powerful cleaning spray.",
    image: "/images/products/choke_carb_cleaner_1790941489498.jpg",
    brand: "Quick Formula",
  },
  {
    id: "carrera-plastic-restorer",
    name: "Carrera Plastic Restorer",
    category: "Car Care",
    description:
      "Carrera Auto Care Plastic Restorer — 200ml. Restores faded plastic back to black. Ideal for dashboards, bumpers, trims and other exterior and interior plastic parts.",
    image: "/images/products/carrera_plastic_restorer.jpg",
    brand: "Carrera",
  },
  {
    id: "carrera-spray-wax",
    name: "Carrera Spray Wax",
    category: "Car Care",
    description:
      "Carrera Auto Care Spray Wax — 500ml. High gloss, brilliant shine with hydrophobic water-repelling finish and UV protection for your car's paint.",
    image: "/images/products/carrera_spray_wax.jpg",
    brand: "Carrera",
  },
  {
    id: "carrera-radiator-coolant",
    name: "Carrera Radiator Coolant (Green)",
    category: "Coolants",
    description:
      "Carrera Auto Care Radiator Coolant — Green, 1 Liter. Over heat preventive with Japanese technology. Anti-rust, anti-corrosive and anti-foaming agents. Ready to use — do not add water.",
    image: "/images/products/carrera_radiator_coolant.jpg",
    brand: "Carrera",
  },
  {
    id: "leppon-oil-filter",
    name: "Leppon Oil Filter",
    category: "Filters",
    description:
      "Leppon Oil Filter — O.E.S replacement part. Built for high quality, safety and reliability. Keeps engine oil clean for smoother performance and longer engine life.",
    image: "/images/products/leppon_oil_filter.jpg",
    brand: "Leppon",
  },
  {
    id: "led-headlight-m18-pro",
    name: "LED Headlight M18 Pro",
    category: "Accessories",
    description:
      "LED Headlight M18 Pro bulbs — Model 180000. Super bright LED headlight upgrade for clearer night driving with longer beam range. Available in different fittings — ask on WhatsApp for your car.",
    image: "/images/products/led_headlight_m18.jpg",
  },
  {
    id: "battery-terminals",
    name: "Battery Terminal Clamps (Pair)",
    category: "Accessories",
    description:
      "Car battery terminal clamps — set of positive (red) and negative (black) with protective covers. Strong metal clamps with bolts for a secure, tight battery connection.",
    image: "/images/products/battery_terminals.jpg",
  },
  {
    id: "door-buffer",
    name: "Car Door Buffer Strips",
    category: "Accessories",
    description:
      "Red rubber door buffer / door edge guard strips — 25cm size. Protects your car doors from scratches and dents. Easy to fit on cars and vans.",
    image: "/images/products/door_buffer.jpg",
  },
  {
    id: "honda-sp-0w20",
    name: "Honda Genuine Engine Oil SP 0W-20",
    category: "Engine Oils",
    description:
      "Honda Genuine Engine Oil SP 0W-20 Fully Synthetic — 3.7 Liters. ILSAC GF-6 certified. P/N 08234-P99-A8PK1. Manufactured by Idemitsu Lube Pakistan. Ideal for modern Honda vehicles.",
    image: "/images/products/honda_sp_0w20.jpg",
    brand: "Honda",
  },
  {
    id: "carrera-radiator-coolant-blue",
    name: "Carrera Radiator Coolant (Blue)",
    category: "Coolants",
    description:
      "Carrera Auto Care Radiator Coolant — Blue, 1 Liter. Over heat preventive with Japanese technology. Anti-rust, anti-corrosive and anti-foaming agents. Ready to use — do not add water.",
    image: "/images/products/carrera_coolant_blue.jpg",
    brand: "Carrera",
  },
  {
    id: "tradehub-car-charger-cr2",
    name: "Trade Hub 45W Car Charger CR-2",
    category: "Accessories",
    description:
      "Trade Hub CR-2 Car Charger — 45W super fast charging with PD + QC3.0 support. Up to 65% faster charging speed. Safe and quick charging for all mobile phones.",
    image: "/images/products/tradehub_car_charger.jpg",
    brand: "Trade Hub",
  },
  {
    id: "lazer-key-case-haval",
    name: "Lazer Premium Car Key Case (Haval)",
    category: "Accessories",
    description:
      "Lazer Premium Car Key Case for Haval — protective smart key cover with matching strap and Haval keychain. Stylish look with red and blue stripes. Ask on WhatsApp for other car models.",
    image: "/images/products/lazer_key_case.jpg",
    brand: "Lazer",
  },
  {
    id: "key-case-toyota",
    name: "Premium Car Key Case (Toyota)",
    category: "Accessories",
    description:
      "Premium Car Key Case for Toyota — smart key cover with Toyota keychain strap and screwdriver included. Protects your key from scratches and drops.",
    image: "/images/products/toyota_key_case.jpg",
  },
  {
    id: "flamingo-radiator-flush",
    name: "Flamingo Radiator Flush F037",
    category: "Coolants",
    description:
      "Flamingo Radiator Flush F037 — 354ml. Cleans rust, scale and dirt from the radiator and cooling system for better cooling and engine temperature control. Use before adding fresh coolant.",
    image: "/images/products/flamingo_radiator_flush.jpg",
    brand: "Flamingo",
  },
  {
    id: "klenzer-cata-wash",
    name: "Klenzer Cata Wash Catalytic Converter Cleaner",
    category: "Car Care",
    description:
      "Klenzer Cata Wash by JCI — 5 in 1 catalytic converter cleaner, gel formula. Improves fuel economy, reduces emissions, restores performance. Safe for honeycomb, platinum, palladium and rhodium.",
    image: "/images/products/klenzer_cata_wash.jpg",
    brand: "Klenzer",
  },
  {
    id: "ardeca-safety-fuel-diesel",
    name: "Ardeca Safety Fuel Diesel Additive",
    category: "Car Care",
    description:
      "Ardeca Safety Fuel 3 in 1 Diesel Additive. Reduces fuel consumption and CO2, cleans engine and DPF, lubricates, removes water and works as an antioxidant.",
    image: "/images/products/ardeca_safety_fuel.jpg",
    brand: "Ardeca",
  },
  {
    id: "tradehub-typec-cable",
    name: "Trade Hub 45W Type-C Data Cable",
    category: "Accessories",
    description:
      "Trade Hub 45W USB to Type-C cable — 1000mm (1 meter). Quick charge and fast data transfer. Up to 65% faster charging. Works with all Type-C phones.",
    image: "/images/products/tradehub_typec_cable.jpg",
    brand: "Trade Hub",
  },
  {
    id: "solar-couple-dashboard",
    name: "Solar Couple Dashboard Decoration",
    category: "Accessories",
    description:
      "Cute couple figurine car dashboard decoration with solar-powered base. Adds a lovely touch to your car interior — no batteries needed.",
    image: "/images/products/solar_couple_dashboard.jpg",
  },
  {
    id: "flamingo-fuel-injector-cleaner",
    name: "Flamingo Fuel Injector Cleaner F053",
    category: "Car Care",
    description:
      "Flamingo Fuel Injector Cleaner F053 — 354ml. Cleans fuel injectors and removes carbon deposits for smoother engine performance, better pickup and improved fuel economy.",
    image: "/images/products/flamingo_injector_cleaner.jpg",
    brand: "Flamingo",
  },
  {
    id: "ardeca-safety-fuel-petrol",
    name: "Ardeca Safety Fuel Petrol Additive",
    category: "Car Care",
    description:
      "Ardeca Safety Fuel 3 in 1 Benzine / Petrol Additive. Reduces fuel consumption and CO2, cleans engine, lubricates, removes water and works as an antioxidant. For petrol engines.",
    image: "/images/products/ardeca_safety_fuel_petrol.jpg",
    brand: "Ardeca",
  },
  {
    id: "sidex-dashboard-cleaner",
    name: "Sidex Dashboard Cleaner (Strawberry)",
    category: "Car Care",
    description:
      "Sidex Gold Class Dashboard Cleaner with Disinfectant — Strawberry fragrance. Cleans and shines dashboard and interior plastic while leaving a fresh smell. Easy spray bottle.",
    image: "/images/products/sidex_dashboard_cleaner.jpg",
    brand: "Sidex",
  },
  {
    id: "mm-power-led-headlight",
    name: "MM Power LED Headlight 3000W",
    category: "Accessories",
    description:
      "MM Power LED Headlight — 3000 Watt, 30000 Lumens. High power super focusing LED for bright, long-range night driving. Available in different fittings — ask on WhatsApp for your car.",
    image: "/images/products/mm_power_headlight.jpg",
    brand: "MM Power",
  },
  {
    id: "solar-lion-dashboard",
    name: "Solar Chrome Lion Dashboard Decoration",
    category: "Accessories",
    description:
      "Chrome lion statue car dashboard decoration with solar-powered base. Shiny premium finish that gives your car interior a bold look — no batteries needed.",
    image: "/images/products/solar_lion_dashboard.jpg",
  },
  {
    id: "flamingo-motor-flush",
    name: "Flamingo Motor Flush",
    category: "Car Care",
    description:
      "Flamingo Motor Flush. Cleans engines in 5 minutes. Removes gums, varnishes and sludge from internal parts.",
    image: "/images/products/flamingo_motor_flush.jpg",
    brand: "Flamingo",
  },
  {
    id: "pink-motorcycle-model",
    name: "Pink Motorcycle Model Decoration",
    category: "Accessories",
    description:
      "Swinging motorcycle small pink display model. Perfect for your car dashboard or desk decoration.",
    image: "/images/products/pink_motorcycle_model.jpg",
  },
  {
    id: "harris-tyreglow-polish",
    name: "Harris TyreGlow Premium Tyre Polish",
    category: "Car Care",
    description:
      "Harris TyreGlow Premium Tyre Polish spray. Long lasting wet-look tyre shine and protection. High gloss finish.",
    image: "/images/products/harris_tyreglow_polish.jpg",
    brand: "Harris",
  },
  {
    id: "flamingo-shines-protects",
    name: "Flamingo Shines & Protects",
    category: "Car Care",
    description:
      "Flamingo Shines & Protects F025. Protectant for leather, vinyl, rubber and plastic. Restores luster leaving a deep gloss shine. Ideal for dashboards and tyres.",
    image: "/images/products/flamingo_shines_protects.jpg",
    brand: "Flamingo",
  },
  {
    id: "havoline-motor-oil-10w40",
    name: "Caltex Havoline Motor Oil Extra 10W-40",
    category: "Engine Oils",
    description:
      "Caltex Havoline Motor Oil Extra 10W-40 API SL. Features Deposit Shield Technology. Good wear and corrosion protection.",
    image: "/images/products/havoline_motor_oil_10w40.jpg",
    brand: "Caltex",
  },
  {
    id: "shell-helix-hx7-plus-5w30",
    name: "Shell Helix HX7 Plus 5W-30 (4L)",
    category: "Engine Oils",
    description:
      "Shell Helix HX7 Plus 5W-30 — 4 Liters. Fully synthetic motor oil for gasoline engines with Enhanced Efficiency and Anti-Friction technology. API SP, ACEA A3/B4.",
    image: "/images/products/shell_helix_hx7_plus.jpg",
    brand: "Shell",
  },
  {
    id: "formula1-scratch-out",
    name: "Formula 1 Scratch Out Remover",
    category: "Car Care",
    description:
      "Formula 1 Scratch Out — Fine Scratch + Swirl Remover, 207ml. Removes light scratches and swirl marks, restores color and gloss. Clearcoat safe.",
    image: "/images/products/formula1_scratch_out.jpg",
    brand: "Formula 1",
  },
  {
    id: "formula1-protectant-spray",
    name: "Formula 1 Protectant Spray (Citrus)",
    category: "Car Care",
    description:
      "Formula 1 Protectant Spray — Citrus fragrance, 295ml. Shines, protects and freshens dashboard, vinyl, rubber and plastic surfaces.",
    image: "/images/products/formula1_protectant_spray.jpg",
    brand: "Formula 1",
  },
  {
    id: "harris-tyreglow-dressing",
    name: "Harris TyreGlow Premium Tyre Dressing 315ml",
    category: "Car Care",
    description:
      "Harris TyreGlow Premium Tyre Dressing — 315ml trigger spray. Long lasting shine and protection for a high gloss, wet-look tyre finish.",
    image: "/images/products/harris_tyreglow_dressing.jpg",
    brand: "Harris",
  },
  {
    id: "havoline-pro-ds-5w40",
    name: "Caltex Havoline Pro DS ECO 5W-40 (4L)",
    category: "Engine Oils",
    description:
      "Caltex Havoline Pro DS Fully Synthetic ECO 5W-40 — 4 Liters, API SQ. Advanced protection with Deposit Shield Technology.",
    image: "/images/products/havoline_prods_5w40.jpg",
    brand: "Caltex",
  },
  {
    id: "flamingo-power-steering-fluid",
    name: "Flamingo Power Steering Fluid F184 (1L)",
    category: "Lubricants",
    description:
      "Flamingo Power Steering Fluid F184 — 1 Liter. Protects against wear, helps stop squeals and works with all power steering units.",
    image: "/images/products/flamingo_power_steering.jpg",
    brand: "Flamingo",
  },
  {
    id: "kangaroo-cosmic-leather-tire-wax",
    name: "Kangaroo Cosmic Leather & Tire Wax (Orange)",
    category: "Car Care",
    description:
      "Kangaroo Cosmic Leather & Tire Wax — Orange fragrance, 500ml spray. Dashboard polish for leather, vinyl, rubber and plastic. Excellent gloss, restores and refreshes interiors and tyres.",
    image: "/images/products/kangaroo_cosmic_wax.jpg",
    brand: "Kangaroo",
  },
  {
    id: "flamingo-wash-wax",
    name: "Flamingo Wash Wax F351 (500ml)",
    category: "Car Care",
    description:
      "Flamingo Wash Wax F351 — 500ml. Extreme shine wash & wax with advanced formula. Cleans your car and leaves a glossy wax finish in one step.",
    image: "/images/products/flamingo_wash_wax.jpg",
    brand: "Flamingo",
  },
  {
    id: "kixx-pao-5w40",
    name: "Kixx PAO 5W-40 Fully Synthetic (4L)",
    category: "Engine Oils",
    description:
      "GS Kixx PAO 5W-40 — 4 Liters, fully synthetic premium gasoline engine oil with Dual Plus Technology. API SN, ACEA A3/B4-12, MB 229.3, VW 502.00/505.00.",
    image: "/images/products/kixx_pao_5w40.jpg",
    brand: "Kixx",
  },
  {
    id: "wd40-multi-use",
    name: "WD-40 Multi-Use Product",
    category: "Lubricants",
    description:
      "WD-40 Multi-Use Product spray. Stops squeaks, drives out moisture, cleans and protects, loosens rusted parts and frees sticky mechanisms. Comes with straw for precise spraying.",
    image: "/images/products/wd40_multi_use.jpg",
    brand: "WD-40",
  },
  {
    id: "md-orange-cleaner",
    name: "Mark & Dior Orange Cleaner Degreaser (500ml)",
    category: "Car Care",
    description:
      "Mark & Dior Orange Cleaner — 500ml multi-purpose degreaser, streak free. Tough on grease and grime, leaves no oil residue or film. Safe for all finishes.",
    image: "/images/products/md_orange_cleaner.jpg",
    brand: "Mark & Dior",
  },
  {
    id: "dayzel-windshield-washer",
    name: "Dayzel Windshield Washer DZ08 (500ml)",
    category: "Car Care",
    description:
      "Dayzel Windshield Washer DZ08 — 500ml. Cleans and protects the windshield, and protects and lubricates wiper rubber.",
    image: "/images/products/dayzel_windshield_washer.jpg",
    brand: "Dayzel",
  },
  {
    id: "carrera-velvet-shampoo",
    name: "Carrera Velvet Car Shampoo (500ml)",
    category: "Car Care",
    description:
      "Carrera Auto Care Velvet Shampoo — 500ml high gloss car shampoo. Cleans dirt, creates rich suds and protects car paint. Safe for paint protection film, glass coating and graphene coating.",
    image: "/images/products/carrera_velvet_shampoo.jpg",
    brand: "Carrera",
  },
  {
    id: "soil-super-gt-4l",
    name: "S-Oil Super GT Motor Oil (4L)",
    category: "Engine Oils",
    description:
      "S-Oil Super GT Motor Oil — 4 Liters, semi synthetic. Formulated in Korea.",
    image: "/images/products/soil_super_gt.jpg",
    brand: "S-Oil",
  },
  {
    id: "carrera-rust-remover",
    name: "Carrera Rust Remover (500ml)",
    category: "Car Care",
    description:
      "Carrera Auto Care Rust Remover — 500ml. Removes tough rust stains within minutes.",
    image: "/images/products/carrera_rust_remover.jpg",
    brand: "Carrera",
  },
  {
    id: "flamingo-wash-wax-2l",
    name: "Flamingo Wash Wax F333 (2L)",
    category: "Car Care",
    description:
      "Flamingo Wash Wax F333 — 2 Liters. Ultra shine car wash & wax with advanced formula. Cleans and waxes your car in one step for a glossy finish.",
    image: "/images/products/flamingo_wash_wax_2l.jpg",
    brand: "Flamingo",
  },
  {
    id: "harris-protectant-jasmine",
    name: "Harris Protectant Spray (Jasmine) 315ml",
    category: "Car Care",
    description:
      "Harris Protectant — Shines & Protects, Jasmine fragrance, 315ml trigger spray. For use on automobile interior, household furniture and appliances.",
    image: "/images/products/harris_protectant_jasmine.jpg",
    brand: "Harris",
  },
  {
    id: "sidex-car-shampoo",
    name: "Sidex Extra Foaming Car Shampoo",
    category: "Car Care",
    description:
      "Sidex Extra Foaming Car Shampoo. Removes dirt easily and effectively, and helps reduce the risk of scratches. For best results use a foaming machine.",
    image: "/images/products/sidex_car_shampoo.jpg",
    brand: "Sidex",
  },
  {
    id: "harris-rtv-silicone-sealant",
    name: "Harris RTV Silicone Sealant (310ml)",
    category: "Car Care",
    description:
      "Harris RTV Silicone Sealant — 310ml cartridge. High modulus silicone sealant for sealing and gasketing applications.",
    image: "/images/products/harris_rtv_silicone.jpg",
    brand: "Harris",
  },
  {
    id: "7cf-foaming-tire-rejuvenator",
    name: "7CF Foaming Tire Rejuvenator",
    category: "Car Care",
    description:
      "7CF Foaming Tire Rejuvenator — rich foam spray that cleans, protects and refreshes tires and permeates for a deep clean.",
    image: "/images/products/7cf_tire_rejuvenator.jpg",
    brand: "7CF",
  },
];

export const services: Service[] = [
  {
    id: "spare-parts",
    title: "Auto Spare Parts",
    description: "Automotive spare parts for different vehicle needs.",
    icon: "⚙️",
  },
  {
    id: "engine-oils",
    title: "Engine Oils",
    description: "Engine oils and lubrication products.",
    icon: "🛢️",
  },
  {
    id: "filters",
    title: "Filters & Maintenance Products",
    description: "Essential vehicle maintenance products.",
    icon: "🔧",
  },
  {
    id: "accessories",
    title: "Automotive Accessories",
    description: "Useful automotive accessories and related products.",
    icon: "🚗",
  },
];

export const whyChooseUs = [
  {
    title: "Quality Focus",
    description: "Carefully selected automotive products for your vehicle needs.",
    icon: "shield",
  },
  {
    title: "Helpful Customer Service",
    description: "Professional assistance to help you find the right product.",
    icon: "users",
  },
  {
    title: "Convenient Location",
    description: "Easy access from Kala Khatai Road and surrounding Shahdara area.",
    icon: "mapPin",
  },
  {
    title: "Easy WhatsApp Ordering",
    description: "Quick product inquiries and ordering through WhatsApp.",
    icon: "messageCircle",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];
