import {Component, ViewChild, ElementRef, OnInit} from '@angular/core'
import {Slides} from 'ionic-angular';
import {waitRendered} from './util';

@Component({
    templateUrl: 'build/pages/slides/slides.page.html'
})
export class SlidesPage implements OnInit {

    @ViewChild('mySlider')
    private _slider:Slides;

    constructor(private _elementRef:ElementRef) {
    }

    public ngOnInit() {
        let swiperContainer = this._elementRef.nativeElement.getElementsByClassName('swiper-container')[0];
        waitRendered(swiperContainer).then(()=>{
            let swiper = this._slider.getSlider();
            swiper.update();
        });
    }

}