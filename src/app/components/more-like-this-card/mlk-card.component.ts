import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-mlk-card',
    templateUrl: './mlk-card.component.html',
    styleUrls: ['./mlk-card.component.css'],
    standalone: true
})
export class MlkCardComponent {
    @Input() bannerUrl: string;
    @Input() releasedYear: number;
    @Input() description: string;
}