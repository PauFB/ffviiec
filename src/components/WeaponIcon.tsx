import { Weapon } from '../models/Weapon.ts';

interface WeaponIconProps {
  weapon: Weapon;
  className?: string;
  lazy?: boolean;
}

export function WeaponIcon({ weapon, className, lazy = false }: WeaponIconProps) {
  return (
    <img
      className={className}
      style={{ transform: 'scale(1.175)' }}
      loading={lazy ? 'lazy' : undefined}
      src={new URL(`../assets/weapon/${weapon.id}.png`, import.meta.url).href}
      alt=""
    />
  );
}
