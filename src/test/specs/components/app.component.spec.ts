import {
    beforeEach,
    describe,
    expect,
    it
} from '@angular/core/testing';
import { ComponentFixture } from '@angular/compiler/testing';

import * as testUtils from '../../test-utils';

import { AppComponent } from '../../../app/components/app/app.component';

describe('Component: AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(testUtils.createComponent(AppComponent, (componentInstance: AppComponent, componentFixture: ComponentFixture<AppComponent>) => {
        component = componentInstance;
        fixture = componentFixture;
    }));
});
