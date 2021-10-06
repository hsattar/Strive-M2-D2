let favAlbums = [
    {
        img: 'images/1989.jfif',
        album: '1989',
        artist: 'Taylor Swift',
        genre: 'POP',
        length: '13 Songs',
        songs: [
            {
                name: 'Wildest Dreams',
                duration: '3:40'
            },
            {
                name: 'Style',
                duration: '3:51'
            },
            {
                name: 'Blank Space',
                duration: '3:52'
            }
        ]
    },
    {
        img: 'images/Dangerous Woman.jfif',
        album: 'Dangerous Woman',
        artist: 'Ariana Grande',
        genre: 'POP',
        length: '15 Songs',
        songs: [
            {
                name: 'Into You',
                duration: '4:04'
            },
            {
                name: 'Side To Side',
                duration: '3:46'
            },
            {
                name: 'Dangerous Woman',
                duration: '3:55'
            }
        ]
    },
    {
        img: 'images/Divide.jfif',
        album: 'Divide',
        artist: 'Ed Sheeran',
        genre: 'POP',
        length: '16 Songs',
        songs: [
            {
                name: 'Perfect',
                duration: '4:23'
            },
            {
                name: 'Shape Of You',
                duration: '3:53'
            },
            {
                name: 'Castle On The Hill',
                duration: '4:21'
            }
        ]
    },
    {
        img: 'images/Blue.jfif',
        album: 'Blue',
        artist: 'Jonas Blue',
        genre: 'Dance Music',
        length: '15 Songs',
        songs: [
            {
                name: 'Mama',
                duration: '3:04'
            },
            {
                name: 'Perfect Strangers',
                duration: '3:16'
            },
            {
                name: 'By Your Side',
                duration: '4:34'
            }
        ]
    },
    {
        img: 'images/AvaMax.jfif',
        album: 'Heaven & Hell',
        artist: 'Ava Max',
        genre: 'POP',
        length: '15 Songs',
        songs: [
            {
                name: 'Kings & Queens',
                duration: '2:43'
            },
            {
                name: 'So Am I',
                duration: '3:04'
            },
            {
                name: 'Sweet But Psycho',
                duration: '3:07'
            }
        ]
    },
    {
        img: 'images/Calvin.jfif',
        album: '18 Months',
        artist: 'Calvin Harris',
        genre: 'POP',
        length: '15 Songs',
        songs: [
            {
                name: 'I Need Your Love',
                duration: '3:54'
            },
            {
                name: 'We Found Love',
                duration: '3:35'
            },
            {
                name: 'Feel So Close',
                duration: '3:27'
            }
        ]
    },
]

let favAlbumsSection = document.getElementById('fav-albums')
let albumModalSection = document.getElementById('album-modal-section')

// for (let i = 0; i < favAlbums[0]['songs']; i++) {
//     console.log('test')
// }

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