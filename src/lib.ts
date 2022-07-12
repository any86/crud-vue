import Curd from '@/Curd.vue'
export * from '@/types';
import type { CProps, UProps, RProps, DProps } from '@/types';

export function defineC(config: CProps): CProps {
    return config;
}

export function defineU(config: UProps): UProps {
    return config;
}

export function defineR(config: RProps): RProps {
    return config;
}

export function defineD(config: DProps): DProps {
    return config;
}

export default Curd;