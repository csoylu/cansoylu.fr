import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  progress: any = {
    'greta' : true,
    '2srei' : true,
    'openclassrooms' : true,
    'geco-it': true,
    'explain': false,
  }
  restartGame: boolean = false;

  stacklist: any = [
    {
    'name': 'HTML',
    'level': 45,
    'icon': 'assets/stacks/html.png',
    'description':'I\'ve used HTML in various places. Such as: branding open source projects, creating this website, and the projects you can find in playground.'
    },
    {
    'name': 'CSS',
    'level': 45,
    'icon': 'assets/stacks/css.png',
    'description':'Almost same as HTML, branding and stuff like that. It\'s also very usefull to display:none when you want to hide something bad. :)'
    },
    {
    'name': 'TypeScript',
    'level': 45,
    'icon': 'assets/stacks/typescript.png',
    'description':'Like it very much, compared to JS. Thinking about using it for some side projects also. This website is built using it, also the playground projects.'
    },
    {
    'name': 'Angular',
    'level': 45,
    "icon": "assets/stacks/angular.png" ,
    'description':'This website and the playgrounds are built with it. I like the native implementetion of TypeScript, and the way it\'s structured. It feels a bit like Golang.'
    },
    {
    'name': 'Docker',
    'level': 45,
    'icon': 'assets/stacks/docker.webp',
    'description':'Used it alot. I conternized open source projects. I\'ve learned alot about it with Geco-IT. Did a project \"Play With Docker\" that launches docker inside docker and displays it on a website.'
    },
    {
    'name': 'Ansible',
    'level': 45,
    'icon': 'assets/stacks/ansible.png',
    'description':'Used it to deploy whole infrastructure of a client with only one inventory file. Automated whole processes. When we didn\'t have the right module to automate something. I developed it in Python.'
    },
    {
    'name': 'Openstack',
    'level': 45,
    'icon': 'assets/stacks/openstack.svg',
    'description':'Various cloud providers like OVH use openstack. Made whole processes to enable a client to redeploy his infrastructure on cloud in minutes to become available in case of emergency.'
    },
    {
    'name': 'Go',
    'level': 45,
    'icon': 'assets/stacks/golang.png',
    'description':'There\'s something i like about Go. It runs fast, hard to make mistakes, and it\'s easy to read. I developed docker volume plugins with it and also patched play with docker.'
    },
    {
    'name': 'Python',
    'level': 45,
    'icon': 'assets/stacks/python.png',
    'description':'Second language that i learned, first was c++ (never used it since). Used it for ansible and cloud-init in Windows.'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:resize", []) updateDays() {
    if (window.innerWidth < 600) {
      this.progress['greta'] = false;
      this.progress['2srei'] = false;
      this.progress['openclassrooms'] = false;
      this.progress['geco-it'] = false;
      this.progress['explain'] = true;
    }
    if (window.innerWidth > 600) {
      this.progress['greta'] = true;
      this.progress['2srei'] = true;
      this.progress['openclassrooms'] = true;
      this.progress['geco-it'] = true;
      this.progress['explain'] = false;
    }
  }
  displayExperience(experience: string) {
    for (let exp in this.progress){
      if (exp == experience){
        this.progress[exp] = true;
      } else {
        this.progress[exp] = false;
      }
    }
  }
}
