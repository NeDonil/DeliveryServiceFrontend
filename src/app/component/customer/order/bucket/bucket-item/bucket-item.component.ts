import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bucket-item',
  templateUrl: './bucket-item.component.html',
  styleUrls: ['./bucket-item.component.css']
})
export class BucketItemComponent {

    @Input()
    url!: string;

    @Input()
    title!: string;

    @Input()
    count !: string;

    @Input()
    price !: string;
}
