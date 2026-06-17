import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  const numbers = phone.replace(/\D/g, '');
  if (numbers.length === 11) {
    return numbers.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  }
  if (numbers.length === 10) {
    return numbers.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  }
  return phone;
}

export function sanitizePhoneInput(phone: string): string {
  const numbers = phone.replace(/\D/g, '').slice(0, 11);

  if (numbers.length <= 3) return numbers;
  if (numbers.length <= 7) return numbers.replace(/(\d{3})(\d+)/, '$1-$2');

  return numbers.replace(/(\d{3})(\d{4})(\d+)/, '$1-$2-$3');
}

export function validateInquiryLead({
  name,
  phone,
  region,
  privacyAgree,
}: {
  name: string;
  phone: string;
  region: string;
  privacyAgree: boolean;
}): { valid: true } | { valid: false; message: string } {
  const phoneNumbers = phone.replace(/\D/g, '');

  if (name.trim().length < 2) {
    return { valid: false, message: '성함을 2자 이상 입력해주세요.' };
  }

  if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
    return { valid: false, message: '연락처를 정확히 입력해주세요.' };
  }

  if (region.trim().length < 2) {
    return { valid: false, message: '희망지역을 입력해주세요.' };
  }

  if (!privacyAgree) {
    return { valid: false, message: '개인정보 수집 및 이용에 동의해주세요.' };
  }

  return { valid: true };
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('ko-KR').format(num);
}
