import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"; //function import.
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule); // allows the app to run in the browser