import { GetDataserviesService } from "./services/dataservies/get-dataservies.service";
import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UiService } from "./services/ui/ui.service";
import { AuthenServiceService } from "./services/authen/authen-service.service";
// import { ItunesService } from './player/shared/itunes.service';
import { fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  title = "really";
  showMenu = false;
  darkModeActive: boolean;
  sub1;
  userEmail = localStorage.getItem("userName");
  avatar = localStorage.getItem("avatar");
  a = JSON.parse(localStorage.getItem("currentUser"));
  // @ViewChild('searchBox')
  searchInput: ElementRef;
  ranks: any;
  // (keyup)="search(searchBox.value)"

  hideResult: boolean;
  searchResults: Array<any> = [];
  constructor(
    public ui: UiService,
    public router: Router,
    public authen: AuthenServiceService,
    private service: GetDataserviesService
  ) {}
  loggedIn = this.authen.loggedIn();

  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkModeActive);
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  ngOnInit() {
    this.sub1 = this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });
    var obj = { Id_user: parseInt(this.a.id) };
    this.service.RankOfUser(obj).subscribe((data) => {
      console.log(data);
      this.ranks = data;
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  logout() {
    this.toggleMenu();
    this.authen.logoutUser();
    this.router.navigateByUrl("/login");
  }

  //$RECYCLE.BIN
  ngAfterViewInit() {
    let buttonStream$ = fromEvent(this.searchInput.nativeElement, "keyup")
      .pipe(debounceTime(1000))
      .subscribe(() => {
        this.search(this.searchInput.nativeElement.value);
      });
  }

  onResultClick() {
    this.hideResult = true;
    this.searchInput.nativeElement.value = "";
  }

  search(param) {
    // this.ituneService.search(param).subscribe(
    //   data => {
    //     console.log(data['results']);
    //     this.hideResult=false;
    //     this.searchResults = data['results'];
    //   },
    //   err => console.log(err)
    // );
  }
}
