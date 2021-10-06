let favAlbumsSection = document.getElementById('fav-albums')

let favAlbums = [
    {
        img: 'images/1989.jfif',
        album: '1989',
        artist: 'Taylor Swift',
        genre: 'POP',
        length: '13 Songs'
    },
    {
        img: 'images/Dangerous Woman.jfif',
        album: 'Dangerous Woman',
        artist: 'Ariana Grande',
        genre: 'POP',
        length: '15 Songs'
    },
    {
        img: 'images/Divide.jfif',
        album: 'Divide',
        artist: 'Ed Sheeran',
        genre: 'POP',
        length: '16 Songs'
    },
    {
        img: 'images/Blue.jfif',
        album: 'Blue',
        artist: 'Jonas Blue',
        genre: 'Dance Music',
        length: '15 Songs'
    },
    {
        img: 'images/AvaMax.jfif',
        album: 'Heaven & Hell',
        artist: 'Ava Max',
        genre: 'POP',
        length: '15 Songs'
    },
    {
        img: 'images/Calvin.jfif',
        album: '18 Months',
        artist: 'Calvin Harris',
        genre: 'POP',
        length: '15 Songs'
    },
]

for (album of favAlbums) {
    favAlbumsSection.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <div class="card border">
            <img src="${album.img}" class="card-img-top" alt="...">
            <div class="card-body bg-dark">
                <h5 class="card-title">${album.album}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${album.artist}</h6>
                <p class="card-text">${album.genre}</p
                <p class="card-text">${album.length}</p>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">See Songs</button>
            </div>
        </div>
    </div>`
}