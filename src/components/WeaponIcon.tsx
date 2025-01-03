import { Weapon } from '../models/Weapon.ts';

interface WeaponIconProps {
  weapon: Weapon;
  className?: string;
  lazy?: boolean;
}

export function WeaponIcon({ weapon, className, lazy = false }: WeaponIconProps) {
  const url = weapon.id ? new URL(`../assets/weapon/${weapon.id}.png`, import.meta.url).href : undefined;
  return (
    <img
      className={className}
      style={{ transform: 'scale(1.12)' }}
      loading={lazy ? 'lazy' : undefined}
      src={url}
      alt=""
    />
  );
}
