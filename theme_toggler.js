
export function ToggleTheme(){


    let current_theme = localStorage.getItem('site-theme')
                        ?1-parseInt(localStorage.getItem('site-theme'))
                        :0;

    localStorage.setItem('site-theme',current_theme);

    console.log('setting theme', localStorage.getItem('site-theme'));

    // sun-moon icon

    let theme_element = document.querySelector('.icon-theme');

    current_theme==0
        ?theme_element.classList.remove("fa-sun")
        :theme_element.classList.remove("fa-moon");

    current_theme==0
        ?theme_element.classList.add("fa-moon")
        :theme_element.classList.add("fa-sun");


    // navbar
    theme_element = document.querySelector('.navbar');

    current_theme==0
        ?theme_element.classList.remove("navbar-light")
        :theme_element.classList.remove("navbar-dark");

    current_theme==0
        ?theme_element.classList.add("navbar-dark")
        :theme_element.classList.add("navbar-light");


    // content-background
    theme_element = document.querySelector('.main-body-div');

    if(theme_element){

        current_theme==1?theme_element.classList.add('main-body-div-light')
                        :theme_element.classList.remove('main-body-div-light');


        
        // content-header
        theme_element = document.querySelectorAll('.content-header-div');

        current_theme==1?theme_element.forEach(el=>el.classList.add('content-header-div-light'))
                        :theme_element.forEach(el=>el.classList.remove('content-header-div-light'));

        // content-filters
        theme_element = document.querySelectorAll('.filter-select');

        current_theme==1?theme_element.forEach(el=>el.classList.add('filter-select-light'))
                        :theme_element.forEach(el=>el.classList.remove('filter-select-light'));

        
        // content-filters
        theme_element = document.querySelectorAll('.search-div');

        current_theme==1?theme_element.forEach(el=>el.classList.add('search-div-light'))
                        :theme_element.forEach(el=>el.classList.remove('search-div-light'));

                        

        // movie-card-details
        theme_element = document.querySelectorAll('.card-block');

        current_theme==1?theme_element.forEach(el=>el.classList.add('card-block-light'))
                        :theme_element.forEach(el=>el.classList.remove('card-block-light'));

        
        console.log(theme_element);

        // movie-card
        theme_element = document.querySelectorAll('.card');

        current_theme==1?theme_element.forEach(el=>el.classList.add('card-light'))
                        :theme_element.forEach(el=>el.classList.remove('card-light'));

        // navigation-pages
        theme_element = document.querySelectorAll('.page-link');

        current_theme==1?theme_element.forEach(el=>el.classList.add('page-link-light'))
                        :theme_element.forEach(el=>el.classList.remove('page-link-light'));

                        // navigation-pages
        theme_element = document.querySelectorAll('.page-link-current');

        current_theme==1?theme_element.forEach(el=>el.classList.add('page-link-current-light'))
                       :theme_element.forEach(el=>el.classList.remove('page-link-current-light'));
    }


    // profile page
    
    // content-background
    theme_element = document.querySelector('.profile-main');

    if(theme_element){

        current_theme==1?theme_element.classList.add('profile-main-light')
                       :theme_element.classList.remove('profile-main-light');

        
        theme_element = document.querySelector('.profile-info');

        current_theme==1?theme_element.classList.add('profile-info-light')
                       :theme_element.classList.remove('profile-info-light');


        theme_element = document.querySelector('.profile-img');

        current_theme==1?theme_element.classList.add('profile-img-light')
                       :theme_element.classList.remove('profile-img-light');

        theme_element = document.querySelector('.profile-name');

        current_theme==1?theme_element.classList.add('profile-name-light')
                       :theme_element.classList.remove('profile-name-light');

        theme_element = document.querySelector('.profile-interests');

        current_theme==1?theme_element.classList.add('profile-interests-light')
                       :theme_element.classList.remove('profile-interests-light');

        theme_element = document.querySelectorAll('.interest-pill');

        current_theme==1?theme_element.forEach(el=>el.classList.add('interest-pill-light'))
                       :theme_element.forEach(el=>el.classList.remove('interest-pill-light'));


        theme_element = document.querySelector('.user-reviews');

        current_theme==1?theme_element.classList.add('user-reviews-light')
                       :theme_element.classList.remove('user-reviews-light');
        
        
        
        theme_element = document.querySelectorAll('.card-block');

        current_theme==1?theme_element.forEach(el=>el.classList.add('card-block-light'))
                       :theme_element.forEach(el=>el.classList.remove('card-block-light'));
        
         
        
        theme_element = document.querySelectorAll('.card-title');

        current_theme==1?theme_element.forEach(el=>el.classList.add('card-title-light'))
                       :theme_element.forEach(el=>el.classList.remove('card-title-light'));

        theme_element = document.querySelectorAll('.ratings-icon');

        current_theme==1?theme_element.forEach(el=>el.classList.add('ratings-icon-light'))
                                      :theme_element.forEach(el=>el.classList.remove('ratings-icon-light'));

        theme_element = document.querySelectorAll('.rating-number');

        theme_element.forEach(el=>el.classList.toggle('rating-number-light'));

        


    }



















    
    // footer
    theme_element = document.querySelector('.footer');

    current_theme==0
        ?theme_element.classList.remove("footer-light")
        :theme_element.classList.remove("footer-dark");

    current_theme==0
        ?theme_element.classList.add("footer-dark")
        :theme_element.classList.add("footer-light");

    // footer-links
    theme_element = document.querySelectorAll('.footer-navlink');

    current_theme==0
        ?theme_element.forEach(el=>el.classList.remove("footer-navlink-light"))
        :theme_element.forEach(el=>el.classList.remove("footer-navlink-dark"))

        current_theme==0
        ?theme_element.forEach(el=>el.classList.add("footer-navlink-dark"))
        :theme_element.forEach(el=>el.classList.add("footer-navlink-light"))

    // social-icons-seperation
    theme_element = document.querySelectorAll('.social-sep-line');

    current_theme==0
        ?theme_element.forEach(el=>el.classList.remove("social-sep-line-light"))
        :theme_element.forEach(el=>el.classList.remove("social-sep-line-dark"))

        current_theme==0
        ?theme_element.forEach(el=>el.classList.add("social-sep-line-dark"))
        :theme_element.forEach(el=>el.classList.add("social-sep-line-light"));

    // footer-info seperation
    theme_element = document.querySelector('.footer-info-sep-line');

    current_theme==1?theme_element.classList.add('footer-info-sep-line-light')
                    :theme_element.classList.remove('footer-info-sep-line-light');

    // footer-info seperation
    theme_element = document.querySelector('.footer-info');

    current_theme==1?theme_element.classList.add('footer-info-light')
                    :theme_element.classList.remove('footer-info-light');



    // site-logo
    theme_element = document.querySelector('.site-logo-img');

    current_theme==0
        ?theme_element.src="Review Reel-dark.jpg"
        :theme_element.src="Review Reel-light.jpg";


}