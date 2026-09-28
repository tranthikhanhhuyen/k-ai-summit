const fs = require('fs');

function addLogisticsToLocale(file, data) {
  const content = JSON.parse(fs.readFileSync(file, 'utf8'));
  content.logistics = data;
  fs.writeFileSync(file, JSON.stringify(content, null, 2), 'utf8');
}

const enData = {
  "sectionLabel": "On-Site Logistics",
  "title": "SIHUB Saigon Innovation Hub",
  "subtitle": "Hosted in Ho Chi Minh City's flagship technology innovation hub. High-density meeting booths and full delegate hospitality.",
  "badge": {
    "prefix": "Complimentary Grab codes & ",
    "highlight": "dining vouchers",
    "suffix": " for all attendees"
  },
  "card1": {
    "badge": "SIHUB Facility • 2nd Floor",
    "title": "Central Innovation Hub",
    "desc": "273 Dien Bien Phu, Ward 7, District 3, Ho Chi Minh City. Accessible central business corridor with reserved delegate parking."
  },
  "card2": {
    "badge": "Keynote & Tech Showcase",
    "title": "Keynote Stage & Pitching",
    "desc": "State-of-the-art audiovisual facilities for company demonstrations, bilingual policy remarks, and commercial partnership signings."
  },
  "card3": {
    "badge": "Private 1-on-1 Booths",
    "title": "1:1 Consultation Stations",
    "desc": "Private partitioned consultation booths equipped with dedicated translators, digital presentation monitors, and concierge support."
  },
  "card4": {
    "badge": "City Exploration",
    "title": "Ho Chi Minh City Tour",
    "desc": "Discover Saigon's most iconic landmarks, including Notre-Dame Cathedral, Ben Thanh Market, in this exciting city exploration."
  },
  "card5": {
    "badge": "Local Cuisine",
    "title": "Vietnamese Culinary Experience",
    "desc": "Embark on an authentic Vietnamese culinary experience with traditional recipes and extraordinary local flavors."
  },
  "card6": {
    "badge": "Accommodation",
    "title": "Hotel & Transfer Benefits",
    "desc": "Enjoy a comfortable stay and seamless transfers that save you time and keep you close to the main event venues."
  }
};

const viData = {
  "sectionLabel": "Hậu Cần & Địa Điểm",
  "title": "SIHUB Saigon Innovation Hub",
  "subtitle": "Tổ chức tại trung tâm đổi mới công nghệ hàng đầu của TP.HCM. Không gian họp tiêu chuẩn và tiện nghi đầy đủ cho đại biểu.",
  "badge": {
    "prefix": "Miễn phí mã Grab & ",
    "highlight": "voucher ăn uống",
    "suffix": " cho toàn bộ người tham dự"
  },
  "card1": {
    "badge": "Cơ sở SIHUB • Tầng 2",
    "title": "Trung tâm Đổi mới",
    "desc": "273 Điện Biên Phủ, Phường 7, Quận 3, TP.HCM. Tuyến đường trung tâm dễ dàng tiếp cận, có bãi đậu xe riêng."
  },
  "card2": {
    "badge": "Sân khấu Keynote",
    "title": "Sân khấu & Thuyết trình",
    "desc": "Hệ thống nghe nhìn hiện đại phục vụ trình diễn sản phẩm, phát biểu chính sách và ký kết hợp tác thương mại."
  },
  "card3": {
    "badge": "Phòng tư vấn 1:1",
    "title": "Khu vực tư vấn 1:1",
    "desc": "Phòng tư vấn riêng biệt được trang bị phiên dịch viên, màn hình trình chiếu kỹ thuật số và hỗ trợ tận tình."
  },
  "card4": {
    "badge": "Khám phá Thành phố",
    "title": "Tour tham quan TP. Hồ Chí Minh",
    "desc": "Khám phá các địa danh mang tính biểu tượng nhất của Sài Gòn, bao gồm Nhà thờ Đức Bà, Chợ Bến Thành, trong chuyến tham quan thú vị này."
  },
  "card5": {
    "badge": "Ẩm thực địa phương",
    "title": "Trải nghiệm Ẩm thực Việt Nam",
    "desc": "Bắt đầu trải nghiệm ẩm thực Việt Nam đích thực với các công thức truyền thống và hương vị địa phương tuyệt hảo."
  },
  "card6": {
    "badge": "Chỗ ở",
    "title": "Khách sạn & Dịch vụ Đưa đón",
    "desc": "Tận hưởng kỳ nghỉ thoải mái và dịch vụ đưa đón liền mạch, giúp bạn tiết kiệm thời gian và luôn ở gần địa điểm tổ chức sự kiện."
  }
};

const krData = {
  "sectionLabel": "현장 물류 및 장소",
  "title": "SIHUB 사이공 이노베이션 허브",
  "subtitle": "호치민 최고의 기술 혁신 허브에서 개최됩니다. 밀도 높은 미팅 부스와 풀 데리게이트 서비스가 제공됩니다.",
  "badge": {
    "prefix": "모든 참석자를 위한 무료 Grab 코드 및 ",
    "highlight": "식사 바우처",
    "suffix": " 제공"
  },
  "card1": {
    "badge": "SIHUB 시설 • 2층",
    "title": "중앙 이노베이션 허브",
    "desc": "호치민 시 3군 7동 디엔비엔푸 273. 접근성이 뛰어난 비즈니스 중심지이며 전용 주차장이 있습니다."
  },
  "card2": {
    "badge": "기조 연설 및 기술 쇼케이스",
    "title": "기조 연설 및 피칭 무대",
    "desc": "제품 시연, 정책 발표 및 상업 파트너십 서명을 위한 최첨단 시청각 시설."
  },
  "card3": {
    "badge": "비공개 1:1 부스",
    "title": "1:1 상담 스테이션",
    "desc": "전담 통역사, 디지털 프레젠테이션 모니터 및 컨시어지 지원을 갖춘 독립된 상담 부스."
  },
  "card4": {
    "badge": "도시 탐험",
    "title": "호치민 시티 투어",
    "desc": "이 흥미진진한 도시 탐험에서 노트르담 대성당, 벤탄 시장을 포함한 사이공의 가장 상징적인 랜드마크를 발견하십시오."
  },
  "card5": {
    "badge": "현지 요리",
    "title": "베트남 요리 경험",
    "desc": "전통적인 요리법과 특별한 현지 풍미를 통해 정통 베트남 요리를 경험해 보십시오."
  },
  "card6": {
    "badge": "숙박 시설",
    "title": "호텔 및 이동 혜택",
    "desc": "편안한 숙박과 원활한 이동 서비스를 통해 시간을 절약하고 주요 행사 장소와 가까운 곳에 머무르십시오."
  }
};

addLogisticsToLocale('src/i18n/locales/en.json', enData);
addLogisticsToLocale('src/i18n/locales/vi.json', viData);
addLogisticsToLocale('src/i18n/locales/kr.json', krData);

