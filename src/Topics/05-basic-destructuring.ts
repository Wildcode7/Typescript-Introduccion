interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const AudioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 37,
    song: "Win",
    details: {
        author: 'JsionMraz',
        year: 2007

    }
}




const { song, songDuration, details } = AudioPlayer;
const { author } = details ;



// console.log('Song:', song);
// console.log('Duration:', songDuration);
// console.log('Author:', author)


export{};   

const [ , , Trunks = 'Personahje con paseo']: string[] = ['Goku', 'Vegeta'];



console.error('Persona 3:', Trunks);



