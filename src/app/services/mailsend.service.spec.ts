import { TestBed, inject } from '@angular/core/testing';

import { MailsendService } from './mailsend.service';

describe('MailsendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailsendService]
    });
  });

  it('should be created', inject([MailsendService], (service: MailsendService) => {
    expect(service).toBeTruthy();
  }));
});
