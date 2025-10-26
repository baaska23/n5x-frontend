import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-episode-card',
    templateUrl: './episode-card.component.html',
    styleUrls: ['./episode-card.component.css'],
    standalone: true
})
export class EpisodeCardComponent {
    @Input() indexNo: number;
    @Input() bannerUrl: string;
    @Input() name: string;
    @Input() description: string;
    @Input() duration: string;
}