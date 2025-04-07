import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'formatEnvName'
})

export class FormatEnvNamePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if(!value) return '';
        return value.replace(/\[|\]/g, '');
    }
}