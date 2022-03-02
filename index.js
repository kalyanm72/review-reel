
import {PopulateCards} from './content_handler.js';



export function ToggleNavbar(){
    let login_btns = document.querySelectorAll('.login-btn');
    let no_login_btns = document.querySelectorAll('.no-login-btn');

    login_btns.forEach(btn=>{

        if(btn.classList.contains("no-display"))
        btn.classList.remove("no-display");
        else
        btn.classList.add("no-display");

        // return btn;
    });

    console.log(login_btns);

    no_login_btns.forEach(btn=>{

        if(btn.classList.contains("no-display"))
        btn.classList.remove("no-display");
        else
        btn.classList.add("no-display");

        // return btn;
    });


}

export function Login(){

    ToggleNavbar()
    console.log('hi');
}

export function Logout(){
    ToggleNavbar()
}

export function FilterYearDropdown(){

    // console.log('hi');
    
    let filter = document.querySelector("#filter-year");
    
    // console.log(filter);

    let range = 50;
    let curr_yr = new Date().getFullYear()

    for(let i=0;i<=range;i++){
        let opt = document.createElement('option');

        opt.text = curr_yr-i;
        opt.value = curr_yr-i;

        filter.add(opt);

    }

    filter.onclick = "";

}

export function FilterGenreDropdown(){
    
    let filter = document.querySelector("#filter-genre");

    let genre_list = ['Action','Adventure','RomCom',
                    'Fiction','Science Fiction','Fantasy','Drama'];
    
    genre_list.forEach(genre => {

        let opt = document.createElement('option');

        opt.text = genre;
        opt.value = genre;

        filter.add(opt);
    });

    
    filter.onclick = "";

}

export function ToggleSort(e){
    let sort_icon = document.getElementById(e);

    if (sort_icon.classList.contains("fa-sort")){
        sort_icon.classList.remove("fa-sort");
        sort_icon.classList.add("fa-sort-up");
    }
    else if(sort_icon.classList.contains("fa-sort-up")){
        sort_icon.classList.remove("fa-sort-up");
        sort_icon.classList.add("fa-sort-down");
    }
    else{
        sort_icon.classList.add("fa-sort-up");
        sort_icon.classList.remove("fa-sort-down");
    }

    PopulateCards();
}