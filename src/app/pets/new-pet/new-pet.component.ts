import { Router } from '@angular/router';
import { PetService } from './../pet/pet.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css'],
})
export class NewPetComponent implements OnInit {
  petForm!: FormGroup;
  file!: File;
  preview!: string;
  uploadPercentage = 0;

  constructor(
    private petService: PetService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.petForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload() {
    const allowComments = this.petForm.get('allowComments')?.value ?? false;
    const description = this.petForm.get('description')?.value ?? '';

    this.petService
      .upload(description, allowComments, this.file)
      .pipe(finalize(() => this.router.navigate(['pets'])))
      .subscribe({
        next: (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            const total = event.total ?? 1;
            this.uploadPercentage = Math.round(100 * (event.loaded / total));
          }
        },
        error: (error) => console.error(error),
      });
  }

  saveFile(file: any): void {
    const [savingFile] = file?.files;
    this.file = savingFile;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(savingFile);
  }
}
