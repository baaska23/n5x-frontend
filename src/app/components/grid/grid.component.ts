import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css'],
    standalone: true,
    imports: [CommonModule]
})

export class GridComponent {
    @Input() contents: any[];
}