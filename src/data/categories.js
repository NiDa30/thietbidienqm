// Category Data Structure
export const categories = {
  // Level 1 Categories
  level1: [
    { id: "den-led-bulb", name: "ĐÈN LED BULB" },
    { id: "den-led-am-tran", name: "ĐÈN LED ÂM TRẦN" },
    { id: "den-led-op-tran", name: "ĐÈN LED ỐP TRẦN" },
    { id: "den-trang-tri", name: "ĐÈN TRANG TRÍ" },
    { id: "den-led-ban-nguyet", name: "ĐÈN LED BÁN NGUYỆT" },
    { id: "den-pha", name: "ĐÈN PHA" },
    { id: "den-led-san-vuon", name: "ĐÈN LED SÂN VƯỜN" },
    { id: "den-led-tuyp", name: "ĐÈN LED TUÝP" },
    { id: "den-led-nha-xuong", name: "ĐÈN LED NHÀ XƯỞNG" },
    { id: "den-exit-khan-cap", name: "ĐÈN EXIT và KHẨN CẤP" },
    { id: "den-led-day", name: "ĐÈN LED DÂY" },
    { id: "den-led-thanh-ray", name: "ĐÈN LED THANH RAY" },
    { id: "den-duong-led", name: "ĐÈN ĐƯỜNG LED" },
    { id: "den-chong-chay-no", name: "ĐÈN CHỐNG CHÁY NỔ" },
    { id: "den-led-panel", name: "ĐÈN LED PANEL" },
    { id: "den-pha-led", name: "ĐÈN PHA LED" },
    { id: "bo-mang-den-led", name: "BỘ MÁNG ĐÈN LED" },
    { id: "quat", name: "QUẠT" },
    { id: "may-bom-nuoc", name: "Máy bơm nước - Quạt - Bếp - Máy Sấy" },
    { id: "phu-kien", name: "PHỤ KIỆN" },
    { id: "thiet-bi-dien", name: "THIẾT BỊ ĐIỆN" },
    { id: "day-cap-dien", name: "DÂY CÁP ĐIỆN" },
    { id: "ong-luon-day-dien", name: "Ông luồn dây điện và phụ kiện" },
    { id: "tu-dien-phu-kien", name: "Tủ Điện Và Phụ Kiện" },
    { id: "phich-cam-o-cam", name: "Phích Cắm - Ổ Cắm Công Nghiệp" },
    { id: "thiet-bi-dong-cat", name: "Thiết Bị Đóng Cắt" },
    { id: "cong-tac-o-cam", name: "Công tắc ổ cắm" },
  ],

  // Level 2 Categories (by ENA and TLC brands)
  level2: {
    ena: [
      {
        id: "den-duong-led-ena",
        name: "Đèn đường Led ENA",
        parent: "den-duong-led",
      },
      { id: "den-pha-led-ena", name: "Đèn pha Led ENA", parent: "den-pha-led" },
      {
        id: "den-led-panel-ena",
        name: "Đèn led Panel ENA",
        parent: "den-led-panel",
      },
      {
        id: "den-led-thanh-ray-ena",
        name: "Đèn Led Thanh Ray ENA",
        parent: "den-led-thanh-ray",
      },
      {
        id: "den-led-nha-xuong-ena",
        name: "Đèn Led nhà xưởng ENA",
        parent: "den-led-nha-xuong",
      },
      {
        id: "den-led-tuyp-ena",
        name: "Đèn Led tuýp ENA",
        parent: "den-led-tuyp",
      },
      {
        id: "den-led-ban-nguyet-ena",
        name: "Đèn Led Bán Nguyệt ENA",
        parent: "den-led-ban-nguyet",
      },
      {
        id: "den-led-op-tran-ena",
        name: "Đèn Led ốp trần ENA",
        parent: "den-led-op-tran",
      },
      {
        id: "den-led-am-tran-ena",
        name: "Đèn Led âm trần ENA",
        parent: "den-led-am-tran",
      },
    ],
    tlc: [
      {
        id: "den-led-buld-tlc",
        name: "Đèn Led buld TLC",
        parent: "den-led-bulb",
      },
      {
        id: "den-exit-su-co-tlc",
        name: "Đèn exit, sự cố TLC",
        parent: "den-exit-khan-cap",
      },
      {
        id: "den-duong-led-tlc",
        name: "Đèn đường Led TLC",
        parent: "den-duong-led",
      },
      {
        id: "den-led-nha-xuong-tlc",
        name: "Đèn Led nhà xưởng TLC",
        parent: "den-led-nha-xuong",
      },
      { id: "den-pha-led-tlc", name: "Đèn pha Led TLC", parent: "den-pha-led" },
      { id: "den-led-day-tlc", name: "Đèn Led dây TLC", parent: "den-led-day" },
      {
        id: "den-led-tuyp-tlc",
        name: "Đèn Led tuýp TLC",
        parent: "den-led-tuyp",
      },
      {
        id: "den-led-panel-tam-tlc",
        name: "Đèn Led panel tấm TLC",
        parent: "den-led-panel",
      },
      {
        id: "den-led-op-tran-tlc",
        name: "Đèn Led ốp trần TLC",
        parent: "den-led-op-tran",
      },
      {
        id: "den-led-am-tran-tlc",
        name: "Đèn Led âm trần TLC",
        parent: "den-led-am-tran",
      },
      { id: "den-led-day-12v", name: "Đèn Led Dây 12V", parent: "den-led-day" },
    ],
  },

  // Level 3 Categories (Decorative lights)
  level3: {
    decorative: [
      {
        id: "den-chum-quat-tran",
        name: "Đèn Chùm Quạt Trần",
        parent: "den-trang-tri",
      },
      {
        id: "den-chum-nghe-thuat",
        name: "Đèn Chùm Nghệ Thuật",
        parent: "den-trang-tri",
      },
      {
        id: "den-chum-hien-dai",
        name: "Đèn Chùm Hiện Đại",
        parent: "den-trang-tri",
      },
      {
        id: "den-chum-co-dien",
        name: "Đèn Chùm Cổ Điển - Châu Âu",
        parent: "den-trang-tri",
      },
      {
        id: "den-chum-pha-le-nen",
        name: "Đèn Chùm Pha Lê Nến",
        parent: "den-trang-tri",
      },
      { id: "den-chum-dong", name: "Đèn Chùm Đồng", parent: "den-trang-tri" },
      {
        id: "den-chum-pha-le",
        name: "Đèn Chùm Pha Lê",
        parent: "den-trang-tri",
      },
    ],
    downlight: [
      {
        id: "dong-den-downlight",
        name: "Dòng đèn downlight",
        parent: "den-led-am-tran",
      },
      {
        id: "dong-bang-dieu-khien",
        name: "Dòng bảng điều khiển",
        parent: "den-led-am-tran",
      },
    ],
    opTran: [
      { id: "sieu-mong", name: "Siêu mỏng", parent: "den-led-op-tran" },
      {
        id: "den-op-ban-cong",
        name: "Đèn Ốp Ban Công - Hành Lang",
        parent: "den-led-op-tran",
      },
      {
        id: "den-op-banh-tieu",
        name: "Đèn Ốp Trần Bánh Tiêu",
        parent: "den-led-op-tran",
      },
      {
        id: "den-op-tran-go",
        name: "Đèn Ốp Trần Gỗ",
        parent: "den-led-op-tran",
      },
      {
        id: "den-op-kieu-han",
        name: "Đèn Ốp Trần Kiểu Hàn Quốc",
        parent: "den-led-op-tran",
      },
      {
        id: "den-mam-hien-dai",
        name: "Đèn Mâm Hiện Đại",
        parent: "den-led-op-tran",
      },
      {
        id: "den-mam-led-vuong",
        name: "Đèn Mâm LED Vuông",
        parent: "den-led-op-tran",
      },
      {
        id: "den-mam-pha-le",
        name: "Đèn Mâm Áp Trần Pha Lê",
        parent: "den-led-op-tran",
      },
      {
        id: "den-mam-led-tron",
        name: "Đèn Mâm LED Tròn",
        parent: "den-led-op-tran",
      },
      {
        id: "den-op-tran-dong",
        name: "Đèn Ốp Trần Đồng",
        parent: "den-led-op-tran",
      },
    ],
    quat: [{ id: "quat-hop-senko", name: "Quạt hộp Senko", parent: "quat" }],
  },

  // Brands
  brands: [
    { id: "ena-vietnam", name: "ENA Vietnam" },
    { id: "tlc", name: "TLC" },
    { id: "sao-chom", name: "sao chổi" },
    { id: "hufa", name: "hufa" },
    { id: "senko", name: "Senko" },
    { id: "hai-chi", name: "Hải Chi" },
    { id: "hawin", name: "Hawin" },
    { id: "chau-a", name: "Châu Á" },
    { id: "vinaled", name: "Vinaled" },
    { id: "osram", name: "Osram" },
    { id: "dien-quang", name: "Điện Quang" },
    { id: "su-nhay-ben", name: "sự nhạy bén" },
    { id: "elink", name: "Elink" },
    { id: "khaphaco", name: "Khaphaco" },
    { id: "opple", name: "Opple" },
    { id: "rang-dong", name: "Rạng đông" },
    { id: "kosoom", name: "Kosoom" },
    { id: "duhal", name: "Duhal" },
    { id: "anfaco", name: "anfaco" },
  ],
};

// Helper function to get children categories
export const getCategoryChildren = (parentId, level = 2) => {
  if (level === 2) {
    const allLevel2 = [...categories.level2.ena, ...categories.level2.tlc];
    return allLevel2.filter((cat) => cat.parent === parentId);
  }

  if (level === 3) {
    const allLevel3 = [
      ...categories.level3.decorative,
      ...categories.level3.downlight,
      ...categories.level3.opTran,
      ...categories.level3.quat,
    ];
    return allLevel3.filter((cat) => cat.parent === parentId);
  }

  return [];
};

// Helper function to get parent category
export const getParentCategory = (categoryId) => {
  const allLevel2 = [...categories.level2.ena, ...categories.level2.tlc];
  const allLevel3 = [
    ...categories.level3.decorative,
    ...categories.level3.downlight,
    ...categories.level3.opTran,
    ...categories.level3.quat,
  ];

  const level2Cat = allLevel2.find((cat) => cat.id === categoryId);
  if (level2Cat) {
    return categories.level1.find((cat) => cat.id === level2Cat.parent);
  }

  const level3Cat = allLevel3.find((cat) => cat.id === categoryId);
  if (level3Cat) {
    return categories.level1.find((cat) => cat.id === level3Cat.parent);
  }

  return null;
};

// Helper to build breadcrumb
export const getBreadcrumb = (categoryId) => {
  const breadcrumb = [];

  // Find in level 1
  const level1Cat = categories.level1.find((cat) => cat.id === categoryId);
  if (level1Cat) {
    breadcrumb.push(level1Cat);
    return breadcrumb;
  }

  // Find in level 2
  const allLevel2 = [...categories.level2.ena, ...categories.level2.tlc];
  const level2Cat = allLevel2.find((cat) => cat.id === categoryId);
  if (level2Cat) {
    const parent = categories.level1.find((cat) => cat.id === level2Cat.parent);
    if (parent) breadcrumb.push(parent);
    breadcrumb.push(level2Cat);
    return breadcrumb;
  }

  // Find in level 3
  const allLevel3 = [
    ...categories.level3.decorative,
    ...categories.level3.downlight,
    ...categories.level3.opTran,
    ...categories.level3.quat,
  ];
  const level3Cat = allLevel3.find((cat) => cat.id === categoryId);
  if (level3Cat) {
    const parent = categories.level1.find((cat) => cat.id === level3Cat.parent);
    if (parent) breadcrumb.push(parent);
    breadcrumb.push(level3Cat);
    return breadcrumb;
  }

  return breadcrumb;
};
