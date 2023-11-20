import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbSpinnerModule, NbToggleModule, NbCheckboxModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';

@NgModule({
    exports: [
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule,
        NbLayoutModule, 
        NbToggleModule, 
        NbSpinnerModule, 
        NbInputModule, 
        NbFormFieldModule, 
        NbIconModule, 
        NbButtonModule, 
        NbCheckboxModule,
        NbCheckboxModule
    ],
    imports: [
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule, 
        NbLayoutModule, 
        NbToggleModule, 
        NbSpinnerModule, 
        NbInputModule, 
        NbFormFieldModule, 
        NbIconModule, 
        NbButtonModule, 
        NbCheckboxModule,
        NbCheckboxModule
    ],
})

export class SharedModule { }