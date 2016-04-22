export class HelloWorld {
  constructor() {
    this.message = "Hello, World!";
  }

  activate(params, routerConfig) {
    console.log('Params: ' + String(params));
    console.log(params);
    console.log('Config: ' + String(routerConfig));
    console.log(routerConfig);
    this.params = params.params;
    this.routerConfig = routerConfig;
  }
}
