import { Component, OnInit } from "@angular/core";
import { HeaderComponent } from "src/app/components/header/header.component";

@Component({
    selector: 'app-my-list',
    templateUrl: './my-list.component.html',
    styleUrls: ['./my-list.component.css'],
})
export class MyListComponent implements OnInit {
    contents: any[];
    ngOnInit(): void {
        this.contents = [
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
            }
        ];
    }
}