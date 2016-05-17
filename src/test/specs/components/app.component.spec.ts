import {
    beforeEach,
    describe,
    expect,
    it
} from '@angular/core/testing';
import { ComponentFixture } from '@angular/compiler/testing';

import * as testUtils from '../../test-utils';

import { AppComponent } from '../../../app/components/app/app.component.ts';

describe('Component: AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(testUtils.createComponent(AppComponent, (_component: AppComponent, _fixture: ComponentFixture<AppComponent>) => {
        component = _component;
        fixture = _fixture;
    }));
});
