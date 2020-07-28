import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  constructor(private _configService: ConfigService) {}
  clientsData;
  ngOnInit(): void {
    this.clientsData = this.getClientsData();
  }

  getClientsData() {
    return this._configService.getConfig().clients;
  }
}
