export interface DataEntity {
  id: string;
}
export interface Movie extends DataEntity {
  director: string;
}
export interface Song extends DataEntity {
  singer: string;
}

export type DataEntityMap = {
  movie: Movie;
  song: Song;
};

export class DataStore {
  songs: Song[];
  movies: Movie[];
  
  constructor() {
    this.songs = [];
    this.movies = [];
  }

  getAllSongs(): Song[] {
    return this.songs;
  }
  getAllMovies(): Movie[] {
    return this.movies;
  }

  addSong(s: Song): Song {
    this.songs.push(s);
    return s;
  }
  addMovie(m: Movie): Movie {
    this.movies.push(m);
    return m;
  }

  clearSongs() {
    this.songs = [];
  }
  clearMovies() {
    this.movies = [];
  }
}
