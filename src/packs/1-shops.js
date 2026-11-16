// TITLE: Shops
// EYEBROW: Go Getter 3 · 5 класс · Vocabulary · Shops · Магазины
// SUB: 9 слов из рамки — baker's, bookshop, chemist's, clothes shop, department store, greengrocer's, newsagent's, shoe shop, sports shop. Карточки с переводом и озвучкой, потом много заданий: слушаем, переводим, говорим в магазине.
// BOARD: Твои магазины
// HOME: ../index.html
const META = { ls: "gg3-shops" };
const P = [
  { id: "bakers", phrase: "baker's", ru: "булочная, пекарня", img: "baguette-bread cupcake", ans: "baker's/bakers" },
  { id: "bookshop", phrase: "bookshop", ru: "книжный магазин", img: "books" },
  { id: "chemists", phrase: "chemist's", ru: "аптека", img: "pill thermometer", ans: "chemist's/chemists" },
  { id: "clothes", phrase: "clothes shop", ru: "магазин одежды", img: "dress t-shirt" },
  { id: "department", phrase: "department store", ru: "универмаг", img: "department-store" },
  { id: "greengrocers", phrase: "greengrocer's", ru: "овощной магазин (фрукты и овощи)", img: "carrot red-apple", ans: "greengrocer's/greengrocers" },
  { id: "newsagents", phrase: "newsagent's", ru: "газетный киоск", img: "newspaper", ans: "newsagent's/newsagents" },
  { id: "shoeshop", phrase: "shoe shop", ru: "обувной магазин", img: "mans-shoe womans-boot" },
  { id: "sports", phrase: "sports shop", ru: "спортивный магазин", img: "tennis soccer-ball" }
];
const DRILLS = [
  { type: "listenpic", title: "Послушай и найди", short: "Слушаем", instr: "Нажми 🔊, послушай название магазина и нажми на нужную картинку." },
  { type: "pic", title: "Какой это магазин?", short: "Картинки", instr: "Посмотри, что там продают, и выбери магазин." },
  { type: "pick", title: "Прочитай и найди", short: "Читаем", instr: "Прочитай название магазина и нажми на нужную картинку." },
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английское слово, потом на перевод." },
  { type: "listen", title: "Послушай и переведи", short: "На слух", instr: "Нажми 🔊, послушай слово и выбери перевод." },
  { type: "ru2en", title: "Переведи на английский", short: "RU → EN", instr: "Прочитай слово по-русски и выбери английское." },
  { type: "en2ru", title: "Переведи на русский", short: "EN → RU", instr: "Прочитай слово по-английски и выбери перевод." },
  { type: "rule", title: "Почему baker's с апострофом?", short: "'s", instr: "Прочитай — это поможет не ошибаться в написании.",
    blocks: [
      { h: "'s = «магазин этого человека»", lines: [
        ["*baker's* = baker's shop", "булочная (магазин пекаря)"],
        ["*chemist's* = chemist's shop", "аптека (магазин аптекаря)"],
        ["*greengrocer's* = greengrocer's shop", "овощной (магазин зеленщика)"],
        ["*newsagent's* = newsagent's shop", "газетный киоск"]
      ] },
      { h: "А здесь слово shop / store уже есть", lines: [
        ["book*shop*, clothes *shop*, shoe *shop*, sports *shop*", "апостроф не нужен"],
        ["department *store*", "универмаг"]
      ] },
      { h: "Как сказать «в магазине»", lines: [
        ["Where can you buy bread? — *At the* baker's.", "Где можно купить хлеб? — В булочной."],
        ["I'm going *to the* chemist's.", "Я иду в аптеку."]
      ] }
    ] },
  { type: "gaps", title: "Где это купить? (упр. 6)", short: "Где купить?", instr: "Прочитай вопрос и выбери магазин.",
    items: [
      { id: "department", img: "couch-and-lamp", t: "Where can you buy a sofa, a skirt and a cup? — At a {{*department store|bookshop|newsagent's}}." },
      { id: "sports", img: "tennis running-shoe", t: "Where can you buy tennis balls and trainers? — At a {{*sports shop|baker's|chemist's}}." },
      { id: "chemists", img: "pill thermometer", t: "Where can you buy vitamins and a thermometer? — At the {{*chemist's|greengrocer's|shoe shop}}." },
      { id: "bakers", img: "bread birthday-cake", t: "Where can you buy bread and cakes? — At the {{*baker's|sports shop|clothes shop}}." },
      { id: "clothes", img: "jeans dress", t: "Where can you buy jeans and dresses? — At a {{*clothes shop|newsagent's|baker's}}." },
      { id: "newsagents", img: "newspaper magazine", t: "Where can you buy newspapers and magazines? — At the {{*newsagent's|chemist's|shoe shop}}." },
      { id: "greengrocers", img: "banana carrot", t: "Where can you buy fruit and vegetables? — At the {{*greengrocer's|bookshop|sports shop}}." },
      { id: "shoeshop", img: "hiking-boot mans-shoe", t: "Where can you buy boots and shoes? — At a {{*shoe shop|greengrocer's|department store}}." },
      { id: "bookshop", img: "books", t: "Where can you buy school books and comic books? — At a {{*bookshop|chemist's|baker's}}." }
    ] },
  { type: "gaps", title: "Ещё покупки", short: "Покупки", instr: "Где это продаётся? Выбери магазин.",
    items: [
      { id: "bakers", img: "croissant", t: "I want some croissants for breakfast. I'm going to the {{*baker's|newsagent's|shoe shop}}." },
      { id: "chemists", img: "adhesive-bandage", t: "Mum needs some plasters. She's at the {{*chemist's|bookshop|sports shop}}." },
      { id: "greengrocers", img: "tomato", t: "We need tomatoes for the salad. Let's go to the {{*greengrocer's|chemist's|clothes shop}}." },
      { id: "sports", img: "basketball", t: "My basketball is old. I need a new one from the {{*sports shop|baker's|greengrocer's}}." },
      { id: "shoeshop", img: "running-shoe", t: "These trainers are too small. Let's buy new ones at the {{*shoe shop|newsagent's|bookshop}}." },
      { id: "newsagents", img: "rolled-up-newspaper", t: "Dad reads a newspaper every morning. He buys it at the {{*newsagent's|greengrocer's|sports shop}}." },
      { id: "bookshop", img: "open-book", t: "I want a new book about animals. Let's go to the {{*bookshop|baker's|shoe shop}}." },
      { id: "clothes", img: "t-shirt", t: "I need a new T-shirt for the party. Let's go to a {{*clothes shop|chemist's|newsagent's}}." },
      { id: "department", img: "department-store", t: "It's a very big shop. You can buy clothes, toys and furniture there. It's a {{*department store|baker's|chemist's}}." }
    ] },
  { type: "tf", title: "Верно или нет?", short: "Верно?", instr: "Прочитай предложение. Если неверно — посмотри исправление.",
    items: [
      { id: "bakers", t: "You can buy bread at the baker's.", ok: true },
      { id: "newsagents", t: "You can buy bread at the newsagent's.", ok: false, fix: "You can buy newspapers at the newsagent's." },
      { id: "chemists", t: "You can buy vitamins at the chemist's.", ok: true },
      { id: "sports", t: "You can buy apples at the sports shop.", ok: false, fix: "You can buy apples at the greengrocer's." },
      { id: "shoeshop", t: "You can buy boots at the shoe shop.", ok: true },
      { id: "bookshop", t: "You can buy comic books at the bookshop.", ok: true },
      { id: "greengrocers", t: "You can buy trainers at the greengrocer's.", ok: false, fix: "You can buy trainers at the sports shop." },
      { id: "clothes", t: "You can buy jeans at the clothes shop.", ok: true },
      { id: "department", t: "A department store is a very small shop.", ok: false, fix: "A department store is a very big shop." }
    ] },
  { type: "gaps", title: "Напиши магазин", short: "Впиши", instr: "Впиши название магазина (можно смотреть на картинку).",
    items: [
      { id: "bakers", img: "baguette-bread cupcake", t: "Bread and cakes: the [[baker's/bakers]]" },
      { id: "chemists", img: "pill thermometer", t: "Medicine and vitamins: the [[chemist's/chemists]]" },
      { id: "greengrocers", img: "carrot red-apple", t: "Fruit and vegetables: the [[greengrocer's/greengrocers]]" },
      { id: "newsagents", img: "newspaper", t: "Newspapers and magazines: the [[newsagent's/newsagents]]" },
      { id: "bookshop", img: "books", t: "Books: a [[bookshop/book shop]]" },
      { id: "clothes", img: "dress t-shirt", t: "Skirts and T-shirts: a [[clothes shop]]" },
      { id: "shoeshop", img: "mans-shoe womans-boot", t: "Shoes and boots: a [[shoe shop]]" },
      { id: "sports", img: "tennis soccer-ball", t: "Balls and rackets: a [[sports shop]]" },
      { id: "department", img: "department-store", t: "Everything in one big shop: a [[department store]]" }
    ] },
  { type: "order", title: "Собери диалог", short: "Диалоги", instr: "Нажимай на слова по порядку, чтобы получилась фраза.",
    items: [
      { id: "bakers", img: "bread", q: "Где можно купить хлеб? — В булочной.", s: "Where can you buy bread? At the baker's." },
      { id: "chemists", img: "pill", q: "Где можно купить витамины? — В аптеке.", s: "Where can you buy vitamins? At the chemist's." },
      { id: "sports", img: "tennis", q: "Я иду в спортивный магазин.", s: "I'm going to the sports shop." },
      { id: "newsagents", img: "newspaper", q: "Папа в газетном киоске.", s: "Dad is at the newsagent's." },
      { id: "department", img: "department-store", q: "Универмаг очень большой.", s: "The department store is very big." },
      { id: "greengrocers", img: "red-apple", q: "Давай пойдём в овощной магазин!", s: "Let's go to the greengrocer's!" },
      { id: "bookshop", img: "books", q: "Рядом с моей школой есть книжный магазин.", s: "There is a bookshop near my school." },
      { id: "shoeshop", img: "mans-shoe", q: "Обувной магазин закрыт.", s: "The shoe shop is closed." }
    ] },
  { type: "translate", title: "Переведи предложение", short: "Перевод", instr: "Напиши предложение по-английски. Главное — правильно написать название магазина.",
    items: [
      { id: "bakers", ru: "Я покупаю хлеб в булочной.", en: "I buy bread at the baker's.", key: "baker'?s" },
      { id: "chemists", ru: "Мама в аптеке.", en: "Mum is at the chemist's.", key: "chemist'?s" },
      { id: "greengrocers", ru: "Где овощной магазин?", en: "Where is the greengrocer's?", key: "greengrocer'?s" },
      { id: "newsagents", ru: "Я покупаю журналы в газетном киоске.", en: "I buy magazines at the newsagent's.", key: "newsagent'?s" },
      { id: "bookshop", ru: "Мне нравится этот книжный магазин.", en: "I like this bookshop.", key: "book ?shop" },
      { id: "clothes", ru: "Магазин одежды — новый.", en: "The clothes shop is new.", key: "clothes shop" },
      { id: "shoeshop", ru: "Мне нужны ботинки. Пойдём в обувной магазин.", en: "I need boots. Let's go to the shoe shop.", key: "shoe shop" },
      { id: "sports", ru: "В нашем городе есть спортивный магазин.", en: "There is a sports shop in our town.", key: "sports? shop" },
      { id: "department", ru: "Универмаг очень большой.", en: "The department store is very big.", key: "department store" }
    ] },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось слово." },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Посмотри на картинку и перевод и напиши название магазина. Не забудь 's! Забыл — вернись к карточкам." }
];
