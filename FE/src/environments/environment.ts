// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AUTH_API: 'https://localhost:7206/api/Users/Authenticate',
  APPROVE_API: 'https://localhost:7206/api/Users/Approve',
  REJECT_API: 'https://localhost:7206/api/Users/Reject',
  GET_PENDING_CUSTOMERS_API: 'https://localhost:7206/api/Users/customers/get-pending',
  GET_PENDING_API: 'https://localhost:7206/api/Users/get-pending',
  baseUrl:'https://localhost:7206/api',
  REGISTER_API: 'https://localhost:7206/api/Users/Register',
  PROFILE_API: 'https://localhost:7206/api/Users/get',
  PROFILE_LIBRARIAN_API: 'https://localhost:7206/api/Users/get-librarian',
  MAIL_API: 'https://localhost:7206/api/Mail/Send'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
