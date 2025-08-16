import { verifyPassword, createSecureSession, isSessionValid, destroySession } from '../config/securityConfig';

describe('Secure Documents Configuration', () => {
  // Mock localStorage
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
      },
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('verifyPassword', () => {
    it('should return true for correct password', () => {
      const result = verifyPassword('SecureAccess2024!');
      expect(result).toBe(true);
    });

    it('should return false for incorrect password', () => {
      const result = verifyPassword('wrongpassword');
      expect(result).toBe(false);
    });

    it('should be case sensitive', () => {
      const result = verifyPassword('secureaccess2024!');
      expect(result).toBe(false);
    });
  });

  describe('createSecureSession', () => {
    it('should create a session in localStorage', () => {
      const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
      
      createSecureSession();
      
      expect(setItemSpy).toHaveBeenCalledWith(
        'documents_access_session',
        expect.stringContaining('authenticated')
      );
      
      const call = setItemSpy.mock.calls[0];
      const sessionData = JSON.parse(call[1]);
      
      expect(sessionData.authenticated).toBe(true);
      expect(sessionData.timestamp).toBeDefined();
      expect(sessionData.expiresAt).toBeDefined();
    });
  });

  describe('isSessionValid', () => {
    it('should return false when no session exists', () => {
      jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
      
      const result = isSessionValid();
      
      expect(result).toBe(false);
    });

    it('should return true for valid session', () => {
      const validSession = {
        authenticated: true,
        timestamp: Date.now(),
        expiresAt: Date.now() + 3600000, // 1 hour from now
      };
      
      jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(
        JSON.stringify(validSession)
      );
      
      const result = isSessionValid();
      
      expect(result).toBe(true);
    });

    it('should return false for expired session', () => {
      const expiredSession = {
        authenticated: true,
        timestamp: Date.now() - 7200000, // 2 hours ago
        expiresAt: Date.now() - 3600000, // 1 hour ago
      };
      
      jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(
        JSON.stringify(expiredSession)
      );
      
      const result = isSessionValid();
      
      expect(result).toBe(false);
    });

    it('should return false for invalid JSON', () => {
      jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('invalid json');
      
      const result = isSessionValid();
      
      expect(result).toBe(false);
    });
  });

  describe('destroySession', () => {
    it('should remove session from localStorage', () => {
      const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');
      
      destroySession();
      
      expect(removeItemSpy).toHaveBeenCalledWith('documents_access_session');
    });
  });
});
