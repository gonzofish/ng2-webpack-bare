import { inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';

export const createComponent = (componentType: any, callback: Function) => {
    return inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
        return testComponentBuilder.createAsync(componentType)
            .then(fixture => { callback(fixture.componentInstance, fixture); });
    });
};