const topics = [
  {
    icon: "🧩",
    title: "Predmet, tasodifiy hodisalar, elementar hodisalar fazosi va kombinatorika",
    simple: "Bu fan noaniq vaziyatni son bilan o'lchashni o'rgatadi. Masalan, tanga tashlasak oldindan aniq natijani bilmaymiz, lekin nechta imkon borligini bilamiz. Har bir eng kichik natija elementar hodisa, barcha natijalar to'plami esa \\(\\Omega\\) deyiladi.",
    formulas: [
      "\\(\\Omega=\\{\\omega_1,\\omega_2,\\ldots,\\omega_n\\}\\)",
      "\\(A\\cup B\\) - A yoki B, \\(A\\cap B\\) - ikkalasi ham, \\(A\\setminus B\\) - A bor B yo'q",
      "\\(n!\\), \\(A_n^k=\\frac{n!}{(n-k)!}\\), \\(C_n^k=\\frac{n!}{k!(n-k)!}\\)"
    ],
    derivation: "Avval barcha natijalar sanaladi. Tartib muhim bo'lsa joylashish, tartib muhim bo'lmasa kombinatsiya ishlatiladi. Takrorlanmagan barcha tartiblar soni \\(n!\\).",
    life: "Do'konda 5 xil ichimlikdan 2 tasini tanlashda tartib muhim emas: bu kombinatsiya. Telefon parolida 4 raqamning ketma-ketligi muhim: bu joylashish.",
    solved: ["Tajriba: tanga 2 marta tashlandi.", "\\(\\Omega=\\{GG, GR, RG, RR\\}\\)", "Kamida bitta gerb: \\(A=\\{GG,GR,RG\\}\\)", "Shuning uchun imkonlar soni 3 ta."],
    warn: "Savolda 'ketma-ket', 'tartibda', 'nomer' so'zlari bo'lsa tartib muhim bo'lishi mumkin.",
    remember: "Ehtimollikdan oldin eng muhim ish: \\(\\Omega\\) va qulay hodisalarni to'g'ri sanash."
  },
  {
    icon: "🎯",
    title: "Ehtimollik ta'riflari, sanoqli fazo va Kolmogorov aksiomalari",
    simple: "Ehtimollik hodisa ro'y berish imkonini 0 bilan 1 orasida o'lchaydi. 0 - mutlaqo bo'lmaydi, 1 - albatta bo'ladi. Klassik ta'rif teng imkonli natijalarda ishlaydi.",
    formulas: [
      "\\(P(A)=\\frac{m}{n}\\)",
      "\\(P(A)=\\lim_{N\\to\\infty}\\frac{n_A}{N}\\)",
      "\\(P(A)=\\frac{\\text{qulay uzunlik/yuz/hajm}}{\\text{umumiy uzunlik/yuz/hajm}}\\)",
      "\\(P(\\Omega)=1,\\quad P(A)\\ge0,\\quad P(A\\cup B)=P(A)+P(B)\\) agar \\(A\\cap B=\\varnothing\\)"
    ],
    derivation: "Klassik ta'rifda barcha elementar natijalar teng kuchli deb olinadi. Qulay natijalar soni umumiy natijalar soniga bo'linadi.",
    life: "O'yin toshida 6 ta teng imkon bor. 5 tushish ehtimoli \\(1/6\\). Ob-havoda esa statistik ta'rif ishlaydi: ko'p yillik kuzatuvdan foydalaniladi.",
    solved: ["Qutida 3 oq, 2 qora shar bor.", "Oq chiqishi uchun qulay natija 3 ta.", "Umumiy natija 5 ta.", "\\(P(oq)=3/5=0.6\\)."],
    warn: "Klassik formula faqat natijalar teng imkonli bo'lsa ishlaydi.",
    remember: "\\(0\\le P(A)\\le1\\). Javob 1 dan katta chiqsa sanashda xato bor."
  },
  {
    icon: "➕",
    title: "Qo'shish, ko'paytirish, shartli ehtimollik, to'la guruh va erkli hodisalar",
    simple: "Ikkita hodisa birga kelganda 'yoki' uchun qo'shish, 'va' uchun ko'paytirish ishlatiladi. Shartli ehtimollikda bir hodisa ro'y bergani ma'lum bo'ladi.",
    formulas: [
      "\\(P(A\\cup B)=P(A)+P(B)-P(A\\cap B)\\)",
      "\\(P(A\\cap B)=P(A)P(B|A)=P(B)P(A|B)\\)",
      "\\(P(A|B)=\\frac{P(A\\cap B)}{P(B)}\\)",
      "Erkli bo'lsa: \\(P(A\\cap B)=P(A)P(B)\\)"
    ],
    derivation: "Qo'shganda umumiy qism ikki marta sanaladi, shuning uchun \\(P(A\\cap B)\\) ayriladi. Shartli ehtimollikda umumiy fazo B hodisaga qisqaradi.",
    life: "Futbolda 'jamoa yutadi yoki durang qiladi' deganda natijalar qo'shiladi. 'Birinchi va ikkinchi zarba gol bo'ladi' deganda ko'paytiriladi.",
    solved: ["\\(P(A)=0.4\\), \\(P(B)=0.5\\), \\(P(A\\cap B)=0.2\\).", "\\(P(A\\cup B)=0.4+0.5-0.2=0.7\\)."],
    warn: "Hodisalar kesishsa, oddiy qo'shish xato beradi.",
    remember: "'Yoki' - qo'shish, 'va' - ko'paytirish, 'ma'lumki' - shartli ehtimollik."
  },
  {
    icon: "🔁",
    title: "To'la ehtimollik formulasi va Bayes formulasi",
    simple: "Agar natija bir nechta sabab orqali kelishi mumkin bo'lsa to'la ehtimollik ishlaydi. Bayes esa natijani ko'rib, qaysi sabab ehtimolroq ekanini topadi.",
    formulas: [
      "\\(P(A)=\\sum_{i=1}^{n}P(H_i)P(A|H_i)\\)",
      "\\(P(H_k|A)=\\frac{P(H_k)P(A|H_k)}{\\sum_{i=1}^{n}P(H_i)P(A|H_i)}\\)"
    ],
    derivation: "\\(H_1,H_2,\\ldots,H_n\\) sabablar to'la guruh bo'lsa, A hodisa shu sabablarning bittasi orqali yuz beradi. Har bir yo'l ehtimoli qo'shiladi.",
    life: "Buyum 3 ta zavoddan keladi. Nuqson topildi. Bayes bilan shu nuqson qaysi zavoddan kelgan bo'lishi ehtimolini topamiz.",
    solved: ["1-zavod ulushi 60%, nuqson 2%; 2-zavod ulushi 40%, nuqson 5%.", "\\(P(D)=0.6\\cdot0.02+0.4\\cdot0.05=0.032\\)", "\\(P(H_2|D)=0.4\\cdot0.05/0.032=0.625\\)."],
    warn: "Bayesda maxraj har doim umumiy natija ehtimoli, ya'ni to'la ehtimollik.",
    remember: "Sabablar berilgan bo'lsa: to'la ehtimollik. Natijadan sabab so'ralsa: Bayes."
  },
  {
    icon: "🪙",
    title: "Bernulli sxemasi, Bernulli formulasi, Puasson va Muavr-Laplas teoremalari",
    simple: "Bir xil tajriba ko'p marta takrorlanib, har safar 'muvaffaqiyat' yoki 'muvaffaqiyatsizlik' bo'lsa Bernulli sxemasi deyiladi.",
    formulas: [
      "\\(P_n(k)=C_n^k p^k q^{n-k},\\quad q=1-p\\)",
      "\\(P(X=k)\\approx\\frac{\\lambda^k e^{-\\lambda}}{k!},\\quad \\lambda=np\\)",
      "Lokal Laplas: \\(P_n(k)\\approx\\frac{1}{\\sqrt{npq}}\\varphi\\left(\\frac{k-np}{\\sqrt{npq}}\\right)\\)",
      "Integral Laplas: \\(P(a\\le X\\le b)\\approx\\Phi(x_2)-\\Phi(x_1)\\)"
    ],
    derivation: "\\(C_n^k\\) muvaffaqiyatlar joyini tanlaydi, \\(p^k\\) muvaffaqiyatlar ehtimoli, \\(q^{n-k}\\) qolgan muvaffaqiyatsizliklar ehtimoli.",
    life: "8 marta o'q uzilganda 6 marta tegish ehtimoli, 5 ta farzanddan kamida 2 tasi o'g'il bo'lish ehtimoli shu sxemaga tushadi.",
    solved: ["Tanga 5 marta tashlandi, 2 marta gerb.", "\\(n=5,k=2,p=q=0.5\\)", "\\(P=C_5^2(0.5)^2(0.5)^3=10/32=0.3125\\)."],
    warn: "Puasson faqat \\(n\\) katta, \\(p\\) kichik, \\(\\lambda=np\\) o'rtacha bo'lganda qulay.",
    remember: "Takroriy mustaqil tajriba + aynan k marta = Bernulli."
  },
  {
    icon: "🎲",
    title: "Tasodifiy miqdorlar va ularning turlari",
    simple: "Tasodifiy miqdor - tasodifiy tajriba natijasidan hosil bo'ladigan son. Diskret miqdor sanaladi, uzluksiz miqdor oraliqda istalgan qiymatni olishi mumkin.",
    formulas: [
      "Diskret: \\(P(X=x_i)=p_i,\\quad \\sum p_i=1\\)",
      "Uzluksiz: \\(P(a<X<b)=\\int_a^b f(x)dx\\)",
      "\\(F(x)=P(X\\le x)\\)"
    ],
    derivation: "Diskretda ehtimollar yig'indisi 1 bo'ladi. Uzluksizda bitta nuqtaning ehtimoli 0, oraliq ehtimoli esa zichlik ostidagi yuzaga teng.",
    life: "O'yin toshidagi ochko diskret. Talabaning testga ketgan vaqti uzluksiz.",
    solved: ["\\(X\\) - tanga 3 marta tashlanganda gerblar soni.", "Qiymatlar: 0,1,2,3.", "Demak X diskret tasodifiy miqdor."],
    warn: "Uzluksiz miqdorda \\(P(X=a)=0\\), shuning uchun oraliq bilan ishlanadi.",
    remember: "Sanaladigan qiymatlar - diskret, o'lchanadigan qiymatlar - uzluksiz."
  },
  {
    icon: "📏",
    title: "Sonli xarakteristikalar: M(X), D(X), sigma, momentlar, moda va mediana",
    simple: "Matematik kutilma o'rtacha qiymatni, dispersiya qiymatlar o'rtachadan qanchalik tarqalganini, sigma esa tarqalishning oddiy o'lchamini bildiradi.",
    formulas: [
      "\\(M(X)=\\sum x_ip_i\\) yoki \\(M(X)=\\int xf(x)dx\\)",
      "\\(D(X)=M(X^2)-[M(X)]^2\\)",
      "\\(\\sigma=\\sqrt{D(X)}\\)",
      "Moda - eng ko'p uchraydigan qiymat, mediana - o'rtadagi qiymat"
    ],
    derivation: "Dispersiya aslida \\(M((X-MX)^2)\\). Ochilganda \\(M(X^2)-[M(X)]^2\\) kelib chiqadi.",
    life: "Ikki talabaning o'rtacha bali bir xil bo'lishi mumkin, lekin biri barqaror, biri keskin o'zgaruvchan. Buni dispersiya ko'rsatadi.",
    solved: ["X: 0,1,2; p: 0.2,0.5,0.3.", "\\(M=0\\cdot0.2+1\\cdot0.5+2\\cdot0.3=1.1\\)", "\\(M(X^2)=0+0.5+1.2=1.7\\)", "\\(D=1.7-1.21=0.49,\\;\\sigma=0.7\\)."],
    warn: "Dispersiyada avval \\(M(X^2)\\), keyin \\([M(X)]^2\\) olinadi. Ularni aralashtirma.",
    remember: "Kutilma - markaz, dispersiya - yoyilish."
  },
  {
    icon: "📦",
    title: "Diskret taqsimotlar: Bernulli, binomial, Puasson, geometrik, manfiy binomial, gipergeometrik",
    simple: "Taqsimot - tasodifiy miqdor qaysi qiymatni qanday ehtimol bilan olishini ko'rsatuvchi jadval yoki formula.",
    formulas: [
      "Bernulli: \\(P(X=1)=p, P(X=0)=q\\)",
      "Binomial: \\(C_n^kp^kq^{n-k}\\)",
      "Puasson: \\(\\frac{\\lambda^ke^{-\\lambda}}{k!}\\)",
      "Geometrik: \\(P(X=k)=q^{k-1}p\\)",
      "Gipergeometrik: \\(P=\\frac{C_M^kC_{N-M}^{n-k}}{C_N^n}\\)"
    ],
    derivation: "Har taqsimot vaziyatga bog'liq: qaytarib tanlash binomialga, qaytarmay tanlash gipergeometrikka olib keladi.",
    life: "Karta kolodasidan qaytarmay olish - gipergeometrik. Har kuni o'rtacha 2 ta buyurtma xatosi - Puasson.",
    solved: ["36 kartadan 3 ta olinadi, 2 tasi tuz bo'lsin.", "\\(N=36,M=4,n=3,k=2\\)", "\\(P=\\frac{C_4^2C_{32}^{1}}{C_{36}^{3}}\\)."],
    warn: "Qaytarib tanlash va qaytarmay tanlashni farqlash testda juda muhim.",
    remember: "Mustaqil takrorlash - binomial, kam hodisa - Puasson, qaytarmay tanlash - gipergeometrik."
  },
  {
    icon: "🔔",
    title: "Uzluksiz taqsimotlar: tekis, ko'rsatkichli, normal, uch sigma, asimmetriya, ekstsess, xi-kvadrat",
    simple: "Uzluksiz taqsimotlarda ehtimollik zichlik funksiyasi ostidagi yuzaga teng. Normal taqsimot qo'ng'iroqsimon ko'rinishda bo'ladi va statistikada juda ko'p ishlatiladi.",
    formulas: [
      "Tekis: \\(f(x)=\\frac{1}{b-a}\\), \\(a\\le x\\le b\\)",
      "Ko'rsatkichli: \\(f(x)=\\lambda e^{-\\lambda x}\\)",
      "Normal: \\(f(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-a)^2}{2\\sigma^2}}\\)",
      "Uch sigma: \\(P(|X-a|<3\\sigma)\\approx0.997\\)"
    ],
    derivation: "Zichlikning butun oraliq bo'yicha integrali 1 bo'lishi kerak. Shu shartdan noma'lum koeffitsientlar topiladi.",
    life: "Odamlarning bo'yi, o'lchash xatolari, test ballari ko'pincha normal taqsimotga yaqin bo'ladi.",
    solved: ["\\(X\\sim U(2,6)\\).", "\\(M=(2+6)/2=4\\)", "\\(D=(6-2)^2/12=16/12=4/3\\)."],
    warn: "Normal taqsimotda jadval ishlatilsa, avval standartlashtir: \\(Z=(X-a)/\\sigma\\).",
    remember: "Uzluksizda ehtimollik = integral = egri chiziq ostidagi yuza."
  },
  {
    icon: "🗺️",
    title: "Ikki o'lchovli tasodifiy miqdorlar, taqsimot va zichlik funksiyasi",
    simple: "Ba'zan bitta natijada ikki son paydo bo'ladi: masalan, talabaning bo'yi X va vazni Y. Bunday juftlik ikki o'lchovli tasodifiy miqdor deyiladi.",
    formulas: [
      "\\(F(x,y)=P(X\\le x,Y\\le y)\\)",
      "\\(P((X,Y)\\in D)=\\iint_D f(x,y)dxdy\\)",
      "\\(\\iint f(x,y)dxdy=1\\)"
    ],
    derivation: "Bir o'lchovli integral o'rniga ikki o'lchovli integral ishlatiladi, chunki hodisa tekislikdagi soha bilan ifodalanadi.",
    life: "Do'konda mijoz sarflagan pul X va xarid soni Y bo'lishi mumkin. Ular birga tahlil qilinadi.",
    solved: ["Agar \\(f(x,y)=c\\) birlik kvadratda bo'lsa.", "\\(\\int_0^1\\int_0^1 c\\,dxdy=c=1\\)", "Demak \\(c=1\\)."],
    warn: "Zichlik funksiyasi berilsa, avval normallash sharti orqali \\(c\\) topiladi.",
    remember: "Ikki o'lchovli masalada soha chegaralarini to'g'ri yozish yarim yechimdir."
  },
  {
    icon: "🔗",
    title: "Tasodifiy vektorlar, kovariatsiya, korrelyatsiya va ikki o'lchovli taqsimotlar",
    simple: "Kovariatsiya X va Y birga oshadimi yoki biri oshganda biri kamayadimi, shuni bildiradi. Korrelyatsiya esa bu bog'lanishni -1 va 1 orasida o'lchaydi.",
    formulas: [
      "\\(cov(X,Y)=M(XY)-M(X)M(Y)\\)",
      "\\(r=\\frac{cov(X,Y)}{\\sigma_X\\sigma_Y}\\)",
      "Erkli bo'lsa: \\(M(XY)=M(X)M(Y)\\), \\(cov=0\\)"
    ],
    derivation: "Agar X va Y birga katta qiymat olsa, \\(M(XY)\\) katta bo'ladi va kovariatsiya musbat chiqadi.",
    life: "Reklama xarajati va savdo hajmi odatda musbat korrelyatsiyaga ega. Harorat va isitish xarajati manfiy bo'lishi mumkin.",
    solved: ["\\(M(X)=2\\), \\(M(Y)=3\\), \\(M(XY)=7\\).", "\\(cov=7-2\\cdot3=1\\)", "Agar \\(\\sigma_X=2,\\sigma_Y=1\\), \\(r=1/2=0.5\\)."],
    warn: "\\(cov=0\\) har doim erkli degani emas, faqat chiziqli bog'lanish yo'q bo'lishi mumkin.",
    remember: "Korrelyatsiya 1 ga yaqin - kuchli to'g'ri bog'lanish, -1 ga yaqin - kuchli teskari bog'lanish."
  },
  {
    icon: "🌊",
    title: "Katta sonlar qonuni, markaziy limit teorema, Chebishev, Bernulli, Lyapunov va Laplas",
    simple: "Tajribalar soni ko'paysa, o'rtacha natija haqiqiy o'rtachaga yaqinlashadi. Ko'p kichik tasodifiy ta'sirlar yig'indisi normal taqsimotga yaqinlashadi.",
    formulas: [
      "Chebishev: \\(P(|X-MX|\\ge \\varepsilon)\\le\\frac{D(X)}{\\varepsilon^2}\\)",
      "Katta sonlar: \\(\\bar X\\to M(X)\\)",
      "MLT: \\(\\frac{S_n-M(S_n)}{\\sqrt{D(S_n)}}\\Rightarrow N(0,1)\\)"
    ],
    derivation: "Chebishev tengsizligi dispersiya kichik bo'lsa, katta og'ish ehtimoli ham kichik bo'lishini ko'rsatadi. Shundan katta sonlar qonuni g'oyasi keladi.",
    life: "Bir marta tanga tashlashda natija notekis bo'lishi mumkin, lekin 10000 marta tashlasak gerb ulushi 0.5 ga yaqinlashadi.",
    solved: ["\\(D(X)=4\\), \\(\\varepsilon=10\\).", "\\(P(|X-MX|\\ge10)\\le4/100=0.04\\)."],
    warn: "Laplas yaqinlashishida \\(npq\\) yetarlicha katta bo'lishi kerak.",
    remember: "Ko'p takrorlash tasodifni tartibga soladi."
  },
  {
    icon: "📋",
    title: "Matematik statistika: variatsion qator, empirik taqsimot, tanlanma xarakteristikalari",
    simple: "Statistika tayyor ehtimollikdan emas, kuzatilgan ma'lumotdan xulosa chiqaradi. Tanlanma - umumiy to'plamdan olingan kichik qism.",
    formulas: [
      "\\(\\bar x=\\frac{1}{n}\\sum x_i\\)",
      "\\(s^2=\\frac{1}{n-1}\\sum (x_i-\\bar x)^2\\)",
      "\\(F_n(x)=\\frac{n_x}{n}\\)"
    ],
    derivation: "Empirik taqsimot funksiyasi x dan kichik yoki teng kuzatuvlar ulushini oladi. Tanlanma dispersiyada \\(n-1\\) ishlatilishi bahoni tuzatadi.",
    life: "1000 talabadan 50 tasining ballini olib, butun guruh haqida taxmin qilamiz.",
    solved: ["Ma'lumot: 2,4,4,6.", "\\(\\bar x=16/4=4\\)", "Variatsion qator: 2,4,4,6.", "Moda: 4."],
    warn: "Interval qatorlarda sinf markazi olinadi, chegaralar emas.",
    remember: "Statistika: ma'lumotdan parametrga borish."
  },
  {
    icon: "🧮",
    title: "Statistik baholar, momentlar usuli va eng katta o'xshashlik usuli",
    simple: "Noma'lum parametrni tanlanma orqali taxmin qilish baholash deyiladi. Momentlar usuli nazariy momentni tanlanma momentiga tenglaydi. EKO usuli kuzatilgan ma'lumotni eng ehtimolli qiladigan parametrni tanlaydi.",
    formulas: [
      "Momentlar: \\(M(X)=\\bar x\\)",
      "EKO: \\(L(\\theta)=\\prod f(x_i,\\theta)\\)",
      "\\(\\hat\\theta=\\arg\\max L(\\theta)\\)"
    ],
    derivation: "Momentlar usulida taqsimot formulasidagi parametr kutilma yoki dispersiya orqali ifodalanadi, keyin ularning tanlanma qiymati qo'yiladi.",
    life: "Do'kon bir kunda o'rtacha nechta buyurtma kelishini bilmoqchi. Eski kunlar ma'lumotidan \\(\\lambda\\) baholanadi.",
    solved: ["Puasson uchun \\(M(X)=\\lambda\\).", "Tanlanma o'rtacha \\(\\bar x=3.2\\).", "Momentlar bahosi: \\(\\hat\\lambda=3.2\\)."],
    warn: "EKOda ko'pincha logarifm olinadi: ko'paytma yig'indiga aylanadi.",
    remember: "Momentlar - tenglashtirish, EKO - eng katta ehtimollikni topish."
  },
  {
    icon: "📐",
    title: "Oraliqli baholar va ishonchlilik oralig'i",
    simple: "Bitta son bilan baholash o'rniga, parametr yotishi mumkin bo'lgan oraliq beriladi. 95% ishonchlilik oraliq ko'p takrorlansa, ularning taxminan 95% haqiqiy parametrni qamrab olishini bildiradi.",
    formulas: [
      "\\(\\bar x\\pm z_{\\alpha/2}\\frac{\\sigma}{\\sqrt n}\\)",
      "\\(\\bar x\\pm t_{\\alpha/2,n-1}\\frac{s}{\\sqrt n}\\)",
      "\\(\\frac{(n-1)s^2}{\\chi^2_{1-\\alpha/2}}<\\sigma^2<\\frac{(n-1)s^2}{\\chi^2_{\\alpha/2}}\\)"
    ],
    derivation: "O'rtacha qiymatning xatosi \\(\\sigma/\\sqrt n\\) ga teng. Ishonch darajasi jadval koeffitsienti bilan xatoni kengaytiradi.",
    life: "So'rovnomada o'rtacha xarajat 120 ming so'm, xatolik 8 ming bo'lsa, haqiqiy o'rtacha taxminan 112-128 ming oralig'ida.",
    solved: ["\\(\\bar x=80\\), \\(\\sigma=10\\), \\(n=25\\), 95% uchun \\(z=1.96\\).", "Xato: \\(1.96\\cdot10/5=3.92\\)", "Oraliq: \\((76.08;83.92)\\)."],
    warn: "\\(\\sigma\\) ma'lum bo'lsa z, noma'lum bo'lsa t jadval ishlatiladi.",
    remember: "Tanlanma ko'paysa, ishonch oralig'i torayadi."
  },
  {
    icon: "⚖️",
    title: "Statistik gipotezalar va ularni tekshirish",
    simple: "Gipoteza - parametr yoki taqsimot haqida taxmin. Tekshirishda nol gipoteza \\(H_0\\) va muqobil gipoteza \\(H_1\\) solishtiriladi.",
    formulas: [
      "Z mezon: \\(Z=\\frac{\\bar x-a_0}{\\sigma/\\sqrt n}\\)",
      "t mezon: \\(t=\\frac{\\bar x-a_0}{s/\\sqrt n}\\)",
      "p-value kichik bo'lsa \\(H_0\\) rad etiladi"
    ],
    derivation: "Kuzatilgan farq standart xatoga bo'linadi. Farq odatiy tebranishdan juda katta bo'lsa, \\(H_0\\) ga ishonish qiyin.",
    life: "Dori haqiqatan ta'sir qilyaptimi yoki natija tasodifmi? Gipoteza tekshirish shu savolga javob beradi.",
    solved: ["\\(H_0:a=50\\), \\(\\bar x=54\\), \\(s=8\\), \\(n=16\\).", "\\(t=(54-50)/(8/4)=2\\)", "Jadval bilan solishtirib qaror qilinadi."],
    warn: "Gipotezani 'isbotladik' demaymiz; rad etamiz yoki rad etishga asos yo'q deymiz.",
    remember: "\\(\\alpha\\) - xato qilishga rozi bo'lgan daraja, ko'pincha 0.05."
  },
  {
    icon: "✅",
    title: "Pirson va Kolmogorov tasdiqlash alomatlari",
    simple: "Bu testlar ma'lumot nazariy taqsimotga mos keladimi, shuni tekshiradi. Pirson chastotalarni, Kolmogorov empirik va nazariy taqsimot funksiyalarini solishtiradi.",
    formulas: [
      "Pirson: \\(\\chi^2=\\sum\\frac{(n_i-np_i)^2}{np_i}\\)",
      "Kolmogorov: \\(D_n=\\sup_x |F_n(x)-F(x)|\\)"
    ],
    derivation: "Kutilgan chastota va haqiqiy chastota orasidagi farqlar kvadratlanadi, chunki musbat-manfiy farqlar bekor bo'lmasin.",
    life: "O'yin toshi adolatlimi? 600 tashlashdagi chastotalar 100 atrofida bo'lishi kerak.",
    solved: ["6 tomonli tosh 60 marta tashlandi. Har tomon uchun kutilgan chastota 10.", "Har bir tomon bo'yicha \\((n_i-10)^2/10\\) hisoblanadi.", "Yig'indi jadval qiymati bilan solishtiriladi."],
    warn: "Pirsonda kutilgan chastotalar juda kichik bo'lmasligi kerak.",
    remember: "Moslik testida savol: 'ma'lumot shu taqsimotdan kelganmi?'"
  },
  {
    icon: "📈",
    title: "Korrelyatsion tahlil",
    simple: "Korrelyatsion tahlil ikki belgi orasidagi chiziqli bog'lanish kuchini baholaydi. U sabab-natijani emas, birga o'zgarishni ko'rsatadi.",
    formulas: [
      "\\(r=\\frac{\\sum (x_i-\\bar x)(y_i-\\bar y)}{\\sqrt{\\sum(x_i-\\bar x)^2\\sum(y_i-\\bar y)^2}}\\)",
      "\\(-1\\le r\\le1\\)"
    ],
    derivation: "Suratda X va Y og'ishlari birga ko'paytiriladi. Agar ikkalasi bir tomonga og'sa, ko'paytma musbat bo'ladi.",
    life: "Darsga qatnashish va ball orasida musbat korrelyatsiya bo'lishi mumkin.",
    solved: ["Agar \\(r=0.82\\), bog'lanish kuchli va musbat.", "Agar \\(r=-0.70\\), biri oshganda ikkinchisi kamayishga moyil."],
    warn: "Korrelyatsiya sababni isbotlamaydi.",
    remember: "r faqat chiziqli bog'lanishni yaxshi ushlaydi."
  },
  {
    icon: "📉",
    title: "Regressiya tahlili va eng kichik kvadratlar usuli",
    simple: "Regressiya bir o'zgaruvchi orqali ikkinchisini taxmin qiladi. Chiziqli regressiya \\(y=a+bx\\) ko'rinishida bo'ladi.",
    formulas: [
      "\\(\\hat y=a+bx\\)",
      "\\(b=\\frac{\\sum(x_i-\\bar x)(y_i-\\bar y)}{\\sum(x_i-\\bar x)^2}\\)",
      "\\(a=\\bar y-b\\bar x\\)",
      "EKK: \\(\\sum(y_i-\\hat y_i)^2\\to min\\)"
    ],
    derivation: "Eng kichik kvadratlar usuli haqiqiy y va chiziqdagi \\(\\hat y\\) orasidagi vertikal xatolar kvadratlari yig'indisini minimallashtiradi.",
    life: "Reklama xarajati x, savdo y. Regressiya kelasi haftadagi savdoni taxmin qilishga yordam beradi.",
    solved: ["\\(\\bar x=3\\), \\(\\bar y=10\\), \\(b=2\\).", "\\(a=10-2\\cdot3=4\\)", "Tenglama: \\(\\hat y=4+2x\\)."],
    warn: "Tenglama topilgach, x ni qo'yib prognoz qilinadi, lekin juda uzoq oraliqqa chiqarish xavfli.",
    remember: "Regressiya - taxmin qilish, korrelyatsiya - bog'lanishni o'lchash."
  },
  {
    icon: "🧭",
    title: "Chiziqli bo'lmagan regressiya va ko'p o'lchovli regressiya",
    simple: "Agar bog'lanish to'g'ri chiziq bo'lmasa, chiziqli bo'lmagan regressiya ishlatiladi. Bir nechta omil bo'lsa ko'p o'lchovli regressiya kerak bo'ladi.",
    formulas: [
      "Kvadratik: \\(y=a+bx+cx^2\\)",
      "Eksponensial: \\(y=ab^x\\)",
      "Ko'p omilli: \\(y=a+b_1x_1+b_2x_2+\\cdots+b_kx_k\\)"
    ],
    derivation: "Ba'zi chiziqli bo'lmagan modellar logarifm orqali chiziqlashtiriladi. Masalan \\(y=ab^x\\) uchun \\(\\ln y=\\ln a+x\\ln b\\).",
    life: "Narx, reklama va mavsum savdoga birga ta'sir qilsa, bitta x yetmaydi.",
    solved: ["\\(\\hat y=5+2x_1-0.5x_2\\).", "\\(x_1=10,x_2=4\\)", "\\(\\hat y=5+20-2=23\\)."],
    warn: "Ko'p omilli regressiyada omillar bir-biriga juda o'xshash bo'lsa natija beqaror bo'lishi mumkin.",
    remember: "Model shakli hayotiy mantiqqa mos bo'lishi kerak."
  },
  {
    icon: "🧪",
    title: "Dispersion tahlil",
    simple: "Dispersion tahlil bir nechta guruh o'rtachalari bir-biridan sezilarli farq qiladimi, shuni tekshiradi. U ANOVA deb ham ataladi.",
    formulas: [
      "\\(F=\\frac{MS_{between}}{MS_{within}}\\)",
      "\\(SS_{total}=SS_{between}+SS_{within}\\)"
    ],
    derivation: "Guruhlar orasidagi farq guruh ichidagi tabiiy tebranish bilan solishtiriladi. Agar orasidagi farq juda katta bo'lsa, guruhlar teng emas degan xulosa chiqadi.",
    life: "3 xil o'qitish usulidagi o'rtacha ballar farqlanadimi? ANOVA shu savolga javob beradi.",
    solved: ["Agar \\(F_{hisob}=5.2\\), jadval \\(F_{krit}=3.4\\).", "\\(5.2>3.4\\), demak o'rtachalar teng degan gipoteza rad etiladi."],
    warn: "ANOVA qaysi guruh farq qilganini emas, kamida bittasi farq qilishini ko'rsatadi.",
    remember: "2 guruh - t-test, 3 va undan ko'p guruh - ANOVA."
  }
];

const pdfGuideFixes = [
  {
    pattern: "PDFda A∪B, A∩B, A\\B yoki signalizator A va B hodisalari orqali 'xabar topish hodisasini ifodalang' kabi savollar keladi.",
    algorithm: ["Savoldagi gapni matematik tilga tarjima qil: 'yoki' = birlashma, 'va' = kesishma, 'faqat A' = \\(A\\setminus B\\).", "Agar 'kamida bittasi' deyilsa \\(A\\cup B\\), 'ikkalasi ham' deyilsa \\(A\\cap B\\).", "Agar 'faqat bittasi' deyilsa \\(A\\Delta B\\).", "Rasm chizish shart emas, lekin Venn diagrammani xayolda tasavvur qil."],
    example: "PDF uslubi: 2 ta signalizator bor. A va B - ularning ishlash hodisasi. Yong'indan xabar topish uchun kamida bittasi ishlasa yetadi. Demak javob: \\(A\\cup B\\). Agar 'faqat bittasi ishlasin' desa \\(A\\Delta B\\)."
  },
  {
    pattern: "Tanga 5-6 marta, 3 ta o'yin toshi, 1 dan 20 gacha nomerlangan sharlar, raqamli kartochkalar kabi savollarda avval umumiy natija soni kerak bo'ladi.",
    algorithm: ["Tajriba nechta bosqichdan iboratligini top.", "Har bosqichdagi variantlar sonini yoz: tanga 2, kubik 6, raqam 10, karta 36.", "Qaytarish bo'lsa bir xil sonlar ko'payadi: \\(6^3\\).", "Qaytarmay olish bo'lsa kamayadi: \\(20\\cdot19\\)."],
    example: "PDF uslubi: 3 ta o'yin toshi tashlandi. Har birida 6 imkon bor. Umumiy natija \\(6\\cdot6\\cdot6=216\\). Endi har qanday ehtimollik shu 216 ga bo'linadi."
  },
  {
    pattern: "PDFda '3 ta o'yin toshi tashlanganda 2 ta 1 raqam tushish', '36 kartadan 3 tasi olinadi', 'sharlar har xil rangda' kabi klassik ehtimolliklar ko'p.",
    algorithm: ["Umumiy imkonlar sonini top.", "Qulay imkonlarni alohida sana.", "Agar 'aynan' so'zi bo'lsa ortiqcha holatlarni qo'shma.", "Natijani \\(P=\\frac{qulay}{umumiy}\\) bilan yoz."],
    example: "PDF uslubi: 3 ta kubikda aynan 2 tasi 1 bo'lsin. Qaysi 2 kubikda 1 tushishini tanlaymiz: \\(C_3^2=3\\). Qolgan kubik 1 bo'lmasligi kerak: 5 imkon. Qulay \\(3\\cdot5=15\\), umumiy \\(216\\). Javob \\(15/216=5/72\\)."
  },
  {
    pattern: "Bir nechta quti, zavod, partiya, buyum sifati yoki nuqson sababdan natijaga o'tadigan savollar Bayes/to'la ehtimollikka kiradi.",
    algorithm: ["Sabablarni yoz: \\(H_1,H_2,\\ldots\\).", "Har sabab ulushi \\(P(H_i)\\) va natija ehtimoli \\(P(A|H_i)\\) ni jadval qil.", "Agar faqat natija ehtimoli so'ralsa: \\(P(A)=\\sum P(H_i)P(A|H_i)\\).", "Agar 'shu natija qaysi sababdan?' so'ralsa Bayes: surat bitta sabab, maxraj umumiy natija."],
    example: "Misol: 1-quti 40%, nuqson 1%; 2-quti 60%, nuqson 3%. Nuqson ehtimoli \\(0.4\\cdot0.01+0.6\\cdot0.03=0.022\\). Nuqson 2-qutidan bo'lish ehtimoli \\(0.6\\cdot0.03/0.022\\)."
  },
  {
    pattern: "PDFda 'oilada 5 ta farzand', 'o'yin toshini 4 marta tashlaganda 5 ochko ikki marta', 'mergan 8 ta o'q uzdi' kabi takroriy mustaqil tajribalar bor.",
    algorithm: ["Muvaffaqiyat nima ekanini belgila: o'g'il tug'ilishi, 5 tushishi, nishonga tegishi.", "\\(n\\), \\(k\\), \\(p\\), \\(q=1-p\\) ni ajrat.", "Aynan k marta bo'lsa \\(C_n^kp^kq^{n-k}\\).", "'Kamida' bo'lsa qarama-qarshi hodisa bilan tezroq hisobla."],
    example: "PDF uslubi: o'yin toshi 4 marta tashlandi, 5 ochko 2 marta tushsin. \\(n=4,k=2,p=1/6,q=5/6\\). \\(P=C_4^2(1/6)^2(5/6)^2=6\\cdot25/1296=25/216\\)."
  },
  {
    pattern: "PDFda '500 ta buyum, shikastlanish ehtimoli 0.002, kamida 3 ta shikastlansin' kabi n katta, p kichik savollar uchraydi.",
    algorithm: ["Bu kam uchraydigan hodisa ekanini tanib ol: \\(n\\) katta, \\(p\\) kichik.", "\\(\\lambda=np\\) ni top.", "Aynan k uchun Puasson formulasini ishlat.", "'Kamida 3' bo'lsa \\(1-P(0)-P(1)-P(2)\\) qil."],
    example: "PDF uslubi: 500 buyum, \\(p=0.002\\). \\(\\lambda=500\\cdot0.002=1\\). Kamida 3: \\(1-e^{-1}(1+1+1/2)=1-2.5/e\\approx0.0803\\)."
  },
  {
    pattern: "n katta bo'lgan binomial savollarda 'oraliqda', 'kamida', 'ko'pi bilan' kabi so'zlar bo'lsa Muavr-Laplas kerak bo'lishi mumkin.",
    algorithm: ["\\(npq\\) ni hisobla; katta bo'lsa normal yaqinlashish ishlaydi.", "Aynan bitta k so'ralsa lokal formulaga o't.", "Oraliq \\([a,b]\\) so'ralsa integral formulaga o't.", "Chegaralarni 0.5 tuzatish bilan standartlashtir: \\(a-0.5\\), \\(b+0.5\\)."],
    example: "Misol: 100 tajribada 45 dan 55 gacha muvaffaqiyat, \\(p=0.5\\). \\(np=50\\), \\(\\sqrt{npq}=5\\). \\(x_1=(44.5-50)/5=-1.1\\), \\(x_2=(55.5-50)/5=1.1\\). Jadvaldan \\(\\Phi(1.1)-\\Phi(-1.1)\\)."
  },
  {
    pattern: "Jadvalda X qiymatlar va p ehtimollar, yoki oddiy sonlar ketma-ketligi berilib \\(M(X),D(X),\\sigma\\) so'raladi.",
    algorithm: ["Agar ehtimollar berilgan bo'lsa \\(\\sum p_i=1\\) ekanini tekshir.", "\\(M=\\sum x_ip_i\\).", "\\(M(X^2)=\\sum x_i^2p_i\\).", "\\(D=M(X^2)-M^2\\), \\(\\sigma=\\sqrt D\\)."],
    example: "Jadval: X=0,1,2; p=0.2,0.5,0.3. \\(M=1.1\\). \\(M(X^2)=1.7\\). \\(D=1.7-1.21=0.49\\). \\(\\sigma=0.7\\)."
  },
  {
    pattern: "PDFdagi statistika savollarida 'moda', 'mediana', 'diskret qator', 'interval qator' degan so'zlar keladi.",
    algorithm: ["Diskret qator bo'lsa chastotasi eng kattasini top: shu moda.", "Mediana uchun yig'ilgan chastota \\(n/2\\) dan oshadigan birinchi qiymatni ol.", "Oddiy ro'yxatda sonlarni tartibla.", "Interval qator bo'lsa modal yoki median intervalni topib, formula bilan aniqlashtir."],
    example: "Oddiy: 2, 3, 3, 5, 8. Moda 3, mediana 3. Intervalda eng katta chastotali oraliq modal interval bo'ladi."
  },
  {
    pattern: "Oraliqlar va chastotalar jadvali beriladi: masalan 0-10, 10-20, 20-30. O'rtacha, dispersiya, moda yoki mediana so'raladi.",
    algorithm: ["Har interval markazini top: \\((a+b)/2\\).", "Markazni chastotaga ko'paytirib \\(\\sum x_in_i\\) hisobla.", "\\(\\bar x=\\sum x_in_i/n\\).", "Dispersiya uchun \\(\\sum x_i^2n_i/n-\\bar x^2\\)."],
    example: "Interval 10-20, chastota 4 bo'lsa markaz 15. Hisobda 10 yoki 20 emas, 15 ishlatiladi. Bu eng ko'p xato qilinadigan joy."
  },
  {
    pattern: "PDFda 'momentlar usuli bilan parametrni toping' va taqsimot nomi: Puasson, eksponensial, binomial, tekis berilishi mumkin.",
    algorithm: ["Taqsimotning nazariy kutilmasini yodda tut: Puasson \\(\\lambda\\), eksponensial \\(1/\\lambda\\), tekis \\((a+b)/2\\).", "Uni tanlanma o'rtachaga tengla.", "Bitta parametr bo'lsa shu tenglamadan top.", "Ikki parametr bo'lsa dispersiyani ham tengla."],
    example: "Eksponensial taqsimotda \\(M(X)=1/\\lambda\\). Tanlanma o'rtacha 5 bo'lsa \\(1/\\lambda=5\\), demak \\(\\lambda=0.2\\)."
  },
  {
    pattern: "Ishonchlilik 0.95 yoki 0.99, tanlanma o'rtacha, dispersiya, \\(n\\) berilib oraliq so'raladi.",
    algorithm: ["Parametr qaysi: matematik kutilmami yoki dispersiyami, aniqlang.", "\\(\\sigma\\) ma'lum bo'lsa z, noma'lum bo'lsa t ishlat.", "Xatolikni hisobla: jadval koeffitsienti \\(\\times\\) standart xato.", "Chap va o'ng chegarani alohida yoz."],
    example: "\\(\\bar x=80,\\sigma=10,n=25\\), 95% uchun \\(z=1.96\\). Xato \\(1.96\\cdot10/5=3.92\\). Oraliq \\((76.08;83.92)\\)."
  },
  {
    pattern: "x-y jadvali beriladi va 'regressiya tenglamasini toping' yoki 'x=... da y ni baholang' deyiladi.",
    algorithm: ["\\(\\bar x\\) va \\(\\bar y\\) ni hisobla.", "\\(b=\\frac{\\sum(x_i-\\bar x)(y_i-\\bar y)}{\\sum(x_i-\\bar x)^2}\\).", "\\(a=\\bar y-b\\bar x\\).", "Tenglama \\(\\hat y=a+bx\\), keyin kerakli x ni qo'y."],
    example: "Agar hisobdan \\(a=4,b=2\\) chiqsa, tenglama \\(\\hat y=4+2x\\). x=6 bo'lsa \\(\\hat y=16\\)."
  },
  {
    pattern: "X,Y jadval, \\(M(XY)\\), cov yoki corr so'raladi. Ba'zan 'X,Y erkli' deb ham yoziladi.",
    algorithm: ["\\(M(X)\\), \\(M(Y)\\), \\(M(XY)\\) ni top.", "\\(cov=M(XY)-M(X)M(Y)\\).", "\\(D(X),D(Y)\\) orqali \\(\\sigma_X,\\sigma_Y\\) ni top.", "\\(r=cov/(\\sigma_X\\sigma_Y)\\). Erkli bo'lsa \\(cov=0\\)."],
    example: "\\(M(X)=2,M(Y)=3,M(XY)=7\\). \\(cov=7-6=1\\). Agar \\(\\sigma_X=2,\\sigma_Y=1\\), \\(r=0.5\\)."
  },
  {
    pattern: "Zichlik \\(f(x)=c\\cdot ...\\) berilib c, \\(M(X)\\), \\(D(X)\\), mediana topish so'raladi.",
    algorithm: ["Avval \\(c\\) ni topmasdan boshqa narsaga o'tma.", "\\(\\int_a^b f(x)dx=1\\) dan c chiqadi.", "\\(M=\\int_a^b xf(x)dx\\), \\(M(X^2)=\\int_a^b x^2f(x)dx\\).", "Mediana uchun chapdan medianagacha integral 0.5 ga teng."],
    example: "\\([0,2]\\) da \\(f(x)=c\\). \\(2c=1\\), \\(c=0.5\\). Mediana m: \\(0.5m=0.5\\), demak \\(m=1\\)."
  },
  {
    pattern: "Normal zichlik formulasida A, a yoki \\(\\sigma\\) yashirin bo'ladi: \\(Ae^{-(x-a)^2/b}\\) ko'rinishi.",
    algorithm: ["Darajadagi \\((x-a)^2\\) dan o'rtacha \\(a\\) ni top.", "Maxrajni \\(2\\sigma^2\\) bilan tenglashtir.", "\\(A=1/(\\sigma\\sqrt{2\\pi})\\) ni yoz.", "Oraliq ehtimoli so'ralsa \\(Z=(X-a)/\\sigma\\) ga o't."],
    example: "\\(f(x)=Ae^{-(x-3)^2/8}\\). \\(a=3\\), \\(2\\sigma^2=8\\), \\(\\sigma=2\\). Shuning uchun \\(A=1/(2\\sqrt{2\\pi})\\)."
  },
  {
    pattern: "Ikki o'lchovli zichlikda uchburchak, kvadrat yoki to'rtburchak soha berilib c, \\(M(XY)\\), cov, corr so'raladi.",
    algorithm: ["Soha chegarasini to'g'ri yoz: x qayerdan qayergacha, y qayerdan qayergacha.", "\\(\\iint f(x,y)dxdy=1\\) dan c ni top.", "\\(M(XY)=\\iint xyf(x,y)dxdy\\).", "Kovariatsiya uchun \\(M(X)\\), \\(M(Y)\\) ham kerak bo'ladi."],
    example: "Birlik kvadratda \\(f(x,y)=c\\). Yuza 1, demak c=1. \\(M(XY)=\\int_0^1\\int_0^1xy\\,dxdy=1/4\\)."
  },
  {
    pattern: "PDFda avtomobil nomeri, ELEMENTAR so'zi, kitoblar yonma-yon, aylanma stol, raqamlar yig'indisi kabi savollar bor.",
    algorithm: ["Tartib muhimmi? So'z, nomer, joylashish bo'lsa odatda muhim.", "Yonma-yon turish bo'lsa kerakli obyektlarni bitta blok deb ol.", "Raqamlar takrorlanishi mumkinmi, shuni savoldan aniqlang.", "Qulay sonni umumiy songa bo'l."],
    example: "PDF uslubi: 10 ta kitobdan 2 qizil kitob yonma-yon tursin. 2 qizilni bitta blok deb olamiz: blok + 8 kitob = 9 obyekt. Ichkarida qizillar 2 xil joylashadi. Qulay \\(9!\\cdot2\\), umumiy \\(10!\\). Javob \\(2/10=1/5\\)."
  },
  {
    pattern: "PDFda birlik kesma, kvadrat, nuqtadan markazgacha yoki tomongacha masofa 0.1 dan oshmasin kabi savollar ko'p.",
    algorithm: ["Umumiy soha uzunligi/yuzasini top.", "Qulay sohani geometrik tasavvur qil.", "Kesma markazidan 0.1 bo'lsa qulay uzunlik 0.2.", "Kvadratda tomongacha masofa 0.1 dan oshmasin desa chetki halqa yuzasini ol."],
    example: "PDF uslubi: tomoni 1 bo'lgan kvadratda nuqtadan kvadrat tomonigacha masofa 0.1 dan oshmasin. Bu chetdagi halqa. Ichkarida qoladigan kvadrat tomoni \\(1-0.2=0.8\\), yuza \\(0.64\\). Qulay yuza \\(1-0.64=0.36\\)."
  }
];

const guides = [
  {
    icon: "∪",
    title: "To'plamlar: A∪B, A∩B, A\\B, AΔB",
    recognize: "Savolda birlashma, kesishma, ayirma, simmetrik ayirma yoki A va B hodisalar orqali ifodalash so'raladi.",
    algorithm: ["Belgilarni tarjima qil: yoki = ∪, va = ∩, emas = qarama-qarshi.", "Venn diagrammani xayolda chiz.", "Kerak bo'lsa formuladan foydalan: \\(A\\Delta B=(A\\setminus B)\\cup(B\\setminus A)\\)."],
    example: "Yong'inni A yoki B signalizator sezsa xabar keladi: \\(A\\cup B\\). Ikkalasi ham ishlasa: \\(A\\cap B\\)."
  },
  {
    icon: "Ω",
    title: "Elementar hodisalar fazosi hisoblash",
    recognize: "Tanga, o'yin toshi, shar, karta yoki raqam tanlashda 'nechta natija bor' mazmuni keladi.",
    algorithm: ["Tajriba nechta bosqichdan iboratligini top.", "Har bosqichdagi imkonlar sonini yoz.", "Mustaqil bosqichlar bo'lsa ko'paytir.", "Qaytarmay tanlansa imkonlar kamayishini hisobga ol."],
    example: "3 ta o'yin toshi tashlansa \\(|\\Omega|=6^3=216\\)."
  },
  {
    icon: "🎯",
    title: "Klassik ehtimollik",
    recognize: "Natijalar teng imkonli: karta, tanga, kubik, tartiblangan sharlar.",
    algorithm: ["Umumiy natijalar sonini top.", "Qulay natijalar sonini top.", "\\(P=m/n\\) ga qo'y.", "Kasrni qisqartir."],
    example: "3 ta o'yin toshida hammasi bir xil: qulay 6 ta, umumiy 216 ta, \\(P=6/216=1/36\\)."
  },
  {
    icon: "🧠",
    title: "To'la ehtimollik va Bayes",
    recognize: "Bir nechta zavod, quti, guruh, manba va keyin 'nuqson', 'tanlangan buyum' yoki 'qaysi manbadan' so'raladi.",
    algorithm: ["Sabablarni \\(H_i\\) deb ajrat.", "Har sabab ehtimoli va shartli ehtimolini yoz.", "Natija ehtimoli uchun \\(\\sum P(H_i)P(A|H_i)\\).", "Sabab so'ralsa Bayes suratini umumiy natijaga bo'l."],
    example: "2 quti: \\(P(H_1)=0.4,P(A|H_1)=0.1\\), \\(P(H_2)=0.6,P(A|H_2)=0.2\\). \\(P(A)=0.16\\)."
  },
  {
    icon: "🪙",
    title: "Bernulli formulasi",
    recognize: "Bir xil tajriba n marta takrorlanadi va aynan k marta muvaffaqiyat so'raladi.",
    algorithm: ["\\(n,k,p,q\\) ni ajrat.", "\\(C_n^k\\) ni hisobla.", "\\(C_n^kp^kq^{n-k}\\) ga qo'y.", "'Kamida' bo'lsa kerakli k larni qo'sh."],
    example: "5 farzanddan kamida 2 o'g'il: \\(P=1-P(0)-P(1)=1-1/32-5/32=26/32=13/16\\)."
  },
  {
    icon: "🚚",
    title: "Puasson formulasi",
    recognize: "n katta, p juda kichik: shikastlanish, xato, nosozlik, kam uchraydigan hodisa.",
    algorithm: ["\\(\\lambda=np\\) ni top.", "Aynan k uchun \\(\\lambda^ke^{-\\lambda}/k!\\).", "Kamida k bo'lsa qarama-qarshi hodisadan foydalan: \\(1-P(0)-...\\)."],
    example: "500 buyum, p=0.002. \\(\\lambda=1\\). Kamida 3 shikast: \\(1-e^{-1}(1+1+1/2)\\)."
  },
  {
    icon: "🔔",
    title: "Muavr-Laplas: lokal va integral",
    recognize: "n katta, p uncha kichik emas, binomialni normal bilan yaqinlashtirish kerak.",
    algorithm: ["\\(npq\\) ni hisobla.", "Aynan k bo'lsa lokal formuladan foydalan.", "Oraliq so'ralsa integral formuladan foydalan.", "\\(x=(k-np)/\\sqrt{npq}\\) standartlashtir."],
    example: "100 marta tajribada 45 dan 55 gacha muvaffaqiyat: \\(x_1=(44.5-np)/\\sqrt{npq}\\), \\(x_2=(55.5-np)/\\sqrt{npq}\\)."
  },
  {
    icon: "📊",
    title: "O'rta qiymat, dispersiya, sigma",
    recognize: "Jadvalda X qiymatlar va p ehtimollar beriladi yoki oddiy sonlar ro'yxati beriladi.",
    algorithm: ["\\(M(X)=\\sum xp\\) ni hisobla.", "\\(M(X^2)=\\sum x^2p\\) ni hisobla.", "\\(D=M(X^2)-M^2\\).", "\\(\\sigma=\\sqrt D\\)."],
    example: "X:0,1,2; p:0.2,0.5,0.3. \\(M=1.1,D=0.49,\\sigma=0.7\\)."
  },
  {
    icon: "🏷️",
    title: "Moda va mediana",
    recognize: "Eng ko'p uchraydigan qiymat yoki o'rtadagi qiymat so'raladi.",
    algorithm: ["Ma'lumotlarni o'sish tartibida yoz.", "Moda uchun eng katta chastotani top.", "Mediana uchun o'rtadagi qiymatni ol.", "Juft n bo'lsa ikki o'rtadagini o'rtachasini ol."],
    example: "2,3,3,5,8: moda 3, mediana 3."
  },
  {
    icon: "📚",
    title: "Interval qator uchun hisoblash",
    recognize: "Jadvalda oraliqlar: 10-20, 20-30 kabi beriladi.",
    algorithm: ["Har oraliq markazini top.", "Markazni chastotaga ko'paytir.", "O'rtacha uchun \\(\\sum x_in_i/n\\).", "Dispersiya uchun markazlar bilan hisobla."],
    example: "10-20 oraliq markazi 15. Chastota 4 bo'lsa hissasi 60."
  },
  {
    icon: "🧮",
    title: "Momentlar usuli",
    recognize: "Eksponensial, Puasson, binomial, tekis taqsimot parametrini momentlar usuli bilan topish so'raladi.",
    algorithm: ["Nazariy kutilmani yoz.", "\\(M(X)=\\bar x\\) deb tengla.", "Parametrni yech.", "Ikki parametr bo'lsa dispersiyani ham tengla."],
    example: "Eksponensialda \\(M=1/\\lambda\\). \\(\\bar x=4\\) bo'lsa \\(\\hat\\lambda=1/4\\)."
  },
  {
    icon: "📐",
    title: "Ishonchlilik oralig'i",
    recognize: "Ishonchlilik, 95%, 99%, matematik kutilma yoki dispersiya uchun oraliq so'raladi.",
    algorithm: ["\\(\\sigma\\) ma'lummi yoki yo'qligini aniqlang.", "z yoki t koeffitsientni tanlang.", "Xatoni hisoblang.", "\\(\\bar x\\pm\\) xato ko'rinishida yozing."],
    example: "\\(\\bar x=50, s=10, n=25, t\\approx2\\): oraliq \\(50\\pm2\\cdot10/5=(46;54)\\)."
  },
  {
    icon: "📈",
    title: "Regression tenglamalar",
    recognize: "x va y jadvali berilib, chiziqli yoki chiziqli bo'lmagan tenglama so'raladi.",
    algorithm: ["\\(\\bar x,\\bar y\\) ni top.", "\\(b\\) koeffitsientni hisobla.", "\\(a=\\bar y-b\\bar x\\).", "Tenglamani yoz va kerakli x uchun prognoz qil."],
    example: "\\(a=4,b=2\\) bo'lsa \\(\\hat y=4+2x\\). x=5 da \\(\\hat y=14\\)."
  },
  {
    icon: "🔗",
    title: "Kovariatsiya va korrelyatsiya",
    recognize: "X,Y jadvali, \\(M(XY)\\), cov yoki corr so'raladi.",
    algorithm: ["\\(M(X),M(Y),M(XY)\\) ni top.", "\\(cov=M(XY)-M(X)M(Y)\\).", "\\(r=cov/(\\sigma_X\\sigma_Y)\\)."],
    example: "\\(M(XY)=10,M(X)=2,M(Y)=4\\). \\(cov=10-8=2\\)."
  },
  {
    icon: "〰️",
    title: "Uzluksiz tasodifiy miqdor: c, M(X), D(X), mediana",
    recognize: "Zichlik \\(f(x)=c...\\) ko'rinishida beriladi.",
    algorithm: ["\\(\\int f(x)dx=1\\) dan c ni top.", "\\(M=\\int xf(x)dx\\).", "\\(D=\\int x^2f(x)dx-M^2\\).", "Mediana uchun \\(\\int_a^m f(x)dx=0.5\\)."],
    example: "0 dan 2 gacha \\(f(x)=c\\). \\(2c=1\\), demak \\(c=0.5\\), mediana 1."
  },
  {
    icon: "🔔",
    title: "Normal taqsimot: A va parametrlar",
    recognize: "Normal zichlikda noma'lum A, a yoki sigma beriladi.",
    algorithm: ["Normal formula bilan solishtir.", "Darajadagi \\((x-a)^2/(2\\sigma^2)\\) dan a va sigma top.", "Old koeffitsientdan A ni tekshir.", "Ehtimollik so'ralsa standartlashtir."],
    example: "\\(f(x)=A e^{-(x-3)^2/8}\\). Bu yerda \\(2\\sigma^2=8\\), \\(\\sigma=2\\), \\(A=1/(2\\sqrt{2\\pi})\\)."
  },
  {
    icon: "🗺️",
    title: "Ikki o'lchovli taqsimot",
    recognize: "\\(f(x,y)\\), \\(M(XY)\\), cov, corr yoki soha D beriladi.",
    algorithm: ["Soha chegaralarini yoz.", "\\(\\iint f=1\\) dan c ni top.", "\\(M(X),M(Y),M(XY)\\) integrallarini hisobla.", "Kovariatsiya va korrelyatsiyaga o't."],
    example: "Birlik kvadratda \\(f=c\\). \\(c=1\\), \\(M(XY)=\\int_0^1\\int_0^1 xy dxdy=1/4\\)."
  },
  {
    icon: "🔢",
    title: "Kombinatorika",
    recognize: "Raqamlar, harflar, joylashtirish, yonma-yon turish, avtomobil nomeri, kitoblar tartibi.",
    algorithm: ["Tartib muhimmi aniqlang.", "Takrorlanish bormi tekshiring.", "Permutatsiya, joylashish yoki kombinatsiyani tanlang.", "Qulay/umumiy nisbatni oling."],
    example: "ELEMENTAR so'zidan TEMA chiqishi: kerakli tartib bitta, umumiy joylashishlar takror harflarni hisobga olib sanaladi."
  },
  {
    icon: "📍",
    title: "Geometrik ehtimollik",
    recognize: "Kesma, kvadrat, doira, nuqta tashlash, masofa 0.1 dan oshmasin kabi savollar.",
    algorithm: ["Umumiy uzunlik/yuzani top.", "Qulay sohani chiz yoki tasavvur qil.", "Qulay/umumiy nisbatni ol.", "Chekkalardan masofa bo'lsa ichki yoki tashqi bo'lakni ehtiyot qil."],
    example: "Birlik kesmada nuqta markazdan 0.1 dan uzoq bo'lmasin: qulay uzunlik 0.2, umumiy 1, \\(P=0.2\\)."
  }
];

pdfGuideFixes.forEach((fix, index) => {
  if (guides[index]) Object.assign(guides[index], fix);
});
