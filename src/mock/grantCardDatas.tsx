import oxfordImg from "../assets/images/oxford-img.svg";
import meetingImg from "../assets/images/meeting-img.svg";
import mountainImg from "../assets/images/mountain-img.svg";

export interface GrantsCardTypes {
  id: number;
  path: string;
  firstInfo: string;
  secondInfo: string;
  listInfo: string;
  listInfoSecond: string;
  listInfoThird: string;
  thirdInfo: string;
  firstList: string;
  secondList: string;
  thirdList: string;
  grantsType: string;
  text: string;
  img: string;
}

export const grantsCardDatas: GrantsCardTypes[] = [
  {
    id: 1,
    path: "/",
    firstInfo:
      "Buyuk Britaniyada joylashgan Oksford universiteti tarkibidagi Said Business School oliygohi MBA magistrlik dasturida uzluksiz taʼlim (full-time) asosida tahsil olishni xohlovchilar uchun har yili Skoll Scholarship dasturini taklif etadi. Grant butun magistrlik dasturi davri (1 yil) uchun taqdim etiladi. Har yili 4 nafargacha talaba ushbu grant bilan taqdirlanadi.",
    secondInfo:
      "Grant arizasi Oksford MBA dasturiga topshiriladigan hujjatlar bilan birga topshiriladi. Hozirda 2023-yil sentyabrda boshlanadigan Oksford MBA dasturiga ariza qabul qilinmoqda va arizalar 4 marta qabul qilinadi. Skoll Scholarship grantiga ariza topshirmoqchi boʻlganlar quyidagi uchta qabuldan birida Oksford MBA dasturiga hujjat topshirish lozim:",
    listInfo: "1-qabul: 2022-yil 31-avgustgacha.",
    listInfoSecond: "2-qabul: 2022-yil 12-oktyabrgacha.",
    listInfoThird: "3-qabul: 2023-yil 4-yavnargacha.",
    thirdInfo:
      "Oksford MBA dasturida oʻqish uchun bir yillik kontrakt toʻlovi 2023-2024-oʻquv yili  uchun 75 140 funt-sterlingni tashkil etadi.Skoll Scholarship grantini qoʻlga kiritgan talabalar quyidagi imtiyozlar bilan taʼminlanadi:",
    firstList: "Talaba kontrakt summasini toʻlashdan toʻliq ozod etiladi.",
    secondList: "Yashash xarajatlari uchun stipendiya beriladi.",
    thirdList: "Ayrim hollarda qisman grant ham ajratilishi mumkin.",
    grantsType: "Tilshunoslik",
    text: "Oxford University Said Business School: Skoll Scholarship Programme – MBA kursi uchun toʻliq grant va yillik stipendiya",
    img: oxfordImg,
  },
  {
    id: 2,
    path: "/",
    firstInfo:
      "Buyuk Britaniyada joylashgan Oksford universiteti tarkibidagi Said Business School oliygohi MBA magistrlik dasturida uzluksiz taʼlim (full-time) asosida tahsil olishni xohlovchilar uchun har yili Skoll Scholarship dasturini taklif etadi. Grant butun magistrlik dasturi davri (1 yil) uchun taqdim etiladi. Har yili 4 nafargacha talaba ushbu grant bilan taqdirlanadi.",
    secondInfo:
      "Grant arizasi Oksford MBA dasturiga topshiriladigan hujjatlar bilan birga topshiriladi. Hozirda 2023-yil sentyabrda boshlanadigan Oksford MBA dasturiga ariza qabul qilinmoqda va arizalar 4 marta qabul qilinadi. Skoll Scholarship grantiga ariza topshirmoqchi boʻlganlar quyidagi uchta qabuldan birida Oksford MBA dasturiga hujjat topshirish lozim:",
    listInfo: "1-qabul: 2022-yil 31-avgustgacha.",
    listInfoSecond: "2-qabul: 2022-yil 12-oktyabrgacha.",
    listInfoThird: "3-qabul: 2023-yil 4-yavnargacha.",
    thirdInfo:
      "Oksford MBA dasturida oʻqish uchun bir yillik kontrakt toʻlovi 2023-2024-oʻquv yili  uchun 75 140 funt-sterlingni tashkil etadi.Skoll Scholarship grantini qoʻlga kiritgan talabalar quyidagi imtiyozlar bilan taʼminlanadi:",
    firstList: "Talaba kontrakt summasini toʻlashdan toʻliq ozod etiladi.",
    secondList: "Yashash xarajatlari uchun stipendiya beriladi.",
    thirdList: "Ayrim hollarda qisman grant ham ajratilishi mumkin.",
    grantsType: "Biznes",
    text: "Business Today International Conference: Nyu-Yorkda bakalavriat talabalari uchun xarajatlari qoplanadigan xalqaro konferensiya!",
    img: meetingImg,
  },
  {
    id: 3,
    path: "/",
    firstInfo:
      "Buyuk Britaniyada joylashgan Oksford universiteti tarkibidagi Said Business School oliygohi MBA magistrlik dasturida uzluksiz taʼlim (full-time) asosida tahsil olishni xohlovchilar uchun har yili Skoll Scholarship dasturini taklif etadi. Grant butun magistrlik dasturi davri (1 yil) uchun taqdim etiladi. Har yili 4 nafargacha talaba ushbu grant bilan taqdirlanadi.",
    secondInfo:
      "Grant arizasi Oksford MBA dasturiga topshiriladigan hujjatlar bilan birga topshiriladi. Hozirda 2023-yil sentyabrda boshlanadigan Oksford MBA dasturiga ariza qabul qilinmoqda va arizalar 4 marta qabul qilinadi. Skoll Scholarship grantiga ariza topshirmoqchi boʻlganlar quyidagi uchta qabuldan birida Oksford MBA dasturiga hujjat topshirish lozim:",
    listInfo: "1-qabul: 2022-yil 31-avgustgacha.",
    listInfoSecond: "2-qabul: 2022-yil 12-oktyabrgacha.",
    listInfoThird: "3-qabul: 2023-yil 4-yavnargacha.",
    thirdInfo:
      "Oksford MBA dasturida oʻqish uchun bir yillik kontrakt toʻlovi 2023-2024-oʻquv yili  uchun 75 140 funt-sterlingni tashkil etadi.Skoll Scholarship grantini qoʻlga kiritgan talabalar quyidagi imtiyozlar bilan taʼminlanadi:",
    firstList: "Talaba kontrakt summasini toʻlashdan toʻliq ozod etiladi.",
    secondList: "Yashash xarajatlari uchun stipendiya beriladi.",
    thirdList: "Ayrim hollarda qisman grant ham ajratilishi mumkin.",
    grantsType: "Tabiiy fanlar",
    text: "Toshkentda “Iqlim oʻzgarishi va ziddiyatlar” mavzusida trening: qatnashish bilan bogʻliq barcha xarajatlar qoplanadi!",
    img: meetingImg,
  },
  {
    id: 4,
    path: "/",
    firstInfo:
      "Buyuk Britaniyada joylashgan Oksford universiteti tarkibidagi Said Business School oliygohi MBA magistrlik dasturida uzluksiz taʼlim (full-time) asosida tahsil olishni xohlovchilar uchun har yili Skoll Scholarship dasturini taklif etadi. Grant butun magistrlik dasturi davri (1 yil) uchun taqdim etiladi. Har yili 4 nafargacha talaba ushbu grant bilan taqdirlanadi.",
    secondInfo:
      "Grant arizasi Oksford MBA dasturiga topshiriladigan hujjatlar bilan birga topshiriladi. Hozirda 2023-yil sentyabrda boshlanadigan Oksford MBA dasturiga ariza qabul qilinmoqda va arizalar 4 marta qabul qilinadi. Skoll Scholarship grantiga ariza topshirmoqchi boʻlganlar quyidagi uchta qabuldan birida Oksford MBA dasturiga hujjat topshirish lozim:",
    listInfo: "1-qabul: 2022-yil 31-avgustgacha.",
    listInfoSecond: "2-qabul: 2022-yil 12-oktyabrgacha.",
    listInfoThird: "3-qabul: 2023-yil 4-yavnargacha.",
    thirdInfo:
      "Oksford MBA dasturida oʻqish uchun bir yillik kontrakt toʻlovi 2023-2024-oʻquv yili  uchun 75 140 funt-sterlingni tashkil etadi.Skoll Scholarship grantini qoʻlga kiritgan talabalar quyidagi imtiyozlar bilan taʼminlanadi:",
    firstList: "Talaba kontrakt summasini toʻlashdan toʻliq ozod etiladi.",
    secondList: "Yashash xarajatlari uchun stipendiya beriladi.",
    thirdList: "Ayrim hollarda qisman grant ham ajratilishi mumkin.",
    grantsType: "Pedagokika",
    text: "Volontyorlar uchun Antaliyada 5 kunlik kuzgi lager: Turar joy, oziq-ovqat va ichki transport xarajatlari qoplanadi!",
    img: mountainImg,
  },
  {
    id: 5,
    path: "/",
    firstInfo:
      "Buyuk Britaniyada joylashgan Oksford universiteti tarkibidagi Said Business School oliygohi MBA magistrlik dasturida uzluksiz taʼlim (full-time) asosida tahsil olishni xohlovchilar uchun har yili Skoll Scholarship dasturini taklif etadi. Grant butun magistrlik dasturi davri (1 yil) uchun taqdim etiladi. Har yili 4 nafargacha talaba ushbu grant bilan taqdirlanadi.",
    secondInfo:
      "Grant arizasi Oksford MBA dasturiga topshiriladigan hujjatlar bilan birga topshiriladi. Hozirda 2023-yil sentyabrda boshlanadigan Oksford MBA dasturiga ariza qabul qilinmoqda va arizalar 4 marta qabul qilinadi. Skoll Scholarship grantiga ariza topshirmoqchi boʻlganlar quyidagi uchta qabuldan birida Oksford MBA dasturiga hujjat topshirish lozim:",
    listInfo: "1-qabul: 2022-yil 31-avgustgacha.",
    listInfoSecond: "2-qabul: 2022-yil 12-oktyabrgacha.",
    listInfoThird: "3-qabul: 2023-yil 4-yavnargacha.",
    thirdInfo:
      "Oksford MBA dasturida oʻqish uchun bir yillik kontrakt toʻlovi 2023-2024-oʻquv yili  uchun 75 140 funt-sterlingni tashkil etadi.Skoll Scholarship grantini qoʻlga kiritgan talabalar quyidagi imtiyozlar bilan taʼminlanadi:",
    firstList: "Talaba kontrakt summasini toʻlashdan toʻliq ozod etiladi.",
    secondList: "Yashash xarajatlari uchun stipendiya beriladi.",
    thirdList: "Ayrim hollarda qisman grant ham ajratilishi mumkin.",
    grantsType: "Tilshunoslik",
    text: "Oxford University Said Business School: Skoll Scholarship Programme – MBA kursi uchun toʻliq grant va yillik stipendiya",
    img: oxfordImg,
  },
  {
    id: 6,
    path: "/",
    firstInfo:
      "Buyuk Britaniyada joylashgan Oksford universiteti tarkibidagi Said Business School oliygohi MBA magistrlik dasturida uzluksiz taʼlim (full-time) asosida tahsil olishni xohlovchilar uchun har yili Skoll Scholarship dasturini taklif etadi. Grant butun magistrlik dasturi davri (1 yil) uchun taqdim etiladi. Har yili 4 nafargacha talaba ushbu grant bilan taqdirlanadi.",
    secondInfo:
      "Grant arizasi Oksford MBA dasturiga topshiriladigan hujjatlar bilan birga topshiriladi. Hozirda 2023-yil sentyabrda boshlanadigan Oksford MBA dasturiga ariza qabul qilinmoqda va arizalar 4 marta qabul qilinadi. Skoll Scholarship grantiga ariza topshirmoqchi boʻlganlar quyidagi uchta qabuldan birida Oksford MBA dasturiga hujjat topshirish lozim:",
    listInfo: "1-qabul: 2022-yil 31-avgustgacha.",
    listInfoSecond: "2-qabul: 2022-yil 12-oktyabrgacha.",
    listInfoThird: "3-qabul: 2023-yil 4-yavnargacha.",
    thirdInfo:
      "Oksford MBA dasturida oʻqish uchun bir yillik kontrakt toʻlovi 2023-2024-oʻquv yili  uchun 75 140 funt-sterlingni tashkil etadi.Skoll Scholarship grantini qoʻlga kiritgan talabalar quyidagi imtiyozlar bilan taʼminlanadi:",
    firstList: "Talaba kontrakt summasini toʻlashdan toʻliq ozod etiladi.",
    secondList: "Yashash xarajatlari uchun stipendiya beriladi.",
    thirdList: "Ayrim hollarda qisman grant ham ajratilishi mumkin.",
    grantsType: "Biznes",
    text: "Business Today International Conference: Nyu-Yorkda bakalavriat talabalari uchun xarajatlari qoplanadigan xalqaro konferensiya!",
    img: meetingImg,
  },
  {
    id: 7,
    path: "/",
    firstInfo:
      "Buyuk Britaniyada joylashgan Oksford universiteti tarkibidagi Said Business School oliygohi MBA magistrlik dasturida uzluksiz taʼlim (full-time) asosida tahsil olishni xohlovchilar uchun har yili Skoll Scholarship dasturini taklif etadi. Grant butun magistrlik dasturi davri (1 yil) uchun taqdim etiladi. Har yili 4 nafargacha talaba ushbu grant bilan taqdirlanadi.",
    secondInfo:
      "Grant arizasi Oksford MBA dasturiga topshiriladigan hujjatlar bilan birga topshiriladi. Hozirda 2023-yil sentyabrda boshlanadigan Oksford MBA dasturiga ariza qabul qilinmoqda va arizalar 4 marta qabul qilinadi. Skoll Scholarship grantiga ariza topshirmoqchi boʻlganlar quyidagi uchta qabuldan birida Oksford MBA dasturiga hujjat topshirish lozim:",
    listInfo: "1-qabul: 2022-yil 31-avgustgacha.",
    listInfoSecond: "2-qabul: 2022-yil 12-oktyabrgacha.",
    listInfoThird: "3-qabul: 2023-yil 4-yavnargacha.",
    thirdInfo:
      "Oksford MBA dasturida oʻqish uchun bir yillik kontrakt toʻlovi 2023-2024-oʻquv yili  uchun 75 140 funt-sterlingni tashkil etadi.Skoll Scholarship grantini qoʻlga kiritgan talabalar quyidagi imtiyozlar bilan taʼminlanadi:",
    firstList: "Talaba kontrakt summasini toʻlashdan toʻliq ozod etiladi.",
    secondList: "Yashash xarajatlari uchun stipendiya beriladi.",
    thirdList: "Ayrim hollarda qisman grant ham ajratilishi mumkin.",
    grantsType: "Pedagokika",
    text: "Volontyorlar uchun Antaliyada 5 kunlik kuzgi lager: Turar joy, oziq-ovqat va ichki transport xarajatlari qoplanadi!",
    img: mountainImg,
  },
];
