const API_KEY = 'f4d66c492d624d70f6b06b3e7423008a';
const API_BASE = 'https://api.themoviedb.org/3'

/*
originais da netflix
recomendados
em alta (Top rated)
ação
comédia
romance
documentario
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return[
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para voce',
                items: await basicFetch(`/trending/all/week?lenguage=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/movie/popular?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/movie/popular?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/movie/popular?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/movie/popular?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/movie/popular?api_key=${API_KEY}&language=pt-BR`)
            }

        ];
    },

    getMovieInfo: async (movieId, type) => {
        let info = {}

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                default:
                    info = null;
                break;
            }

        }

        return info;
    }
}