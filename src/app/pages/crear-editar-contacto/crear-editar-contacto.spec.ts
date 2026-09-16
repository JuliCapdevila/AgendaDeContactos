import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearEditarContacto } from './crear-editar-contacto';

describe('CrearEditarContacto', () => {
  let component: CrearEditarContacto;
  let fixture: ComponentFixture<CrearEditarContacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearEditarContacto],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearEditarContacto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
