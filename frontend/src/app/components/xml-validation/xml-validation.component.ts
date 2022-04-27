import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../../service/validation.service';

@Component({
  selector: 'app-xml-validation',
  templateUrl: './xml-validation.component.html',
  styleUrls: ['./xml-validation.component.scss']
})
export class XmlValidationComponent implements OnInit {
  messages: any[] = [
    { name: 'oacs.008 FI to FI Customer Credit Transfer Serial', code: '1' },
    { name: 'message 2', code: '2' },
    { name: 'message 3', code: '2' }
  ];
  menuItems = [
    { label: 'CBPR+', isChecked: false },
    { label: 'Target 2', isChecked: false },
    { label: 'Lynx', isChecked: false },
    { label: 'CHAPS', isChecked: false }
  ];
  selectedMessage: string;
  display: boolean = false;
  result = {
    valid: false,
    result: "",
    messages: []
  };

  files: any = [];
  selectedFiles: string[] = [];
  constructor(private validationService: ValidationService) {

  }


  ngOnInit(): void {
  }



  showDialog() {
    this.display = true;
  }

  selectFiles = (event, form) => {
    this.files = event.files;
    // const formData = new FormData();
    // formData.append("uploaded_file", event.files[0], event.files[0].name);
    // this.validationService.uploadXml(formData).subscribe(res => {
    //   if (res.success) {
    //     this.result = res.result;
    //     form.clear();

    //   }
    // })
  }

  validateFiles = () => {
    console.log(this.files)
    console.log(this.selectedFiles)
    const formData = new FormData();
    this.files.forEach(element => {
      if (this.selectedFiles.includes(element.name)) {
        formData.append("uploaded_file", element, element.name);
      }

    });
    this.validationService.uploadXml(formData).subscribe(res => {
      if (res.success) {
        this.result = res.result;
        // form.clear();

      }
    })

  }

}
