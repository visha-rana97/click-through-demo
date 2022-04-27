import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-conformance-tests',
  templateUrl: './internal-conformance-tests.component.html',
  styleUrls: ['./internal-conformance-tests.component.scss']
})
export class InternalConformanceTestsComponent implements OnInit {
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
  messages = [
    { name: 'Credit Transfer', code: '1' },
    { name: 'Scheme 2', code: '2' },
    { name: 'Scheme 3', code: '2' }
  ];
  steps = [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' }
  ];

  list: any[] = [
    {
      id: 1,
      header: "CstmrDrctDbtinin",
      show: true,
      child: [
        {
          id: 11,
          header: 'GrpHdr',
          show: true,
          child: [{
            id: 13,
            header: 'MsgId',
            show: true,
          },
          {
            id: 14,
            header: 'CreDtTm',
            show: true,
          },
          {
            id: 15,
            header: 'NbOTxs',
            show: true,
          }]
        },
        {
          id: 12,
          header: 'PrintInf',
          show: true,
          child: [{
            id: 13,
            header: 'Pmtingld',
            show: true,
          },
          {
            id: 14,
            header: 'PmtMtd',
            show: true,
          },
          {
            id: 15,
            header: 'BtchBookg',
            show: true,
          }]
        }
      ]
    },

  ];
  businessValidations: any = [
    {
      name: 'ChargesAccountAgentRule',
      isSelected: false
    },
    {
      name: 'ControlSumRule',
      isSelected: false
    },
    {
      name: 'ChequeDeliveryAndNoCreditorAgentRule',
      isSelected: false
    },
    {
      name: 'IntermediaryAgent1AccountRule',
      isSelected: false
    },
  ];

  testCases: any = [
    {
      name: 'ISO_TC_001',
      desc: 'Test for Payments Initiation',
      schemaValidation: false,
      bizRulesValidation: false,
      testData: false,
      status: 0
    },
    {
      name: 'ISO_TC_002',
      desc: 'Test for Catchment Routing',
      schemaValidation: false,
      bizRulesValidation: false,
      testData: false,
      status: 0
    },
    {
      name: 'ISO_TC_004',
      desc: 'Corresponding Bank Testing – XYZ bank',
      schemaValidation: false,
      bizRulesValidation: false,
      testData: false,
      status: 0
    }
  ];

  selectedScheme: string;
  activeStep: number = 0;
  constructor() { }

  ngOnInit(): void {
  }


  toggleList = (index: number, childIndex?: number, grandChilIndex?: number) => {
    if (childIndex == undefined && grandChilIndex == undefined) {
      return this.list[index].show = !this.list[index].show;
    }
    if (grandChilIndex == undefined) {
      return this.list[index].child[childIndex].show = !this.list[index].child[childIndex].show;
    }
    return this.list[index].child[childIndex].child[grandChilIndex].show = !this.list[index].child[childIndex].child[grandChilIndex].show;
  }

  //move to next steps
  next = () => {
    this.activeStep++;
    if (this.activeStep == 2) {
      setTimeout(() => {
        this.testCases.forEach(element => {
          element.testData = true;
        });
      }, 3000)
    }

    if (this.activeStep == 3) {
      setTimeout(() => {
        this.testCases.forEach(element => {
          element.status = 1;
        });
      }, 3000)
    }
  }

  validate = () => {}

}
