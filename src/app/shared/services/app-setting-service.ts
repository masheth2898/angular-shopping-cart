import { HttpBackend, HttpClient } from "@angular/common/http";
import { TranslateService } from "@ngx-translate/core";

export function initApp(
  http: HttpClient,
  httpBackend: HttpBackend,
  translateService: TranslateService
) {
  http = new HttpClient(httpBackend);
  return () => {
     translateService.setDefaultLang('en');
      translateService.use('en');
  };
}