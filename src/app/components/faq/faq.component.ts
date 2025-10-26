import { Component } from "@angular/core";
import { AccordionModule } from "primeng/accordion";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.css',
    standalone: true,
    imports: [AccordionModule, InputTextModule, FormsModule, ButtonModule]
})

export class FaqComponent {
    value: string = '';
    tabs = [
        {
            title: "What is Netflix?",
            content: "Sit proident esse officia esse fugiat culpa elit dolore ut. Voluptate aute mollit ut quis dolor sunt reprehenderit irure elit veniam velit cupidatat labore irure. Dolore commodo nulla veniam duis voluptate adipisicing dolore commodo mollit occaecat. Qui veniam aute excepteur veniam est officia adipisicing quis duis consectetur. In aliqua esse dolore mollit reprehenderit enim tempor ea. Commodo nisi reprehenderit nulla ad velit aliqua enim est exercitation amet consequat in. Cupidatat officia nulla cillum laboris."
        },
        {
            title: "How much does Netflix cost?",
            content: "Aliqua adipisicing laborum est amet anim ad incididunt. Nostrud incididunt magna consectetur ut irure pariatur nisi voluptate quis et labore do proident nisi. Et eiusmod et veniam qui veniam quis magna nulla duis. Id aute laboris ipsum ex. Deserunt consectetur ex dolor ea ipsum amet velit consectetur incididunt do exercitation officia do in. Esse deserunt aliqua reprehenderit sunt duis id reprehenderit."
        },
        {
            title: "Where I can watch?",
            content: "Aliquip cillum consectetur labore adipisicing laboris qui quis laborum est Lorem do. Tempor esse labore duis labore in. Pariatur elit veniam occaecat ut ipsum incididunt duis sunt. Aliqua duis proident incididunt voluptate. Cillum do sit amet excepteur adipisicing minim. Mollit non amet est culpa amet magna eu labore quis ipsum exercitation. Do ea pariatur duis consectetur."
        },
        {
            title: "How do I cancel?",
            content: "Sit proident esse officia esse fugiat culpa elit dolore ut. Voluptate aute mollit ut quis dolor sunt reprehenderit irure elit veniam velit cupidatat labore irure. Dolore commodo nulla veniam duis voluptate adipisicing dolore commodo mollit occaecat. Qui veniam aute excepteur veniam est officia adipisicing quis duis consectetur. In aliqua esse dolore mollit reprehenderit enim tempor ea. Commodo nisi reprehenderit nulla ad velit aliqua enim est exercitation amet consequat in. Cupidatat officia nulla cillum laboris."
        },
        {
            title: "What I can watch on Netflix?",
            content: "Aliqua adipisicing laborum est amet anim ad incididunt. Nostrud incididunt magna consectetur ut irure pariatur nisi voluptate quis et labore do proident nisi. Et eiusmod et veniam qui veniam quis magna nulla duis. Id aute laboris ipsum ex. Deserunt consectetur ex dolor ea ipsum amet velit consectetur incididunt do exercitation officia do in. Esse deserunt aliqua reprehenderit sunt duis id reprehenderit."
        },
        {
            title: "Is Netflix good for kids?",
            content: "Aliquip cillum consectetur labore adipisicing laboris qui quis laborum est Lorem do. Tempor esse labore duis labore in. Pariatur elit veniam occaecat ut ipsum incididunt duis sunt. Aliqua duis proident incididunt voluptate. Cillum do sit amet excepteur adipisicing minim. Mollit non amet est culpa amet magna eu labore quis ipsum exercitation. Do ea pariatur duis consectetur."
        }
    ];

    onSubmit() {
        // Handle form submission here
        console.log('Submitted email:', this.value);
    }
}