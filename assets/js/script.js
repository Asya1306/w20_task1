'use strict'
let json = `[{
    "name":"Бэтмен",
    "img": "assets/img/1.jpg",
    "superpower": "интеллект, обширные познания, знания боевых искусств, ловкость",
    "story": "По популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности."
},{
    "name":"Супермен",
    "img": "https://sun9-36.userapi.com/impg/_F6-QhAtSshPJHxVH3VzFmP5OGP9bTYqjYNq5Q/AD6u1VeQr64.jpg?size=604x604&quality=96&sign=bc98a7479a10667f88f23d03112def64&type=album",
    "superpower": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    "story": "Супермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты."
},{
    "name":"Дэдпул",
    "img": "https://phonoteka.org/uploads/posts/2021-06/thumbs/1624657959_36-phonoteka_org-p-oboi-dedpula-krasivo-36.jpg",
    "superpower": "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
    "story": "Как и Росомаха из Людей Икс, Дэдпул был подвергнут опытам по программе «Оружие Икс». Ученые попытались исцелить его рак, привив его клеткам способность к регенерации. Как и всегда в комиксах, что-то пошло не так, и Дэдпул остался изуродованным и психически нестабильным."
}]`;

document.addEventListener('DOMContentLoaded', function(event){
    const heroes = JSON.parse(json);
    let heroesContent = '';
    for (let hero of heroes) {
        heroesContent += `<div><h1>${hero.name}</h1><img src=${hero.img}><div><p>Суперспособности: ${hero.superpower}</p><p>Подробнее: ${hero.story}</p></div></div>`
    }
    document.getElementById('cards').innerHTML = heroesContent;
})

document.getElementById('batbtn').addEventListener('click', function(){
    const ratingBat = document.getElementById('selectbat').value;
    localStorage.setItem('ratingBatman', ratingBat);
})
document.getElementById('supermanbtn').addEventListener('click', function(){
    const ratingSuperman = document.getElementById('selectsuperman').value;
    localStorage.setItem('ratingSuperman', ratingSuperman);
})
document.getElementById('deadpoolbtn').addEventListener('click', function(){
    const ratingDeadpool = document.getElementById('selectdeadpool').value;
    localStorage.setItem('ratingDeadpool', ratingDeadpool);
})