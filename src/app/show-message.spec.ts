import { ShowMessage } from './show-message';

describe('ShowMessage', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: {} } as any;
    const mockRenderer2 = {
      setStyle: () => {},
      removeStyle: () => {},
      // add other methods if needed
    } as any;
    const directive = new ShowMessage(mockElementRef, mockRenderer2);
    expect(directive).toBeTruthy();
  });
});
