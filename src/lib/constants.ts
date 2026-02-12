import {
  ScanFace,
  Camera,
  Users,
  BookImage,
  FlaskConical,
  Heart,
  Download,
  UserPlus,
  Rocket,
} from "lucide-react";
import type {
  Feature,
  Step,
  Testimonial,
  FAQItem,
  NavLink,
  FooterLinkGroup,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "기능", href: "#features" },
  { label: "리뷰", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const FEATURES: Feature[] = [
  {
    icon: ScanFace,
    title: "AI 얼굴 비식별화",
    description:
      "모델 걱정은 그만하세요! 헤어 변경 없이 얼굴만 자연스럽게 변경합니다.",
    href: "/features/ai-face-anonymization",
  },
  {
    icon: Camera,
    title: "포트폴리오 관리",
    description:
      "시술 전후 사진을 체계적으로 관리하고 나만의 작품집을 만들어 보세요.",
    href: "/features/portfolio-management",
  },
  {
    icon: Users,
    title: "고객 관리",
    description:
      "고객별 시술 이력, 선호 스타일, 방문 기록을 한눈에 확인하세요.",
    href: "/features/customer-management",
  },
  {
    icon: BookImage,
    title: "나만의 시크릿 메모장",
    description:
      "고객별 시술 노하우와 메모를 나만 볼 수 있게 안전하게 기록하세요.",
    href: "/features/secret-notes",
  },
  {
    icon: FlaskConical,
    title: "시술 멀티 타이머",
    description:
      "여러 고객의 시술 시간을 동시에 관리하고 알림을 받으세요.",
    href: "/features/multi-timer",
  },
  {
    icon: Heart,
    title: "AI 인스타 캡션 작성",
    description:
      "시술 사진에 딱 맞는 인스타그램 캡션을 AI가 자동으로 작성해 줍니다.",
    href: "/features/ai-instagram-caption",
  },
];

export const STEPS: Step[] = [
  {
    number: 1,
    icon: Download,
    title: "앱 다운로드",
    description:
      "앱스토어 또는 구글플레이에서 헤어그래피를 다운로드하세요.",
  },
  {
    number: 2,
    icon: UserPlus,
    title: "프로필 설정",
    description:
      "디자이너 프로필을 작성하고 포트폴리오를 등록하세요.",
  },
  {
    number: 3,
    icon: Rocket,
    title: "바로 시작",
    description:
      "AI 분석, 고객 관리, 스타일북 등 모든 기능을 자유롭게 사용하세요.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "주니어 디자이너",
    role: "경력 3년차",
    quote:
      "AI가 인스타 업로드용 글이랑 해시태그를 자동으로 정리해주니까 진짜 편해요. 올릴 때마다 고민하던 시간이 줄어서 포폴 업로드를 훨씬 꾸준히 하게 됐어요.",
  },
  {
    name: "디자이너",
    role: "경력 7년차",
    quote:
      "고객별로 시술 히스토리랑 메모를 타임라인처럼 쌓아두니까 재방문 때 설명이 거의 필요 없네요. '그때 뭐 했지?'가 사라져서 상담이 훨씬 깔끔해졌어요.",
  },
  {
    name: "수석 디자이너",
    role: "경력 8년차",
    quote:
      "멀티 타이머 덕분에 여러 손님 동시 시술할 때도 각 타이밍을 따로 관리할 수 있어서 마음이 편해요. 방치 시간 놓칠 일이 줄고, 전체 동선이 훨씬 안정적으로 돌아갑니다.",
  },
  {
    name: "원장",
    role: "경력 15년차",
    quote:
      "AI 얼굴 비식별화 덕분에 모델 섭외나 초상권 걱정이 확 줄었어요. 손님한테도 '얼굴은 보호돼요'라고 안내하면 허락 받기가 훨씬 쉬워졌습니다.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "헤어그래피는 무료인가요?",
    answer:
      "출시 초기에는 AI 얼굴 비식별화 기능을 제외한 대부분의 기능을 무료로 제공합니다. 향후 서비스 운영 상황에 따라 일부 고급 기능은 구독(유료) 모델로 전환될 수 있으며, 변경이 있을 경우 앱 내 공지로 미리 안내드릴게요.",
  },
  {
    question: "어떤 기기에서 사용할 수 있나요?",
    answer:
      "헤어그래피는 iOS와 Android 모두 지원합니다. 다만 Android는 스토어 심사/배포 절차로 인해 현재는 APK 설치 링크를 별도로 안내드리고 있어요. 스토어 등록이 완료되면 정식 배포로 전환됩니다.",
  },
  {
    question: "고객 데이터는 안전한가요?",
    answer:
      "네. 헤어그래피는 고객 정보와 기록을 안전하게 보관하는 것을 최우선으로 설계했습니다. 데이터는 권한이 있는 사용자만 접근할 수 있도록 관리되며, 전송/저장 과정에서도 보안 기준을 적용해 보호하고 있어요. 또한 사용자가 원할 때는 내 기록을 내보내기(백업) 할 수 있는 구조로 운영합니다.",
  },
  {
    question: "AI 얼굴 비식별화 기능은 무엇인가요?",
    answer:
      "실제 고객의 시술 사진을 업로드하면 보통 20~50초 내에 헤어는 그대로 유지한 채 얼굴 영역만 자연스럽게 변경해주는 기능입니다. 고객이 사진 촬영/공유를 부담스러워하는 상황에서 거부감을 낮추고, 디자이너는 초상권 걱정 없이 작업 결과(헤어)를 포트폴리오로 활용할 수 있어요.",
  },
  {
    question: "AI 헤어 분석은 어떻게 작동하나요?",
    answer:
      "사진을 기반으로 AI가 스타일/시술 요소를 분석하고, 그 결과를 바탕으로 태그 추천, 인스타 업로드용 문장/해시태그 작성 등 작업을 도와줍니다. 분석 결과는 사용자가 최종적으로 선택/수정할 수 있어요.",
  },
  {
    question: "기존에 쓰던 고객 데이터를 옮길 수 있나요?",
    answer:
      "가능합니다. 인스타/엑셀 등에서 내보낸 파일을 기반으로 일괄 이전할 수 있고, 고객 목록은 사진 한 장으로 이름/인스타 ID/메모 등을 자동 정리해 앱에 넣을 수 있어요. 처음부터 하나씩 직접 입력하지 않아도 됩니다.",
  },
  {
    question: "살롱(매장) 단위로도 사용할 수 있나요?",
    answer:
      "헤어그래피는 기본적으로 디자이너 개인을 위한 앱입니다. 원장님이 개인적으로 사용하는 건 가능하지만, 현재는 살롱 내 디자이너끼리 데이터 연동/공유 기능은 제공하지 않습니다. 다만 추후 유료 플랜이 도입되면, 살롱 단위로 여러 명이 함께 사용하는 Team 플랜(할인 적용) 형태를 검토할 예정입니다.",
  },
  {
    question: "서비스가 종료되면 제 기록은 어떻게 되나요?",
    answer:
      "서비스 종료와 같은 상황이 생기더라도 사용자의 기록이 갑자기 사라지지 않도록 엑셀 등 원하는 형태로 데이터 백업을 제공해 드릴 계획입니다. 종료/변경이 필요할 경우에도 충분한 기간을 두고 안내합니다.",
  },
];

export const SCREENSHOT_SCREENS = [
  { title: "포트폴리오", color: "#E26B5F" },
  { title: "AI 분석", color: "#141414" },
  { title: "고객 관리", color: "#5f5f5f" },
  { title: "스타일북", color: "#c95a4f" },
  { title: "레시피", color: "#2d2d2d" },
];

export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: "서비스",
    links: [
      { label: "기능 소개", href: "/features/multi-timer" },
      { label: "블로그", href: "/blog" },
      { label: "자주 묻는 질문", href: "/#faq" },
    ],
  },
  {
    title: "회사",
    links: [
      { label: "홈", href: "/" },
      { label: "추천 기능", href: "/#features" },
      { label: "고객 후기", href: "/#testimonials" },
    ],
  },
  {
    title: "법적 고지",
    links: [
      { label: "이용약관", href: "#" },
      { label: "개인정보처리방침", href: "#" },
      { label: "쿠키 정책", href: "#" },
    ],
  },
];
