import { Pipe, PipeTransform } from '@angular/core';
import { LoginComponent } from '../views/login/login.component';

//views that can be loaded dynamically
// import * as views from './../views';
import * as comp from './../app.module';

@Pipe({
  name: 'dynamicComponent'
})
export class DynamicComponentPipe implements PipeTransform {

  // objMap: any = 
  //   {
  //     "app-login": LoginComponent
  //   }
  // ;

  objMap: any =[
    LoginComponent
  ]

  transform(value: string): any {
    
    const view = this.objMap.filter((component: any)=>{
      if(component['__annotations__'][0]['selector'] === value)
        return component;
    });
    if(view) {
       return view;
    }
    throw new Error(`A component with selector "${value}" was not found`);

    // return this.objMap[value];
  }

}
