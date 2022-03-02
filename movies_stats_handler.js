
export let items_per_page = 10;

export async function get_movies(page=1){
    let movies_stats = await fetch("data/movies-stats.json");
    movies_stats = await movies_stats.json();

    return {
        "total": movies_stats.length,
        "movies": movies_stats.splice(items_per_page*(page-1),items_per_page)
    }

}
