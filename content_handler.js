let current_content_page = 1,max_pages = 3;

import {get_movies,items_per_page} from './movies_stats_handler.js';
let current_theme = localStorage.getItem('site-theme');

export function NextPage(){

    let pages = document.querySelector('.pagination');

    if(current_content_page==1)
    pages.firstElementChild.classList.remove('disabled');
    
    let curr_page = pages.children[current_content_page];
    
    let next_page = current_content_page<max_pages?pages.children[current_content_page+1]:curr_page;


    if (current_theme==0){
        curr_page.children[0].classList.remove('page-link-current');

        next_page.children[0].classList.add('page-link-current');
    }
    
    else{     
        curr_page.children[0].classList.remove('page-link-current-light');

        next_page.children[0].classList.add('page-link-current-light');
    }


    current_content_page = Math.min(current_content_page+1,max_pages);

    if(current_content_page==max_pages)
    pages.lastElementChild.classList.add('disabled');

    PopulateCards(current_content_page);

}

export function PrevPage(){

    let pages = document.querySelector('.pagination');

    if(current_content_page==max_pages)
    pages.lastElementChild.classList.remove('disabled');

    let curr_page = pages.children[current_content_page];
    
    let prev_page = current_content_page>1?pages.children[current_content_page-1]:curr_page;

    if(current_theme==0){
    curr_page.children[0].classList.remove('page-link-current');

    prev_page.children[0].classList.add('page-link-current');}
    else{
        curr_page.children[0].classList.remove('page-link-current-light');

    prev_page.children[0].classList.add('page-link-current-light');
    }

    current_content_page = Math.max(current_content_page-1,1);

    if(current_content_page==1)
    pages.firstElementChild.classList.add('disabled');

    PopulateCards(current_content_page);

}


export function ChangePage(page_num){

    let pages = document.querySelector('.pagination');

    if(current_content_page==1)
    pages.firstElementChild.classList.remove('disabled');

    if(current_content_page==max_pages)
    pages.lastElementChild.classList.remove('disabled');

    let curr_page = pages.children[current_content_page];
    
    let next_page = pages.children[page_num];

    if(current_theme==0){
    curr_page.children[0].classList.remove('page-link-current');

    next_page.children[0].classList.add('page-link-current');}
    else{
        curr_page.children[0].classList.remove('page-link-current-light');

        next_page.children[0].classList.add('page-link-current-light');
    }

    current_content_page = page_num;

    if(current_content_page==max_pages)
    pages.lastElementChild.classList.add('disabled');
    if(current_content_page==1)
    pages.firstElementChild.classList.add('disabled');

    PopulateCards(current_content_page);
}

function FilterMovies(movies){

    let genre = document.querySelector('#filter-genre');
    let year = document.querySelector('#filter-year');
    let ratings = document.querySelector('#ratings-sort');
    let search = document.querySelector('#search-value').value;
    let ratings_flg = 0;
    let views = document.querySelector('#views-sort');
    let views_flg = 0;

    genre = genre[genre.selectedIndex].value;
    year = year[year.selectedIndex].value;


    ratings_flg = ratings.classList.contains("fa-sort-down")?1:0;
    views_flg = views.classList.contains("fa-sort-down")?1:0;

    
    ratings_flg = ratings.classList.contains("fa-sort-up")?-1:0;
    views_flg = views.classList.contains("fa-sort-up")?-1:0;

    if(search!="")
    movies = movies.filter(movie=>movie.title.toLowerCase().includes(search));
    
    if(genre!='genre')
    movies = movies.filter(movie=>movie.genres.includes(genre));
    
    
    if(year!='year')
    movies = movies.filter(movie=>movie.year== parseInt(year));
    

    if(ratings_flg!=0)
    movies.sort((a, b)=> ratings_flg*(parseFloat(a.ratings) - parseFloat(b.ratings)));

    if(views_flg!=0)
    movies.sort((a, b)=> views_flg*(parseFloat(a.views) - parseFloat(b.views)));



    return movies;


}

export async function PopulateCards(page=1){   
    
    console.log('hi');

    let {movies,total} = await get_movies(page);

    let movies_stats = FilterMovies(movies);

    let content_row = document.querySelector('.content-main-row');

    let card_template = document.querySelector('#movies-card');

     
    while (content_row.lastElementChild) {
        if (content_row.lastElementChild.id != "movies-card")
        content_row.lastElementChild.remove();
        else
        break;
    }

    // console.log(card_template);

    let formatter = Intl.NumberFormat('en', { notation: 'compact' });

    movies_stats.forEach(movie=>{
        // console.log(movie.title || 'NA');


        let card_template_clone = card_template.content.firstElementChild.cloneNode(true);

        // console.log(card_template_clone.querySelector('.card-img-top').src);

        card_template_clone.querySelector('.card-title')
                            .innerHTML = movie.title || 'NA';

        card_template_clone.querySelector('.movie-ratings')
                            .innerHTML = parseFloat(movie.ratings || '0');
        card_template_clone.querySelector('.movie-likes')
                            .innerHTML = formatter.format(parseInt(movie.likes || '0'));
        card_template_clone.querySelector('.movie-views')
                            .innerHTML = formatter.format(parseInt(movie.views || '0'));
        card_template_clone.querySelector('.card-img-top')
                            .src = movie.poster_src || 'NA';

        content_row.appendChild(card_template_clone);

    });

    return total;

    
}



export function PopulatePageNumbers(num_movies){
    let template = document.querySelector('#movie-pages');
    let pages = document.querySelector('.pagination');

    let num_pages = Math.ceil(num_movies/items_per_page);


    for(let i=1;i<=num_pages;i++)
    {
        let template_clone = template.content.firstElementChild.cloneNode(true);

        let link = template_clone.querySelector('.page-link');

        link.addEventListener("click",function(){
            ChangePage(i)
        } ,false);

        link.innerHTML = i;

        if(i==1)
        link.classList.add('page-link-current');

        pages.insertBefore(template_clone,pages.lastElementChild);
    }

    pages.removeChild(pages.children[1]);


}


// await PopulateCards();
// PopulatePageNumbers(total_movies);




