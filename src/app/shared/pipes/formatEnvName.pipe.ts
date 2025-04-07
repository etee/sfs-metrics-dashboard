import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'formatEnvName'
})

export class FormatEnvNamePipe implements PipeTransform {
    transform(value: string) {
        if(!value) return '';
        return value.replace(/\[|\]/g, '');
    }
}