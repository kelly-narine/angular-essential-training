import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: '[mwFavorite]', //square bracket used because match need to be found on element attribute

})

export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
}
