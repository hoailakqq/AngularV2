import { Component, OnInit } from "@angular/core";
import { GetAPIService } from "../services/get-api.service";
import { DatePipe } from "@angular/common";
@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
  providers: [DatePipe],
})
export class ContentComponent implements OnInit {
  public chartType: string = "line";
  chartCol = [];
  value : any;
  topUserSize: any; 
  public chartDatasets: Array<any> = [
    { data: [1, 2, 5, 2, 3, 2, 1], label: "số người đăng ký" },
    {
      data: this.chartCol,
      label: "Số lượng người dùng sử dụng tính năng app",
    },
  ];

  public chartLabels = [];
  d = new Date();
  weekday = new Array(7);

  public chartColors: Array<any> = [
    {
      backgroundColor: "rgba(105, 0, 132, .2)",
      borderColor: "rgba(200, 99, 132, .7)",
      borderWidth: 2,
    },
    {
      backgroundColor: "rgba(0, 137, 132, .2)",
      borderColor: "rgba(0, 10, 130, .7)",
      borderWidth: 2,
    },
  ];
  myDate = new Date();

  public chartOptions: any = {
    responsive: true,
  };
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}
  constructor(private api: GetAPIService, private datePipe: DatePipe) {}
  question: number;
  members: number;
  usersRank: any;
  ngOnInit() {
    this.addArrays();
    this.api.getAllUsers().subscribe(
      (res) => {
        this.members = Object.keys(res).length;
      },
      (err) => {}
    );
    this.api.getAllQuestions().subscribe(
      (res) => {
        this.question = Object.keys(res).length;
      },
      (err) => {}
    );
    
    this.api.getFamousUser().subscribe(
      (res) => {
        this.usersRank = res;
        this.topUserSize = Object.keys(this.usersRank).length;
      },
      (err) => {}
    );
      
  }

  addArrays() {
    var i = this.d.getDay();
    this.weekday[0] = "Sunday";
    this.weekday[1] = "Monday";
    this.weekday[2] = "Tuesday";
    this.weekday[3] = "Wednesday";
    this.weekday[4] = "Thursday";
    this.weekday[5] = "Friday";
    this.weekday[6] = "Saturday";
    this.chartLabels[0] = this.weekday[++i % 7];
    this.chartLabels[1] = this.weekday[++i % 7];
    this.chartLabels[2] = this.weekday[++i % 7];
    this.chartLabels[3] = this.weekday[++i % 7];
    this.chartLabels[4] = this.weekday[++i % 7];
    this.chartLabels[5] = this.weekday[++i % 7];
    this.chartLabels[6] = this.weekday[++i % 7];
    this.chartLabels[7] = this.weekday[++i % 7];

    let aDate = new Date();
    let a = {};
    a["day"] = this.getDay(aDate);
    this.api.getLogByDay(a).subscribe((data) => {
      this.chartCol[6] =Object.keys(data).length;
    });
    aDate.setDate(aDate.getDate() - 1);
     a = {};
    a["day"] = this.getDay(aDate);
    this.api.getLogByDay(a).subscribe((data) => {
      this.chartCol[0] =Object.keys(data).length;
    });
    aDate.setDate(aDate.getDate() - 1);
    a = {};
    a["day"] = this.getDay(aDate);
    this.api.getLogByDay(a).subscribe((data) => {
      this.chartCol[1] =Object.keys(data).length;
    });
    aDate.setDate(aDate.getDate() - 1);
    a = {};
    a["day"] = this.getDay(aDate);
    this.api.getLogByDay(a).subscribe((data) => {
      this.chartCol[2] =Object.keys(data).length;
    });
    aDate.setDate(aDate.getDate() - 1);
    a = {};
    a["day"] = this.getDay(aDate);
    this.api.getLogByDay(a).subscribe((data) => {
      this.chartCol[3] =Object.keys(data).length;
    });
    aDate.setDate(aDate.getDate() - 1);
    a = {};
    a["day"] = this.getDay(aDate);
    this.api.getLogByDay(a).subscribe((data) => {
      this.chartCol[4] =Object.keys(data).length;
    });
    aDate.setDate(aDate.getDate() - 1);
    a = {};
    a["day"] = this.getDay(aDate);
    this.api.getLogByDay(a).subscribe((data) => {
      this.chartCol[5] =Object.keys(data).length;
    });
console.log(this.chartCol);

this.getUsers();
  }
  getDay(a:Date):string{
    var b = this.datePipe.transform(a, 'yyyy-MM-dd');
    return b;
  }

  chartDataSet(date){
    var a = {};
    a["day"] = this.getDay(date);
    this.api.getLogByDay(a).subscribe((data) => {
      this.value = data;
    });
  }
  users:any
  
  getUsers(){
    this.api.getAllUsers().subscribe((data) => {
      this.users = data;
      
    });
  }
}
