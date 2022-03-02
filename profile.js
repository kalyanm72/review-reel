function IncreaseRating(el){

    if(el.classList.contains("fa-star-half-stroke"))
    el.classList.remove("fa-star-half-stroke"),
    el.classList.add("fa-star");

    else if(el.classList.contains("fa-regular"))
    el.classList.remove("fa-star"),
    el.classList.remove("fa-regular"),
    el.classList.add("fa-star-half-stroke"),
    el.classList.add("fa-solid");


}

function DecreaseRating(el){

    if(el.classList.contains("fa-star-half-stroke"))
    el.classList.remove("fa-star-half-stroke"),
    el.classList.remove("fa-solid"),
    el.classList.add("fa-regular"),
    el.classList.add("fa-star");

    else if(el.classList.contains("fa-solid"))
    el.classList.remove("fa-star"),
    el.classList.add("fa-star-half-stroke");


}

function ChangeRatingDisplay(e,flg){
    let tgt_el = e.target;
    let card_stats = tgt_el.parentElement;

    if(flg==1){
        card_stats.children[7].classList.add('no-display');
        card_stats.children[1].classList.remove('no-display');
        card_stats.children[8].classList.remove('no-display');
        card_stats.children[9].classList.remove('no-display');
    }
    else{
        card_stats.children[7].classList.remove('no-display');
        card_stats.children[1].classList.add('no-display');
        card_stats.children[8].classList.add('no-display');
        card_stats.children[9].classList.add('no-display');
    }

}

function ChangeRating(e,flg){
    let tgt_el = e.target;
    let card_stats = tgt_el.parentElement;
    
    let rating = card_stats.children[0];

    let rating_num = parseFloat(rating.innerHTML);

    if(flg==1){
        if(rating_num<5)
        IncreaseRating(card_stats.children[Math.ceil(rating_num+0.1)+1]);

        rating_num = Math.min(rating_num+0.5,5);

        rating.innerHTML = rating_num;
    }
    else{
        if(rating_num>0)
        DecreaseRating(card_stats.children[Math.ceil(rating_num)+1]);

        rating_num = Math.max(rating_num-0.5,0);

        rating.innerHTML = rating_num;
    }
}