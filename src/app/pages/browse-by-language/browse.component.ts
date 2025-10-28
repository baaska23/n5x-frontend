import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-browse',
    templateUrl: './browse.component.html',
    styleUrls: ['./browse.component.css'],
})
export class BrowseComponent implements OnInit {
    selectedLanguage: any;
    selectedOriginals: any;
    selectedOption: any;
    languages: any[];
    originals: any[];
    options: any[];
    contents: any[];

    ngOnInit(): void {
        this.languages = [
            { name: 'English', code: 'EN' },
            { name: 'Spanish', code: 'ES' },
            { name: 'French', code: 'FR' },
            { name: 'Japanese', code: 'JA' },
            { name: 'Korean', code: 'KO' }
        ];

        this.originals = [
            { name: 'primary', code: 'PR' },
            { name: 'secondary', code: 'SC' },
        ];

        this.options = [
            { name: 'For you', code: 'S' },
            { name: 'Trending', code: 'T' },
        ];

        this.contents = [
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
            }
        ];
    }
}