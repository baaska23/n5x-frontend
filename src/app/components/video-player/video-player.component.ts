import { DatePipe } from "@angular/common";
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
declare const shaka: any;

@Component({
    selector: 'app-video-player',
    templateUrl: './video-player.component.html',
    styleUrls: ['./video-player.component.css'],
    standalone: true,
    imports: [DatePipe]
})
export class VideoPlayerComponent implements OnInit, OnDestroy {
    @Input() videoUrl: string;
    @Input() profileId: string;
    @Input() movieId: string;
    @Input() movieName: string;

    @ViewChild('videoElement', {static: true}) videoElement: ElementRef<HTMLVideoElement>;
    currentTime = 0;
    duration = 0;

    private player: any;
    private timeUpdateInterVal?: any;

    ngOnInit(): void {
        this.initPlayer();
    }

    ngOnDestroy(): void {
        if (this.player) this.player.destroy();
        if (this.timeUpdateInterVal) clearInterval(this.timeUpdateInterVal);
    }

    async initPlayer() {
        const video = this.videoElement.nativeElement;
        this.player = new shaka.Player(video);

        try {
            await this.player.load(this.videoUrl);
            console.log("Video loaded: ", this.videoUrl);
        } catch (error) {
            console.error("Error loading video: ", video)
        }

        this.timeUpdateInterVal = setInterval(() => {
            const currentTime = video.currentTime;
            const duration = video.duration;
            this.updateProgress(currentTime, duration);
        }, 10000);
    }

    updateProgress(seconds: number, duration: number) {
        fetch('http://localhost:8080/watch-history', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                profileId: this.profileId,
                movieId: this.movieId,
                watchedSeconds: Math.floor(seconds),
                isCompleted: seconds >= duration - 100
            })
        });
    }

    onLoadedMetadata() {
        this.duration = this.videoElement.nativeElement.duration;
    }

    onTimeUpdate() {
        this.currentTime = this.videoElement.nativeElement.currentTime;
    }

    seek(event: any) {
        this.videoElement.nativeElement.currentTime = event.target.value;
    }

    togglePlay() {
        const video = this.videoElement.nativeElement;
        video.paused ? video.play() : video.pause();
    }

    onBack() {
        window.history.back()
    }
}