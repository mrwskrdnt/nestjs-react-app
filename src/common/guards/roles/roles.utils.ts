export const matchRoles = (target: string|string[], src: string[]): boolean => {
  if (typeof target === 'string') {
    return src.includes(target);
  }

  return target.some(t => src.includes(t));
};