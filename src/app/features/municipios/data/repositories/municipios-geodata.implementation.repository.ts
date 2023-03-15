import { environment } from './../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MunicipioGeoDataModel } from '../../domain/models/municipio-geodata.model';
import { MunicipioGeoDataRepository } from '../../domain/repositories/municipio-geodata.repository';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MunicipiosGeodataMapper } from './mappers/municipios-geodata.mapper';
import { MunicipioGeoDataEntity } from '../entities/municipio-geodata.entity';

@Injectable({ providedIn: 'root' })
export class MunicipiosGeoDataImplementationRepository
  implements MunicipioGeoDataRepository
{
  municiopiosGeoDataMapper: MunicipiosGeodataMapper =
    new MunicipiosGeodataMapper();

  constructor(private http: HttpClient) {}

  private getStateName(stateName: string): string {
    switch (stateName.toLowerCase()) {
      case 'ac':
        stateName = '12';
        break;
      case 'al':
        stateName = '27';
        break;
      case 'ap':
        stateName = '16';
        break;
      case 'am':
        stateName = '13';
        break;
      case 'ba':
        stateName = '29';
        break;
      case 'ce':
        stateName = '23';
        break;
      case 'df':
        stateName = '53';
        break;
      case 'es':
        stateName = '32';
        break;
      case 'go':
        stateName = '52';
        break;
      case 'ma':
        stateName = '21';
        break;
      case 'mg':
        stateName = '31';
        break;
      case 'mt':
        stateName = '51';
        break;
      case 'ms':
        stateName = '50';
        break;
      case 'pa':
        stateName = '15';
        break;
      case 'pb':
        stateName = '25';
        break;
      case 'pe':
        stateName = '26';
        break;
      case 'pi':
        stateName = '22';
        break;
      case 'pr':
        stateName = '41';
        break;
      case 'rj':
        stateName = '33';
        break;
      case 'rn':
        stateName = '24';
        break;
      case 'ro':
        stateName = '11';
        break;
      case 'rr':
        stateName = '14';
        break;
      case 'rs':
        stateName = '43';
        break;
      case 'sc':
        stateName = '42';
        break;
      case 'se':
        stateName = '28';
        break;
      case 'sp':
        stateName = '35';
        break;
      case 'to':
        stateName = '17';
        break;
    }
    return stateName;
  }

  getPolygnon(stateCode: string): Observable<Array<MunicipioGeoDataModel>> {
    let stateId: string = this.getStateName(stateCode);
    return this.http
      .get<Array<MunicipioGeoDataEntity>>(
        `${environment.geoJsonPath}${stateId}-mun.json`
      )
      .pipe(map(this.municiopiosGeoDataMapper.mapFrom));
  }
}
