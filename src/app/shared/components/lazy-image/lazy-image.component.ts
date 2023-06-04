import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {

  ngOnInit(): void {
    if(!this.url) throw new Error('URL Property is Required.');
  }

  @Input() public url!: string;
  @Input() public alt: string = '';
  @Input() public width: string = '35';
  @Input() public height: string = '35';

  public hasLoaded: boolean = false;

  onLoad(): void{
      this.hasLoaded = true;
  }
}
