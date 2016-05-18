import {
    beforeEach,
    describe,
    expect,
    it
} from '@angular/core/testing';
import { ComponentFixture } from '@angular/compiler/testing';

import * as testUtils from '../../test-utils';

import { MyFormComponent } from '../../../app/components/my-form/my-form.component.ts';

describe('Component: MyFormComponent', () => {
    let component: MyFormComponent;
    let fixture: ComponentFixture<MyFormComponent>;

    beforeEach(testUtils.createComponent(MyFormComponent, (componentInstance: MyFormComponent, componentFixture: ComponentFixture<MyFormComponent>) => {
        component = componentInstance;
        fixture = componentFixture;
    }));

    it('', () => {
        expect(true).toBeTruthy();
    });
});
