import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
    movieDetail: any;
    mlks: any[];

    ngOnInit(): void {

        this.mlks = [
            {
                bannerUrl: "/assets/public/dialog/movie1.svg",
                releasedYear: 2000,
                description: 'Commodo nulla fugiat nostrud do qui. Exercitation occaecat fugiat deserunt ex fugiat commodo ut et et excepteur. In cillum laborum tempor pariatur non sunt.'
            },
            {
                bannerUrl: "/assets/public/dialog/movie2.svg",
                releasedYear: 2000,
                description: 'Occaecat eiusmod est deserunt cupidatat non labore ut tempor enim cillum sit. Et proident irure do eiusmod nulla dolore. Dolor aute dolor Lorem fugiat ut velit laborum consectetur qui ullamco excepteur excepteur. Consectetur Lorem velit sunt esse dolore adipisicing esse laboris.'
            },
            {
                bannerUrl: "/assets/public/dialog/movie3.svg",
                releasedYear: 2000,
                description: 'Duis tempor ex proident id elit veniam dolor excepteur exercitation voluptate. Est in officia pariatur sit aliquip aliquip qui. Sit irure anim nostrud proident adipisicing laboris non in consequat culpa in quis.'
            },
            {
                bannerUrl: "/assets/public/dialog/movie4.svg",
                releasedYear: 2000,
                description: 'Dolore veniam esse elit laborum veniam commodo. Proident dolore quis irure pariatur quis proident ex ea. Aliqua consectetur veniam incididunt culpa pariatur fugiat cupidatat est nisi nisi.'
            },
            {
                bannerUrl: "/assets/public/dialog/movie5.svg",
                releasedYear: 2000,
                description: 'Qui mollit nisi dolor mollit. Labore sint commodo laboris dolor aute adipisicing. Commodo aute Lorem velit consectetur consequat reprehenderit sit occaecat excepteur.'
            },
            {
                bannerUrl: "/assets/public/dialog/movie6.svg",
                releasedYear: 2000,
                description: 'Reprehenderit cupidatat dolore voluptate ut aute minim cupidatat. Cillum dolor do est consectetur deserunt aute dolore tempor aute anim.'
            }
        ]
    }

    
}