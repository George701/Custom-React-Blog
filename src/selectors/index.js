import {createSelector} from 'reselect';

const filtersGetters = state => state.filters;
const postsGetters = state => state.posts;

export const filteredPostsSelector = createSelector(postsGetters,filtersGetters, (posts, filters) => {
    const {selected, dateRange: {from, to}} = filters;

    console.log('---', 'recomputing filtration');

    return posts.filter(article => {
        const published = Date.parse(article.date);
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    });
});

// export function filterPosts({filters, posts}){
//     const {selected, dateRange: {from, to}} = filters;
//
//     return posts.filter(article => {
//         const published = Date.parse(article.date);
//         return (!selected.length || selected.includes(article.id)) &&
//             (!from || !to || (published > from && published < to))
//     });
// }