var movie = new Object();

movie.title = "Karate Kid"
movie.year = 1984
movie.showInfo = function() {
    console.log(`Titulo do filme: ${this.title}, lançado em: ${this.year}`)
}

movie.showInfo()

var serie = {
    title: 'Cobra Kai',
    seasons: 2,
    producer: 'Netflix',
    showInfo: function() {
        console.log(`Titulo da serie: ${this.title} - Temporadas: ${this.seasons} - Produtora: ${this.producer}`)
    }
}

serie.showInfo()

console.log(serie.title)
console.log(movie.title)