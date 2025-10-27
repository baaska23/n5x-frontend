import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
    movies: any[];
    trendingMovies: any[];
    popularMovies: any[];
    continueWatching: any[];
    recentlyAdded: any[];

    // constructor(
    //     private dialogRef: DynamicDialogRef
    // )

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

    // onNew() {
    //     this._dialogRef = this._dialogService.open(TransactionFormComponent, {
    //         header: 'Гүйлгээ илгээх',
    //         width: '75vw',
    //         height: '75vw',
    //     });
    //     this._dialogRef.onClose.subscribe((v: string) => {});
    // }
}