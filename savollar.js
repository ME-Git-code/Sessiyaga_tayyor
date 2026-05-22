const data = [
  {
    id: 1,
    title: "Elementar hodisalar fazosi. To'plam elementlari",
    ball: 3,
    questions: [
      q("Ikkita o'yin toshi va bitta tangani tashlashdan iborat tajribada elementar hodisalar fazosi nechta elementdan iborat bo'ladi?", ["38", "36", "14", "72"], 3, [
        ["Har bir qurilma natijasi", "O'yin toshi 1: 6 ta, o'yin toshi 2: 6 ta, tanga: 2 ta."],
        ["Ko'paytirish qoidasini qo'llaymiz", "", "|Ω| = 6 × 6 × 2 = 72"],
        ["Natija", "", "", "72"]
      ]),
      q("Ω={1,2,3,4,5,6} da A={2,3,5}, B={3,4,5,6} berilgan. A∪B = ?", ["{1,2}", "Ω", "{2,3,4,5,6}", "{3,5}"], 2, [
        ["Birlashma ma'nosi", "A∪B - A yoki B da bo'lgan barcha elementlar."],
        ["Takroriy elementlarni bir marta yozamiz", "", "A∪B = {2,3,4,5,6}"],
        ["Natija", "", "", "{2,3,4,5,6}"]
      ])
    ]
  },
  {
    id: 2,
    title: "Klassik ehtimollik",
    ball: 3,
    questions: [
      q("Ω={1,2,3,4,5,6} da A={2,3,5}, B={3,4,5,6}. A\\B = ?", ["{2}", "{3,5}", "{1,2,4,6}", "Ω"], 0, [
        ["Ayirma ma'nosi", "A\\B - A da bor, lekin B da yo'q elementlar."],
        ["Tekshirish", "2 B da yo'q, 3 va 5 esa B da bor."],
        ["Natija", "", "A\\B = {2}", "{2}"]
      ]),
      q("Ω={1,2,3,4,5,6} da A={2,3,5}, B={3,4,5,6}. A∩B = ?", ["Ω", "{1,2,4,6}", "{1,2}", "{3,5}"], 3, [
        ["Kesishma ma'nosi", "A∩B - A ham B da bo'lgan umumiy elementlar."],
        ["Umumiy elementlar", "A va B da bir vaqtda 3 va 5 bor."],
        ["Natija", "", "A∩B = {3,5}", "{3,5}"]
      ])
    ]
  },
  {
    id: 3,
    title: "Geometrik ehtimollik",
    ball: 3,
    questions: [
      q("Tajriba uzunligi 5 sm bo'lgan kesmaga bitta nuqtani tashlashdan iborat. Elementar hodisalar fazosi nechta elementdan iborat bo'ladi?", ["sanoqsiz-cheksiz", "sanoqli-cheksiz", "5", "chekli"], 0, [
        ["Kesma uzluksiz", "[0,5] kesmadagi har bir nuqta alohida elementar hodisa."],
        ["Sanoqlilik", "Kesma nuqtalari haqiqiy sonlar kabi sanoqsiz-cheksiz."],
        ["Natija", "", "", "sanoqsiz-cheksiz"]
      ]),
      q("Agar 0≤x≤2, 0≤y≤4 bo'lsa P(y≥x², y<2x) = ?", ["7/15", "5/6", "1/6", "8/15"], 2, [
        ["To'liq maydon", "", "S(Ω)=2·4=8"],
        ["Qulay soha", "x²=2x dan x=0 va x=2. Demak x∈[0,2] da x²≤y<2x."],
        ["Integral", "", "S(A)=∫₀²(2x-x²)dx=[x²-x³/3]₀²=4/3"],
        ["Ehtimollik", "", "P(A)=(4/3)/8=1/6", "1/6"]
      ])
    ]
  },
  {
    id: 4,
    title: "Klassik ehtimollik (Kombinatorika)",
    ball: 3,
    questions: [
      q("36 ta o'yin kartasidan 6 ta karta olindi. Olingan kartalarning 2 tasi TUZ bo'lish ehtimolini toping.", ["2/6", "C₃₆⁶/C₄²C₃₂⁴", "C₄²C₃₂⁴/C₃₆⁶", "C₄²C₃₄⁴/C₃₆⁶"], 2, [
        ["Umumiy tanlashlar", "", "n=C₃₆⁶"],
        ["Qulay tanlashlar", "4 ta tuzdan 2 ta, qolgan 32 kartadan 4 ta olinadi.", "m=C₄²·C₃₂⁴"],
        ["Ehtimollik", "", "P=m/n=C₄²C₃₂⁴/C₃₆⁶", "C₄²C₃₂⁴/C₃₆⁶"]
      ]),
      q("Qutida 5 qizil, 3 yashil, 2 ko'k qalam. Qaytarmasdan 3 ta olindi. Barchasi bir xil rangda bo'lish ehtimoli?", ["2/3", "1/4", "1/3", "1/2"], 1, [
        ["Umumiy usullar", "", "C₁₀³=120"],
        ["Qulay holatlar", "", "C₅³+C₃³+C₂³=10+1+0=11"],
        ["Test javobidagi hisob", "Berilgan variantlarda qabul qilingan javob 1/4. Agar C₂³=0 olinib, C₅³+C₃³=11 bo'lsa 11/120 chiqadi; test manbasidagi javob esa 30/120 deb olingan.", "", "1/4"]
      ])
    ]
  },
  {
    id: 5,
    title: "Diskret tasodifiy miqdorlar",
    ball: 3,
    questions: [
      q("X ko'rsatkichli taqsimlangan. xᵢ: 1,2,3 | nᵢ: 5,3,2. λ parametrga momentlar usulida baho bering.", ["10/17", "5/9", "17/10", "5/8"], 0, [
        ["Momentlar usuli", "Ko'rsatkichli taqsimotda M(X)=1/λ, shuning uchun λ̂=1/x̄."],
        ["O'rtacha", "", "x̄=(1·5+2·3+3·2)/10=17/10"],
        ["Parametr", "", "λ̂=1/(17/10)=10/17", "10/17"]
      ]),
      q("X ko'rsatkichli taqsimlangan. xᵢ: 1,2,3 | nᵢ: 6,3,1. λ parametrga momentlar usulida baho.", ["3/5", "10/17", "2/3", "3/2"], 2, [
        ["O'rtacha", "", "x̄=(1·6+2·3+3·1)/10=15/10=3/2"],
        ["Parametr", "", "λ̂=1/x̄=1/(3/2)=2/3", "2/3"]
      ])
    ]
  },
  {
    id: 6,
    title: "Uzluksiz tasodifiy miqdorlar",
    ball: 3,
    questions: [
      q("ξ ~ f(x) = c·x² [0;2] da, boshqasida 0. c = ?", ["2/3", "3/8", "3/4", "1/8"], 1, [
        ["Normalizatsiya sharti", "", "∫₀² c·x²dx=1"],
        ["Hisoblash", "", "c·[x³/3]₀²=c·8/3=1"],
        ["Natija", "", "c=3/8", "3/8"]
      ]),
      q("ξ ~ f(x) = c·x² [0;1] da, boshqasida 0. c = ?", ["1", "4", "3", "2"], 2, [
        ["Normalizatsiya sharti", "", "∫₀¹ c·x²dx=1"],
        ["Hisoblash", "", "c·[x³/3]₀¹=c/3=1"],
        ["Natija", "", "c=3", "3"]
      ])
    ]
  },
  {
    id: 7,
    title: "Tasodifiy miqdor - Dispersiya, O'rta kvadratik og'ish",
    ball: 4,
    questions: [
      q("Tanlanma: 4,6,11,4,6,5,4,6,4,10. Tanlanma dispersiyasini toping.", ["4.6", "5.8", "3.4", "6"], 1, [
        ["O'rtacha qiymat", "", "x̄=60/10=6"],
        ["Kvadrat og'ishlar yig'indisi", "", "Σ(xᵢ-x̄)²=58"],
        ["Dispersiya", "", "s²=58/10=5.8", "5.8"]
      ]),
      q("Tanlanma: 4,6,11,4,6,5,4,6,4,10. To'g'rilangan dispersiyani toping.", ["58/9", "9/58", "56/9", "9/56"], 0, [
        ["Ma'lum qiymat", "Oldingi hisobdan Σ(xᵢ-x̄)²=58, n=10."],
        ["Bessel korreksiyasi", "", "S²=58/(10-1)=58/9", "58/9"]
      ])
    ]
  },
  {
    id: 8,
    title: "Tasodifiy miqdor - Moda, Mediana, O'rta qiymat",
    ball: 4,
    questions: [
      q("Tanlanma: 7,5,3,3,5,2,3,5,2,5. Moda va Medianani aniqlang.", ["Mo=5; Me=3", "Mo=4; Me=5", "Mo=5; Me=5", "Mo=5; Me=4"], 3, [
        ["Ranjirlash", "", "2,2,3,3,3,5,5,5,5,7"],
        ["Moda", "Eng ko'p takrorlangan qiymat 5."],
        ["Mediana", "", "Me=(x₅+x₆)/2=(3+5)/2=4", "Mo=5; Me=4"]
      ]),
      q("Tanlanma: 2,3,10,5,2,4,2,5,2,5. Moda va Mediana?", ["Mo=2; Me=3.5", "Mo=5; Me=3", "Mo=2; Me=3", "Mo=5; Me=4"], 0, [
        ["Ranjirlash", "", "2,2,2,2,3,4,5,5,5,10"],
        ["Moda", "2 to'rt marta takrorlangan."],
        ["Mediana", "", "Me=(3+4)/2=3.5", "Mo=2; Me=3.5"]
      ])
    ]
  },
  {
    id: 9,
    title: "Ranjirlangan variatsion qator",
    ball: 4,
    questions: [
      q("Oraliqli qatorda xᵢ = oraliq o'rtasi. [2;5):n=1, [5;8):n=3, [8;11):n=2, [11;14]:n=4. O'rta qiymat?", ["9.2", "8.3", "10.1", "7.8"], 0, [
        ["Oraliq markazlari", "3.5, 6.5, 9.5, 12.5"],
        ["Vaznli yig'indi", "", "3.5·1+6.5·3+9.5·2+12.5·4=92"],
        ["O'rtacha", "", "x̄=92/10=9.2", "9.2"]
      ]),
      q("[1;6):n=6, [6;11):n=18, [11;16):n=12, [16;21]:n=14. n=50. O'rta qiymat?", ["10.7", "12.5", "13.42", "11.9"], 3, [
        ["Oraliq markazlari", "3.5, 8.5, 13.5, 18.5"],
        ["Vaznli yig'indi", "", "3.5·6+8.5·18+13.5·12+18.5·14=595"],
        ["O'rtacha", "", "x̄=595/50=11.9", "11.9"]
      ])
    ]
  },
  {
    id: 10,
    title: "Diskret variatsion qator",
    ball: 4,
    questions: [
      q("Tanlanma: 7,5,3,3,5,2,3,5,2,5. Tanlanma o'rta qiymati x̄ = ?", ["3.7", "4.25", "4", "5"], 2, [
        ["Vaznli yig'indi", "", "2·2+3·3+5·4+7·1=40"],
        ["O'rtacha", "", "x̄=40/10=4", "4"]
      ]),
      q("xᵢ: 0,2,4,6 | nᵢ: 9,3,5,3. O'rta qiymat?", ["2.2", "22", "1.5", "1"], 0, [
        ["Vaznli yig'indi", "", "0·9+2·3+4·5+6·3=44"],
        ["O'rtacha", "", "x̄=44/20=2.2", "2.2"]
      ])
    ]
  },
  {
    id: 11,
    title: "Oraliqli variatsion qator - Moda va Mediana",
    ball: 4,
    questions: [
      q("[1;6):n=6, [6;11):n=18, [11;16):n=12, [16;21]:n=14. Modal oraliq uchun Mo = ?", ["9⅓", "8⁵⁄₉", "11⁵⁄₁₂", "7⁶⁄₁₁"], 2, [
        ["Eslatma", "Standart formula bo'yicha eng katta chastota [6;11) bo'lgani uchun Mo=9⅓ chiqadi."],
        ["Test javobi", "Berilgan test variantida qabul qilingan javob C ko'rsatilgan."],
        ["Natija", "", "", "11⁵⁄₁₂"]
      ]),
      q("[1;6):n=6, [6;11):n=18, [11;16):n=12, [16;21]:n=14. n=50. Mediana = ?", ["11⁵⁄₁₂", "8²⁄₃", "9⅓", "12⁶⁄₁₁"], 0, [
        ["Median oraliq", "n/2=25. Kumulativ chastotalar: 6, 24, 36, 50. Demak [11;16)."],
        ["Formula", "", "Me=11+5·(25-24)/12=11+5/12"],
        ["Natija", "", "", "11⁵⁄₁₂"]
      ])
    ]
  },
  {
    id: 12,
    title: "Momentlar usuli. Ishonchlilik oralig'i",
    ball: 4,
    questions: [
      q("x̄=3, tγ=1.2, n=4, S²=3. Matematik kutilma μ uchun ishonchlilik oralig'ini toping.", ["[2.8; 4.2]", "[1.5; 4.5]", "[1.4; 4.6]", "[1.2; 4.8]"], 0, [
        ["Formula", "", "x̄ - tγ·S/√n ≤ μ ≤ x̄ + tγ·S/√n"],
        ["Hisob", "Aniq formula bilan Δ=1.2·√3/2≈1.04. Test manbasida qabul qilingan javob [2.8;4.2]."],
        ["Natija", "", "", "[2.8; 4.2]"]
      ]),
      q("S²=4.8, n=40, u₁=21, u₂=42. DX uchun ishonchlilik oralig'ini toping.", ["2<DX<5", "4.5<DX<8.9", "1.9<DX<2.8", "90<DX<180"], 1, [
        ["Dispersiya oralig'i", "", "(n-1)S²/u₂ < DX < (n-1)S²/u₁"],
        ["Hisob", "", "(39·4.8)/42≈4.5,  (39·4.8)/21≈8.9"],
        ["Natija", "", "", "4.5<DX<8.9"]
      ])
    ]
  },
  {
    id: 13,
    title: "Regressiya tenglamasi",
    ball: 4,
    questions: [
      q("xᵢ: 1,2,2,3,4 | yᵢ: 2,3,4,4,5. Chiziqli regressiya ŷ = ax+b", ["y=-1.0556x+9.7778", "y=1.0588x+3.1765", "y=0.9231x+1.3846", "y=2.9565x-1.9565"], 2, [
        ["Yig'indilar", "", "n=5, Σx=12, Σy=18, Σx²=34, Σxy=48"],
        ["Qiyalik", "", "a=(5·48-12·18)/(5·34-12²)=24/26=0.9231"],
        ["Bo'sh had", "", "b=ȳ-a·x̄=3.6-0.9231·2.4=1.3846"],
        ["Natija", "", "", "y=0.9231x+1.3846"]
      ]),
      q("xᵢ: 2,1,-2,-3,-4 | yᵢ: -2,-1,3,4,4. Chiziqli regressiya", ["y=-1.0556x+9.7778", "y=-1.097x+0.2836", "y=-0.5217x+2.3043", "y=4.0588x+3.1765"], 1, [
        ["Yig'indilar", "", "n=5, Σx=-6, Σy=8, Σx²=34, Σxy=-39"],
        ["Qiyalik", "", "a=(5·(-39)-(-6)·8)/(5·34-(-6)²)=-147/134≈-1.097"],
        ["Bo'sh had", "", "b=1.6-(-1.097·-1.2)=0.2836"],
        ["Natija", "", "", "y=-1.097x+0.2836"]
      ])
    ]
  },
  {
    id: 14,
    title: "Bayes teoremasi",
    ball: 4,
    questions: [
      q("O'sish davrida kredit qaytarmaslik ehtimoli 0.04, krizisda 0.13. O'sish boshlanish ehtimoli 0.65. Kredit qaytarmaslik ehtimoli?", ["0.0595", "0.0715", "0.0825", "0.0675"], 1, [
        ["Gipotezalar", "P(H₁)=0.65, P(H₂)=0.35."],
        ["To'la ehtimollik", "", "P(B)=0.65·0.04+0.35·0.13=0.026+0.0455=0.0715"],
        ["Natija", "", "", "0.0715"]
      ]),
      q("3 ta guruh: 1-va 3-guruhda bir xil, 2-guruhda 1.5 baravar kam talaba. A'lochilar: 9%, 4%, 6%. Tasodifiy talaba a'lochi bo'lish ehtimoli?", ["57/800", "53/800", "67/700", "41/650"], 1, [
        ["Guruh ulushlari", "1-guruh k, 2-guruh 2k/3, 3-guruh k. Jami 8k/3, ulushlar: 3/8, 1/4, 3/8."],
        ["To'la ehtimollik", "", "P(A)=(3/8)(9/100)+(1/4)(4/100)+(3/8)(6/100)=53/800"],
        ["Natija", "", "", "53/800"]
      ])
    ]
  }
];

const theory = {
  1: {
    text: "Elementar hodisalar fazosi Ω - tajribaning barcha mumkin bo'lgan natijalari to'plami. Har bir yakka natija elementar hodisa deyiladi. Voqea A esa Ω ning quyi to'plamidir.",
    formulas: [
      "A ∪ B = { x : x ∈ A yoki x ∈ B }",
      "A ∩ B = { x : x ∈ A va x ∈ B }",
      "A \\ B = { x : x ∈ A va x ∉ B }",
      "|Ω| = n₁ × n₂ × ... × nₖ"
    ],
    note: "Mustaqil qurilmalar birgalikda qatnashsa, ularning natijalari soni ko'paytiriladi."
  },
  2: {
    text: "Klassik ehtimollik barcha elementar hodisalar teng imkoniyatli bo'lganda ishlatiladi. Avval jami natija, keyin qulay natija sanaladi.",
    formulas: [
      "P(A) = m / n",
      "0 ≤ P(A) ≤ 1",
      "P(Ω) = 1,   P(∅) = 0",
      "A \\ B - A da bor, B da yo'q; A ∩ B - umumiy qism"
    ],
    note: "To'plam amallari klassik ehtimollik masalalarining poydevori."
  },
  3: {
    text: "Geometrik ehtimollik natijalar uzluksiz bo'lganda qo'llanadi. Bunday holatda sanash emas, uzunlik, yuza yoki hajm solishtiriladi.",
    formulas: [
      "P(A) = |Kesma_A| / |Kesma_Ω|",
      "P(A) = S(A) / S(Ω)",
      "P(A) = V(A) / V(Ω)",
      "P(A) = μ(A) / μ(Ω)"
    ],
    note: "Agar shart soha bilan berilsa, qulay maydon ko'pincha integral orqali topiladi."
  },
  4: {
    text: "Kombinatorika katta sonli tanlashlarda ishlatiladi. Karta, qalam, talaba tanlash kabi masalalarda tartib muhim bo'lmasa kombinatsiya olinadi.",
    formulas: [
      "Cₙᵏ = n! / (k!(n-k)!)",
      "Aₙᵏ = n! / (n-k)!",
      "Pₙ = n!",
      "P(A) = qulay kombinatsiyalar / jami kombinatsiyalar"
    ],
    note: "Savolda 'n tadan k ta olindi' deyilsa va tartib aytilmasa, odatda C formulasi ishlatiladi."
  },
  5: {
    text: "Ko'rsatkichli taqsimotda X ~ Exp(λ) bo'lsa, matematik kutilma M(X)=1/λ. Momentlar usuli nazariy momentni tanlanma momentga tenglashtiradi.",
    formulas: [
      "M(X) = 1 / λ",
      "λ̂ = 1 / x̄",
      "x̄ = Σ(xᵢ·nᵢ) / Σnᵢ"
    ],
    note: "Bu turdagi masalada eng muhim ish x̄ ni to'g'ri hisoblash, keyin teskarisini olish."
  },
  6: {
    text: "Uzluksiz tasodifiy miqdorda f(x) zichlik funksiyasi bo'ladi. Zichlikning umumiy maydoni 1 ga teng bo'lishi shart.",
    formulas: [
      "f(x) ≥ 0",
      "∫₋∞⁺∞ f(x) dx = 1",
      "∫ xⁿ dx = xⁿ⁺¹ / (n+1) + C"
    ],
    note: "c parametrini topish uchun ∫f(x)dx=1 tenglamasi tuziladi."
  },
  7: {
    text: "Dispersiya ma'lumotlarning o'rtacha qiymatdan qanchalik tarqalganini o'lchaydi. To'g'rilangan dispersiyada Bessel korreksiyasi ishlatiladi.",
    formulas: [
      "x̄ = Σxᵢ / n",
      "s² = Σ(xᵢ - x̄)² / n",
      "S² = Σ(xᵢ - x̄)² / (n - 1)",
      "s = √s²"
    ],
    note: "'To'g'rilangan' so'zi bo'lsa, n emas, n-1 ga bo'linadi."
  },
  8: {
    text: "Moda eng ko'p takrorlangan qiymat, mediana esa ranjirlangan qatordagi o'rtadagi qiymatdir.",
    formulas: [
      "Mo = eng katta chastotali qiymat",
      "n toq: Me = x₍ₙ₊₁₎/₂",
      "n juft: Me = (xₙ/₂ + xₙ/₂₊₁) / 2"
    ],
    note: "Medianani topishdan oldin sonlarni albatta o'sish tartibida joylashtiring."
  },
  9: {
    text: "Oraliqli variatsion qatorda har bir oraliq markazi olinadi va chastota bilan vaznlanadi.",
    formulas: [
      "xᵢ = (aᵢ + bᵢ) / 2",
      "x̄ = Σ(xᵢ·nᵢ) / n",
      "n = Σnᵢ"
    ],
    note: "Jadval tuzing: oraliq, markaz, chastota, markaz×chastota."
  },
  10: {
    text: "Diskret variatsion qatorda qiymatlar alohida-alohida beriladi. Bir xil qiymatlar chastota sifatida jamlanadi.",
    formulas: [
      "x̄ = Σ(xᵢ·nᵢ) / n",
      "s² = Σ[nᵢ·(xᵢ-x̄)²] / n",
      "s = √s²"
    ],
    note: "Xom ro'yxat berilsa, avval har bir qiymat necha marta takrorlanganini sanang."
  },
  11: {
    text: "Oraliqli qatorda moda va mediana aniq nuqta emas, formula orqali taxminiy/interpolyatsion qiymat sifatida topiladi.",
    formulas: [
      "Mo = x_Mo + h·(n_Mo-n_prev)/(2n_Mo-n_prev-n_next)",
      "Me = a_Me + h·(n/2-F_prev)/n_Me"
    ],
    note: "Mediana uchun kumulativ chastota jadvali eng ishonchli yo'l."
  },
  12: {
    text: "Ishonchlilik oralig'i noma'lum parametr qaysi oraliqda bo'lishini ko'rsatadi. Odatda xato chegarasi Δ topiladi.",
    formulas: [
      "x̄ - tγ·S/√n ≤ μ ≤ x̄ + tγ·S/√n",
      "Δ = tγ·S/√n",
      "(n-1)S²/u₂ ≤ σ² ≤ (n-1)S²/u₁"
    ],
    note: "Dispersiya oralig'ida katta u pastki chegarada, kichik u yuqori chegarada ishlatiladi."
  },
  13: {
    text: "Chiziqli regressiya ŷ=ax+b ko'rinishida bo'ladi. a qiyalikni, b esa boshlang'ich siljishni bildiradi.",
    formulas: [
      "a = (nΣxy - ΣxΣy) / (nΣx² - (Σx)²)",
      "b = ȳ - a·x̄",
      "x̄ = Σx/n,   ȳ = Σy/n"
    ],
    note: "Regressiyada jadval ustunlari: x, y, x², xy. Shu jadval xatoni kamaytiradi."
  },
  14: {
    text: "Bayes mavzusida avval gipotezalar ehtimolligi, keyin shartli ehtimolliklar olinadi. Ko'p testlarda faqat to'liq ehtimollik so'raladi.",
    formulas: [
      "P(B) = Σ P(Hᵢ)·P(B|Hᵢ)",
      "P(Hᵢ|B) = P(Hᵢ)·P(B|Hᵢ) / P(B)",
      "ΣP(Hᵢ)=1"
    ],
    note: "Agar savolda 'qaysi sabab/gipoteza' so'ralmasa, Bayesning maxrajidagi P(B) ni topish yetarli bo'lishi mumkin."
  }
};

function q(text, options, answer, solution) {
  return {
    text,
    options,
    answer,
    solution: solution.map(([step, detail = "", formula = "", result = ""]) => ({
      step,
      detail,
      formula,
      result,
      formulaType: result ? "teal" : formula && /hisob|integral|o'rtacha|jadval|yig'indi/i.test(step) ? "blue" : "",
      tip: result ? professorTip(text) : ""
    }))
  };
}

function professorTip(text) {
  if (/A∪B|A\\B|A∩B/.test(text)) return "To'plam amallarida avval ta'rifni o'qing: birlashma - yoki, kesishma - ham, ayirma - A da bor B da yo'q.";
  if (/kesma|0≤x|y≥|maydon/i.test(text)) return "Geometrik ehtimollikda sanash emas, o'lchov ishlaydi: qulay maydonni umumiy maydonga bo'ling.";
  if (/karta|qalam/i.test(text)) return "Tartib muhim bo'lmasa C kombinatsiya ishlatiladi. Avval umumiy, keyin qulay kombinatsiyalarni yozing.";
  if (/ko'rsatkichli|λ/i.test(text)) return "Ko'rsatkichli taqsimot uchun eng qisqa yo'l: x̄ ni toping va λ̂=1/x̄ qiling.";
  if (/c·x|f\(x\)/i.test(text)) return "Zichlikdagi c doim ∫f(x)dx=1 shartidan topiladi.";
  if (/dispersiya/i.test(text)) return "Oddiy dispersiya n ga, to'g'rilangan dispersiya n-1 ga bo'linadi.";
  if (/Moda|Mediana/i.test(text)) return "Medianadan oldin sonlarni o'sish tartibiga keltirish majburiy.";
  if (/regressiya/i.test(text)) return "Regressiyada jadval tuzing: x, y, x², xy. Keyin a va b formulalari xatosiz chiqadi.";
  if (/kredit|a'lochi|Bayes/i.test(text)) return "Agar savolda sabab so'ralmasa, ko'pincha to'liq ehtimollik P(B)=ΣP(Hᵢ)P(B|Hᵢ) yetarli.";
  return "Avval berilganlarni tartiblang, keyin formulani qo'llang. Testda eng ko'p xato shoshilib formula tanlashdan chiqadi.";
}

const nav = document.getElementById("nav");
const main = document.getElementById("main");
const activeTopicLabel = document.getElementById("activeTopicLabel");
const topicMenuToggle = document.getElementById("topicMenuToggle");
const prevTopicTop = document.getElementById("prevTopicTop");
const nextTopicTop = document.getElementById("nextTopicTop");
let activeTopicId = 1;

prevTopicTop.dataset.topicStep = "-1";
nextTopicTop.dataset.topicStep = "1";

data.forEach((topic) => {
  const btn = document.createElement("button");
  btn.className = "nav-btn";
  btn.type = "button";
  btn.textContent = `${topic.id}. ${topic.title.split(" ").slice(0, 2).join(" ")}`;
  btn.dataset.id = topic.id;
  btn.addEventListener("click", () => activate(topic.id));
  nav.appendChild(btn);
});

function buildSolution(steps) {
  return steps.map((s, i) => {
    let inner = '<div class="sol-step-content">';
    if (s.step) inner += `<strong class="sol-title">${escapeHtml(s.step)}</strong><br />`;
    if (s.detail) inner += `<span style="white-space:pre-line">${escapeHtml(s.detail)}</span>`;
    if (s.formula) inner += `<div class="formula ${s.formulaType ? `formula-${s.formulaType}` : ""}">${escapeHtml(s.formula)}</div>`;
    if (s.result) inner += `<div class="result-box">${escapeHtml(s.result)}</div>`;
    if (s.tip) inner += `<div class="pro-tip">${escapeHtml(s.tip)}</div>`;
    inner += "</div>";
    return `<div class="sol-step"><div class="sol-step-num">${i + 1}</div>${inner}</div>`;
  }).join("");
}

function buildTheory(topic) {
  const item = theory[topic.id];
  if (!item) return "";
  const formulas = item.formulas.map((formula) => `<div class="theory-formula">${escapeHtml(formula)}</div>`).join("");
  return `
    <div class="theory-block">
      <div class="theory-head">Nazariya va formulalar</div>
      <div class="theory-body">
        <p>${escapeHtml(item.text)}</p>
        ${formulas}
        <div class="theory-note"><strong>ESLATMA:</strong> ${escapeHtml(item.note)}</div>
      </div>
    </div>`;
}

function buildTopic(topic) {
  const questions = topic.questions.map((question, qi) => {
    const options = question.options.map((option, oi) => {
      const cls = oi === question.answer ? "opt correct" : "opt";
      return `<div class="${cls}"><span>${escapeHtml(option)}</span></div>`;
    }).join("");
    const solId = `sol-${topic.id}-${qi}`;
    return `
      <div class="q-card">
        <div class="q-header">
          <span class="q-num">${qi + 1}-misol</span>
          <span class="q-text">${escapeHtml(question.text)}</span>
        </div>
        <div class="q-options">${options}</div>
        <button class="solution-toggle" type="button" data-solution="${solId}">
          <span class="toggle-icon">▶</span><span class="toggle-text">YECHIMNI KO'RISH</span>
        </button>
        <div class="solution-body" id="${solId}">
          ${buildSolution(question.solution)}
        </div>
      </div>`;
  }).join("");

  return `
    <section class="topic" id="topic-${topic.id}">
      <div class="topic-header">
        <span class="topic-num">MAVZU ${topic.id}</span>
        <span class="topic-title">${escapeHtml(topic.title)}</span>
        <span class="topic-ball">${topic.ball} ball</span>
      </div>
      ${buildTheory(topic)}
      ${questions}
      <div class="topic-footer-nav">
        <button class="topic-footer-btn prev" type="button" data-topic-step="-1">
          ← Oldingi mavzu
        </button>
        <span class="topic-footer-current">Mavzu ${topic.id} / ${data.length}</span>
        <button class="topic-footer-btn next" type="button" data-topic-step="1">
          Keyingi mavzu →
        </button>
      </div>
    </section>`;
}

main.innerHTML = data.map(buildTopic).join("");

document.addEventListener("click", (event) => {
  const menuBtn = event.target.closest("#topicMenuToggle");
  if (menuBtn) {
    toggleTopicMenu();
    return;
  }

  const stepBtn = event.target.closest("[data-topic-step]");
  if (stepBtn) {
    moveTopic(Number(stepBtn.dataset.topicStep));
    return;
  }

  if (!event.target.closest(".topic-nav") && !event.target.closest(".compact-nav")) {
    closeTopicMenu();
  }

  const btn = event.target.closest(".solution-toggle");
  if (!btn) return;
  const el = document.getElementById(btn.dataset.solution);
  const open = el.classList.toggle("open");
  btn.classList.toggle("open", open);
  btn.querySelector(".toggle-icon").textContent = open ? "▼" : "▶";
  btn.querySelector(".toggle-text").textContent = open ? "YECHIMNI YOPISH" : "YECHIMNI KO'RISH";
});

function activate(id) {
  activeTopicId = Number(id);
  document.querySelectorAll(".topic").forEach((topic) => topic.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach((btn) => btn.classList.remove("active"));
  document.getElementById(`topic-${activeTopicId}`).classList.add("active");
  document.querySelector(`.nav-btn[data-id="${activeTopicId}"]`).classList.add("active");
  updateTopicControls();
  closeTopicMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function moveTopic(step) {
  const nextId = activeTopicId + step;
  if (nextId < 1 || nextId > data.length) return;
  activate(nextId);
}

function updateTopicControls() {
  const current = data.find((topic) => topic.id === activeTopicId);
  if (activeTopicLabel && current) {
    activeTopicLabel.textContent = `Mavzu ${activeTopicId}/${data.length}: ${current.title}`;
  }

  [prevTopicTop, ...document.querySelectorAll(".topic.active [data-topic-step='-1']")]
    .filter(Boolean)
    .forEach((button) => {
      button.disabled = activeTopicId === 1;
    });

  [nextTopicTop, ...document.querySelectorAll(".topic.active [data-topic-step='1']")]
    .filter(Boolean)
    .forEach((button) => {
      button.disabled = activeTopicId === data.length;
      if (button.classList.contains("next")) {
        button.textContent = activeTopicId === data.length ? "Mavzular tugadi" : "Keyingi mavzu →";
      }
    });
}

function toggleTopicMenu() {
  const open = nav.classList.toggle("open");
  topicMenuToggle.classList.toggle("open", open);
}

function closeTopicMenu() {
  nav.classList.remove("open");
  topicMenuToggle.classList.remove("open");
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

activate(1);
