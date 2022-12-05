import { StorageService } from './../services/storage.service';
import { Component } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private storageService: StorageService) {}

}
