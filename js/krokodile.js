const words = {
    proffesions:["стриптизер", " сантехник", " сурдопереводчик", " крупье", " пожарный", " дальнобойщик", " психиатр", " лифтер", " прокурор", " акушерка", " скульптор", " режиссер", " кинолог", " космонавт", " инкассатор", " дипломат", " крановщик", " химик", " стюардесса", " мерчандайзер", " шахтер", " гинеколог", " пчеловод", " дизайнер", " электрик", " дрессировщик", " промоутер", " археолог", " ветеринар", " дровосек"],
    living:["хамелеон", " ротвейлер", " краб", " жук-навозник", " выхухоль", " морская звезда", " удав", " скунс", " саранча", " страус", " ленивец", " чихуахуа", " блоха", " енот-полоскун", " креветка", " божья коровка", " муравьед", " утконос", " колибри", " бобр", " пеликан", " павлин", " гусеница", " паук", " динозавр", " медуза", " улитка", " индюк", " дикобраз", " шиншилла"],
    aforizm:["подложить свинью", " как с гуся вода", " коту под хвост", " медвежья услуга", " заморить червячка", " когда рак на горе свистнет", " курам на смех", " волк в овечьей шкуре", " наступить на те же грабли", " кот в мешке", " не в своей тарелке", " скатертью дорога", " божий одуванчик", " красота требует жертв", " не разлей вода", " выносить сор из избы", " медведь на ухо наступил"],
    difficultWords: ["априори", " парадигма", " менталитет", " конъюнктура", " цивилизация", " перспектива", " резонанс", " империя", " эклектика", " аллегория", " концепция", " постоянство", " ресурс", " антураж", " латентность", " индустриализация", " кредо", " плюрализм", " судьба", " контекст", " конфигурация", " инфраструктура", " ассимиляция", " протеже", " коммунизм", " дежавю", " консерватизм", " волюнтаризм"],
    tv: ["Пока все дома", " Угадай мелодию", " Форт Боярд", " В мире животных", " Последний герой", " Поле чудес", " Дом-2", " Человек и закон", " Сам себе режиссер", " Модный приговор", " Comedy Club", " Звёзды на льду", " Давай поженимся", " Минута славы", " Ты не поверишь", " Пусть говорят", " Малахов +", " Аншлаг", " Наша Russia", " Большая разница", " Умники и умницы", " Что? Где? Когда? "],
    stars: ["Владимир Жириновский", " Мэрилин Мэнсон", " Никита Михалков", " Стас Михайлов", " Наполеон Бонапарт", " Леди Гага", " Элтон Джон", " Юрий Куклачев", " Майкл Джексон", " Юрий Гагарин", " Исаак Ньютон", " Ксения Собчак", " Джеки Чан", " Андрей Малахов", " Альберт Эйнштейн", " Алина Кабаева", " Иван Грозный", " Павел Воля", " Максим Галкин", " Верка Сердючка"],
    brands:["McDonald’s", " Apple", " Google", " Pampers", " Barbie", " Windows", " LEGO", " Ferrari", " Durex", " Bounty", " Twitter", " Gallina Blanca", " M&M’s", " Whiskas", " Playboy", " Chanel №5", " ВКонтакте", " Oriflame", " Ikea", " Duracell", " Jack Daniel’s", " Burn", "  Sprite", " Pedigree", " Nokia", " Raffaello", " Love Is", " Harley-Davidson", " Chupa Chups", " YouTube "],
    hero:["ихтиандр", " чукча", " Чак Норрис", " кентавр", " гейша", " Терминатор", " Cтарик Хоттабыч", " гопник", " трансвестит", " Муха-Цокотуха", " Котопес", " Бэтмен", " бомж", " Баба-Яга", " Шрэк", " инопланетянин", " Супермен", " Гомер Симпсон", " мачо", " хоббит", " доктор Хаус", " светская львица", " Джек-Воробей", " русалка", " девушка по вызову", " Винни-Пух", " Фредди Крюгер", " гном", " Колобок", " домовой "],
    hobby:["твистер", " дайвинг", " буккроссинг", " бодиарт", " паркур", " шоппинг", " пейнтбол", " серфинг", " настольный хоккей", " зорбинг", " поход", " брейк-данс", " оригами", " кроссворд", " покер", " танец живота", " экскурсия", " граффити", " цветоводство", " бумеранг", " кладоискательство", " роупджампинг", " КВН", " театр", " автостоп", " скалолазание", " Мафия", " бильярд", " опера", " Фотошоп "],
    rusSongs:["Миллион алых роз", " Люби меня по-французски", " Нас не догонят", " В лесу родилась елочка", " Ветер с моря дул", " Мама Люба", " Ах", " эта свадьба", " Земля в иллюминаторе", " Катюша", " Напилася я пьяна", " 18 мне уже", " Пусть всегда будет солнце", " Вахтерам", " Белая стрекоза любви", " Вою на луну", " Голая", " Полковнику никто не пишет", " Дельфин и русалка "],
    filmAndMult:["Аватар", " Человек-паук", " Американский пирог", " О чем говорят мужчины", " Интерны", " Один дома", " Симпсоны", " Кавказская пленница", " Стиляги", " Секс в большом городе", " Мадагаскар", " Кин-дза-дза", " Хатико", " Моя прекрасная няня", " Очень страшное кино", " Маша и медведь", " Мистер и миссис Смит", " Матрица", " Секс по дружбе", " Ну", " погоди! "]
};
const group = ['proffesions', 'living', 'aforizm', 'difficultWords', 'tv', 'stars', 'brands', 'hero', 'hobby', 'rusSongs', 'filmAndMult'];


function generateWords() {
    let getGroup = group[Math.floor(Math.random()*group.length)];
    let getWords = words[getGroup][Math.floor(Math.random()* words[getGroup].length)];
    words[getGroup].splice(getWords , 1);
    return getWords;

}
document.querySelector('.button').addEventListener('click',handleWord);
function handleWord() {
    let $word = document.querySelector('.word');
    let button = event.target;
    if (button.classList.contains('button')){
        $word.innerHTML = generateWords()
    }

}