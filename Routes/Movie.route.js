
module.exports = function (app) {
    const Movie = require('../Controllers/Movie.controller')
    app.route('/v1/movie/add')
        .post(Movie._addMoviePostBody) //add post với data request body
    app.route('/v3/movie/get/id/:_id')
        .get(Movie._getMovieByID)// get phim by movie_id
    app.route('/v3/movie/get/full/:movie_id')
        .get(Movie._getMovie_detail_byID)// get full data phim by movie_id
    app.route('/v3/movie/get/category/:category_id')
        .get(Movie._getMovie_by_categoryID)// get data by category id
    app.route('/v3/movie/get/all')
        .get(Movie._getAllMovie)
    app.route('/v4/movie/update/:_id')
        .post(Movie._updateMovie)
    app.route('/v3/movie/get/create_at/:limit')
        .get(Movie._getMovieByCreate_at)
    app.route('/v3/movie/get/score')
        .get(Movie._getMovieByScore)

    app.route('/v5/movie/delete/:_id')
        .get(Movie._deleteMovie)

    app.route('/v2/movie/set/score/:_id')
        .get(Movie._setScore)
    app.route('/v6/movie/query/:text')
        .get(Movie._search)
    //views
    app.route('/movie-edit/:_id').get(Movie._showMovieEdit)
    app.route('/movie-add').get(Movie._showMovieAdd)
    app.route('/movie-list').get(Movie._showMovieList)
    app.route('/movie-update').get(Movie._showMovieUpdate)
    app.route('/v7/movie/remove/:_id').get(Movie._removeMovie)
    app.route('/v7/movie/enable/:_id').get(Movie._enableMovie)
};