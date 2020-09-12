import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  GoogletranslateService,
  GoogleObj,
} from '../../services/googletranslate.service';
import { SolutionService } from '../../services/solution.service';
import { FormControl } from '@angular/forms';
import { Solution } from './models/solution';

@Component({
  selector: 'app-googletranslate',
  templateUrl: './googletranslate.component.html',
  styleUrls: ['./googletranslate.component.css'],
})
export class GoogletranslateComponent implements OnInit {
  // @ViewChild('searchBox') 
  searchInput: ElementRef;
  lang = new FormControl('en');
  lang1 = new FormControl('vi');
  data: Solution = {
    title: 'hi',
    description: 'hello',
    detail: 'welcome',
  };

  private translateBtn: any;

  constructor(
    private solution: SolutionService,
    private google: GoogletranslateService
  ) {}

  ngOnInit() {
    this.solution.getSolution().subscribe((res) => (this.data = res));
    this.translateBtn = document.getElementById('translatebtn');
  }

  send() {
    const googleObj: GoogleObj = {
      q: this.searchInput.nativeElement.value,
      target: this.lang1.value,
    };
    this.translateBtn.disabled = true;
    this.google.translate(googleObj).subscribe(
      (res: any) => {
        this.translateBtn.disabled = false;
        alert('TRANS: '+res.data.translations[0].translatedText);

      },
      (err) => {
        console.log(err);
      }
    );
  }
}
