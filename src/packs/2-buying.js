// TITLE: What Can You Buy?
// EYEBROW: Go Getter 3 · 5 класс · Vocabulary · Shops · Покупки из упражнения 6
// SUB: 19 слов — sofa, skirt, cup, trainers, vitamins, thermometer, magazines, comic books… Карточки, потом задания: где купить, переводим, пишем.
// BOARD: Твои покупки
// HOME: ../index.html
const META = { ls: "gg3-buying" };
const P = [
  { id: "sofa", phrase: "sofa", ru: "диван", img: "couch-and-lamp" },
  { id: "skirt", phrase: "skirt", ru: "юбка", img: "skirt" },
  { id: "cup", phrase: "cup", ru: "чашка", img: "hot-beverage" },
  { id: "tennisballs", phrase: "tennis balls", ru: "теннисные мячи", img: "tennis" },
  { id: "trainers", phrase: "trainers", ru: "кроссовки", img: "running-shoe" },
  { id: "vitamins", phrase: "vitamins", ru: "витамины", img: "pill" },
  { id: "thermometer", phrase: "thermometer", ru: "градусник, термометр", img: "thermometer" },
  { id: "bread", phrase: "bread", ru: "хлеб", img: "bread" },
  { id: "cakes", phrase: "cakes", ru: "торты, пирожные", img: "birthday-cake" },
  { id: "jeans", phrase: "jeans", ru: "джинсы", img: "jeans" },
  { id: "dresses", phrase: "dresses", ru: "платья", img: "dress" },
  { id: "newspapers", phrase: "newspapers", ru: "газеты", img: "newspaper" },
  { id: "magazines", phrase: "magazines", ru: "журналы", img: "magazine" },
  { id: "fruit", phrase: "fruit", ru: "фрукты", img: "banana grapes" },
  { id: "vegetables", phrase: "vegetables", ru: "овощи", img: "carrot broccoli" },
  { id: "boots", phrase: "boots", ru: "ботинки, сапоги", img: "hiking-boot" },
  { id: "shoes", phrase: "shoes", ru: "туфли, обувь", img: "mans-shoe" },
  { id: "schoolbooks", phrase: "school books", ru: "учебники", img: "school-backpack books" },
  { id: "comics", phrase: "comic books", ru: "комиксы", img: "superhero open-book" }
];
const SHOP = ["department store", "sports shop", "chemist's", "baker's", "clothes shop", "newsagent's", "greengrocer's", "shoe shop", "bookshop"];
const where = (id, img, word, right) => ({ id, img, q: `${word} — where can you buy them?`, o: [right, ...SHOP.filter(s => s !== right).sort(() => Math.random() - .5).slice(0, 3)] });
const DRILLS = [
  { type: "listenpic", title: "Послушай и найди", short: "Слушаем", instr: "Нажми 🔊, послушай слово и нажми на нужную картинку." },
  { type: "pic", title: "Что это?", short: "Картинки", instr: "Посмотри на картинку и выбери слово." },
  { type: "pick", title: "Прочитай и найди", short: "Читаем", instr: "Прочитай слово и нажми на нужную картинку." },
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английское слово, потом на перевод." },
  { type: "listen", title: "Послушай и переведи", short: "На слух", instr: "Нажми 🔊, послушай слово и выбери перевод." },
  { type: "ru2en", title: "Переведи на английский", short: "RU → EN", instr: "Прочитай слово по-русски и выбери английское." },
  { type: "en2ru", title: "Переведи на русский", short: "EN → RU", instr: "Прочитай слово по-английски и выбери перевод." },
  { type: "mcq", title: "В каком магазине?", short: "Магазин", instr: "Где это можно купить? Выбери магазин.",
    items: [
      where("sofa", "couch-and-lamp", "A sofa", "department store"),
      where("skirt", "skirt", "A skirt", "clothes shop"),
      where("tennisballs", "tennis", "Tennis balls", "sports shop"),
      where("trainers", "running-shoe", "Trainers", "sports shop"),
      where("vitamins", "pill", "Vitamins", "chemist's"),
      where("thermometer", "thermometer", "A thermometer", "chemist's"),
      where("bread", "bread", "Bread", "baker's"),
      where("cakes", "birthday-cake", "Cakes", "baker's"),
      where("jeans", "jeans", "Jeans", "clothes shop"),
      where("dresses", "dress", "Dresses", "clothes shop"),
      where("newspapers", "newspaper", "Newspapers", "newsagent's"),
      where("magazines", "magazine", "Magazines", "newsagent's"),
      where("fruit", "banana grapes", "Fruit", "greengrocer's"),
      where("vegetables", "carrot broccoli", "Vegetables", "greengrocer's"),
      where("boots", "hiking-boot", "Boots", "shoe shop"),
      where("shoes", "mans-shoe", "Shoes", "shoe shop"),
      where("schoolbooks", "books", "School books", "bookshop"),
      where("comics", "superhero open-book", "Comic books", "bookshop")
    ] },
  { type: "sort", title: "Одежда, обувь или еда?", short: "Группы", instr: "Разложи слова по группам.",
    buckets: ["👗 clothes", "👟 shoes", "🍞 food"],
    items: [
      { id: "skirt", img: "skirt", t: "a skirt", b: 0 }, { id: "jeans", img: "jeans", t: "jeans", b: 0 }, { id: "dresses", img: "dress", t: "dresses", b: 0 },
      { id: "trainers", img: "running-shoe", t: "trainers", b: 1 }, { id: "boots", img: "hiking-boot", t: "boots", b: 1 }, { id: "shoes", img: "mans-shoe", t: "shoes", b: 1 },
      { id: "bread", img: "bread", t: "bread", b: 2 }, { id: "cakes", img: "birthday-cake", t: "cakes", b: 2 }, { id: "fruit", img: "banana grapes", t: "fruit", b: 2 }, { id: "vegetables", img: "carrot broccoli", t: "vegetables", b: 2 }
    ] },
  { type: "gaps", title: "Список покупок", short: "Покупки", instr: "Прочитай и выбери слово.",
    items: [
      { id: "sofa", img: "couch-and-lamp", t: "We want to sit in the living room. We need a new {{*sofa|cup|skirt}}." },
      { id: "cup", img: "hot-beverage", t: "I want some tea. Can I have a {{*cup|boot|sofa}}, please?" },
      { id: "skirt", img: "skirt", t: "My sister wants a red {{*skirt|thermometer|bread}} for the party." },
      { id: "tennisballs", img: "tennis", t: "We play tennis on Saturdays. We need new {{*tennis balls|vitamins|newspapers}}." },
      { id: "trainers", img: "running-shoe", t: "I run in the park every day in my {{*trainers|cakes|magazines}}." },
      { id: "vitamins", img: "pill", t: "It's winter. Grandma takes {{*vitamins|jeans|comic books}} every morning." },
      { id: "thermometer", img: "thermometer", t: "I feel ill. Where is the {{*thermometer|sofa|skirt}}?" },
      { id: "bread", img: "bread", t: "Let's make sandwiches. We need {{*bread|boots|tennis balls}}." },
      { id: "cakes", img: "birthday-cake", t: "It's my birthday! Let's buy some {{*cakes|newspapers|trainers}}." },
      { id: "jeans", img: "jeans", t: "My favourite clothes are blue {{*jeans|vitamins|vegetables}} and a T-shirt." },
      { id: "dresses", img: "dress", t: "The clothes shop has got beautiful {{*dresses|thermometers|cups}}." },
      { id: "newspapers", img: "newspaper", t: "Grandad reads two {{*newspapers|cakes|boots}} every day." },
      { id: "magazines", img: "magazine", t: "I love {{*magazines|vitamins|sofas}} about animals and sport." },
      { id: "fruit", img: "banana grapes", t: "Apples, bananas and grapes are {{*fruit|vegetables|shoes}}." },
      { id: "vegetables", img: "carrot broccoli", t: "Carrots, potatoes and tomatoes are {{*vegetables|fruit|magazines}}." },
      { id: "boots", img: "hiking-boot", t: "It's cold and snowy. Put on your warm {{*boots|cups|cakes}}!" },
      { id: "shoes", img: "mans-shoe", t: "Dad needs black {{*shoes|bread|tennis balls}} for work." },
      { id: "schoolbooks", img: "school-backpack books", t: "My bag is very heavy. There are a lot of {{*school books|cakes|cups}} in it." },
      { id: "comics", img: "superhero open-book", t: "My brother loves Spider-Man {{*comic books|vitamins|boots}}." }
    ] },
  { type: "order", title: "Собери предложение", short: "Фразы", instr: "Нажимай на слова по порядку, чтобы получилось предложение.",
    items: [
      { id: "trainers", img: "running-shoe", q: "Где можно купить кроссовки?", s: "Where can you buy trainers?" },
      { id: "vitamins", img: "pill", q: "Мне нужны витамины.", s: "I need some vitamins." },
      { id: "cakes", img: "birthday-cake", q: "Можно мне два пирожных, пожалуйста?", s: "Can I have two cakes, please?" },
      { id: "jeans", img: "jeans", q: "Эти джинсы слишком дорогие.", s: "These jeans are too expensive." },
      { id: "comics", img: "superhero open-book", q: "Я люблю читать комиксы.", s: "I love reading comic books." },
      { id: "fruit", img: "banana grapes", q: "Фрукты и овощи полезны.", s: "Fruit and vegetables are healthy." },
      { id: "sofa", img: "couch-and-lamp", q: "Наш новый диван очень удобный.", s: "Our new sofa is very comfortable." }
    ] },
  { type: "translate", title: "Переведи предложение", short: "Перевод", instr: "Напиши по-английски. Главное — правильное слово.",
    items: [
      { id: "skirt", ru: "Это моя новая юбка.", en: "This is my new skirt.", key: "skirt" },
      { id: "cup", ru: "Можно мне чашку чая?", en: "Can I have a cup of tea?", key: "cup" },
      { id: "boots", ru: "Мои ботинки грязные.", en: "My boots are dirty.", key: "boots" },
      { id: "thermometer", ru: "Где градусник?", en: "Where is the thermometer?", key: "thermometer" },
      { id: "newspapers", ru: "Папа покупает газеты.", en: "Dad buys newspapers.", key: "newspapers" },
      { id: "magazines", ru: "Я читаю журналы.", en: "I read magazines.", key: "magazines" },
      { id: "vegetables", ru: "Я люблю овощи.", en: "I love vegetables.", key: "vegetables" },
      { id: "schoolbooks", ru: "Мне нужны новые учебники.", en: "I need new school books.", key: "school ?books" },
      { id: "tennisballs", ru: "У меня есть три теннисных мяча.", en: "I've got three tennis balls.", key: "tennis balls" },
      { id: "shoes", ru: "Эти туфли красивые.", en: "These shoes are beautiful.", key: "shoes" }
    ] },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось слово." },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Посмотри на картинку и перевод и напиши слово. Забыл — вернись к карточкам." }
];
