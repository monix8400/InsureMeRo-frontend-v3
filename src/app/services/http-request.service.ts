import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HTTPRequestService {
  path: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {
  }

  /**
   * Http GET
   *
   * @param url URL to call
   * @param params optional parameters such as HttpHeaders, HttpParams, reportProgress etc.
   * @param headers
   */
  public get(url: string, params?: any, headers?: HttpHeaders): Observable<any> {
    return this.invoke('GET', url, null, params, headers);
  }

  /**
   * Http PUT
   *
   * @param url URL to call
   * @param data payload
   * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
   * @param headers
   */
  public put(url: string, data: any, params?: any, headers?: HttpHeaders): Observable<any> {
    return this.invoke('PUT', url, data, params, headers);
  }

  /**
   * Http PATCH
   *
   * @param url URL to call
   * @param data payload
   * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
   * @param headers
   */
  public patch(url: string, data: any, params?: any, headers?: HttpHeaders): Observable<any> {
    return this.invoke('PATCH', url, data, params, headers);
  }

  /**
   * Http POST
   *
   * @param url URL to call
   * @param data payload
   * @param params parameters such as HttpParams, reportProgress etc.
   * @param headers
   */
  public post(url: string, data: any, params?: any, headers?: HttpHeaders): Observable<any> {
    return this.invoke('POST', url, data, params, headers);
  }

  /**
   * Http DELETE
   *
   * @param url URL to call
   * @param params parameters such as  HttpParams, reportProgress etc.
   * @param headers
   */
  public delete(url: string, params?: any, headers?: HttpHeaders): Observable<any> {
    return this.invoke('DELETE', url, null, params, headers);
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
