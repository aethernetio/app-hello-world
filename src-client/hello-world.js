export class HelloWorld {
  constructor() {
    this.message = "Hello, World!";
    this.attachedCount = 0;
    console.log("Created new HelloWorld");
  }

  activate(params, routerConfig) {
    console.log('Params: ' + String(params));
    console.log(params);
    console.log('Config: ' + String(routerConfig));
    console.log(routerConfig);
    this.params = params.params;
    this.routerConfig = routerConfig;
  }

  attached() {
    this.attachedCount += 1;
  }

  detached() {
    this.attachedCount -= 1;
  }
}
