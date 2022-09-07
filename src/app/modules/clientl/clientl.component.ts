import { Component, OnInit } from '@angular/core';
import { ModalConfig } from "src/app/_metronic/partials";

@Component({
  selector: 'app-clientl',
  templateUrl: './clientl.component.html'
})
export class ClientlComponent implements OnInit {

  public modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
