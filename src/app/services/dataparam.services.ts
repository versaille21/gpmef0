import {Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable()

export class DataparamService {
    
    baseUrl : string = "https://patrimoinemef.000webhostapp.com/?choice="

    getAllProgram():Observable<any[]>{

    }

}
