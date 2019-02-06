import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor() {
  }

  public focusoutHandler(event) {
    console.log(event.target.value);
    const input = event.target.value;
    const api = 'https://api.github.com/search/users?q=';
    const url = api + input;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data) {
          const users = data.items;
          console.log(users);
          for (let i = 0; i < users.length; i++) {
            const userAvatar = document.createTextNode(JSON.stringify(users[i].avatar_url));
            const imageLink = 'url(' + userAvatar.textContent + ')';
            const userLogin = document.createTextNode(JSON.stringify(users[i].login));
            const usernameLogin = String(userLogin.textContent).substring(1).slice(0, -1);
            const userRepo = document.createTextNode(JSON.stringify(users[i].html_url));
            const repoLink = String(userRepo.textContent).substring(1).slice(0, -1);
            console.log(usernameLogin);
            console.log(imageLink);
            console.log(repoLink);

            // const currentResult = document.querySelector('.result');
            // currentResult.parentNode.removeChild(currentResult);
            // const refreshedResult = document.createElement('DIV');
            // refreshedResult.setAttribute('class', 'result');
            // document.querySelector('.public-api-result').appendChild(refreshedResult);
          }
        }
        console.log (data.items);
        const usersData = data.items;
        return usersData;

      });
    console.log(input);
    return input;
  }

  ngOnInit() {
  }
}


