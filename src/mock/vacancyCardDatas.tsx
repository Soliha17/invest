import kunuzImg from "../assets/images/kunuz.svg";
import uzaImg from "../assets/images/uza.svg";
import itparkImg from "../assets/images/itpark.svg";

export interface VacancyCardTypes {
  id: number;
  path: string;
  logoImg: any;
  vacancyDate: string;
  vacancyType: string;
  vacancyTitle: string;
  vacancySalary: string;
  vacancyLocation: string;
  demands: any[];
  tasks: any[];
  conditions: any[];
}

export const vacancyCards: VacancyCardTypes[] = [
  {
    id: 1,
    path: "/",
    logoImg: itparkImg,
    vacancyDate: "02.08.2022  14:36",
    vacancyType: "HR",
    vacancyTitle: "HR manager",
    vacancySalary: "Maosh kelishilgan holda",
    vacancyLocation: "Uzbekistan Hotel",
    demands: [
      "O’z vaqtida keladiga, e’tiborli, mas'uliyat.",
      "Yangi narsalarni o'rganish va mijozga natijalar berish istagi.",
      "Bexato yoza olish.",
      "Ish uchun barcha kerakli xizmatlardan foydalanish imkoniyati: Key Collector, Yandex Wordstat va Direct Commander.",
      "Kontekstli reklama tamoyillarini tushunish: auktsion qanday ishlaydi, kontekstli reklama bloklarida pozitsiyalar qanday taqsimlanadi.",
    ],
    tasks: [
      "Yandex.Direct-da reklama kampaniyalarini yaratish va ularga xizmat ko'rsatish.",
      "Kampaniya monitoringi va optimallashtirish.",
      "Reklama kampaniyalarining auditini o'tkazish.",
      "Amalga oshirish monitoringi va samaradorlikni tahlil qilish.",
      "Reklama kampaniyasi hisoboti.",
      "Yandex.Metrica-ni o'rnatish uchun texnik talablar va sayt uchun maqsadlarni yozing.",
      "Reklama elementlarining A/B testi.",
      "Oxir-oqibat tahlil tizimlari bilan ishlash.",
    ],
    conditions: [
      "Belgilangan ish haqi va bonuslar.",
      "Rasmiy ishga joylashish.",
      "Kuchli jamoada ishlash.",
      "Korporativ trening.",
      "Ofisdan va masofadan turib ishlash imkoniyati.",
      "Katta maqsadlar va ularga erishish.",
      "Qiziqarli korporativ tadbirlar.",
      "Karyera o'sishi uchun haqiqiy imkoniyat.",
      "Dam olish.",
    ],
  },
  {
    id: 2,
    path: "/",
    logoImg: uzaImg,
    vacancyDate: "02.08.2022  14:36",
    vacancyType: "Marketing",
    vacancyTitle: "Marketolog",
    vacancySalary: "Interview asosida",
    vacancyLocation: "Uzbekistan Hotel",
    demands: [
      "O’z vaqtida keladiga, e’tiborli, mas'uliyat.",
      "Yangi narsalarni o'rganish va mijozga natijalar berish istagi.",
      "Bexato yoza olish.",
      "Ish uchun barcha kerakli xizmatlardan foydalanish imkoniyati: Key Collector, Yandex Wordstat va Direct Commander.",
      "Kontekstli reklama tamoyillarini tushunish: auktsion qanday ishlaydi, kontekstli reklama bloklarida pozitsiyalar qanday taqsimlanadi.",
    ],
    tasks: [
      "Yandex.Direct-da reklama kampaniyalarini yaratish va ularga xizmat ko'rsatish.",
      "Kampaniya monitoringi va optimallashtirish.",
      "Reklama kampaniyalarining auditini o'tkazish.",
      "Amalga oshirish monitoringi va samaradorlikni tahlil qilish.",
      "Reklama kampaniyasi hisoboti.",
      "Yandex.Metrica-ni o'rnatish uchun texnik talablar va sayt uchun maqsadlarni yozing.",
      "Reklama elementlarining A/B testi.",
      "Oxir-oqibat tahlil tizimlari bilan ishlash.",
    ],
    conditions: [
      "Belgilangan ish haqi va bonuslar.",
      "Rasmiy ishga joylashish.",
      "Kuchli jamoada ishlash.",
      "Korporativ trening.",
      "Ofisdan va masofadan turib ishlash imkoniyati.",
      "Katta maqsadlar va ularga erishish.",
      "Qiziqarli korporativ tadbirlar.",
      "Karyera o'sishi uchun haqiqiy imkoniyat.",
      "Dam olish.",
    ],
  },
  {
    id: 3,
    path: "/",
    logoImg: itparkImg,
    vacancyDate: "02.08.2022  14:36",
    vacancyType: "Managment",
    vacancyTitle: "Manager",
    vacancySalary: "Maosh kelishilgan holda",
    vacancyLocation: "Uzbekistan Hotel",
    demands: [
      "O’z vaqtida keladiga, e’tiborli, mas'uliyat.",
      "Yangi narsalarni o'rganish va mijozga natijalar berish istagi.",
      "Bexato yoza olish.",
      "Ish uchun barcha kerakli xizmatlardan foydalanish imkoniyati: Key Collector, Yandex Wordstat va Direct Commander.",
      "Kontekstli reklama tamoyillarini tushunish: auktsion qanday ishlaydi, kontekstli reklama bloklarida pozitsiyalar qanday taqsimlanadi.",
    ],
    tasks: [
      "Yandex.Direct-da reklama kampaniyalarini yaratish va ularga xizmat ko'rsatish.",
      "Kampaniya monitoringi va optimallashtirish.",
      "Reklama kampaniyalarining auditini o'tkazish.",
      "Amalga oshirish monitoringi va samaradorlikni tahlil qilish.",
      "Reklama kampaniyasi hisoboti.",
      "Yandex.Metrica-ni o'rnatish uchun texnik talablar va sayt uchun maqsadlarni yozing.",
      "Reklama elementlarining A/B testi.",
      "Oxir-oqibat tahlil tizimlari bilan ishlash.",
    ],
    conditions: [
      "Belgilangan ish haqi va bonuslar.",
      "Rasmiy ishga joylashish.",
      "Kuchli jamoada ishlash.",
      "Korporativ trening.",
      "Ofisdan va masofadan turib ishlash imkoniyati.",
      "Katta maqsadlar va ularga erishish.",
      "Qiziqarli korporativ tadbirlar.",
      "Karyera o'sishi uchun haqiqiy imkoniyat.",
      "Dam olish.",
    ],
  },
  {
    id: 4,
    path: "/",
    logoImg: kunuzImg,
    vacancyDate: "02.08.2022  14:36",
    vacancyType: "Design",
    vacancyTitle: "Grafik designer",
    vacancySalary: "Interview asosida",
    vacancyLocation: "Uzbekistan Hotel",
    demands: [
      "O’z vaqtida keladiga, e’tiborli, mas'uliyat.",
      "Yangi narsalarni o'rganish va mijozga natijalar berish istagi.",
      "Bexato yoza olish.",
      "Ish uchun barcha kerakli xizmatlardan foydalanish imkoniyati: Key Collector, Yandex Wordstat va Direct Commander.",
      "Kontekstli reklama tamoyillarini tushunish: auktsion qanday ishlaydi, kontekstli reklama bloklarida pozitsiyalar qanday taqsimlanadi.",
    ],
    tasks: [
      "Yandex.Direct-da reklama kampaniyalarini yaratish va ularga xizmat ko'rsatish.",
      "Kampaniya monitoringi va optimallashtirish.",
      "Reklama kampaniyalarining auditini o'tkazish.",
      "Amalga oshirish monitoringi va samaradorlikni tahlil qilish.",
      "Reklama kampaniyasi hisoboti.",
      "Yandex.Metrica-ni o'rnatish uchun texnik talablar va sayt uchun maqsadlarni yozing.",
      "Reklama elementlarining A/B testi.",
      "Oxir-oqibat tahlil tizimlari bilan ishlash.",
    ],
    conditions: [
      "Belgilangan ish haqi va bonuslar.",
      "Rasmiy ishga joylashish.",
      "Kuchli jamoada ishlash.",
      "Korporativ trening.",
      "Ofisdan va masofadan turib ishlash imkoniyati.",
      "Katta maqsadlar va ularga erishish.",
      "Qiziqarli korporativ tadbirlar.",
      "Karyera o'sishi uchun haqiqiy imkoniyat.",
      "Dam olish.",
    ],
  },
  {
    id: 5,
    path: "/",
    logoImg: uzaImg,
    vacancyDate: "02.08.2022  14:36",
    vacancyType: "Marketing",
    vacancyTitle: "Marketolog",
    vacancySalary: "Interview asosida",
    vacancyLocation: "Uzbekistan Hotel",
    demands: [
      "O’z vaqtida keladiga, e’tiborli, mas'uliyat.",
      "Yangi narsalarni o'rganish va mijozga natijalar berish istagi.",
      "Bexato yoza olish.",
      "Ish uchun barcha kerakli xizmatlardan foydalanish imkoniyati: Key Collector, Yandex Wordstat va Direct Commander.",
      "Kontekstli reklama tamoyillarini tushunish: auktsion qanday ishlaydi, kontekstli reklama bloklarida pozitsiyalar qanday taqsimlanadi.",
    ],
    tasks: [
      "Yandex.Direct-da reklama kampaniyalarini yaratish va ularga xizmat ko'rsatish.",
      "Kampaniya monitoringi va optimallashtirish.",
      "Reklama kampaniyalarining auditini o'tkazish.",
      "Amalga oshirish monitoringi va samaradorlikni tahlil qilish.",
      "Reklama kampaniyasi hisoboti.",
      "Yandex.Metrica-ni o'rnatish uchun texnik talablar va sayt uchun maqsadlarni yozing.",
      "Reklama elementlarining A/B testi.",
      "Oxir-oqibat tahlil tizimlari bilan ishlash.",
    ],
    conditions: [
      "Belgilangan ish haqi va bonuslar.",
      "Rasmiy ishga joylashish.",
      "Kuchli jamoada ishlash.",
      "Korporativ trening.",
      "Ofisdan va masofadan turib ishlash imkoniyati.",
      "Katta maqsadlar va ularga erishish.",
      "Qiziqarli korporativ tadbirlar.",
      "Karyera o'sishi uchun haqiqiy imkoniyat.",
      "Dam olish.",
    ],
  },
  {
    id: 6,
    path: "/",
    logoImg: itparkImg,
    vacancyDate: "02.08.2022  14:36",
    vacancyType: "Managment",
    vacancyTitle: "Manager",
    vacancySalary: "Maosh kelishilgan holda",
    vacancyLocation: "Uzbekistan Hotel",
    demands: [
      "O’z vaqtida keladiga, e’tiborli, mas'uliyat.",
      "Yangi narsalarni o'rganish va mijozga natijalar berish istagi.",
      "Bexato yoza olish.",
      "Ish uchun barcha kerakli xizmatlardan foydalanish imkoniyati: Key Collector, Yandex Wordstat va Direct Commander.",
      "Kontekstli reklama tamoyillarini tushunish: auktsion qanday ishlaydi, kontekstli reklama bloklarida pozitsiyalar qanday taqsimlanadi.",
    ],
    tasks: [
      "Yandex.Direct-da reklama kampaniyalarini yaratish va ularga xizmat ko'rsatish.",
      "Kampaniya monitoringi va optimallashtirish.",
      "Reklama kampaniyalarining auditini o'tkazish.",
      "Amalga oshirish monitoringi va samaradorlikni tahlil qilish.",
      "Reklama kampaniyasi hisoboti.",
      "Yandex.Metrica-ni o'rnatish uchun texnik talablar va sayt uchun maqsadlarni yozing.",
      "Reklama elementlarining A/B testi.",
      "Oxir-oqibat tahlil tizimlari bilan ishlash.",
    ],
    conditions: [
      "Belgilangan ish haqi va bonuslar.",
      "Rasmiy ishga joylashish.",
      "Kuchli jamoada ishlash.",
      "Korporativ trening.",
      "Ofisdan va masofadan turib ishlash imkoniyati.",
      "Katta maqsadlar va ularga erishish.",
      "Qiziqarli korporativ tadbirlar.",
      "Karyera o'sishi uchun haqiqiy imkoniyat.",
      "Dam olish.",
    ],
  },
  {
    id: 7,
    path: "/",
    logoImg: kunuzImg,
    vacancyDate: "02.08.2022  14:36",
    vacancyType: "Design",
    vacancyTitle: "Grafik designer",
    vacancySalary: "Interview asosida",
    vacancyLocation: "Uzbekistan Hotel",
    demands: [
      "O’z vaqtida keladiga, e’tiborli, mas'uliyat.",
      "Yangi narsalarni o'rganish va mijozga natijalar berish istagi.",
      "Bexato yoza olish.",
      "Ish uchun barcha kerakli xizmatlardan foydalanish imkoniyati: Key Collector, Yandex Wordstat va Direct Commander.",
      "Kontekstli reklama tamoyillarini tushunish: auktsion qanday ishlaydi, kontekstli reklama bloklarida pozitsiyalar qanday taqsimlanadi.",
    ],
    tasks: [
      "Yandex.Direct-da reklama kampaniyalarini yaratish va ularga xizmat ko'rsatish.",
      "Kampaniya monitoringi va optimallashtirish.",
      "Reklama kampaniyalarining auditini o'tkazish.",
      "Amalga oshirish monitoringi va samaradorlikni tahlil qilish.",
      "Reklama kampaniyasi hisoboti.",
      "Yandex.Metrica-ni o'rnatish uchun texnik talablar va sayt uchun maqsadlarni yozing.",
      "Reklama elementlarining A/B testi.",
      "Oxir-oqibat tahlil tizimlari bilan ishlash.",
    ],
    conditions: [
      "Belgilangan ish haqi va bonuslar.",
      "Rasmiy ishga joylashish.",
      "Kuchli jamoada ishlash.",
      "Korporativ trening.",
      "Ofisdan va masofadan turib ishlash imkoniyati.",
      "Katta maqsadlar va ularga erishish.",
      "Qiziqarli korporativ tadbirlar.",
      "Karyera o'sishi uchun haqiqiy imkoniyat.",
      "Dam olish.",
    ],
  },
  {
    id: 8,
    path: "/",
    logoImg: uzaImg,
    vacancyDate: "02.08.2022  14:36",
    vacancyType: "Marketing",
    vacancyTitle: "Marketolog",
    vacancySalary: "Interview asosida",
    vacancyLocation: "Uzbekistan Hotel",
    demands: [
      "O’z vaqtida keladiga, e’tiborli, mas'uliyat.",
      "Yangi narsalarni o'rganish va mijozga natijalar berish istagi.",
      "Bexato yoza olish.",
      "Ish uchun barcha kerakli xizmatlardan foydalanish imkoniyati: Key Collector, Yandex Wordstat va Direct Commander.",
      "Kontekstli reklama tamoyillarini tushunish: auktsion qanday ishlaydi, kontekstli reklama bloklarida pozitsiyalar qanday taqsimlanadi.",
    ],
    tasks: [
      "Yandex.Direct-da reklama kampaniyalarini yaratish va ularga xizmat ko'rsatish.",
      "Kampaniya monitoringi va optimallashtirish.",
      "Reklama kampaniyalarining auditini o'tkazish.",
      "Amalga oshirish monitoringi va samaradorlikni tahlil qilish.",
      "Reklama kampaniyasi hisoboti.",
      "Yandex.Metrica-ni o'rnatish uchun texnik talablar va sayt uchun maqsadlarni yozing.",
      "Reklama elementlarining A/B testi.",
      "Oxir-oqibat tahlil tizimlari bilan ishlash.",
    ],
    conditions: [
      "Belgilangan ish haqi va bonuslar.",
      "Rasmiy ishga joylashish.",
      "Kuchli jamoada ishlash.",
      "Korporativ trening.",
      "Ofisdan va masofadan turib ishlash imkoniyati.",
      "Katta maqsadlar va ularga erishish.",
      "Qiziqarli korporativ tadbirlar.",
      "Karyera o'sishi uchun haqiqiy imkoniyat.",
      "Dam olish.",
    ],
  },
];