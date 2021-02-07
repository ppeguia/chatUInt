import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MyErrorStateMatcher } from '../my-error-state-matcher';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
 
  userChat: string;

  messageFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userChat = this.route.snapshot.paramMap.get('userId') + '';
  }

  submitMessage(){
    alert('hola');
  }

}
