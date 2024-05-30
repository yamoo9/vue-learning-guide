import { onActivated, onDeactivated, onMounted, onUnmounted, reactive } from 'vue';

interface MousePosition {
  x: number;
  y: number;
}

export default function useMouse(log: boolean = false) {
  const mousePosition = reactive<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    mousePosition.x = e.pageX;
    mousePosition.y = e.pageY;
  };

  const listeningCallback = () => {
    log && console.log('마우스무브 리스닝 추가');
    globalThis.addEventListener('mousemove', handleMouseMove);
  };

  const unlisteningCallback = () => {
    log && console.log('마우스무브 리스닝 제거');
    globalThis.removeEventListener('mousemove', handleMouseMove);
  };

  onMounted(listeningCallback);
  onActivated(listeningCallback);

  onDeactivated(unlisteningCallback);
  onUnmounted(unlisteningCallback);

  return mousePosition;
}
