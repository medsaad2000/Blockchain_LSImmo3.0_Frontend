import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Contrat } from 'src/app/Model/contrat.model';
import { ContratService } from 'src/app/service/contrat.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {
  formContrat: FormGroup;
  formCat: FormGroup;
  headers: HttpHeaders;
  public contrats: Contrat[] | undefined;
  title = "image-upload"

  private readonly apiKey = 'd33f5d7a1465246bac23b121700d76d0'
  constructor(private readonly httpClient: HttpClient, private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private contratService: ContratService) { }

  category = [
    { id: "C1", name: "Villa" },
    { id: "C2", name: "Studio" },
    { id: "C3", name: "Maison" },
    { id: 'C4', name: "Garage" }

  ];

  ngOnInit(): void {
    this.formContrat = this.formBuilder.group({

      immobilier: this.formBuilder.group({
        name: '',
        description: '',
        localisation: '',
        price: '',
        surface: ''
      }),
      privateKey: '',
      url: ''
    },


    );
    this.formCat = this.formBuilder.group({
      category: [null]
    })
    //this.get();
    //this.getcaard();
    this.getAllImm();
  }

  submit(): void {
    console.log(this.formContrat.getRawValue())
    console.log(this.formCat.getRawValue().category)
    this.contratService.addArticle(this.formContrat.getRawValue(), this.formCat.getRawValue().category).subscribe((res: any) => {
      swal({
        title: "successful submitted",
        text: "Votre annonce a été ajouté avec succès",
        icon: "success",

      });
      console.log(res),
        this.router.navigate(['/allannonce']);


    }, err => {
      swal({
        title: "Fields Empty!!",
        text: "Please check the missing field!!",
        icon: "warning",

      });
    })




  }
  public cardData: any = [];
  public cardImm: any = [];
  getcaard(): void {
    this.contratService.getArticle(4).subscribe(data => {
      this.cardData.push(data);
      console.log(this.cardData)
    }
    )
  }
  getAllImm(): void {
    this.contratService.getAllArticles().subscribe(data => {
      this.contrats = data;
      console.log(this.contrats);
      //this.cardImm.push(data);
      //console.log(this.cardImm);
    }
    )
  }
  get(): void {
    this.contratService.getArticle(6).subscribe(
      (response: Contrat[]) => {
        this.contrats = response;
        console.log(this.contrats);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )

  }

  upload(file: any): Observable<String> {
    const formData = new FormData();
    formData.append("image", file[0]);
    return this.httpClient
      .post('https://api.imgbb.com/1/upload', formData, { params: { key: this.apiKey } })
      .pipe(map((response: any) => response['data']['url']))

  }

  onInput(e: Event) {
    const input = e.currentTarget as HTMLInputElement;
    this.upload(input.files).subscribe(url => {     swal({
      title: "L'URL de votre photo : ",
      text: ''+url,
      icon: "success",

    });
    


  }, err => {
    swal({
      title: "Fields Empty!!",
      text: "Please check the missing field!!",
      icon: "warning",

    });
  })

  }
}
