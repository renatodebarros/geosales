import { Observable } from 'rxjs';
import { MunicipioGeoDataModel } from '../models/municipio-geodata.model';
export abstract class MunicipioGeoDataRepository {
  abstract getPolygnon(
    stateCode: string
  ): Observable<Array<MunicipioGeoDataModel>>;
}
