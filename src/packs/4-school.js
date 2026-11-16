// TITLE: Places in a School
// EYEBROW: Go Getter 3 · 5 класс · Vocabulary · Places in a school · Места в школе
// SUB: 8 слов из рамки — canteen, classroom, computer room, gym, hall, library, playground, staff room. Карточки, правила чтения, потом много заданий про твою школу.
// BOARD: Твоя школа
// HOME: ../index.html
const META = { ls: "gg3-school" };
const P = [
  { id: "canteen", phrase: "canteen", ru: "столовая", img: "fork-and-knife-with-plate" },
  { id: "classroom", phrase: "classroom", ru: "класс, классная комната", img: "chair pencil" },
  { id: "computer", phrase: "computer room", ru: "компьютерный класс", img: "desktop-computer" },
  { id: "gym", phrase: "gym", ru: "спортзал", img: "basketball person-cartwheeling" },
  { id: "hall", phrase: "hall", ru: "актовый зал", img: "microphone" },
  { id: "library", phrase: "library", ru: "библиотека", img: "books" },
  { id: "playground", phrase: "playground", ru: "игровая площадка, школьный двор", img: "playground-slide" },
  { id: "staffroom", phrase: "staff room", ru: "учительская", img: "woman-teacher hot-beverage" }
];
const DRILLS = [
  { type: "rule", title: "Читаем правильно", short: "Чтение", instr: "Прочитай — эти слова часто читают неправильно.",
    blocks: [
      { h: "a + ll = [ɔː] «о-о»", lines: [
        ["h*all* [hɔːl]", "«хол» — актовый зал"],
        ["b*all*, t*all*, sm*all*, w*all*, f*oo*tb*all*", "то же самое: «бол», «тол», «смол», «вол»"]
      ] },
      { h: "library [ˈlaɪbrəri]", lines: [
        ["l*i*brary — «лайбрари»", "i читается как «ай»"],
        ["library = библиотека", "а не «либрари»!"]
      ] },
      { h: "gym [dʒɪm]", lines: [
        ["*g*ym — «джим»", "g перед y, i, e часто = «дж»"]
      ] },
      { h: "canteen [kænˈtiːn]", lines: [
        ["cant*ee*n — «кэнтИ:н»", "ee = долгое «и:», ударение на конце"]
      ] }
    ] },
  { type: "listenpic", title: "Послушай и найди", short: "Слушаем", instr: "Нажми 🔊, послушай слово и нажми на нужную картинку." },
  { type: "pic", title: "Где это?", short: "Картинки", instr: "Посмотри на картинку и выбери место в школе." },
  { type: "pick", title: "Прочитай и найди", short: "Читаем", instr: "Прочитай слово и нажми на нужную картинку." },
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английское слово, потом на перевод." },
  { type: "listen", title: "Послушай и переведи", short: "На слух", instr: "Нажми 🔊, послушай слово и выбери перевод." },
  { type: "ru2en", title: "Переведи на английский", short: "RU → EN", instr: "Прочитай слово по-русски и выбери английское." },
  { type: "en2ru", title: "Переведи на русский", short: "EN → RU", instr: "Прочитай слово по-английски и выбери перевод." },
  { type: "gaps", title: "Упражнение 4", short: "Упр. 4", keepOrder: true, instr: "Закончи предложения из учебника. Выбери слово.",
    items: [
      { id: "hall", img: "microphone", t: "We have assembly in the {{*hall|canteen|gym}}." },
      { id: "classroom", img: "chair pencil", t: "We have lessons in our {{*classroom|staff room|playground}}." },
      { id: "canteen", img: "fork-and-knife-with-plate", t: "We have lunch in the {{*canteen|library|computer room}}." },
      { id: "playground", img: "playground-slide", t: "After lunch, we play in the {{*playground|staff room|hall}}." },
      { id: "gym", img: "basketball person-cartwheeling", t: "We do P.E. in the {{*gym|library|canteen}}." },
      { id: "library", img: "books", t: "I sometimes do my homework in the {{*library|gym|playground}}." }
    ] },
  { type: "gaps", title: "Где мы?", short: "Где мы?", instr: "Прочитай и выбери, где это происходит.",
    items: [
      { id: "canteen", img: "fork-and-knife-with-plate", t: "We eat soup and drink juice here. — the {{*canteen|gym|library}}" },
      { id: "classroom", img: "chair pencil", t: "There are desks, chairs and a board here. We have our Maths lesson here. — the {{*classroom|canteen|playground}}" },
      { id: "computer", img: "desktop-computer", t: "We have IT lessons here. There are twenty computers. — the {{*computer room|staff room|hall}}" },
      { id: "gym", img: "basketball", t: "We play basketball and volleyball here. — the {{*gym|library|classroom}}" },
      { id: "hall", img: "microphone", t: "All the students meet here for assembly and school concerts. — the {{*hall|canteen|computer room}}" },
      { id: "library", img: "books", t: "It's quiet. You can read and take books home. — the {{*library|gym|playground}}" },
      { id: "playground", img: "playground-slide", t: "We play outside here in the break. — the {{*playground|staff room|classroom}}" },
      { id: "staffroom", img: "woman-teacher hot-beverage", t: "Teachers drink coffee and check our homework here. Students can't go in! — the {{*staff room|canteen|gym}}" }
    ] },
  { type: "tf", title: "Верно или нет?", short: "Верно?", instr: "Прочитай предложение. Если неверно — посмотри исправление.",
    items: [
      { id: "canteen", t: "We have lunch in the canteen.", ok: true },
      { id: "gym", t: "We read books in the gym.", ok: false, fix: "We read books in the library." },
      { id: "staffroom", t: "Teachers have meetings in the staff room.", ok: true },
      { id: "playground", t: "The playground is inside the school.", ok: false, fix: "The playground is outside the school." },
      { id: "computer", t: "We have IT lessons in the computer room.", ok: true },
      { id: "hall", t: "We have assembly in the canteen.", ok: false, fix: "We have assembly in the hall." },
      { id: "classroom", t: "We have lessons in the classroom.", ok: true },
      { id: "library", t: "The library is a noisy place.", ok: false, fix: "The library is a quiet place." }
    ] },
  { type: "gaps", title: "Впиши слово", short: "Впиши", instr: "Впиши место в школе. Подсказка — картинка.",
    items: [
      { id: "canteen", img: "fork-and-knife-with-plate", t: "I'm hungry! Let's go to the [[canteen]]." },
      { id: "library", img: "books", t: "I need a book about Ancient Egypt. I'm going to the [[library]]." },
      { id: "gym", img: "basketball person-cartwheeling", t: "Bring your trainers — we've got P.E. in the [[gym]]." },
      { id: "hall", img: "microphone", t: "The school concert is in the [[hall]] today." },
      { id: "playground", img: "playground-slide", t: "It's sunny. Let's play football in the [[playground]]." },
      { id: "staffroom", img: "woman-teacher hot-beverage", t: "Where is Mrs Smith? — She's in the [[staff room/staffroom]]." },
      { id: "computer", img: "desktop-computer", t: "We write emails in the [[computer room]]." },
      { id: "classroom", img: "chair pencil", t: "Our [[classroom]] is on the second floor." }
    ] },
  { type: "order", title: "Собери предложение", short: "Фразы", instr: "Нажимай на слова по порядку, чтобы получилось предложение.",
    items: [
      { id: "hall", img: "microphone", q: "У нас собрание в актовом зале.", s: "We have assembly in the hall." },
      { id: "canteen", img: "fork-and-knife-with-plate", q: "Мы обедаем в столовой.", s: "We have lunch in the canteen." },
      { id: "gym", img: "basketball", q: "Мы занимаемся физкультурой в спортзале.", s: "We do P.E. in the gym." },
      { id: "library", img: "books", q: "Иногда я делаю домашнее задание в библиотеке.", s: "I sometimes do my homework in the library." },
      { id: "playground", img: "playground-slide", q: "После обеда мы играем на площадке.", s: "After lunch, we play in the playground." },
      { id: "staffroom", img: "woman-teacher", q: "Учителя в учительской.", s: "The teachers are in the staff room." },
      { id: "computer", img: "desktop-computer", q: "В нашей школе есть компьютерный класс.", s: "There is a computer room in our school." },
      { id: "classroom", img: "chair pencil", q: "Наш класс большой и светлый.", s: "Our classroom is big and light." }
    ] },
  { type: "translate", title: "Переведи предложение", short: "Перевод", instr: "Напиши предложение по-английски. Главное — правильное слово.",
    items: [
      { id: "canteen", ru: "Столовая на первом этаже.", en: "The canteen is on the ground floor.", key: "canteen" },
      { id: "classroom", ru: "Наш класс очень чистый.", en: "Our classroom is very clean.", key: "classroom" },
      { id: "computer", ru: "Мне нравится компьютерный класс.", en: "I like the computer room.", key: "computer room" },
      { id: "gym", ru: "Спортзал большой.", en: "The gym is big.", key: "gym" },
      { id: "hall", ru: "Концерт в актовом зале.", en: "The concert is in the hall.", key: "hall" },
      { id: "library", ru: "В библиотеке тихо.", en: "It's quiet in the library.", key: "library" },
      { id: "playground", ru: "Мы играем на игровой площадке.", en: "We play in the playground.", key: "playground" },
      { id: "staffroom", ru: "Учительница в учительской.", en: "The teacher is in the staff room.", key: "staff ?room" }
    ] },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось слово." },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Посмотри на картинку и перевод и напиши слово. Забыл — вернись к карточкам." }
];
