// TITLE: Describing Shops
// EYEBROW: Go Getter 3 · 5 класс · Vocabulary · Shops · Какие магазины? too / not … enough / (not) as … as
// SUB: 16 прилагательных из рамки упр. 7 — bad, boring, busy, cheap, clean, dirty, exciting, expensive… Карточки, противоположности, потом too, enough и as … as в предложениях.
// BOARD: Твои прилагательные
// HOME: ../index.html
const META = { ls: "gg3-describing" };
const P = [
  { id: "bad", phrase: "bad", ru: "плохой", img: "thumbs-down" },
  { id: "good", phrase: "good", ru: "хороший", img: "thumbs-up" },
  { id: "boring", phrase: "boring", ru: "скучный", img: "yawning-face" },
  { id: "exciting", phrase: "exciting", ru: "захватывающий, интересный", img: "star-struck" },
  { id: "busy", phrase: "busy", ru: "оживлённый, многолюдный", img: "busts-in-silhouette" },
  { id: "quiet", phrase: "quiet", ru: "тихий", img: "shushing-face" },
  { id: "cheap", phrase: "cheap", ru: "дешёвый", img: "coin" },
  { id: "expensive", phrase: "expensive", ru: "дорогой", img: "money-bag" },
  { id: "clean", phrase: "clean", ru: "чистый", img: "soap sparkles" },
  { id: "dirty", phrase: "dirty", ru: "грязный", img: "wastebasket fly" },
  { id: "friendly", phrase: "friendly", ru: "дружелюбный", img: "smiling-face-with-smiling-eyes" },
  { id: "long", phrase: "long", ru: "длинный, долгий", img: "hourglass-not-done" },
  { id: "short", phrase: "short", ru: "короткий", img: "stopwatch" },
  { id: "modern", phrase: "modern", ru: "современный", img: "office-building" },
  { id: "new", phrase: "new", ru: "новый", img: "new-button" },
  { id: "old", phrase: "old", ru: "старый", img: "derelict-house" }
];
const opp = (id, w, right, a, b) => ({ id, q: `The opposite of «${w}» is…`, o: [right, a, b] });
const DRILLS = [
  { type: "pic", title: "Какое слово?", short: "Картинки", instr: "Посмотри на картинку и выбери прилагательное." },
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английское слово, потом на перевод." },
  { type: "listen", title: "Послушай и переведи", short: "На слух", instr: "Нажми 🔊, послушай слово и выбери перевод." },
  { type: "ru2en", title: "Переведи на английский", short: "RU → EN", instr: "Прочитай слово по-русски и выбери английское." },
  { type: "en2ru", title: "Переведи на русский", short: "EN → RU", instr: "Прочитай слово по-английски и выбери перевод." },
  { type: "mcq", title: "Противоположности", short: "Наоборот", instr: "Выбери слово с противоположным значением.",
    items: [
      opp("good", "bad", "good", "busy", "long"), opp("bad", "good", "bad", "new", "quiet"),
      opp("exciting", "boring", "exciting", "dirty", "cheap"), opp("boring", "exciting", "boring", "modern", "friendly"),
      opp("quiet", "busy", "quiet", "short", "clean"), opp("busy", "quiet", "busy", "old", "good"),
      opp("expensive", "cheap", "expensive", "exciting", "dirty"), opp("cheap", "expensive", "cheap", "long", "boring"),
      opp("dirty", "clean", "dirty", "friendly", "new"), opp("clean", "dirty", "clean", "short", "busy"),
      opp("short", "long", "short", "quiet", "cheap"), opp("long", "short", "long", "good", "modern"),
      opp("old", "new", "old", "clean", "boring"), opp("new", "old", "new", "dirty", "expensive"),
      opp("modern", "old-fashioned", "modern", "quiet", "bad")
    ] },
  { type: "gaps", title: "Какой магазин?", short: "Описания", instr: "Прочитай и выбери подходящее слово.",
    items: [
      { id: "expensive", img: "money-bag", t: "The jeans cost 200 pounds! They are very {{*expensive|cheap|quiet}}." },
      { id: "cheap", img: "coin", t: "The cakes are only 50p. They are {{*cheap|expensive|long}}." },
      { id: "busy", img: "busts-in-silhouette", t: "There are a lot of people in the shop. It's very {{*busy|quiet|clean}}." },
      { id: "quiet", img: "shushing-face", t: "There's nobody in the library. It's {{*quiet|busy|exciting}}." },
      { id: "dirty", img: "wastebasket fly", t: "There is rubbish on the floor. The shop is {{*dirty|clean|new}}." },
      { id: "clean", img: "soap sparkles", t: "The floor is white and shiny. The shop is very {{*clean|dirty|bad}}." },
      { id: "friendly", img: "smiling-face-with-smiling-eyes", t: "The shop assistants always smile and help you. They're {{*friendly|boring|short}}." },
      { id: "long", img: "hourglass-not-done", t: "We wait for 30 minutes. The queue is very {{*long|short|cheap}}." },
      { id: "short", img: "stopwatch", t: "There are only two people in front of me. The queue is {{*short|long|busy}}." },
      { id: "modern", img: "office-building", t: "The shopping centre has got glass walls and robots. It's very {{*modern|old|dirty}}." },
      { id: "old", img: "derelict-house", t: "This bookshop is 150 years old. It's very {{*old|new|modern}}." },
      { id: "new", img: "new-button", t: "The sports shop opened last week. It's {{*new|old|boring}}." },
      { id: "boring", img: "yawning-face", t: "There is nothing interesting in this shop. It's {{*boring|exciting|friendly}}." },
      { id: "exciting", img: "star-struck", t: "The toy shop has got games, robots and a train. It's {{*exciting|boring|dirty}}!" },
      { id: "good", img: "thumbs-up", t: "The bread at this baker's is delicious. It's a {{*good|bad|quiet}} baker's." },
      { id: "bad", img: "thumbs-down", t: "The fruit at this greengrocer's is old. It's a {{*bad|good|modern}} shop." }
    ] },
  { type: "rule", title: "too / not … enough / (not) as … as", short: "Правило", instr: "Прочитай правило — оно нужно для упр. 7.",
    blocks: [
      { h: "too + прилагательное = слишком", lines: [
        ["The queues are *too long*.", "Очереди слишком длинные."],
        ["The jeans are *too expensive*.", "Джинсы слишком дорогие."]
      ] },
      { h: "not + прилагательное + enough = недостаточно", lines: [
        ["The shop *isn't big enough*.", "Магазин недостаточно большой."],
        ["The park *isn't clean enough*.", "Парк недостаточно чистый."]
      ] },
      { h: "enough стоит ПОСЛЕ прилагательного!", warn: true, lines: [
        ["big *enough* ✓   enough big ✗", "достаточно большой"]
      ] },
      { h: "as + прилагательное + as = такой же, как", lines: [
        ["My town is *as busy as* London.", "Мой город такой же оживлённый, как Лондон."],
        ["The department store in our town *isn't as big as* the stores in London.", "…не такой большой, как в Лондоне."]
      ] }
    ] },
  { type: "gaps", title: "too или enough?", short: "too/enough", instr: "Выбери правильный вариант.",
    items: [
      { id: "long", t: "The queues at the supermarket are {{*too long|long enough}}. We can't wait!" },
      { id: "expensive", t: "I can't buy these trainers. They're {{*too expensive|expensive enough}}." },
      { id: "busy", t: "There are too many people. The shop is {{*too busy|busy enough}}." },
      { id: "clean", t: "There is rubbish everywhere. The street isn't {{*clean enough|enough clean|too clean}}." },
      { id: "new", t: "My phone is very old. It isn't {{*new enough|enough new|too new}} for this game." },
      { id: "exciting", t: "This film is boring. It isn't {{*exciting enough|enough exciting|too exciting}}." },
      { id: "cheap", t: "I've got only 5 pounds. The book costs 20 pounds — it isn't {{*cheap enough|enough cheap|too cheap}}." },
      { id: "short", t: "The skirt is {{*too short|short enough}} — I need a longer one." },
      { id: "quiet", t: "I can't do my homework here. It isn't {{*quiet enough|enough quiet|too quiet}}." },
      { id: "dirty", t: "My boots are {{*too dirty|dirty enough}} to wear in the house." },
      { id: "modern", t: "The computers in our school are old. They aren't {{*modern enough|enough modern|too modern}}." },
      { id: "boring", t: "I don't like this shop. It's {{*too boring|boring enough}}." }
    ] },
  { type: "gaps", title: "as … as", short: "as … as", instr: "Впиши прилагательное из скобок. Помни: as + прилагательное + as.",
    items: [
      { id: "busy", t: "Our high street isn't as [[busy]] as Oxford Street in London. (busy)" },
      { id: "cheap", t: "The bread at the supermarket is as [[cheap]] as at the baker's. (cheap)" },
      { id: "modern", t: "Our shopping centre is as [[modern]] as the shopping centres in Moscow. (modern)" },
      { id: "expensive", t: "This T-shirt isn't as [[expensive]] as those jeans. (expensive)" },
      { id: "friendly", t: "The shop assistants here are as [[friendly]] as my friends! (friendly)" },
      { id: "old", t: "The bookshop isn't as [[old]] as the church. (old)" },
      { id: "clean", t: "Our school is as [[clean]] as a hospital. (clean)" },
      { id: "exciting", t: "The sports shop isn't as [[exciting]] as the toy shop. (exciting)" }
    ] },
  { type: "tf", title: "Найди ошибку", short: "Ошибки", instr: "Правильно ли составлено предложение?",
    items: [
      { id: "long", t: "The queues are too long.", ok: true },
      { id: "clean", t: "The shop isn't enough clean.", ok: false, fix: "The shop isn't clean enough.", why: "enough — после прилагательного." },
      { id: "busy", t: "Our town isn't as busy as London.", ok: true },
      { id: "expensive", t: "The jeans are too much expensive.", ok: false, fix: "The jeans are too expensive.", why: "too + прилагательное, без much." },
      { t: "The park is as big than the forest.", ok: false, fix: "The park is as big as the forest.", why: "as … as, не as … than." },
      { id: "cheap", t: "The cakes are cheap enough.", ok: true },
      { id: "quiet", t: "The library isn't as quiet the classroom.", ok: false, fix: "The library isn't as quiet as the classroom.", why: "Нужно второе as." },
      { id: "dirty", t: "The street is too dirty.", ok: true }
    ] },
  { type: "order", title: "Собери предложение", short: "Фразы", instr: "Нажимай на слова по порядку, чтобы получилось предложение.",
    items: [
      { id: "long", q: "Очереди в супермаркете слишком длинные.", s: "The queues at the supermarket are too long." },
      { id: "expensive", q: "Магазин одежды слишком дорогой.", s: "The clothes shop is too expensive." },
      { id: "clean", q: "Улица недостаточно чистая.", s: "The street isn't clean enough." },
      { id: "busy", q: "Наш город не такой оживлённый, как Лондон.", s: "Our town isn't as busy as London." },
      { id: "friendly", q: "Продавцы очень дружелюбные.", s: "The shop assistants are very friendly." },
      { id: "modern", q: "Торговый центр недостаточно современный.", s: "The shopping centre isn't modern enough." },
      { id: "cheap", q: "Булочная такая же дешёвая, как супермаркет.", s: "The baker's is as cheap as the supermarket." },
      { id: "boring", q: "Этот книжный магазин слишком скучный.", s: "This bookshop is too boring." }
    ] },
  { type: "translate", title: "Переведи предложение", short: "Перевод", instr: "Напиши по-английски. Используй too, enough или as … as.",
    items: [
      { id: "expensive", ru: "Эти кроссовки слишком дорогие.", en: "These trainers are too expensive.", key: "too expensive" },
      { id: "busy", ru: "Супермаркет слишком многолюдный.", en: "The supermarket is too busy.", key: "too busy" },
      { id: "short", ru: "Юбка слишком короткая.", en: "The skirt is too short.", key: "too short" },
      { id: "clean", ru: "Магазин недостаточно чистый.", en: "The shop isn't clean enough.", key: "clean enough" },
      { id: "quiet", ru: "Кафе недостаточно тихое.", en: "The café isn't quiet enough.", key: "quiet enough" },
      { id: "new", ru: "Мой телефон не такой новый, как твой.", en: "My phone isn't as new as yours.", key: "as new as" },
      { id: "old", ru: "Наш город такой же старый, как Москва.", en: "Our town is as old as Moscow.", key: "as old as" },
      { id: "friendly", ru: "Продавцы в булочной очень дружелюбные.", en: "The shop assistants at the baker's are very friendly.", key: "friendly" },
      { id: "dirty", ru: "Мои ботинки слишком грязные.", en: "My boots are too dirty.", key: "too dirty" },
      { id: "exciting", ru: "Спортивный магазин не такой интересный, как магазин игрушек.", en: "The sports shop isn't as exciting as the toy shop.", key: "as exciting as" }
    ] },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось слово." },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Посмотри на перевод и напиши прилагательное. Забыл — вернись к карточкам." }
];
