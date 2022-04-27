import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

    constructor(private http: HttpClient) { }

    uploadXml = (data) => {
        return this.http.post<any>('http://localhost:5000/upload_xml', data)
    }
}
