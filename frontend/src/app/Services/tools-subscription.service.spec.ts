import { TestBed } from '@angular/core/testing';

import { ToolsSubscriptionService } from './tools-subscription.service';

describe('ToolsSubscriptionService', () => {
  let service: ToolsSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolsSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
