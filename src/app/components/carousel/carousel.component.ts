import { Component, Input, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class CarouselComponent implements AfterViewInit {
    @Input() movies: any[] = [];
    @Input() title: string = '';
    @ViewChild('carouselTrack') carouselTrack!: ElementRef;

    canScrollPrev = false;
    canScrollNext = true;

    ngAfterViewInit() {
        this.updateScrollButtons();
    }

    scrollPrev() {
        const track = this.carouselTrack.nativeElement;
        const scrollAmount = track.clientWidth * 0.8;
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setTimeout(() => this.updateScrollButtons(), 300);
    }

    scrollNext() {
        const track = this.carouselTrack.nativeElement;
        const scrollAmount = track.clientWidth * 0.8;
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setTimeout(() => this.updateScrollButtons(), 300);
    }

    updateScrollButtons() {
        const track = this.carouselTrack.nativeElement;
        this.canScrollPrev = track.scrollLeft > 0;
        this.canScrollNext = track.scrollLeft < (track.scrollWidth - track.clientWidth - 10);
    }
}