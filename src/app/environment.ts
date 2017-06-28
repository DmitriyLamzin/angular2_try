/**
 * Angular 2
 */
import {
  enableDebugTools,
  disableDebugTools
} from '@angular/platform-browser';
import {
  ApplicationRef,
  enableProdMode
} from '@angular/core';
/**
 * Environment Providers
 */
let PROVIDERS: any[] = [
  /**
   * Common env directives
   */
];

export const BASE_URL = "https://jsonplaceholder.typicode.com/";
export const MESSAGE_API_URL = "posts";
export const USER_API_URL = "users";

/**
 * Angular debug tools in the dev console
 * https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
 */
let _decorateModuleRef = <T>(value: T): T => { return value; };

if ('production' === ENV) {
  enableProdMode();

  /**
   * Production
   */
  _decorateModuleRef = (modRef: any) => {
    disableDebugTools();

    return modRef;
  };
  let BASE_URL = "https://jsonplaceholder.typicode.com/";


  PROVIDERS = [
    ...PROVIDERS,
    {provide: BASE_URL, useValue: BASE_URL}

    /**
     * Custom providers in production.
     */
  ];

} else {

  _decorateModuleRef = (modRef: any) => {
    const appRef = modRef.injector.get(ApplicationRef);
    const cmpRef = appRef.components[0];

    let _ng = (<any> window).ng;
    enableDebugTools(cmpRef);
    (<any> window).ng.probe = _ng.probe;
    (<any> window).ng.coreTokens = _ng.coreTokens;
    return modRef;
  };


  /**
   * Development
   */
  PROVIDERS = [
    ...PROVIDERS,
    {provide: BASE_URL, useValue: BASE_URL},
    {provide: MESSAGE_API_URL, useValue: MESSAGE_API_URL},
    {provide: USER_API_URL, useValue: USER_API_URL},


    /**
     * Custom providers in development.
     */
  ];

}

export const decorateModuleRef = _decorateModuleRef;

export const ENV_PROVIDERS = [
  ...PROVIDERS,
];


