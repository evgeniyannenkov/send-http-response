// /* eslint-disable */
//
// const path = this.session.get('reporting.sessionId');
// const triggerUrl = this.helpers.gatewayUrl(path);
// const triggerMethod = 'post';
// const sendResponse = async () => {
//     const codeLocal = Number(code);
//     const customHeaders = headers
//         ? Object.assign(
//               {},
//               ...headers.map(item => ({
//                   [item.name]: item.value
//               }))
//           )
//         : {};
//
//     const mapHeaders = hdrs => {
//         return _.mapKeys(hdrs, (headerValue, headerName) =>
//             _.chain(headerName)
//                 .toLower()
//                 .trim()
//                 .value()
//         );
//     };
//
//     const callbackResolve = async result => {
//         await this.eventManager.callbackResolve(this.get('__callback__'), {
//             result: result
//         });
//     };
//
//     const bodyLocal = body;
//     const allHeaders = {
//         'content-type': `${contentType}; charset=utf-8`,
//         'access-control-expose-headers': 'x-next-method, x-next-url',
//         'x-next-method': triggerMethod,
//         'x-next-url': triggerUrl,
//         ...customHeaders
//     };
//
//     if (
//         typeResponse === 'body' &&
//         (!codeLocal || codeLocal < 100 || codeLocal >= 600)
//     ) {
//         return callbackResolve({
//             code: '520',
//             body: {
//                 error: 'Unexpected status code'
//             }
//         });
//     }
//
//     if (typeResponse === 'body') {
//         await callbackResolve({
//             code: codeLocal,
//             body: bodyLocal,
//             headers: mapHeaders(allHeaders)
//         });
//     } else if (typeResponse === 'file') {
//         if (!fileLocation) {
//             this.log.error('The response file was not selected');
//         } else {
//             await callbackResolve({
//                 code: '301',
//                 headers: mapHeaders({ location: fileLocation })
//             });
//         }
//     }
//
//     if (isWaitForAnotherRequest) {
//         return this.exitFlow();
//     } else {
//         return this.exitStep('next');
//     }
// };
//
// const waitForAnotherRequest = async () => {
//     const methods = ['post'];
//     const maxPathLength = 50;
//
//     if (!path.length) {
//         throw `URL is required`;
//     }
//
//     if (path.length > maxPathLength) {
//         throw `URL maximum length of symbols should less than ${maxPathLength}`;
//     }
//
//     if (!/^[a-z0-9()._~!\/\-]+$/i.test(path)) {
//         throw `URL should contain only symbols: a-z, 0-9, (, ), ., _, ~, !, /, -`;
//     }
//
//     if (!methods.length) {
//         throw `None of the methods is selected.`;
//     }
//
//     const events = _.map(methods, method => ({
//         name: `http/${method}/${path}`,
//         params: {
//             method,
//             path
//         }
//     }));
//
//     const triggers = _.reduce(
//         events,
//         (memo, httpEvent) => {
//             return memo.once(httpEvent, async event => {
//                 this.set('__callback__', this.takeCallback());
//
//                 const mergeField = isRequestBody
//                     ? event.params.request.body
//                     : {
//                           ...event.params,
//                           request: {
//                               ...event.params.request,
//                               headers: {
//                                   ...event.params.request.headers,
//                                   xNextMethod: triggerMethod,
//                                   xNextUrl: triggerUrl
//                               }
//                           }
//                       };
//                 return this.exitStep('next', mergeField);
//             });
//         },
//         this.triggers
//     );
//
//     return triggers.otherwise(() => sendResponse());
// };
//
// if (isWaitForAnotherRequest) {
//     return waitForAnotherRequest();
// } else {
//     return sendResponse();
// }
