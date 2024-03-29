import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.css'],
})
export class PasswordComponent implements OnInit {
    @Input() name: string = '';

    constructor() {}

    ngOnInit(): void {}
}
