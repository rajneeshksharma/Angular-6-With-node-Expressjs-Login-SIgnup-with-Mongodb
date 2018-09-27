import { IndexRoutingModule } from './index-routing.module';

describe('IndexRoutingModule', () => {
  let indexRoutingModule: IndexRoutingModule;

  beforeEach(() => {
    indexRoutingModule = new IndexRoutingModule();
  });

  it('should create an instance', () => {
    expect(indexRoutingModule).toBeTruthy();
  });
});
