import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  books = [
    {isbn: "Test-001", title: "Test 001 title", author: "Test 001 author"},
    {isbn: "Test-002", title: "Test 001 title", author: "Test 001 author"},
    {isbn: "Test-003", title: "Test 001 title", author: "Test 001 author"},
    {isbn: "Test-004", title: "Test 001 title", author: "Test 001 author"}
  ];

  constructor() { }

  public getBooks():Array<{isbn, title, author}>{
    return this.books;
  }
  public createContact(contact: {isbn, title, author}){
    this.books.push(contact);
  }
}
