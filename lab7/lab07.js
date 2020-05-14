const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

let div = document.getElementsByClassName("justify");

for (let i = 0; i < works.length; i++) {
    div[0].append(createBox(works[i]));
}

function createBox(works) {
    let item = document.createElement("div");
    item.classList.add("item");
    let genre = document.createElement("h4");
    genre.innerText = "Genre:" + works.tips;
    item.append(genre);

    let innerBox1 = document.createElement("div");
    innerBox1.classList.add("inner-box");
    let author = document.createElement("h3");
    author.innerHTML = works.author+"&nbsp;&nbsp;";
    let lifetime = document.createElement("h4");
    lifetime.innerText = "lifetime:" + works.lifetime;
    author.style.display="inline";
    lifetime.style.display="inline";
    innerBox1.append(author, lifetime);
    item.append(innerBox1);

    let innerBox2 = document.createElement("div");
    innerBox2.classList.add("inner-box");
    let popular=document.createElement("h3");
    popular.innerHTML="Popular&nbsp;Photos";
    innerBox2.append(popular);

    for(let i=0;i<works.photos.length;i++){
        let photos=document.createElement("img");
        photos.classList.add("photo");
        photos.src=works.photos[i];
        innerBox2.append(photos);
    }
    item.append(innerBox2);

    let button = document.createElement("button");
button.innerText = "Visit";
    item.append(button);
    return item;
}