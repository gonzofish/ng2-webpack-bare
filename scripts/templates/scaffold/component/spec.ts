import {
    beforeEach,
    describe,
    expect,
    it
} from '@angular/core/testing';
import { ComponentFixture } from '@angular/compiler/testing';

import * as testUtils from '../../test-utils';

import { {{ componentName }}Component } from '../../../app/components/{{ selector }}/{{ selector }}.component.ts';

describe('Component: {{ componentName }}Component', () => {
    let component: {{ componentName }}Component;
    let fixture: ComponentFixture<{{ componentName }}Component>;

    beforeEach(testUtils.createComponent({{ componentName }}Component, (componentInstance: {{ componentName }}Component, componentFixture: ComponentFixture<{{ componentName }}Component>) => {
        component = componentInstance;
        fixture = componentFixture;
    }));
});
