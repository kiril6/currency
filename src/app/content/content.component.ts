import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  closeModal() {
    // var findModal;
    // findModal=document.getElementsByClassName('modal');
    // findModal.removeClass('show');

    document.getElementById("myModal").classList.remove("show");

    // findModal.removeClass("show");
    // console.log(findModal);
  }

  ngOnInit() {
    // this.closeModal();
  }

}
