//Ejrecico 1 de la Weekly 2 de Backend
//Modelando diagramas en objetos de JS

const repo = {
    name: "LaunchX",
    author: "hisahito",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   const issue = {
       title: "Error en el boton",
       name: "main",
       status: "open",
       comments: 3,
       labels: ["bug", "error"],
       author: "hisahito",
       date: "2020-05-20",
       lastUpdate: "2020-05-20",
       getTitleAndAuthor: function(){
        return `Issue: ${this.title} by ${this.author}`
       },
       getGeneralInfo: function(){
           return `Issue: ${this.title}, Repo: ${this.name}, Status: ${this.status}, Created by: ${this.author}`
       }
   }

   const pullRequest = {
       title: "Error en el boton",
       branchName: "main",
       date: "2020-05-20",
       status: "puched",
       repoName: "LaunchX",
       getStatus: function(){
           return `Status: ${this.status}`
       },
       getTitleAndAuthor: function(){
           return `Pull Request: ${this.title} by ${this.author}`
       }

   }

   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo());
   
   console.log("Issue: " + issue.getTitleAndAuthor())
   console.log("More info: " + issue.getGeneralInfo())
   console.log("fecha de creacion: " + issue.date);

   console.log(pullRequest.getTitleAndAuthor())
   console.log(pullRequest.getStatus())

