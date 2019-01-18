import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My App';
  private apiUrl = "http://ec2-13-126-31-178.ap-south-1.compute.amazonaws.com:17114/api/org/vehicle/byorg/string";
  data: any = {};

  constructor(private httpClient: HttpClient){
    console.log("Hello");
    //this.getContacts();
    this.getData();
  }

  getData(){
   // return this.httpClient.get(this.apiUrl).map((res:Response)=>res.json())
  // return this.httpClient.get(this.apiUrl).pipe(map(res:Response)=>res.json());
  return this.httpClient.get(this.apiUrl).subscribe(result => {
    console.log("Result",result);
    this.data = result;
  });
  }
  // getContacts(){
  //   return this.getData().subscribe(data => {
  //     console.log("data");
  //     this.data = data
  //   })
 // returnthis._httpClient.get(this.apiUrl).subscribe(res=>this.requests=res);
  
}
