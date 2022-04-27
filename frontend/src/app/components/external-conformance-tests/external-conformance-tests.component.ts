import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external-conformance-tests',
  templateUrl: './external-conformance-tests.component.html',
  styleUrls: ['./external-conformance-tests.component.scss']
})
export class ExternalConformanceTestsComponent implements OnInit {
  schemes = [
    { label: 'CBPR+', isChecked: false },
    { label: 'Target 2', isChecked: false },
    { label: 'Lynx', isChecked: false },
    { label: 'CHAPS', isChecked: false }
  ];
  applications = [
    { label: 'Core Banking System', isChecked: false },
    { label: 'Payment Engin', isChecked: false },
    { label: 'Sanctions Screening Engin', isChecked: false },
    { label: 'Reconciliation', isChecked: false }
  ];
  bic = [
    { label: 'MIDLGB22', isChecked: false },
    { label: 'CHASUS33', isChecked: false },
    { label: 'BARCGB22', isChecked: false },
    { label: 'IRVTUS3N', isChecked: false }
  ];
  messages = [
    { name: 'Credit Transfer', code: '1' },
    { name: 'Message 2', code: '2' },
    { name: 'Message 3', code: '2' }
  ];
  steps = [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' }
  ];


  selectedScheme: string;
  constructor() { }

  ngOnInit(): void {
  }



}
