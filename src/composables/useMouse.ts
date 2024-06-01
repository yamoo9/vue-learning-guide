import { reactive } from 'vue';
import useEventListener from './useEventListener';

interface MousePosition {
  x: number;
  y: number;
}

export default function useMouse(log: boolean = false) {
  const mousePosition = reactive<MousePosition>({ x: 0, y: 0 });

  useEventListener(
    globalThis,
    'mousemove',
    (e) => {
      mousePosition.x = (e as MouseEvent).pageX;
      mousePosition.y = (e as MouseEvent).pageY;
    },
    log
  );

  return mousePosition;
}
