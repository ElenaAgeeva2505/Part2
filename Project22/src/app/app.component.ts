import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

interface Books{
  name:string|null;
  author:string|null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'BookList';

  books:Books[]=[
    {
      name:'goldfinch',
      author:'Tartt'

    }
  ];

  create_book={
    name:null,
    author:null
  };

  ngOnInit(): void {

  }


  createBook() {
    this.books.push({ 
      name: this.create_book.name, 
      author: this.create_book.author 
    });
  }

}
