export const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 39900,
    description:
      "มาพร้อมชิป A17 Pro และกล้องที่ทรงพลังที่สุด พร้อมความสามารถในการถ่ายภาพระดับโปรที่ไม่เคยมีมาก่อน ดีไซน์ไทเทเนียมแข็งแกร่งและเบา",
    image:
      "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone_15_pro.png",
    category: "มือถือ",
    stock: 15,
    features: [
      "ชิป A17 Pro",
      "กล้อง 48MP",
      "ชาร์จไร้สายเร็ว",
      "จอ ProMotion 120Hz",
    ],
  },
  {
    id: 2,
    name: "MacBook Air M3",
    price: 42900,
    description:
      "น้ำหนักเบา ประสิทธิภาพสูง ทำงานได้ทั้งวัน ไม่ต้องกังวลเรื่องแบตเตอรี่ หน้าจอ Liquid Retina สดใส",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    category: "คอมพิวเตอร์",
    stock: 8,
    features: ["ชิป M3", "RAM 8GB", "SSD 256GB", "แบตเตอรี่ 18 ชม."],
  },
  {
    id: 3,
    name: "AirPods Pro 2",
    price: 8990,
    description:
      "การตัดเสียงรบกวนระดับพรีเมี่ยม เสียงคมชัด ใส่สบาย มาพร้อมเคสชาร์จ MagSafe ใหม่",
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400",
    category: "หูฟัง",
    stock: 25,
    features: [
      "ANC ตัดเสียงรบกวน",
      "Transparency Mode",
      "ชาร์จไร้สาย",
      "กันน้ำ IPX4",
    ],
  },
  {
    id: 4,
    name: 'iPad Pro 12.9"',
    price: 45900,
    description:
      "จอภาพ Liquid Retina XDR ชิป M2 แรงสุด เหมาะสำหรับงานสร้างสรรค์และกราฟิกขั้นสูง",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    category: "แท็บเล็ต",
    stock: 12,
    features: [
      'จอ 12.9" XDR',
      "ชิป M2",
      "รองรับ Apple Pencil 2",
      "5G Cellular",
    ],
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 14900,
    description:
      "ติดตามสุขภาพ ฟิตเนส และการแจ้งเตือนต่างๆ ได้อย่างครบครัน พร้อมฟีเจอร์ Double Tap ใหม่",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400",
    category: "สมาร์ทวอทช์",
    stock: 20,
    features: [
      "GPS ในตัว",
      "วัดออกซิเจนในเลือด",
      "ECG คลื่นหัวใจ",
      "กันน้ำ 50m",
    ],
  },
  {
    id: 6,
    name: "Magic Keyboard",
    price: 3590,
    description:
      "คีย์บอร์ดไร้สาย ดีไซน์สวยงาม พิมพ์สบาย เชื่อมต่อได้หลายอุปกรณ์พร้อม Touch ID",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    category: "อุปกรณ์เสริม",
    stock: 30,
    features: [
      "Bluetooth",
      "แบตเตอรี่ 1 เดือน",
      "ชาร์จ USB-C",
      "ปุ่มกดนุ่ม Scissor",
    ],
  },
  // --- สินค้าใหม่ 4 ชิ้น ---
  {
    id: 7,
    name: "HomePod mini",
    price: 3890,
    description:
      "ลำโพงอัจฉริยะขนาดกะทัดรัด เสียงกระหึ่มรอบทิศทาง 360 องศา ควบคุมบ้านอัจฉริยะได้ง่ายๆ",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/homepod-mini-select-202210_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=K2c3bEwyaWVDeDZkdHpLbHkwcGVSdTdDVDVERHBLL2VtUTFvVE43TmZrSzc4eDJCaDRrRjRGRllyc0RvWW00Rk1LWlMyVmEreEd6UVBWaXRHdkpLMXRJWUFJQ0NMbUZLT01BeHpMbHhoWEV5eWpsNVpNNEJ0ZVQxNDYrZU9iQ2k", // Placeholder Image
    category: "เครื่องเสียง",
    stock: 40,
    features: [
      "เสียง 360 องศา",
      "Siri อัจฉริยะ",
      "Intercom",
      "เชื่อมต่อ Stereo Pair",
    ],
  },
  {
    id: 8,
    name: "Apple TV 4K",
    price: 5290,
    description:
      "เปลี่ยนทีวีธรรมดาให้เป็นสมาร์ททีวีระดับโปร รองรับภาพคมชัด 4K HDR และ Dolby Atmos",
    image:
      "https://www.apple.com/newsroom/images/product/tv/standard/4k_screen_and_appletv_big.jpg.large.jpg", // Placeholder Image
    category: "ความบันเทิง",
    stock: 10,
    features: ["ชิป A15 Bionic", "4K Dolby Vision", "รีโมท Siri", "Ethernet"],
  },
  {
    id: 9,
    name: "Mac Studio",
    price: 74900,
    description:
      "ขุมพลังตั้งโต๊ะขนาดกะทัดรัด สำหรับมืออาชีพด้านครีเอทีฟ ตัดต่อวิดีโอ 8K ได้สบาย",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-studio-select-202503?wid=892&hei=820&fmt=jpeg&qlt=90&.v=TFF4TlZ2eUF4VmJBcXdGL1JqakhPRVEwUzFPbFJqRzRRVjVKc0grVGRsSElMQ1AwaTZodXpycCtPYXhhMHkvenIrSFUvMWdNSysyUDNqT0tTaFQrRWZ3Zm9pd0s0WHcyVkEyOHdaWlN6ZWs", // Placeholder Image
    category: "คอมพิวเตอร์",
    stock: 3,
    features: ["ชิป M2 Max", "RAM 32GB", "พอร์ตเชื่อมต่อครบ", "รองรับ 5 จอภาพ"],
  },
  {
    id: 10,
    name: "AirTag (4 Pack)",
    price: 3390,
    description:
      "ติดตามของสำคัญของคุณได้ง่ายๆ ผ่านแอป Find My แบตเตอรี่ใช้งานได้นานกว่า 1 ปี",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-4pack-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1752532185667", // Placeholder Image
    category: "อุปกรณ์เสริม",
    stock: 50,
    features: [
      "Precision Finding",
      "ลำโพงในตัว",
      "กันน้ำ IP67",
      "แบตเตอรี่เปลี่ยนได้",
    ],
  },
];
