import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
declare const shaka: any;

@Component({
    selector: 'app-video-player',
    templateUrl: './video-player.component.html',
    styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit, OnDestroy {
    @Input() videoUrl: string;
    @Input() profileId: string;
    @Input() movieId: string;

    @ViewChild('videoElement', {static: true}) videoElement: ElementRef<HTMLVideoElement>;

    private player: any;
    private timeUpdateInterVal?: any;

    ngOnInit(): void {
        this.initPlayer();
    }

    ngOnDestroy(): void {
        if (this.player) this.player.destroy();
        if (this.timeUpdateInterVal) clearInterval(this.timeUpdateInterVal);
    }

    private async initPlayer() {
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

    private updateProgress(seconds: number, duration: number) {
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
}