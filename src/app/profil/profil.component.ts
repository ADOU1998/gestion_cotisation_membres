import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilService } from '../service/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit{

  profils: any;

  constructor(
    private profilService: ProfilService,
    private router: Router
  ){}

  ngOnInit(): void {
     // Afficher la liste via l'API
     this.profilService.listProfil().subscribe(
      (data:{})=>{
        this.profils = data;
      }
    );
  }

}
