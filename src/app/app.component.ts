import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aplication';

  selected = null;

  edited = {
   name: " ",
  }

  mode="none"

  playlist = {
    name : "new list",
    tracks : 24,
    color : 'red',
    favourite : true,
  }
  font = {
    size : 4,
  }

  getPlaylistStyle(playlist) {
    return {
      borderBottomColor:playlist.color 
    }
  };

  // getClasses() {
  //   return {
  //     table-active : selected == playlist,
  //     playlist-row : true
  //   }
  // };
select(playlist) {
  this.mode = "selected";
  this.selected = playlist;
}

edit(playlist) {
  this.mode = "edit";
  this.edited = playlist;
  this.selected = playlist;
}

  creatNew(event){
    this.mode = "edit";
    var newPlaylist = {};
    this.selected = newPlaylist;
    this.edited = newPlaylist;
    console.log('nowa playlista', event);
  }

  onSave(event){
    console.log('zapisano', event);
  };








  // get getAge() {
  //   return (new Date().getFullYear()) - this.person.birthdate
  // }
  // person = {
  //   name : 'Karolina' ,
  //   birthdate : 1988 ,
  //   company:{
  //     name : 'hi!hajdus'
  //   }
  // }
  // counter = 0;
  // constructor() {
  //   setInterval(()=>{
  //     this.counter+1;
  //   },500)
  // }
}
