//DISCOVERY COMPONENT COMMUNICATION AND STYLES
// import { Component, OnInit, OnDestroy } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit, OnDestroy{
//   title = "Hello You";
//   intervalSub;
  
//   ngOnInit(){
//     this.intervalSub = setInterval(()=>{
//       console.log('Hello from ngOnInit');
//     },1000);
//   }
//   ngOnDestroy(){
//     if(this.intervalSub){
//       clearInterval(this.intervalSub);
//     }
//   }

  
// }

//UPDATE CLASS PROPS  using a template statement
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent {
//   showText = false;

//   // toggleText(): void{
//   //   this.showText = !this.showText;
//   // }
//   // Version 2
//  toggleText(event): void{
//     this.showText = !this.showText;
//     console.log(event);
//   }
// }

//USE PIPES
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todaysDate = new Date();
}
