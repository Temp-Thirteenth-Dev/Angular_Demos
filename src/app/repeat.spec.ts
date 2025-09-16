import { Repeat } from "./repeat";

describe('Repeat', () => {
  it('should create an instance', () => {
    const mockTemplateRef = {} as any;
    const mockViewContainerRef = {} as any;
    const directive = new Repeat(mockTemplateRef, mockViewContainerRef);
    expect(directive).toBeTruthy();
  });
});
