import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

//Model
import { Investments } from '../model/investments';

@Injectable({
  providedIn: 'root'
})
export class ListInvestmentsService {

  public url: string = 'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';
  constructor(private http: HttpClient
    ) { }

  public list(): Observable<Array<Investments>>{
    return this.http.get<Array<Investments>>(this.url).pipe(
      map(
        res => res
      )
    );
  }


}
