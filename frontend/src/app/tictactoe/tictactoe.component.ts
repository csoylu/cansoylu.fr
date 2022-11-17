import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  constructor() { }

  boardrows: any = [
    {0 : "", 1 : "", 2 : ""},
    {0 : "", 1 : "", 2 : ""},
    {0 : "", 1 : "", 2 : ""},
  ]

  nextplayer: string = "x"


  gamestate: string = "playing";

  status: string = "";

  restartGameButton: boolean = false;

  ngOnInit(): void {
  }

  makeMove(col: number, row: number){
    if(this.gamestate == "paused"){
      return;
    }
    if (this.boardrows[row][col] != ""){
      return;
    }
    this.boardrows[row][col] = this.nextplayer;
    this.nextPlayerMessage();
    this.checkTie();
    this.checkWin();
    this.nextplayer = this.nextplayer == "x" ? "o" : "x";
  }

  nextPlayerMessage(){
    this.status = "Next Player: " + this.nextplayer;
  }

  checkTie(){
    console.log(this.boardrows)
    for (var row of this.boardrows){
      for (var square in row){
        if (row[square] == ""){
          return;
        }
      }
    }
    this.gamestate = "paused";
    this.DisplayResetButton();
    this.DisplayWinner("Tie");
  }

  checkconditions: any = [
    // Horizontal
    [[0,0],[0,1],[0,2]],
    [[1,0],[1,1],[1,2]],
    [[2,0],[2,1],[2,2]],
    //Vertical
    [[0,0],[1,0],[2,0]],
    [[0,1],[1,1],[2,1]],
    [[0,2],[1,2],[2,2]],
    //Diagonal
    [[0,0],[1,1],[2,2]],
    [[0,2],[1,1],[2,0]],
  ]

  checkWin(){
    for (var coords of this.checkconditions){
      var first = this.boardrows[coords[0][0]][coords[0][1]];
      var second = this.boardrows[coords[1][0]][coords[1][1]];
      var third = this.boardrows[coords[2][0]][coords[2][1]];
      var myset = new Set([first, second, third]);
      if (myset.size == 1 && first != ""){
        this.DisplayResetButton();
        this.DisplayWinner(first);
        this.gamestate = "paused";
        return;
      }
    }
  }

  DisplayWinner(winner: string){
    this.status = "Winner is: " + winner;
  }

  DisplayResetButton(){
    this.restartGameButton = true;
  }

  ResetGame(){
    for (var rows in this.boardrows){
      console.log(rows)
      for (var square in this.boardrows[rows]){
        this.boardrows[rows][square] = "";
      }
    }
    this.gamestate = "playing";
    this.restartGameButton = false;
    this.status = "";
  }
}
