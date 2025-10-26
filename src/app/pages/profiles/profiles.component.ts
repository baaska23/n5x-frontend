import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-profiles',
    templateUrl: './profiles.component.html',
    styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
    ngOnInit(): void {
        console.log("Hello")
    }

    profiles = [
        {
            name: 'Jennifer',
            imgUrl: '/assets/public/profile/profile4.svg'
        },
        {
            name: 'Bill',
            imgUrl: '/assets/public/profile/profile1.svg'
        },
        {
            name: 'Henry',
            imgUrl: '/assets/public/profile/profile2.svg'
        },
        {
            name: 'Kai',
            imgUrl: '/assets/public/profile/profile3.svg'
        },
        {
            name: 'Add profiles',
            imgUrl: '/assets/public/profile/add-profile.svg'
        }
    ]
}