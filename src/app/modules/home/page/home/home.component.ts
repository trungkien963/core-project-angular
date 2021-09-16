import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { LanguageService } from 'src/core/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'core-project';
  data = {
    companies: [
      {
        company: 'example comany',
        projects: [
          {
            projectName: 'example project'
          }
        ]
      },
      {
        company: 'example comany',
        projects: [
          {
            projectName: 'example project'
          }
        ]
      }
    ]
  };

  myForm: FormGroup;

  constructor(
    public language: LanguageService,
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      companies: this.fb.array([])
    });

    this.setCompanies();
  }

  ngOnInit(): void {
  }

  get companiesFormArr(): FormArray {
    return this.myForm.get('companies') as FormArray;
  }

  addNewCompany() {
    this.companiesFormArr.push(
      this.fb.group({
        company: [''],
        projects: this.fb.array([])
      })
    );
  }

  deleteCompany(index:any) {
    this.companiesFormArr.removeAt(index);
  }

  addNewProject(control:any) {
    control.push(
      this.fb.group({
        projectName: ['']
      })
    );
  }

  deleteProject(control:any, index:any) {
    control.removeAt(index);
  }

  setCompanies() {
    this.data.companies.forEach(x => {
      this.companiesFormArr.push(
        this.fb.group({
          company: x.company,
          projects: this.setProjects(x)
        })
      );
    });
  }

  setProjects(x:any) {
    let arr = new FormArray([]);
    x.projects.forEach((y:any) => {
      arr.push(
        this.fb.group({
          projectName: y.projectName
        })
      );
    });
    return arr;
  }
}
