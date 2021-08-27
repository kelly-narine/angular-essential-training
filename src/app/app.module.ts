//decorator import
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponenet } from './app.component';

//decorator. Do not put semi-colon; not a statement but piece of code to be applied to class, field, or method
@NgModule({  //takes in an object with known properties to configure the class you'd decorate as an angular module. properties known as meta data
    imports: [
      BrowserModule
    ],
    declarations: [
      AppComponenet
    ],
    bootstrap: [
      AppComponenet
    ]
})
export class AppModule { //export needed to import into another file

} 
