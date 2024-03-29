import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HTTPRequestService {
  path: string = "http://54.93.113.113:8080/";
  static headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem("accessToken")});

  constructor(private http: HttpClient) {
  }

  /**
   * Http GET
   *
   * @param url URL to call
   * @param params optional parameters such as HttpParams, reportProgress etc.
   * @param headers
   * @param responseType
   */
  public get(url: string, params?: any, headers?: HttpHeaders, responseType?: any): Observable<any> {
    return this.invoke('GET', url, null, params, HTTPRequestService.headers, responseType);
  }

  /**
   * Http PUT
   *
   * @param url URL to call
   * @param data payload
   * @param params parameters such as HttpParams, reportProgress etc.
   * @param headers
   * @param responseType
   */
  public put(url: string, data: any, params?: any, headers?: HttpHeaders, responseType?: any): Observable<any> {
    return this.invoke('PUT', url, data, params, HTTPRequestService.headers, responseType);
  }

  /**
   * Http PATCH
   *
   * @param url URL to call
   * @param data payload
   * @param params parameters such as HttpParams, reportProgress etc.
   * @param headers
   * @param responseType
   */
  public patch(url: string, data: any, params?: any, headers?: HttpHeaders, responseType?: any): Observable<any> {
    return this.invoke('PATCH', url, data, params, HTTPRequestService.headers, responseType);
  }

  /**
   * Http POST
   *
   * @param url URL to call
   * @param data payload
   * @param params parameters such as HttpParams, reportProgress etc.
   * @param headers
   * @param responseType
   */
  public post(url: string, data: any, params?: any, headers?: HttpHeaders, responseType?: any): Observable<any> {
    return this.invoke('POST', url, data, params, HTTPRequestService.headers, responseType);
  }

  /**
   * Http DELETE
   *
   * @param url URL to call
   * @param params parameters such as  HttpParams, reportProgress etc.
   * @param headers
   * @param responseType
   */
  public delete(url: string, params?: any, headers?: HttpHeaders, responseType?: any): Observable<any> {
    return this.invoke('DELETE', url, null, params, HTTPRequestService.headers, responseType);
  }

  public static updateToken() {
    this.headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem("accessToken")});
  }

  private invoke(
    method: string,
    url: string,
    body: any = {},
    params?: any,
    headers?: HttpHeaders,
    responseType?: any
  ): Observable<any> {
    if (!url) {
      throw new Error('No URL provided.');
    }
    const requestUrl = `${this.path + url}`;
    return this.http.request(method, requestUrl, {
      body,
      headers,
      params,
      responseType,
    });
  }
}
