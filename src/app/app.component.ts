import { Component } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  kwickFeed = [];

  constructor(private http: Http){

    var token = "";

    this.http.post('https://bigdev.kwickie.com/api/Members/login', {
      email: 'external.testuser@kwickie.com',
      password: 'KwickieRocks!'
    }).subscribe((res) => {

      var data = res.json();
      var arr = [];
      for (var prop in data) {
        arr.push(data[prop]);
      }

      token = arr[0];

      var feedarr = [];

      this.http.get('https://bigdev.kwickie.com/api/Members/me/kwickie/feed?includeQuestions=false&excludeAssociatedKwickies=false&offset=0&limit=25&access_token='+token).subscribe((respo) => {
        var feeddata = respo.json();
        for (var feedprop in feeddata) {
          feedarr.push(feeddata[feedprop]);
          this.kwickFeed.push(feeddata[feedprop]);
        }
        console.log(feedarr);


      });

    });

  }

}