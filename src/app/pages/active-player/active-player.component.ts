import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-active-player',
    templateUrl: './active-player.component.html',
    styleUrls: ['./active-player.component.css']
})
export class ActivePlayerComponent implements OnInit {
    @Input() videoUrl: string;
    @Input() profileId: string;
    @Input() movieId: string;
    
    ngOnInit(): void {
        console.log('Hello')
    }
}