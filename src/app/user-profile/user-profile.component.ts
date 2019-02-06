import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() {
  }


  // public gotGitUserData() {
  //   const userApi = 'https://api.github.com/users/';
  //   const userName;
  //   const user = userName.substring(1).slice(0, userName.length);
  //   console.log(userName);
  //   const userUrl = userApi + user;
  //   console.log(userUrl);
  //   const repoUrl = userApi + user + '/repos';
  //   fetch(userUrl)
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data) {
  //         console.log(data);
  //         const userAvatar = document.createTextNode(JSON.stringify(data.avatar_url));
  //         const userLogin = document.createTextNode(JSON.stringify(data.login));
  //         const usernameLogin = String(userLogin.textContent).substring(1).slice(0, -1);
  //         const userRepo = document.createTextNode(JSON.stringify(data.html_url));
  //         const repoLink = 'url(' + userRepo.textContent + ')';
  //
  //         function userInformation(className, createContent) {
  //           const findByClass = document.querySelector('.' + className);
  //           if (createContent.textContent !== 'null') {
  //             const createValue = String(createContent.textContent).substring(1).slice(0, -1);
  //             const addValue = document.createTextNode(createValue);
  //             findByClass.appendChild(addValue);
  //           }
  //         }
  //
  //         const gitNameData = document.createTextNode(JSON.stringify(data.name));
  //         userInformation('name', gitNameData);
  //
  //         const gitDateData = document.createTextNode(JSON.stringify(data.created_at));
  //         userInformation('created_at', gitDateData);
  //
  //         const gitLocationData = document.createTextNode(JSON.stringify(data.location));
  //         userInformation('location', gitLocationData);
  //
  //         const gitCompanyData = document.createTextNode(JSON.stringify(data.company));
  //         userInformation('company', gitCompanyData);
  //
  //         const gitEmailData = document.createTextNode(JSON.stringify(data.email));
  //         userInformation('email', gitEmailData);
  //
  //       }
  //     })
  //     .catch(error => console.log('error is', error));
  // }

  ngOnInit() {
  }

}


