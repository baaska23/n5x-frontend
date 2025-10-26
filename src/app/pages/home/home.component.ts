import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    movies: any[];
    trendingMovies: any[];
    popularMovies: any[];
    continueWatching: any[];
    recentlyAdded: any[];

    ngOnInit(): void {
        this.movies = [
            {
                name: 'Blue Eye Samurai',
                imgUrl: '/assets/public/movie/blue-eye-samurai.svg'
            },
            {
                name: 'Suits',
                imgUrl: '/assets/public/movie/suits.svg'
            },
            {
                name: 'Age of Samurai',
                imgUrl: '/assets/public/movie/age-of-samurai.svg'
            },
            {
                name: 'The Glory',
                imgUrl: '/assets/public/movie/glory.svg'
            },
            {
                name: 'Love Death Robot',
                imgUrl: '/assets/public/movie/love-death-robot.svg'
            },
            {
                name: 'Naruto',
                imgUrl: '/assets/public/movie/naruto.svg'
            },
            {
                name: 'Oldboy',
                imgUrl: '/assets/public/movie/oldboy.svg'
            },
            {
                name: 'Spider-Man: Homecoming',
                imgUrl: '/assets/public/movie/spider-man.svg'
            },
        ];

        this.trendingMovies = [...this.movies];
        this.popularMovies = [...this.movies];
        this.continueWatching = [...this.movies];
        this.recentlyAdded = [...this.movies];
    }
}